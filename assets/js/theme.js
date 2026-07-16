/**
 * Pengaturan tema dark/light dengan preferensi tersimpan.
 */
(() => {
  "use strict";

  const STORAGE_KEY = "raden-portfolio-theme";
  const VALID_THEMES = ["dark", "light"];

  function getStoredTheme() {
    try {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY);
      return VALID_THEMES.includes(storedTheme) ? storedTheme : null;
    } catch {
      return null;
    }
  }

  function getPreferredTheme() {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
      return "light";
    }

    return "dark";
  }

  function updateThemeButton(theme) {
    const button = document.querySelector("[data-theme-toggle]");

    if (!button) {
      return;
    }

    const nextThemeIsLight = theme === "dark";
    const label = nextThemeIsLight ? "Tema terang" : "Tema gelap";

    button.setAttribute("aria-label", nextThemeIsLight ? "Gunakan tema terang" : "Gunakan tema gelap");
    button.setAttribute("aria-pressed", String(theme === "light"));

    const labelElement = button.querySelector("[data-theme-label]");
    if (labelElement) {
      labelElement.textContent = label;
    }
  }

  function applyTheme(theme) {
    const safeTheme = VALID_THEMES.includes(theme) ? theme : "dark";
    document.documentElement.dataset.theme = safeTheme;
    updateThemeButton(safeTheme);
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Tema tetap diterapkan walaupun penyimpanan browser dibatasi.
    }
  }

  function initThemeToggle() {
    const button = document.querySelector("[data-theme-toggle]");
    const initialTheme = getPreferredTheme();

    applyTheme(initialTheme);

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.theme || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
      storeTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle, { once: true });
  } else {
    initThemeToggle();
  }
})();

