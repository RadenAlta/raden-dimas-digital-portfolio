(() => {
  "use strict";
  const buttons = [...document.querySelectorAll("[data-gallery-filter]")];
  const items = [...document.querySelectorAll("[data-gallery-category]")];
  const count = document.querySelector("#gallery-result-count");
  const empty = document.querySelector("[data-gallery-empty]");
  const dialog = document.querySelector("[data-gallery-dialog]");
  if (!buttons.length || !items.length || !count || !empty) return;
  const filter = (token) => { let total = 0; items.forEach((item) => { const show = token === "all" || item.dataset.galleryCategory === token; item.hidden = !show; if (show) total += 1; }); count.textContent = total ? `Menampilkan ${total} gambar` : "Tidak ada gambar yang sesuai"; empty.hidden = total !== 0; };
  buttons.forEach((button) => button.addEventListener("click", () => { buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button))); filter(button.dataset.galleryFilter); }));
  document.querySelector("[data-gallery-reset]")?.addEventListener("click", () => { buttons[0].click(); });
  if (dialog) {
    const image = dialog.querySelector("img"); const title = dialog.querySelector("[data-dialog-title]"); const caption = dialog.querySelector("[data-dialog-caption]"); let trigger;
    const close = () => { dialog.close(); document.body.classList.remove("dialog-open"); trigger?.focus(); };
    document.querySelectorAll("[data-gallery-open]").forEach((button) => button.addEventListener("click", () => { trigger = button; image.src = button.dataset.image; image.alt = button.dataset.alt; title.textContent = button.dataset.title; caption.textContent = button.dataset.caption; dialog.showModal(); document.body.classList.add("dialog-open"); }));
    dialog.querySelector("[data-dialog-close]")?.addEventListener("click", close);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) close(); });
    dialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); });
  }
  filter("all");
})();
