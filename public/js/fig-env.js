function stripQuotes(s) {
  if (!s) return "";
  return s.replace(/^["'](.*)["']$/, "$1");
}

function getFigureLabelText(figEnv) {
  const labelEl = figEnv.querySelector(".fig-label");
  if (!labelEl) return "";
  // Reads CSS counter output like: "Figure 3: "
  const before = getComputedStyle(labelEl, "::before").content;
  return stripQuotes(before).trim();
}

function numberFiguresAndFillRefs() {
  let figCounter = 0;

  // Number figures
  document.querySelectorAll(".fig-env").forEach((fig) => {
    figCounter += 1;

    const lang = (fig.getAttribute("data-lang") || "en").toLowerCase();
    const label = lang === "zh" ? "图" : "Figure";
    const text = `${label} ${figCounter}`;

    fig.dataset.figRefText = text;

    // Also update visible label (optional, but consistent)
    const labelEl = fig.querySelector(".fig-label");
    if (labelEl) {
      labelEl.textContent = `${text}: `;
    }
  });

  // Fill figref links
  document.querySelectorAll("a.fig-refer[data-fig-id]").forEach((a) => {
    const id = a.dataset.figId;
    const t = a.querySelector(".fig-refer-text");
    if (!t) return;

    const target = document.getElementById(id);
    if (!target || !target.dataset.figRefText) {
      t.textContent = "[fig]";
      return;
    }

    t.textContent = target.dataset.figRefText;
  });
}
