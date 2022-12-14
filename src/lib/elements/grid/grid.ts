import {
  derived,
  get,
  readable,
  Subscriber,
  Unsubscriber,
  writable,
} from "svelte/store";
import type { Writable, Readable } from "svelte/store";
import type { Editor } from "tinymce";
import Row from "./row";
import { RowLayout, rowTemplates } from "./rowLayouts";
import { nanoid } from "nanoid";
import GridManager, { stateObject } from "./gridManager";
import confirmDialog from "$lib/util/confirmDialog";
import MceElement from "$lib/tinymce/mceElement";

export class Grid extends MceElement implements Readable<Row[]> {
  public static gridMarkupVersion = "1.0.0";
  public attributes: MceElement["attributes"] = new Map([]);
  public defaultClasses = new Set(["canvas-grid-editor"]);

  public readonly cursorSelected: Writable<boolean | string> = writable(false);
  public rows: Writable<Row[]> = writable([]);

  public static migrate(grid: Grid) {
    if (grid.node.dataset.cgbVersion === Grid.gridMarkupVersion) return;
    console.log(
      `Migrating grid from ${grid.node.dataset.cgbVersion || "alpha"} to v${
        Grid.gridMarkupVersion
      }`
    );
    // SINCE alpha: Columns might have direct text decendants of innernode. This is no longer allowed, so we need to wrap them in a paragraph
    if (grid.node.dataset.cgeVersion === undefined) {
      get(grid).forEach((row) => {
        get(row.columns).forEach((col) => {
          col.checkChildren();
        });
      });
    }
    // Migrate row to new version
    grid.node.dataset.cgbVersion = Grid.gridMarkupVersion;
  }

  public static create(
    state: stateObject,
    gridManager: GridManager,
    atCursor = false,
    editor: Editor = window.tinymce.activeEditor,
    highlight = false
  ) {
    // Creates a new grid at the specified location
    const gridRoot = editor.dom.create("div", {
      class: "canvas-grid-editor",
      "data-cgb-version": Grid.gridMarkupVersion,
    });
    // Add grid to page
    if (atCursor) {
      const insertNode = editor.selection.getNode();
      const inGrid = insertNode.closest(".canvas-grid-editor");
      if (inGrid) {
        editor.dom.insertAfter(gridRoot, inGrid);
      } else if (
        insertNode.nodeName === "BODY" ||
        insertNode.closest("body") === null
      ) {
        editor.dom.add(editor.dom.getRoot(), gridRoot);
      } else if (!editor.dom.isBlock(insertNode)) {
        //  If the cursor is in a non-block element, insert the grid after the element
        editor.dom.insertAfter(gridRoot, insertNode);
      } else {
        editor.dom.add(insertNode, gridRoot);
      }
    } else editor.dom.add(editor.dom.getRoot(), gridRoot);
    // Create grid instance
    return new this(state, editor, gridRoot, gridManager, undefined, highlight);
  }

  public static import(
    state: stateObject,
    gridRoot: HTMLElement,
    gridManager: GridManager,
    editor: Editor = window.tinymce.activeEditor
  ) {
    const grid = new this(state, editor, gridRoot, gridManager, []);
    // Get rows
    const rows = Array.from(gridRoot.children).filter((e) =>
      e.classList.contains("grid-row")
    ) as HTMLElement[];
    const rowInsts = rows.map((row) => Row.import(grid, row));
    grid.rows.set(rowInsts);
    // Migrate if needed
    Grid.migrate(grid);
    return grid;
  }

  constructor(
    public state: stateObject,
    public editor: Editor = window.tinymce.activeEditor,
    public node: HTMLElement,
    public gridManager: GridManager,
    rows?: Row[],
    highlight: boolean = false
  ) {
    super(node);
    // Start watching for changes in the TinyMCE DOM
    this.setupObserver();

    // Set up rows
    if (rows) this.rows.set(rows);
    else this.addRow(rowTemplates["1"]);
    // Bind events to grid
    this.bindEvents();
    // Set ID of grid
    this.node.dataset.cgeId = this.id;

    // If desired, scroll to and highlight the grid
    if (highlight) {
      gridManager.editor.getWin().scrollTo({
        top: this.node.offsetTop,
        behavior: "smooth",
      });
      gridManager.editor.selection.select(this.node);
    }
  }

  public bindEvents() {
    // Monitor the active row
    this.editor.on("nodeChange", ({ element }: { element: HTMLElement }) => {
      const rowNode = element.closest(".grid-row");
      if (rowNode) {
        const row = get(this.rows).find((r) => r.node === rowNode);
        if (row) {
          this.cursorSelected.set(row.id);
          return;
        }
      } else {
        if (element === this.node) {
          this.cursorSelected.set(true);
          return;
        }
      }
      this.cursorSelected.set(false);
    });

    // Prevent accidental deletion of grid
    this.editor.dom.setAttrib(this.node, "contenteditable", "false");
    this.node.parentElement?.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Backspace" || e.key === "Delete") {
          let willDeleteElem = false;
          const selectNode = this.editor.selection.getNode() as HTMLElement;
          if (e.key === "Backspace") {
            if (
              selectNode.dataset.mceCaret === "after" &&
              selectNode.previousSibling === this.node
            )
              willDeleteElem = true;
          } else {
            if (
              selectNode.dataset.mceCaret === "before" &&
              selectNode.nextSibling === this.node
            )
              willDeleteElem = true;
          }
          if (get(this.cursorSelected) === true || willDeleteElem) {
            e.preventDefault();
            e.stopPropagation();
            confirmDialog(
              this.editor,
              "Delete Grid?",
              "Are you sure you want to delete this grid?"
            ).then((confirm) => {
              if (confirm) this.delete();
            });
            return false;
          }
        }
      },
      {
        capture: true,
      }
    );
  }

  public checkChildren() {
    this.stopObserving();
    // Trigger a check on all rows
    get(this.rows).forEach((row) => row.checkChildren());
    this.startObserving();
  }

  public checkSelf() {
    this.stopObserving();
    // Check if the grid is empty
    if (this.node.children.length === 0) this.delete();
    // Check if the grid is in the body
    if (!this.node.parentNode) {
      const position = get(this.gridManager).findIndex((r) => r.id === this.id);
      if (position == -1) {
        // Uncaught delete!
        this.delete();
        return;
      }
      if (position > 0) {
        get(this.gridManager)[position - 1].node.insertAdjacentElement(
          "afterend",
          this.node
        );
      } else {
        get(this.gridManager)[position + 1].node.insertAdjacentElement(
          "beforebegin",
          this.node
        );
      }
    }
    this.startObserving();
  }

  public delete() {
    super.delete();
    this.rows.update((row) => {
      row.forEach((r) => r.delete(true));
      return [];
    });
  }

  public addRow(layout?: RowLayout, index?: number) {
    let row: Row;
    const rows = get(this.rows);
    if (index === undefined) {
      row = Row.create(this, layout);
    } else {
      if (index === 0) {
        row = Row.create(this, layout, this.node, "afterbegin");
      } else {
        row = Row.create(this, layout, this.node.children[index], "afterend");
      }
    }
    this.rows.update((rows) => {
      if (index === undefined) rows.push(row);
      else rows.splice(index, 0, row);
      return rows;
    });
    return row;
  }

  public subscribe = this.rows.subscribe;
}

export default Grid;
