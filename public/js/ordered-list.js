document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("ol.reversed").forEach((list) => {
    if (!list.hasAttribute("reversed")) {
      list.setAttribute("reversed", "");
    }
  });
});
