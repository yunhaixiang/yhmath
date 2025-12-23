console.log("collapsible js loaded");

(function () {
  function getLinkColor(ctx) {
    // Prefer an existing real link in the same container (matches theme selectors best)
    const realLink = ctx.querySelector("a");
    if (realLink) return getComputedStyle(realLink).color;

    // Fallback: temporary <a> inside ctx
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "x";
    a.style.position = "absolute";
    a.style.left = "-9999px";
    a.style.top = "0";
    a.style.pointerEvents = "none";
    ctx.appendChild(a);
    const c = getComputedStyle(a).color;
    a.remove();
    return c;
  }

  function setOpen(row, open) {
    const head = row.querySelector("[data-hint-toggle]");
    const body = row.querySelector("[data-hint-body]");
    if (!head || !body) return;

    head.setAttribute("aria-expanded", open ? "true" : "false");
    body.style.display = open ? "inline-block" : "none";
  }

  function initOne(row) {
    const head = row.querySelector("[data-hint-toggle]");
    if (!head) return;

    // Apply link color (force priority so theme can't override it)
    const ctx = row.closest(".post-content, .content, .markdown, article, main") || document.body;
    const linkColor = getLinkColor(ctx);
    head.style.setProperty("color", linkColor, "important");

    // Initial open/closed state
    const open = head.getAttribute("aria-expanded") === "true";
    setOpen(row, open);

    // Direct listeners (reliable even if other scripts stop propagation)
    head.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        const nowOpen = head.getAttribute("aria-expanded") === "true";
        setOpen(row, !nowOpen);
      },
      true
    );

    head.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const nowOpen = head.getAttribute("aria-expanded") === "true";
          setOpen(row, !nowOpen);
        }
      },
      true
    );
  }

  function initAll() {
    const rows = document.querySelectorAll("[data-hint-row]");
    console.log("hint rows found:", rows.length);
    rows.forEach(initOne);
  }

  try {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAll);
    } else {
      initAll();
    }
  } catch (err) {
    console.error("collapsible init failed:", err);
  }
})();