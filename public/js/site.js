/*
  Francois Schaap Physiotherapy: small site script.
  - Mobile menu (open, close, Escape key, focus back to the button)
  - Highlights the current page in the menu
  - Header hairline once the page has scrolled
  - The statement moment: words light up as the statement crosses the screen
  Everything works without this file; it only adds polish.
  Motion rests when the visitor's device asks for reduced motion.
*/
(function () {
  "use strict";
  if (window.__fsSite) return;
  window.__fsSite = true;

  var doc = document.documentElement;
  doc.classList.remove("no-js");
  doc.classList.add("is-ready");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Menu ---------- */
  var button = document.querySelector("[data-menu-button]");
  var menu = document.querySelector("[data-menu]");
  var label = document.querySelector("[data-menu-label]");


  function setMenu(open) {
    if (!button || !menu) return;
    button.setAttribute("aria-expanded", open ? "true" : "false");
    if (label) label.textContent = open ? "Close menu" : "Open menu";
    menu.classList.toggle("is-open", open);
    menu.inert = !open;
    document.body.classList.toggle("menu-open", open);
  }
  if (menu) menu.inert = true;

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!(t instanceof Element)) return;
    if (button && t.closest("[data-menu-button]")) {
      setMenu(button.getAttribute("aria-expanded") !== "true");
      return;
    }
    if (menu && menu.classList.contains("is-open") && t.closest("[data-menu] a")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setMenu(false);
      if (button) button.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 960 && menu && menu.classList.contains("is-open")) setMenu(false);
  });

  /* ---------- Current page ---------- */
  function markCurrent() {
    var path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (path.length > 1) path = path.replace(/\/$/, "");
    document.querySelectorAll("[data-nav-link]").forEach(function (a) {
      var href = (a.getAttribute("href") || "").replace(/\.html$/, "").replace(/^\.\//, "/");
      if (href === "index") href = "/";
      if (href.length > 1) href = href.replace(/\/$/, "");
      var on = href === "/" ? path === "/" || path === "" : path === href || path.endsWith(href);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- Header hairline ---------- */
  var header = document.querySelector("[data-header]");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Statement moment ---------- */
  var statements = [];
  var ticking = false;

  function setupStatements() {
    statements = [];
    document.querySelectorAll("[data-statement]").forEach(function (el) {
      var words = el.querySelectorAll(".w");
      if (reduce.matches) {
        el.classList.add("is-static");
        return;
      }
      el.classList.remove("is-static");
      statements.push({ el: el, words: words, n: -1 });
    });
    updateStatements();
  }

  function updateStatements() {
    ticking = false;
    var vh = window.innerHeight;
    var start = vh * 0.85;
    var end = vh * 0.45;
    var atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    statements.forEach(function (s) {
      var r = s.el.getBoundingClientRect();
      var t = (start - r.top) / Math.max(1, start - end + r.height);
      t = Math.min(1, Math.max(0, t));
      var k = atEnd ? s.words.length : Math.round(t * s.words.length);
      if (k === s.n) return;
      s.n = k;
      for (var i = 0; i < s.words.length; i++) s.words[i].classList.toggle("is-on", i < k);
    });
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking && statements.length) {
        ticking = true;
        window.requestAnimationFrame(updateStatements);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", updateStatements);
  if (reduce.addEventListener) reduce.addEventListener("change", setupStatements);

  /* ---------- Run now, and again after in-app page changes ---------- */
  function init() {
    markCurrent();
    onScroll();
    setupStatements();
  }
  init();

  var lastPath = window.location.pathname;
  new MutationObserver(function () {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      setMenu(false);
      init();
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
