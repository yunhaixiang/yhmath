(() => {
  const namespace = "http://www.w3.org/2000/svg";
  const element = (name, attributes, content) => {
    const node = document.createElementNS(namespace, name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (content !== undefined) node.textContent = content;
    return node;
  };

  const formatValue = (value) => Number(value.toFixed(1)).toString();

  function draw(chart, points, label) {
    const width = Math.max(280, Math.round(chart.clientWidth));
    const height = 170;
    const left = 42;
    const right = 14;
    const top = 12;
    const bottom = 28;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const values = points.map((point) => point.value);
    const minimum = Math.min(...values);
    const maximum = Math.max(...values);
    const padding = Math.max((maximum - minimum) * 0.12, Math.abs(maximum) * 0.01, 0.5);
    const low = minimum - padding;
    const high = maximum + padding;
    const x = (index) => left + (index / (points.length - 1)) * plotWidth;
    const y = (value) => top + ((high - value) / (high - low)) * plotHeight;
    const svg = chart.querySelector("svg");
    svg.replaceChildren();
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${label}：${points.length}次测量，从${points[0].date}到${points.at(-1).date}`);

    [low, high].forEach((value) => {
      const ordinate = y(value);
      svg.append(element("line", { x1: left, y1: ordinate, x2: width - right, y2: ordinate, stroke: "var(--fg4)", "stroke-opacity": "0.35" }));
      svg.append(element("text", { x: left - 5, y: ordinate + 4, "text-anchor": "end", fill: "currentColor", "font-size": "11" }, formatValue(value)));
    });

    svg.append(element("polyline", {
      points: points.map((point, index) => `${x(index)},${y(point.value)}`).join(" "),
      fill: "none", stroke: "var(--blue)", "stroke-width": "2", "stroke-linejoin": "round"
    }));

    points.forEach((point, index) => {
      const dot = element("circle", { cx: x(index), cy: y(point.value), r: "3", fill: "var(--blue)" });
      dot.append(element("title", {}, `${point.date}：${formatValue(point.value)}`));
      svg.append(dot);
    });

    [0, points.length - 1].forEach((index) => {
      svg.append(element("text", {
        x: x(index), y: height - 5,
        "text-anchor": index === 0 ? "start" : "end",
        fill: "currentColor", "font-size": "11"
      }, points[index].date));
    });
  }

  document.querySelectorAll(".yh-trend-charts").forEach((container) => {
    const table = document.getElementById(container.dataset.source);
    if (!table) return;
    const headers = [...table.querySelectorAll("thead th")].map((cell) => cell.textContent.trim());
    const rows = [...table.querySelectorAll("tbody tr")].map((row) =>
      [...row.querySelectorAll("td")].map((cell) => cell.textContent.trim())
    ).filter((row) => row[0] && row[0] !== "—");
    const columns = container.dataset.columns.split(",").map(Number);
    let hasChart = false;

    columns.forEach((column) => {
      const points = rows.map((row) => ({ date: row[0], value: row[column] && row[column] !== "—" ? Number(row[column]) : NaN }))
        .filter((point) => Number.isFinite(point.value) && point.date);
      if (points.length < 2) return;
      hasChart = true;
      const chart = document.createElement("div");
      chart.className = "yh-trend-chart";
      const title = document.createElement("h5");
      title.className = "yh-trend-chart-title";
      title.textContent = headers[column];
      chart.append(title, element("svg", {}));
      container.append(chart);
      draw(chart, points, headers[column]);
      new ResizeObserver(() => draw(chart, points, headers[column])).observe(chart);
    });

    if (!hasChart) {
      const empty = document.createElement("p");
      empty.className = "yh-trend-chart-empty";
      empty.textContent = "填写至少两次记录后显示折线图。";
      container.append(empty);
    }
  });
})();
