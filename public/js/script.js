// Add copy button to <pre> blocks
document.addEventListener("DOMContentLoaded", function () {
  const preBlocks = document.querySelectorAll("pre");

  preBlocks.forEach(function (block) {
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    const copyButtonHost = block.closest(".highlight") || block.parentElement;
    const codeElement = block.querySelector("code");
    const explicitLang = codeElement?.dataset.lang;
    const classLang = Array.from(codeElement?.classList || [])
      .find((className) => className.startsWith("language-"))
      ?.replace("language-", "");
    const language = explicitLang || classLang;

    if (language) {
      copyButtonHost.dataset.language = language;
    }

    // copy and check SVG icons
    // Previous GitHub-style icons kept here in case the new set feels off.
    // const svgCopy =
    //   '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="1rem" height="1rem" fill="currentColor" class="octicon octicon-copy"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
    // const svgCopied =
    //   '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="1rem" height="1rem" fill="currentColor" class="octicon octicon-check"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>';
    const svgCopy =
      '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>';
    const svgCopied =
      '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" class="copy-icon copied-icon"><path d="M5 12.5 9.2 16.7 19 7.5"></path></svg>';

    copyButton.innerHTML = svgCopy;

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
