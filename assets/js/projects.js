/**
 * Pencarian dan filter project — Milestone 7.
 */
(() => {
  "use strict";

  function normalizeText(value) {
    return String(value || "").trim().toLocaleLowerCase("id-ID");
  }

  function initProjectFilters() {
    const form = document.querySelector("[data-project-form]");
    const searchInput = document.querySelector("[data-project-search]");
    const filterButtons = [...document.querySelectorAll("[data-project-filter]")];
    const projectCards = [...document.querySelectorAll("[data-project-card]")];
    const resultCount = document.querySelector("#project-result-count");
    const emptyState = document.querySelector("[data-project-empty]");
    const resetButtons = document.querySelectorAll("[data-project-reset], [data-project-empty-reset]");

    if (!form || !searchInput || !filterButtons.length || !projectCards.length || !resultCount || !emptyState) {
      return;
    }

    function getActiveFilter() {
      return filterButtons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.projectFilter || "all";
    }

    function matchesSearch(card, query) {
      return !query || normalizeText(card.dataset.projectSearchText).includes(query);
    }

    function matchesFilter(card, category) {
      if (category === "all") {
        return true;
      }

      return normalizeText(card.dataset.projectCategory).split(/\s+/).includes(category);
    }

    function updateResultCount(visibleCount) {
      if (visibleCount === 0) {
        resultCount.textContent = "Tidak ada proyek yang sesuai";
      } else {
        resultCount.textContent = `Menampilkan ${visibleCount} proyek`;
      }
    }

    function updateProjectVisibility() {
      const query = normalizeText(searchInput.value);
      const activeFilter = getActiveFilter();
      let visibleCount = 0;

      projectCards.forEach((card) => {
        const isVisible = matchesSearch(card, query) && matchesFilter(card, activeFilter);
        card.hidden = !isVisible;
        visibleCount += isVisible ? 1 : 0;
      });

      emptyState.hidden = visibleCount !== 0;
      updateResultCount(visibleCount);
    }

    function resetProjectSearch() {
      searchInput.value = "";
      filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.projectFilter === "all"));
      });
      updateProjectVisibility();
      searchInput.focus();
    }

    form.addEventListener("submit", (event) => event.preventDefault());
    searchInput.addEventListener("input", updateProjectVisibility);
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        updateProjectVisibility();
      });
    });
    resetButtons.forEach((button) => button.addEventListener("click", resetProjectSearch));
    updateProjectVisibility();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectFilters, { once: true });
  } else {
    initProjectFilters();
  }
})();
