console.log("collapsible js loaded");

(function () {

  function applyLinkColorLikeA(head) {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "x";
    a.style.position = "absolute";
    a.style.left = "-9999px";
    a.style.top = "0";
    a.style.pointerEvents = "none";

    const parent = head.parentElement || document.body;
    parent.appendChild(a);

    const linkColor = getComputedStyle(a).color;
    parent.removeChild(a);

    head.style.color = linkColor;
  }

  function ensureBreakAfter(root, open) {
    const id = root.getAttribute("data-break-id");
    if (!id) return;

    // existing markers (if any)
    let br = document.querySelector(`br[data-for="${id}"]`);
    let gap = document.querySelector(`[data-gap-for="${id}"]`);

    if (!open) {
      if (br) br.remove();
      if (gap) gap.remove();
      return;
    }

    // We need to know what comes next (before we insert anything)
    const nextEl = root.nextElementSibling;
    const nextIsHint = nextEl && nextEl.classList && nextEl.classList.contains("yh-collapsible");

    // 1) Always insert a <br> after the open hint
    if (!br) {
      br = document.createElement("br");
      br.setAttribute("data-for", id);
      root.after(br);
    }

    // 2) Insert a vertical-gap spacer ONLY if the next element is NOT another hint
    if (!nextIsHint) {
      if (!gap) {
        gap = document.createElement("span");
        gap.className = "yh-collapsible-aftergap";
        gap.setAttribute("data-gap-for", id);
        br.after(gap);
      }
    } else {
      if (gap) gap.remove();
    }
  }

  function setOpen(root, open) {
    const head = root.querySelector("[data-collapsible-toggle]");
    const body = root.querySelector("[data-collapsible-body]");
    if (!head || !body) return;
    
    head.setAttribute("aria-expanded", open ? "true" : "false");
    body.style.display = open ? "inline" : "none";
    ensureBreakAfter(root, open);
  }

  function toggle(head) {
    const root = head.closest("[data-collapsible]");
    if (!root) return;
    const open = head.getAttribute("aria-expanded") === "true";
    setOpen(root, !open);
  }

  function init() {
    document.querySelectorAll("[data-collapsible]").forEach((root) => {
      const head = root.querySelector("[data-collapsible-toggle]");
      if (!head) return;

      // 🔑 restore exact link color
      applyLinkColorLikeA(head);

      const open = head.getAttribute("aria-expanded") === "true";
      setOpen(root, open);
    });
  }

  document.addEventListener(
    "click",
    (e) => {
      const head = e.target.closest("[data-collapsible-toggle]");
      if (head) toggle(head);
    },
    true
  );

  document.addEventListener(
    "keydown",
    (e) => {
      const head = e.target.closest("[data-collapsible-toggle]");
      if (!head) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(head);
      }
    },
    true
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();