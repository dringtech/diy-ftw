function init() {
  const form = document.querySelector<HTMLFormElement>("form#type-filter");

  if (!form) return;

  function applyFilter(selectedType: string) {
    document.querySelectorAll<HTMLElement>("[data-type]")
      .forEach((s) => {
        const type = s.dataset.type;
        if (!type) return;
        const selected = type === selectedType;
        s.hidden = !selected;
      });
  }

  function clearFilter() {
    document.querySelectorAll<HTMLElement>("[data-type]").forEach((s) =>
      s.hidden = false
    );
  }

  form.addEventListener("change", () => {
    if (form.type.value !== "") {
      applyFilter(form.type.value);
    } else {
      clearFilter();
    }
  });
}

addEventListener("DOMContentLoaded", init);
