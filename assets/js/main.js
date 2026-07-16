/**
 * Interaksi global: navigasi mobile, header, tahun, dan kembali ke atas.
 */
(() => {
  "use strict";

  const DESKTOP_BREAKPOINT = 1024;
  const SCROLL_THRESHOLD = 480;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initMobileNavigation() {
    const menuButton = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("[data-site-nav]");
    const overlay = document.querySelector("[data-nav-overlay]");

    if (!menuButton || !navigation || !overlay) {
      return;
    }

    document.documentElement.classList.add("js-enabled");

    function closeMobileNavigation(options = {}) {
      const { returnFocus = false } = options;

      navigation.classList.remove("is-open");
      menuButton.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Buka menu utama");
      overlay.hidden = true;
      document.body.classList.remove("menu-open");

      if (returnFocus) {
        menuButton.focus();
      }
    }

    function openMobileNavigation() {
      navigation.classList.add("is-open");
      menuButton.classList.add("is-open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Tutup menu utama");
      overlay.hidden = false;
      document.body.classList.add("menu-open");

      const firstLink = navigation.querySelector("a");
      firstLink?.focus();
    }

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMobileNavigation();
      } else {
        openMobileNavigation();
      }
    });

    overlay.addEventListener("click", () => closeMobileNavigation());

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeMobileNavigation();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMobileNavigation({ returnFocus: true });
      }
    });

    document.addEventListener("click", (event) => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      const clickedInsideMenu = navigation.contains(event.target);
      const clickedMenuButton = menuButton.contains(event.target);

      if (isOpen && !clickedInsideMenu && !clickedMenuButton) {
        closeMobileNavigation();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        closeMobileNavigation();
      }
    });
  }

  function initHeaderScrollState() {
    const header = document.querySelector("[data-site-header]");

    if (!header) {
      return;
    }

    let updatePending = false;

    function updateHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
      updatePending = false;
    }

    window.addEventListener("scroll", () => {
      if (!updatePending) {
        window.requestAnimationFrame(updateHeader);
        updatePending = true;
      }
    }, { passive: true });

    updateHeader();
  }

  function initCurrentYear() {
    const currentYear = String(new Date().getFullYear());

    document.querySelectorAll("[data-current-year]").forEach((yearElement) => {
      yearElement.textContent = currentYear;
      yearElement.setAttribute("datetime", currentYear);
    });
  }

  function initBackToTop() {
    const backToTop = document.querySelector("[data-back-to-top]");
    const footerLinks = document.querySelectorAll("[data-footer-to-top]");

    if (!backToTop) {
      return;
    }

    let updatePending = false;

    function updateVisibility() {
      const pageIsLong = document.documentElement.scrollHeight > window.innerHeight + SCROLL_THRESHOLD;
      backToTop.classList.toggle("is-visible", pageIsLong && window.scrollY > SCROLL_THRESHOLD);
      updatePending = false;
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    }

    window.addEventListener("scroll", () => {
      if (!updatePending) {
        window.requestAnimationFrame(updateVisibility);
        updatePending = true;
      }
    }, { passive: true });

    window.addEventListener("resize", updateVisibility);
    backToTop.addEventListener("click", scrollToTop);

    footerLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToTop();
      });
    });

    updateVisibility();
  }

  function initGlobalComponents() {
    initMobileNavigation();
    initHeaderScrollState();
    initCurrentYear();
    initBackToTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGlobalComponents, { once: true });
  } else {
    initGlobalComponents();
  }
})();

