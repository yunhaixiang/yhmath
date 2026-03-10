// Add copy button to <pre> blocks
document.addEventListener("DOMContentLoaded", function () {
  const preBlocks = document.querySelectorAll("pre");
  const svgCopy =
    '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>';
  const svgCopied =
    '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" class="copy-icon copied-icon"><path d="M5 12.5 9.2 16.7 19 7.5"></path></svg>';
  const svgCollapse =
    '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon collapse-icon"><path d="M7 17l5-5 5 5"></path><path d="M7 12l5-5 5 5"></path></svg>';
  const svgExpand =
    '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon expand-icon"><path d="M7 12l5 5 5-5"></path><path d="M7 7l5 5 5-5"></path></svg>';

  preBlocks.forEach(function (block) {
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    const copyButtonHost = block.closest(".highlight") || block.parentElement;
    const collapsibleWrapper = block.closest(".yh-codeblock-collapsible");
    const codeElement = block.querySelector("code");
    const explicitLang = codeElement?.dataset.lang;
    const classLang = Array.from(codeElement?.classList || [])
      .find((className) => className.startsWith("language-"))
      ?.replace("language-", "");
    const language = explicitLang || classLang;

    if (language) {
      copyButtonHost.dataset.language = language;
    }

    if (collapsibleWrapper) {
      const collapseAtLine = Number.parseInt(
        collapsibleWrapper.dataset.collapseAtLine || "",
        10
      );
      const computedStyle = window.getComputedStyle(block);
      const lineHeight = Number.parseFloat(computedStyle.lineHeight);
      const paddingTop = Number.parseFloat(computedStyle.paddingTop) || 0;
      const paddingBottom = Number.parseFloat(computedStyle.paddingBottom) || 0;

      if (Number.isFinite(collapseAtLine) && collapseAtLine > 0 && Number.isFinite(lineHeight)) {
        const collapsedHeight =
          paddingTop + paddingBottom + lineHeight * collapseAtLine;
        collapsibleWrapper.style.setProperty(
          "--yh-collapse-max-height",
          `${collapsedHeight}px`
        );
      }
    }

    copyButton.innerHTML = svgCopy;
    if (collapsibleWrapper) {
      copyButton.classList.add("copy-button-with-toggle");
    }

    copyButton.addEventListener("click", function () {
      const textToCopy = block.innerText;

      copyButton.innerHTML = svgCopied;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard: " + textToCopy);
          setTimeout(() => {
            copyButton.innerHTML = svgCopy;
          }, 2000);
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err);
          copyButton.innerHTML = svgCopy;
          setTimeout(() => {
            copyButton.innerHTML = svgCopy;
          }, 2000);
        });
    });

    if (collapsibleWrapper && !copyButtonHost.querySelector(".collapse-button")) {
      const collapseButton = document.createElement("button");
      collapseButton.type = "button";
      collapseButton.classList.add("collapse-button");

      const syncCollapseButton = () => {
        const isCollapsed = collapsibleWrapper.dataset.collapsed !== "false";
        collapsibleWrapper.classList.toggle("is-collapsed", isCollapsed);
        collapseButton.innerHTML = isCollapsed ? svgExpand : svgCollapse;
        collapseButton.setAttribute(
          "aria-label",
          isCollapsed ? "Expand code block" : "Collapse code block"
        );
        collapseButton.setAttribute(
          "aria-expanded",
          isCollapsed ? "false" : "true"
        );
      };

      collapseButton.addEventListener("click", function () {
        const isCollapsed = collapsibleWrapper.dataset.collapsed !== "false";
        collapsibleWrapper.dataset.collapsed = isCollapsed ? "false" : "true";
        syncCollapseButton();
      });

      syncCollapseButton();
      copyButtonHost.appendChild(collapseButton);
    }

    copyButtonHost.appendChild(copyButton);
  });
});

// Collapse long taxonomy lines on the blog list page.
document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(
    ".post-taxonomy-overview .post-taxonomy-line"
  );

  if (!lines.length) {
    return;
  }

  const refreshLine = (line) => {
    const tags = Array.from(line.querySelectorAll("a.link.tag"));
    if (!tags.length) {
      return;
    }

    const existingToggle = line.querySelector(".taxonomy-toggle");
    if (existingToggle) {
      existingToggle.remove();
    }

    const isExpanded = line.dataset.expanded === "true";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "taxonomy-toggle";
    toggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    toggle.textContent = isExpanded ? "↩" : "⋯";
    toggle.setAttribute(
      "aria-label",
      isExpanded ? "Collapse list" : "Expand list"
    );

    tags.forEach((tag) => {
      tag.hidden = false;
      tag.classList.remove("yh-taxonomy-hidden");
    });
    line.classList.remove("is-collapsed", "is-expanded");
    line.appendChild(toggle);

    const firstTop = tags[0].offsetTop;
    const wrapped = tags.some((tag) => tag.offsetTop > firstTop);

    if (!wrapped) {
      toggle.remove();
      delete line.dataset.expanded;
      return;
    }

    if (!isExpanded) {
      line.classList.add("is-collapsed");
    } else {
      line.classList.add("is-expanded");
    }

    toggle.addEventListener("click", () => {
      line.dataset.expanded = isExpanded ? "false" : "true";
      refreshLine(line);
    });

    if (!isExpanded) {
      const toggleWidth = toggle.getBoundingClientRect().width;
      const lineRect = line.getBoundingClientRect();
      const cutoff = line.clientWidth - toggleWidth;

      tags.forEach((tag) => {
        const style = window.getComputedStyle(tag);
        const marginRight = parseFloat(style.marginRight) || 0;
        const rect = tag.getBoundingClientRect();
        const rightEdge = rect.right - lineRect.left + marginRight;

        if (rightEdge <= cutoff || tag === tags[0]) {
          tag.hidden = false;
          tag.classList.remove("yh-taxonomy-hidden");
        } else {
          tag.hidden = true;
          tag.classList.add("yh-taxonomy-hidden");
        }
      });
    }
  };

  const refreshAll = () => {
    lines.forEach((line) => refreshLine(line));
  };

  refreshAll();
  window.addEventListener("load", refreshAll);

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(refreshAll, 120);
  });
});

// Dark mode toggle
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelectorAll("#dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
};

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

if (darkMode === "enabled") {
  enableDarkMode();
} else if (darkMode === null && prefersDarkMode.matches) {
  enableDarkMode();
} else {
  disableDarkMode();
}

darkModeToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});

// Scroll to top button
var backToTopBtn = document.getElementById("back-to-top");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
