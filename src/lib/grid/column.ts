import MceElement from "$lib/tinymce/mceElement";
import { Writable, writable } from "svelte/store";
import type Grid from "./grid";
import Row from "./row";
import { ColumnLayout, gridSize } from "./rowLayouts";

export default class Column extends MceElement {
  public width: Writable<Required<ColumnLayout>>;
  public attributes: MceElement["attributes"] = new Map([]);
  public defaultClasses = new Set(["cgb-col"]);

  public getTextTarget() {
    const foundParagraphs = this.innerNode.querySelectorAll(
      ":scope > p:not([data-mce-caret]):not([data-mce-bogus])"
    ) as NodeListOf<HTMLParagraphElement>;
    let textTarget: HTMLElement;
    if (!foundParagraphs.length)
      textTarget = this.parentGrid.editor.dom.add(this.innerNode, "p");
    else textTarget = foundParagraphs[foundParagraphs.length - 1];
    if (MceElement.isEmpty(textTarget)) {
      textTarget.innerHTML = "";
      this.parentGrid.editor.dom.add(textTarget, "br", {
        "data-mce-bogus": "1",
      });
    }
    return foundParagraphs[foundParagraphs.length - 1];
  }

  public checkSelf() {
    this.shouldObserve = false;
    // We don't need to check anything, but if we did, we'd do it here.
    this.shouldObserve = true;
  }

  public checkChildren() {
    this.shouldObserve = false;
    // Check if innernode still exists
    let isNew;
    [this.innerNode, isNew] = Column.getOrCreateInnerNode(
      this.parentGrid,
      this.node,
      this.innerNode
    );
    if (isNew) this.startObserving(this.innerNode);
    this.shouldObserve = true;
  }

  static create(row: Row, width: Required<ColumnLayout>) {
    const node = row.parentGrid.editor.dom.create("div", {
      class: "cgb-col",
    });
    row.parentGrid.editor.dom.add(row.node, node);
    const innerNode = row.parentGrid.editor.dom.add(node, "div", {
      contenteditable: true,
      class: "cgb-col-inner",
    });
    return new Column(row.parentGrid, width, node, innerNode);
  }

  static getOrCreateInnerNode(
    grid: Grid,
    outerNode: HTMLElement,
    innerNode?: HTMLElement
  ): [HTMLElement, boolean] {
    let isNew = false;
    let foundInnerNode: HTMLElement;
    if (!innerNode || innerNode.parentNode !== outerNode) {
      foundInnerNode = outerNode.querySelector(
        ":scope > div.cgb-col-inner"
      ) as HTMLDivElement;
      if (!foundInnerNode) {
        foundInnerNode = grid.editor.dom.create("div", {
          contenteditable: true,
          class: "cgb-col-inner",
        });
        outerNode.appendChild(foundInnerNode);
      }
      grid.editor.dom.setAttrib(foundInnerNode, "contenteditable", "true");
      isNew = foundInnerNode !== innerNode;
    } else {
      foundInnerNode = innerNode;
      grid.editor.dom.setAttrib(foundInnerNode, "contenteditable", "true");
    }

    // Move any other children into the inner node - we don't need them
    [...outerNode.childNodes].forEach((n) => {
      if (
        n !== foundInnerNode &&
        n.nodeType !== Node.COMMENT_NODE &&
        (n as HTMLElement)?.dataset.cgbNoMove !== "true" // Allow some nodes to be left in place if the author wants
      ) {
        console.log("Moving incorrectly placed element into inner node", n);
        (foundInnerNode as HTMLElement).appendChild(n);
      }
    });

    // If the column uses the old format (has text as direct decendant rather than in a paragraph), move it into a paragraph
    [...foundInnerNode.childNodes]
      .filter((n) => n.nodeType === Node.TEXT_NODE)
      .forEach((n) => {
        // Add to new paragraph
        n.textContent &&
          grid.editor.dom.add(foundInnerNode, "p", {}, n.textContent);
        // Remove old text node
        grid.editor.dom.remove(n);
      });

    // If the column is empty, reset it to a single empty paragraph
    if (MceElement.isEmpty(foundInnerNode)) {
      foundInnerNode.innerHTML = "";
      const target = grid.editor.dom.add(foundInnerNode, "p");
      grid.editor.dom.add(target, "br", {
        "data-mce-bogus": "1",
      });
      grid.editor.dom.add(
        foundInnerNode,
        "div",
        {
          class: "cgb-empty-placeholder",
          style: "display: none",
          contenteditable: false,
        },
        "&nbsp;"
      );
    }
    // // If column has no paragraph, add one (and remove a <br/> if it exists to maintain height)
    // else if (!foundInnerNode.querySelector(":scope > p")) {
    //   const br = foundInnerNode.querySelector(":scope > br");
    //   if (br) grid.editor.dom.remove(br);

    //   const target = grid.editor.dom.add(foundInnerNode, "p");
    //   grid.editor.dom.add(target, "br", {
    //     "data-mce-bogus": "1",
    //   });
    // }
    return [foundInnerNode, isNew];
  }

  static import(grid: Grid, node: HTMLElement, width: Required<ColumnLayout>) {
    let [innerNode, isNew] = this.getOrCreateInnerNode(grid, node);
    return new Column(grid, width, node, innerNode);
  }

  constructor(
    public parentGrid: Grid,
    width: Required<ColumnLayout>,
    public node: HTMLElement,
    public innerNode: HTMLElement
  ) {
    super(node);
    this.width = writable(width);
    this.width.subscribe((width) => {
      this.parentGrid.editor.dom.removeAllAttribs(this.node);
      this.parentGrid.editor.dom.addClass(
        this.node,
        `cgb-col col-xs-${width.xs} col-sm-${width.sm} col-md-${width.md} col-lg-${width.lg}`
      );
    });
    // Fix children if needed
    this.checkChildren();
    // Bind to clicks and move the focus
    this.parentGrid.editor.dom.bind(this.node, "click", (e) => {
      this.checkChildren();
      //Move selection if we need to.
      if (!this.innerNode.contains(e.target)) {
        const textTarget = this.parentGrid.editor.dom.add(
          this.getTextTarget(),
          "span"
        );
        if (textTarget) this.parentGrid.editor.selection.select(textTarget);
      }
    });
    // Start watching for changes in the TinyMCE DOM
    this.startObserving();
    // Watch innernode for changes (just to be safe)
    this.startObserving(this.innerNode);
  }
}
