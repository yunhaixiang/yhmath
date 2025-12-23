(function () {
  const baseHeadingLevel = 2;

  const LABELS = {
    definition:  { en: "Definition",  zh: "定义" },
    lemma:       { en: "Lemma",       zh: "引理" },
    theorem:     { en: "Theorem",     zh: "定理" },
    proposition: { en: "Proposition", zh: "命题" },
    corollary:   { en: "Corollary",   zh: "推论" },
    remark:      { en: "Remark",      zh: "注记" },
    example:     { en: "Example",     zh: "例子" },
    question:    { en: "Question",    zh: "问题" },
    conjecture:  { en: "Conjecture",  zh: "猜想" },
    convention:  { en: "Convention",  zh: "约定" },
    algorithm:   { en: "Algorithm",   zh: "算法" },
    caveat:      { en: "Caveat",      zh: "注意" },
    claim:       { en: "Claim",       zh: "断言" },
    exercise:    { en: "Exercise",    zh: "练习" },
    fact:        { en: "Fact",        zh: "事实" },
    notation:    { en: "Notation",    zh: "记号" }
  };

  function isHeading(node) { return node && /^H[1-6]$/.test(node.tagName); }
  function headingLevel(node) { return parseInt(node.tagName.slice(1), 10); }

  function getLang(env) {
    const lang = (env.getAttribute("data-lang") || "en").toLowerCase();
    return lang === "zh" ? "zh" : "en";
  }
  function getKind(env) { return (env.getAttribute("data-kind") || "theorem").toLowerCase(); }
  function getLabel(kind, lang) { return (LABELS[kind] || LABELS.theorem)[lang] || (LABELS[kind] || LABELS.theorem).en; }

  function buildPrefix(c) {
    const parts = [];
    if (c[baseHeadingLevel] > 0) {
      for (let lvl = baseHeadingLevel; lvl <= 6; lvl++) {
        if (c[lvl] === 0) break;
        parts.push(String(c[lvl]));
      }
    }
    return parts;
  }

  function numberMathEnvs() {
    const c = Array(7).fill(0);
    let envCounter = 0;

    document.querySelectorAll("h1,h2,h3,h4,h5,h6,.math-env").forEach((node) => {
      if (isHeading(node)) {
        const lvl = headingLevel(node);
        c[lvl] += 1;
        for (let j = lvl + 1; j <= 6; j++) c[j] = 0;
        if (lvl >= baseHeadingLevel) envCounter = 0;
        return;
      }

      if (!node.classList.contains("math-env")) return;

      envCounter += 1;
      const prefix = buildPrefix(c);
      const num = prefix.length ? `${prefix.join(".")}.${envCounter}` : `${envCounter}`;

      const label = getLabel(getKind(node), getLang(node));

      const titleEl = node.querySelector(".math-title");
      if (titleEl) titleEl.textContent = `${label} ${num}.`;

      node.dataset.mathLabel = label;
      node.dataset.mathNum = num;
    });
  }
  function replaceRefPlaceholders() {
  document.querySelectorAll("span.yh-ref[data-ref-kind]").forEach((ph) => {
    const kind = ph.getAttribute("data-ref-kind");

    let href = "#";
    if (kind === "math") {
      const id = ph.getAttribute("data-ref-id");
      if (!id) return;
      href = `#${id}`;
    } else if (kind === "bib") {
      const key = ph.getAttribute("data-cite-key");
      if (!key) return;
      href = `#bib-${key}`;
    } else if (kind === "fig") {
      const id = ph.getAttribute("data-fig-id");
      if (!id) return;
      href = `#${id}`;
    } else {
      return;
    }

    const a = document.createElement("a");
    a.href = href;

    // carry data forward so later passes can fill the correct text
    if (kind === "math") {
      a.className = "math-refer";
      a.dataset.mathId = ph.getAttribute("data-ref-id");
      a.textContent = "[ref]";
    }
    if (kind === "bib") {
      a.className = "bib-cite";
      a.dataset.citeKey = ph.getAttribute("data-cite-key");
      const note = ph.getAttribute("data-cite-note");
      if (note) a.dataset.citeNote = note;
      a.textContent = "[cite]";
    }
    if (kind === "fig") {
      a.className = "fig-refer";
      a.dataset.figId = ph.getAttribute("data-fig-id");
      a.textContent = "[fig]";
    }

    ph.replaceWith(a);
  });
}

  function fillReferences() {
    document.querySelectorAll("a.math-refer[data-math-id]").forEach((a) => {
      const id = (a.getAttribute("data-math-id") || "").trim();
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) { a.textContent = `[${id}]`; return; }

      const label = target.dataset.mathLabel;
      const num = target.dataset.mathNum;
      if (label && num) a.textContent = `${label} ${num}`;
    });
  }

  function fillCitations() {
    document.querySelectorAll("a.bib-cite[data-cite-key]").forEach((a) => {
      const key = (a.getAttribute("data-cite-key") || "").trim();
      if (!key) return;
      const note = (a.getAttribute("data-cite-note") || "").trim();
      a.textContent = note ? `[${key}, ${note}]` : `[${key}]`;
    });
  }
  function numberFigures() {
  let figCounter = 0;

  document.querySelectorAll(".fig-env").forEach((fig) => {
    figCounter += 1;

    const lang = (fig.getAttribute("data-lang") || "en").toLowerCase();
    const label = lang === "zh" ? "图" : "Figure";

    fig.dataset.figLabel = label;
    fig.dataset.figNum = String(figCounter);

    // Update visible label inside the figure environment, if present
    const labelEl = fig.querySelector(".fig-label");
    if (labelEl) {
      labelEl.textContent = `${label} ${figCounter}: `;
      // make it bold via CSS (recommended) or inline:
      // labelEl.style.fontWeight = "600";
    }
  });
}

function fillFigureRefs() {
  document.querySelectorAll("a.fig-refer[data-fig-id]").forEach((a) => {
    const id = (a.getAttribute("data-fig-id") || "").trim();
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) {
      a.textContent = "[fig]";
      return;
    }

    const label = target.dataset.figLabel || "Figure";
    const num = target.dataset.figNum;
    if (!num) {
      a.textContent = "[fig]";
      return;
    }

    a.textContent = `${label} ${num}`;
  });
}

  function runAll() {
    try {
      replaceRefPlaceholders();
      numberMathEnvs();
      numberFigures();
      fillReferences();
      fillCitations();
      fillFigureRefs();
    } catch (e) {
      console.error("[math-env] runAll failed:", e);
    }
  }

    // Debug helper: call `__yhMathEnvRunAll()` from DevTools
  window.__yhMathEnvRunAll = runAll;

  document.addEventListener("DOMContentLoaded", () => {
    // console.log("[math-env] DOMContentLoaded");
    runAll();
    setTimeout(runAll, 0);
  });
  window.addEventListener("load", runAll);
})();