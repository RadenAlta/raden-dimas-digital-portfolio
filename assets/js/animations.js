/** Motion progresif: konten tetap terlihat tanpa JavaScript. */
(() => {
  "use strict";
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let typingController = null;
  const prefersReducedMotion = () => motionQuery.matches;
  const getRevealElements = () => [...document.querySelectorAll("[data-reveal]")];
  function revealAllElements() { document.documentElement.classList.remove("motion-ready"); getRevealElements().forEach((element) => element.classList.add("is-revealed")); }
  function applyRevealHooks() {
    const selector = ".home-hero__content > *,.home-hero__visual,.section-heading,.about-overview,.journey-item,.focus-card,.project-preview-card,.project-card,.credential-card,.gallery-item,.media-card,.contact-method-card,.privacy-section,.success-step,.home-cta,.projects-cta,.credentials-cta,.gallery-cta,.media-cta,.contact-cta";
    document.querySelectorAll(selector).forEach((element, index) => { element.dataset.reveal ||= "fade-up"; if (element.matches(".focus-card,.project-card,.credential-card,.gallery-item,.contact-method-card,.success-step")) element.classList.add(`reveal-delay-${(index % 4) + 1}`); });
  }
  function initScrollReveal() {
    applyRevealHooks(); const elements = getRevealElements();
    if (!elements.length || prefersReducedMotion() || !("IntersectionObserver" in window)) { revealAllElements(); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); } }), { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    document.documentElement.classList.add("motion-ready"); elements.forEach((element) => observer.observe(element));
  }
  function renderStaticTypingText(output, cursor) { output.textContent = "Web Development · Mobile Development · Data Science · Artificial Intelligence"; cursor.hidden = true; }
  function initTypingText() {
    const output = document.querySelector("[data-typing-text]"); const cursor = document.querySelector("[data-typing-cursor]");
    if (!output || !cursor) return null; const words = (output.dataset.typingWords || "").split("|").filter(Boolean);
    if (words.length !== 4 || prefersReducedMotion()) { renderStaticTypingText(output, cursor); return null; }
    let wordIndex = 0, characterIndex = words[0].length, cycle = 0, deleting = false, timer = null, stopped = false;
    output.textContent = words[0]; cursor.hidden = false;
    const scheduleTypingStep = (delay) => { window.clearTimeout(timer); if (!stopped && !document.hidden) timer = window.setTimeout(step, delay); };
    function step() { const word = words[wordIndex]; if (!deleting && characterIndex < word.length) { output.textContent = word.slice(0, ++characterIndex); scheduleTypingStep(55); return; } if (!deleting) { if (cycle === 1 && wordIndex === words.length - 1) { stopped = true; cursor.hidden = true; return; } deleting = true; scheduleTypingStep(1000); return; } if (characterIndex > 0) { output.textContent = word.slice(0, --characterIndex); scheduleTypingStep(32); return; } deleting = false; wordIndex = (wordIndex + 1) % words.length; if (wordIndex === 0) cycle += 1; scheduleTypingStep(160); }
    const pauseTyping = () => { window.clearTimeout(timer); timer = null; };
    const resumeTyping = () => { if (!stopped && !prefersReducedMotion()) scheduleTypingStep(120); };
    const stopTyping = () => { stopped = true; pauseTyping(); renderStaticTypingText(output, cursor); };
    document.addEventListener("visibilitychange", () => document.hidden ? pauseTyping() : resumeTyping()); scheduleTypingStep(1000);
    return { pauseTyping, resumeTyping, stopTyping };
  }
  function handleMotionPreferenceChange() { if (prefersReducedMotion()) { revealAllElements(); typingController?.stopTyping(); } }
  function initMotionSystem() { try { initScrollReveal(); typingController = initTypingText(); motionQuery.addEventListener?.("change", handleMotionPreferenceChange); } catch { revealAllElements(); } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initMotionSystem, { once: true }); else initMotionSystem();
})();
