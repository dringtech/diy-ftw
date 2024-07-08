function init() {
  const form = document.querySelector<HTMLFormElement>("form#type-filter");

  if (!form) return;

  function applyFilter() {
    document.querySelectorAll<HTMLElement>("[data-type]")
      .forEach((s) => {
        const type = s.dataset.type;
        if (!type) return;
        const selected = form![type].checked;
        s.hidden = !selected;
      });
  }

  function clearFilter() {
    document.querySelectorAll<HTMLElement>("[data-type]").forEach((s) =>
      s.hidden = false
    );
  }

  form.addEventListener("change", () => {
    if (form.querySelectorAll<HTMLInputElement>("input:checked").length > 0) {
      applyFilter();
    } else {
      clearFilter();
    }
  });
}

addEventListener("DOMContentLoaded", init);
