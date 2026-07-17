(() => {
  "use strict";
  const normalizeText = (value) => String(value || "").trim().toLowerCase();
  const getActiveCredentialFilter = (buttons) => buttons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.credentialFilter || "all";
  const matchesCredentialFilter = (card, filter) => filter === "all" || normalizeText(card.dataset.credentialCategory).split(/\s+/).includes(filter);
  const updateCredentialResultCount = (count, output) => { output.textContent = count === 0 ? "Tidak ada credential yang sesuai" : `Menampilkan ${count} ${count === 1 ? "credential" : "credentials"}`; };
  const updateCredentialEmptyState = (count, emptyState) => { emptyState.hidden = count !== 0; };
  const updateCredentialVisibility = (buttons, cards, output, emptyState) => {
    const filter = getActiveCredentialFilter(buttons);
    let count = 0;
    cards.forEach((card) => { const visible = matchesCredentialFilter(card, filter); card.hidden = !visible; if (visible) count += 1; });
    updateCredentialResultCount(count, output); updateCredentialEmptyState(count, emptyState);
  };
  const resetCredentialFilter = (buttons, cards, output, emptyState) => {
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.credentialFilter === "all")));
    updateCredentialVisibility(buttons, cards, output, emptyState);
  };
  const initCredentialFilters = () => {
    const buttons = [...document.querySelectorAll("[data-credential-filter]")];
    const cards = [...document.querySelectorAll("[data-credential-category]")];
    const output = document.querySelector("#credential-result-count");
    const emptyState = document.querySelector("[data-credential-empty]");
    const reset = document.querySelector("[data-credential-reset]");
    if (!buttons.length || !cards.length || !output || !emptyState) return;
    buttons.forEach((button) => button.addEventListener("click", () => { buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button))); updateCredentialVisibility(buttons, cards, output, emptyState); }));
    reset?.addEventListener("click", () => resetCredentialFilter(buttons, cards, output, emptyState));
    updateCredentialVisibility(buttons, cards, output, emptyState);
  };
  document.addEventListener("DOMContentLoaded", initCredentialFilters);
})();
