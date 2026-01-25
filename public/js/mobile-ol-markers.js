(() => {
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  if (!mobileQuery.matches) {
    return;
  }

  const romanMap = [
    [1000, "m"],
    [900, "cm"],
    [500, "d"],
    [400, "cd"],
    [100, "c"],
    [90, "xc"],
    [50, "l"],
    [40, "xl"],
    [10, "x"],
    [9, "ix"],
    [5, "v"],
    [4, "iv"],
    [1, "i"],
  ];

  const toRoman = (num, upper) => {
    let n = Math.max(0, num);
    let out = "";
    for (const [value, glyph] of romanMap) {
      while (n >= value) {
        out += glyph;
        n -= value;
      }
    }
    return upper ? out.toUpperCase() : out;
  };

  const toAlpha = (num, upper) => {
    let n = Math.max(0, num);
    let out = "";
    while (n > 0) {
      n -= 1;
      out = String.fromCharCode(97 + (n % 26)) + out;
      n = Math.floor(n / 26);
    }
    return upper ? out.toUpperCase() : out;
  };

  const formatIndex = (index, list) => {
    if (list.classList.contains("enum-i")) return toRoman(index, false);
    if (list.classList.contains("enum-I")) return toRoman(index, true);
    if (list.classList.contains("enum-a")) return toAlpha(index, false);
    if (list.classList.contains("enum-A")) return toAlpha(index, true);
    return String(index);
  };

  const surround = (label, list) => {
    if (list.classList.contains("surround-bracket")) return `[${label}]`;
    if (list.classList.contains("surround-paren")) return `(${label})`;
    if (list.classList.contains("surround-half")) return `${label})`;
    if (list.classList.contains("surround-colon")) return `${label}:`;
    if (list.classList.contains("surround-dot")) return `${label}.`;
    return label;
  };

  document
    .querySelectorAll(
      "ol.surround-paren, ol.surround-bracket, ol.surround-half, ol.surround-dot, ol.surround-colon"
    )
    .forEach((list) => {
      const items = Array.from(list.children).filter(
        (item) => item.tagName === "LI"
      );
      const reversed = list.hasAttribute("reversed");
      let current =
        list.hasAttribute("start") && !Number.isNaN(Number(list.start))
          ? Number(list.start)
          : reversed
          ? items.length
          : 1;
      const step = reversed ? -1 : 1;

      items.forEach((item) => {
        const valueAttr = item.getAttribute("value");
        if (valueAttr !== null && !Number.isNaN(Number(valueAttr))) {
          current = Number(valueAttr);
        }

        if (!item.querySelector(":scope > .ol-inline-marker")) {
          const marker = document.createElement("span");
          marker.className = "ol-inline-marker";
          marker.textContent = surround(formatIndex(current, list), list);

          const first = item.firstElementChild;
          if (first && first.tagName === "P") {
            first.prepend(marker);
          } else {
            item.prepend(marker);
          }
        }

        current += step;
      });
    });
})();
