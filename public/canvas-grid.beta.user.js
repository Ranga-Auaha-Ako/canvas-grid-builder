// ==UserScript==
// @name         Canvas Grid Builder (Staging)
// @namespace    https://raa.auckland.ac.nz
// @version      0.4
// @description  Adds Canvas Grid from the development instance to Canvas;;
// @author       Zac M-W, Ranga Auaha Ako
// @match        https://*.instructure.com/*
// @match        https://canvas.auckland.ac.nz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @grant        GM_addElement
// ==/UserScript==

(function () {
  GM_addElement("script", {
    src: "https://gridbuilder-beta.c.raa.amazon.auckland.ac.nz/canvas-grid.umd.cjs",
    type: "text/javascript",
  });
})();
