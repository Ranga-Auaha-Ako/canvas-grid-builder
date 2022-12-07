const canvasSettings = {
  add_form_submit_trigger: true,
  add_unload_trigger: true,
  auto_focus: false,
  block_formats:
    "Heading 2=h2; Heading 3=h3; Heading 4=h4; Preformatted=pre; Paragraph=p",
  body_class: "default-theme",
  branding: false,
  browser_spellcheck: true,
  canvas_rce_containing_context: { type: "course", id: "12345" },
  canvas_rce_user_context: { type: "course", id: "12345" },
  content_css: [
    "https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/61a8de39495736ccb84add778522f269/variables-7dd4b80918af0e0218ec0229e4bd5873.css",
    "https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_normal_contrast/bundles/what_gets_loaded_inside_the_tinymce_editor-a64c7fe33c.css",
    "https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/no_variables/bundles/fonts-43e9c545fc.css",
  ],
  content_style: `.mce-content-body .mce-item-anchor {
    background: transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A") no-repeat center;
    cursor: default;
    display: inline-block;
    height: 12px !important;
    padding: 0 2px;
    -webkit-user-modify: read-only;
    -moz-user-modify: read-only;
    -webkit-user-select: all;
        user-select: all;
    width: 8px !important;
  }
  .mce-content-body .mce-item-anchor[data-mce-selected] {
    outline-offset: 1px;
  }
  .tox-comments-visible .tox-comment {
    background-color: #fff0b7;
  }
  .tox-comments-visible .tox-comment--active {
    background-color: #ffe168;
  }
  .tox-checklist > li:not(.tox-checklist--hidden) {
    list-style: none;
    margin: 0.25em 0;
  }
  .tox-checklist > li:not(.tox-checklist--hidden)::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
    cursor: pointer;
    height: 1em;
    margin-left: -1.5em;
    margin-top: 0.125em;
    position: absolute;
    width: 1em;
  }
  .tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
  }
  [dir=rtl] .tox-checklist > li:not(.tox-checklist--hidden)::before {
    margin-left: 0;
    margin-right: -1.5em;
  }
  
  
  
  code[class*="language-"],
  pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    -webkit-hyphens: none;
    hyphens: none;
  }
  [dir="ltr"] code[class*="language-"],
  [dir="ltr"] pre[class*="language-"] {
    text-align: left;
  }
  [dir="rtl"] code[class*="language-"],
  [dir="rtl"] pre[class*="language-"] {
    text-align: left;
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #f5f2f0;
  }
  
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #DD4A68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  
  .mce-content-body {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  .mce-content-body .mce-visual-caret {
    background-color: black;
    background-color: currentColor;
    position: absolute;
  }
  .mce-content-body .mce-visual-caret-hidden {
    display: none;
  }
  .mce-content-body *[data-mce-caret] {
    left: -1000px;
    margin: 0;
    padding: 0;
    position: absolute;
    right: auto;
    top: 0;
  }
  .mce-content-body .mce-offscreen-selection {
    left: -2000000px;
    max-width: 1000000px;
    position: absolute;
  }
  .mce-content-body *[contentEditable=false] {
    cursor: default;
  }
  .mce-content-body *[contentEditable=true] {
    cursor: text;
  }
  .tox-cursor-format-painter {
    cursor: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A"), default;
  }
  .mce-content-body figure.align-left {
    float: left;
  }
  [dir="ltr"] .mce-content-body figure.align-left {
    float: left;
  }
  [dir="rtl"] .mce-content-body figure.align-left {
    float: left;
  }
  .mce-content-body figure.align-right {
    float: right;
  }
  [dir="ltr"] .mce-content-body figure.align-right {
    float: right;
  }
  [dir="rtl"] .mce-content-body figure.align-right {
    float: right;
  }
  .mce-content-body figure.image.align-center {
    display: table;
    margin-left: auto;
    margin-right: auto;
  }
  .mce-preview-object {
    border: 1px solid gray;
    display: inline-block;
    line-height: 0;
    margin: 0 2px 0 2px;
    position: relative;
  }
  .mce-preview-object .mce-shim {
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .mce-preview-object[data-mce-selected="2"] .mce-shim {
    display: none;
  }
  .mce-object {
    background: transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A") no-repeat center;
    border: 1px dashed #aaa;
  }
  .mce-pagebreak {
    border: 1px dashed #aaa;
    cursor: default;
    display: block;
    height: 5px;
    margin-top: 15px;
    page-break-before: always;
    width: 100%;
  }
  @media print {
    .mce-pagebreak {
      border: 0;
    }
  }
  .tiny-pageembed .mce-shim {
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .tiny-pageembed[data-mce-selected="2"] .mce-shim {
    display: none;
  }
  .tiny-pageembed {
    display: inline-block;
    position: relative;
  }
  .tiny-pageembed--21by9,
  .tiny-pageembed--16by9,
  .tiny-pageembed--4by3,
  .tiny-pageembed--1by1 {
    display: block;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;
  }
  .tiny-pageembed--21by9 {
    padding-top: 42.857143%;
  }
  .tiny-pageembed--16by9 {
    padding-top: 56.25%;
  }
  .tiny-pageembed--4by3 {
    padding-top: 75%;
  }
  .tiny-pageembed--1by1 {
    padding-top: 100%;
  }
  .tiny-pageembed--21by9 iframe,
  .tiny-pageembed--16by9 iframe,
  .tiny-pageembed--4by3 iframe,
  .tiny-pageembed--1by1 iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .mce-content-body[data-mce-placeholder] {
    position: relative;
  }
  .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    color: rgba(34, 47, 62, 0.7);
    content: attr(data-mce-placeholder);
    position: absolute;
  }
  .mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks)::before {
    left: 1px;
  }
  .mce-content-body[dir=rtl][data-mce-placeholder]:not(.mce-visualblocks)::before {
    right: 1px;
  }
  .mce-content-body div.mce-resizehandle {
    background-color: #4099ff;
    border-color: #4099ff;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    height: 10px;
    position: absolute;
    width: 10px;
    z-index: 10000;
  }
  .mce-content-body div.mce-resizehandle:hover {
    background-color: #4099ff;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(1) {
    cursor: nwse-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(2) {
    cursor: nesw-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(3) {
    cursor: nwse-resize;
  }
  .mce-content-body div.mce-resizehandle:nth-of-type(4) {
    cursor: nesw-resize;
  }
  .mce-content-body .mce-resize-backdrop {
    z-index: 10000;
  }
  .mce-content-body .mce-clonedresizable {
    cursor: default;
    opacity: 0.5;
    outline: 1px dashed black;
    position: absolute;
    z-index: 10001;
  }
  .mce-content-body .mce-clonedresizable.mce-resizetable-columns th,
  .mce-content-body .mce-clonedresizable.mce-resizetable-columns td {
    border: 0;
  }
  .mce-content-body .mce-resize-helper {
    background: #555;
    background: rgba(0, 0, 0, 0.75);
    border: 1px;
    border-radius: 3px;
    color: white;
    display: none;
    font-family: sans-serif;
    font-size: 12px;
    line-height: 14px;
    margin: 5px 10px;
    padding: 5px;
    position: absolute;
    white-space: nowrap;
    z-index: 10002;
  }
  .tox-rtc-user-selection {
    position: relative;
  }
  .tox-rtc-user-cursor {
    bottom: 0;
    cursor: default;
    position: absolute;
    top: 0;
    width: 2px;
  }
  .tox-rtc-user-cursor::before {
    background-color: inherit;
    border-radius: 50%;
    content: '';
    display: block;
    height: 8px;
    position: absolute;
    right: -3px;
    top: -3px;
    width: 8px;
  }
  .tox-rtc-user-cursor:hover::after {
    background-color: inherit;
    border-radius: 100px;
    box-sizing: border-box;
    color: #fff;
    content: attr(data-user);
    display: block;
    font-size: 12px;
    font-weight: bold;
    left: -5px;
    min-height: 8px;
    min-width: 8px;
    padding: 0 12px;
    position: absolute;
    top: -11px;
    white-space: nowrap;
    z-index: 1000;
  }
  .tox-rtc-user-selection--1 .tox-rtc-user-cursor {
    background-color: #2dc26b;
  }
  .tox-rtc-user-selection--2 .tox-rtc-user-cursor {
    background-color: #e03e2d;
  }
  .tox-rtc-user-selection--3 .tox-rtc-user-cursor {
    background-color: #f1c40f;
  }
  .tox-rtc-user-selection--4 .tox-rtc-user-cursor {
    background-color: #3598db;
  }
  .tox-rtc-user-selection--5 .tox-rtc-user-cursor {
    background-color: #b96ad9;
  }
  .tox-rtc-user-selection--6 .tox-rtc-user-cursor {
    background-color: #e67e23;
  }
  .tox-rtc-user-selection--7 .tox-rtc-user-cursor {
    background-color: #aaa69d;
  }
  .tox-rtc-user-selection--8 .tox-rtc-user-cursor {
    background-color: #f368e0;
  }
  .tox-rtc-remote-image {
    background: #eaeaea url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A") no-repeat center center;
    border: 1px solid #ccc;
    min-height: 240px;
    min-width: 320px;
  }
  .mce-match-marker {
    background: #aaa;
    color: #fff;
  }
  .mce-match-marker-selected {
    background: #39f;
    color: #fff;
  }
  .mce-match-marker-selected::selection {
    background: #39f;
    color: #fff;
  }
  .mce-content-body img[data-mce-selected],
  .mce-content-body video[data-mce-selected],
  .mce-content-body audio[data-mce-selected],
  .mce-content-body object[data-mce-selected],
  .mce-content-body embed[data-mce-selected],
  .mce-content-body table[data-mce-selected] {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body hr[data-mce-selected] {
    outline: 3px solid #b4d7ff;
    outline-offset: 1px;
  }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body *[contentEditable=false][data-mce-selected] {
    cursor: not-allowed;
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body.mce-content-readonly *[contentEditable=true]:focus,
  .mce-content-body.mce-content-readonly *[contentEditable=true]:hover {
    outline: none;
  }
  .mce-content-body *[data-mce-selected="inline-boundary"] {
    background-color: #b4d7ff;
  }
  .mce-content-body .mce-edit-focus {
    outline: 3px solid #b4d7ff;
  }
  .mce-content-body td[data-mce-selected],
  .mce-content-body th[data-mce-selected] {
    position: relative;
  }
  .mce-content-body td[data-mce-selected]::selection,
  .mce-content-body th[data-mce-selected]::selection {
    background: none;
  }
  .mce-content-body td[data-mce-selected] *,
  .mce-content-body th[data-mce-selected] * {
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
            user-select: none;
  }
  .mce-content-body td[data-mce-selected]::after,
  .mce-content-body th[data-mce-selected]::after {
    background-color: rgba(180, 215, 255, 0.7);
    border: 1px solid rgba(180, 215, 255, 0.7);
    bottom: -1px;
    content: '';
    left: -1px;
    mix-blend-mode: multiply;
    position: absolute;
    right: -1px;
    top: -1px;
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .mce-content-body td[data-mce-selected]::after,
    .mce-content-body th[data-mce-selected]::after {
      border-color: rgba(0, 84, 180, 0.7);
    }
  }
  .mce-content-body img::selection {
    background: none;
  }
  .ephox-snooker-resizer-bar {
    background-color: #b4d7ff;
    opacity: 0;
    -webkit-user-select: none;
    user-select: none;
  }
  .ephox-snooker-resizer-cols {
    cursor: col-resize;
  }
  .ephox-snooker-resizer-rows {
    cursor: row-resize;
  }
  .ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging {
    opacity: 1;
  }
  .mce-spellchecker-word {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");
    background-position: 0 calc(100% + 1px);
    background-repeat: repeat-x;
    background-size: auto 6px;
    cursor: default;
    height: 2rem;
  }
  .mce-spellchecker-grammar {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");
    background-position: 0 calc(100% + 1px);
    background-repeat: repeat-x;
    background-size: auto 6px;
    cursor: default;
  }
  .mce-toc {
    border: 1px solid gray;
  }
  .mce-toc h2 {
    margin: 4px;
  }
  .mce-toc li {
    list-style-type: none;
  }
  table[style*="border-width: 0px"],
  .mce-item-table:not([border]),
  .mce-item-table[border="0"],
  table[style*="border-width: 0px"] td,
  .mce-item-table:not([border]) td,
  .mce-item-table[border="0"] td,
  table[style*="border-width: 0px"] th,
  .mce-item-table:not([border]) th,
  .mce-item-table[border="0"] th,
  table[style*="border-width: 0px"] caption,
  .mce-item-table:not([border]) caption,
  .mce-item-table[border="0"] caption {
    border: 1px dashed #bbb;
  }
  .mce-visualblocks p,
  .mce-visualblocks h1,
  .mce-visualblocks h2,
  .mce-visualblocks h3,
  .mce-visualblocks h4,
  .mce-visualblocks h5,
  .mce-visualblocks h6,
  .mce-visualblocks div:not([data-mce-bogus]),
  .mce-visualblocks section,
  .mce-visualblocks article,
  .mce-visualblocks blockquote,
  .mce-visualblocks address,
  .mce-visualblocks pre,
  .mce-visualblocks figure,
  .mce-visualblocks figcaption,
  .mce-visualblocks hgroup,
  .mce-visualblocks aside,
  .mce-visualblocks ul,
  .mce-visualblocks ol,
  .mce-visualblocks dl {
    background-repeat: no-repeat;
    border: 1px dashed #bbb;
    margin-left: 3px;
    padding-top: 10px;
  }
  .mce-visualblocks p {
    background-image: url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7);
  }
  .mce-visualblocks h1 {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==);
  }
  .mce-visualblocks h2 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==);
  }
  .mce-visualblocks h3 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7);
  }
  .mce-visualblocks h4 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==);
  }
  .mce-visualblocks h5 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==);
  }
  .mce-visualblocks h6 {
    background-image: url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==);
  }
  .mce-visualblocks div:not([data-mce-bogus]) {
    background-image: url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7);
  }
  .mce-visualblocks section {
    background-image: url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=);
  }
  .mce-visualblocks article {
    background-image: url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7);
  }
  .mce-visualblocks blockquote {
    background-image: url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7);
  }
  .mce-visualblocks address {
    background-image: url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=);
  }
  .mce-visualblocks pre {
    background-image: url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==);
  }
  .mce-visualblocks figure {
    background-image: url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7);
  }
  .mce-visualblocks figcaption {
    border: 1px dashed #bbb;
  }
  .mce-visualblocks hgroup {
    background-image: url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7);
  }
  .mce-visualblocks aside {
    background-image: url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=);
  }
  .mce-visualblocks ul {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==);
  }
  .mce-visualblocks ol {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==);
  }
  .mce-visualblocks dl {
    background-image: url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==);
  }
  .mce-visualblocks:not([dir=rtl]) p,
  .mce-visualblocks:not([dir=rtl]) h1,
  .mce-visualblocks:not([dir=rtl]) h2,
  .mce-visualblocks:not([dir=rtl]) h3,
  .mce-visualblocks:not([dir=rtl]) h4,
  .mce-visualblocks:not([dir=rtl]) h5,
  .mce-visualblocks:not([dir=rtl]) h6,
  .mce-visualblocks:not([dir=rtl]) div:not([data-mce-bogus]),
  .mce-visualblocks:not([dir=rtl]) section,
  .mce-visualblocks:not([dir=rtl]) article,
  .mce-visualblocks:not([dir=rtl]) blockquote,
  .mce-visualblocks:not([dir=rtl]) address,
  .mce-visualblocks:not([dir=rtl]) pre,
  .mce-visualblocks:not([dir=rtl]) figure,
  .mce-visualblocks:not([dir=rtl]) figcaption,
  .mce-visualblocks:not([dir=rtl]) hgroup,
  .mce-visualblocks:not([dir=rtl]) aside,
  .mce-visualblocks:not([dir=rtl]) ul,
  .mce-visualblocks:not([dir=rtl]) ol,
  .mce-visualblocks:not([dir=rtl]) dl {
    margin-left: 3px;
  }
  .mce-visualblocks[dir=rtl] p,
  .mce-visualblocks[dir=rtl] h1,
  .mce-visualblocks[dir=rtl] h2,
  .mce-visualblocks[dir=rtl] h3,
  .mce-visualblocks[dir=rtl] h4,
  .mce-visualblocks[dir=rtl] h5,
  .mce-visualblocks[dir=rtl] h6,
  .mce-visualblocks[dir=rtl] div:not([data-mce-bogus]),
  .mce-visualblocks[dir=rtl] section,
  .mce-visualblocks[dir=rtl] article,
  .mce-visualblocks[dir=rtl] blockquote,
  .mce-visualblocks[dir=rtl] address,
  .mce-visualblocks[dir=rtl] pre,
  .mce-visualblocks[dir=rtl] figure,
  .mce-visualblocks[dir=rtl] figcaption,
  .mce-visualblocks[dir=rtl] hgroup,
  .mce-visualblocks[dir=rtl] aside,
  .mce-visualblocks[dir=rtl] ul,
  .mce-visualblocks[dir=rtl] ol,
  .mce-visualblocks[dir=rtl] dl {
    background-position-x: right;
    margin-right: 3px;
  }
  .mce-nbsp,
  .mce-shy {
    background: #aaa;
  }
  .mce-shy::after {
    content: '-';
  }
  body {
    font-family: sans-serif;
  }
  table {
    border-collapse: collapse;
  }`,
  contextmenu: "",
  convert_fonts_to_spans: true,
  convert_urls: false,
  default_link_target: "_blank",
  directionality: "ltr",
  doctype: "<!DOCTYPE html>",
  // document_base_url:
  //   "https://canvas.auckland.ac.nz/courses/12345/pages/star-proposed-homepage/",
  entity_encoding: "named",
  extended_valid_elements:
    "@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",
  external_plugins: {},
  font_formats:
    "Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
  font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
  forced_root_block: "p",
  height: 400,
  hidden_input: true,
  id: "wiki_page_body",
  indent: true,
  indent_after:
    "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
  indent_before:
    "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
  //   init_instance_callback: ƒ(t),
  inline: false,
  inline_styles: true,
  // language: "en_GB",
  // language_load: false,
  // language_url: "none",
  link_title: false,
  menu: {
    format: {
      title: "Format",
      items:
        "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align directionality | forecolor backcolor | removeformat",
    },
    insert: {
      title: "Insert",
      items:
        "instructure_links instructure_image instructure_media instructure_document instructure_icon_maker | instructure_equation inserttable instructure_media_embed | hr",
    },
    tools: {
      title: "Tools",
      items: "wordcount lti_tools_menuitem",
    },
    view: {
      title: "View",
      items: "fullscreen instructure_html_view",
    },
  },
  menubar: "edit view insert format tools table",
  non_empty_elements:
    "td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",
  object_resizing: true,
  plugins:
    "autolink media paste table link directionality lists textpattern hr fullscreen wordcount",
  // "autolink media paste table link directionality lists textpattern hr fullscreen wordcount instructure-ui-icons instructure_condensed_buttons instructure_links instructure_html_view instructure_media_embed instructure_external_tools instructure_image instructure_record instructure_documents instructure_equation",
  preview_styles:
    "font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",
  relative_urls: true,
  remove_script_host: true,
  resize: true,
  // setup:ƒ (e),
  // show_media_upload: true,
  skin: false,
  statusbar: true, // Overriden
  submit_patch: true,
  // target:"#tinyCanvas",
  selector: "#tinyCanvas",
  // target_list:false,
  textpattern_patterns: [
    {
      start: "* ",
      cmd: "InsertUnorderedList",
    },
    {
      start: "- ",
      cmd: "InsertUnorderedList",
    },
  ],
  theme: "silver",
  toolbar: [
    {
      name: "Styles",
      items: ["fontsizeselect", "formatselect"],
    },
    {
      name: "Formatting",
      items: [
        "bold",
        "italic",
        "underline",
        "forecolor",
        "backcolor",
        "inst_subscript",
        "inst_superscript",
      ],
    },
    {
      name: "Content",
      items: [
        "instructure_links",
        "instructure_image",
        "instructure_record",
        "instructure_documents",
        "instructure_icon_maker",
      ],
    },
    {
      name: "External tools",
      items: [
        "instructure_external_button_19931",
        "lti_tool_dropdown",
        "lti_mru_button",
      ],
    },
    {
      name: "Alignment and Lists",
      items: ["align", "bullist", "inst_indent", "inst_outdent"],
    },
    {
      name: "Miscellaneous",
      items: [
        "removeformat",
        "table",
        "instructure_equation",
        "instructure_media_embed",
      ],
    },
  ],
  toolbar_mode: "floating",
  toolbar_sticky: true,
  toolbar_ticky: true,
  // url_converter:ƒ (e,t,r),
  // url_converter_scope:e {plugins: {…}, contentCSS: Array(3), contentStyles: Array(0), loadedCSS: {…}, isNotDirty: false, …},
  valid_elements:
    "@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",
  validate: true,
  visual: true,
};

// @ts-ignore
tinymce.init(canvasSettings);
