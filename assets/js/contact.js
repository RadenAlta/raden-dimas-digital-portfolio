/** Validasi lokal dan penyusunan draft email tanpa penyimpanan data. */
(() => {
  "use strict";
  const RECIPIENT = "radendimas.work@gmail.com";

  function getError(field) {
    const value = field.type === "checkbox" ? field.checked : field.value.trim();
    if (field.id === "contact-consent") return value ? "" : "Centang persetujuan sebelum menyiapkan email.";
    if (field.id === "contact-topic") return value ? "" : "Pilih salah satu topik.";
    if (!value) return {"contact-name":"Masukkan nama Anda.","contact-email":"Masukkan alamat email Anda.","contact-subject":"Masukkan subjek email.","contact-message":"Masukkan pesan."}[field.id] || "Bagian ini wajib diisi.";
    if (field.id === "contact-name" && value.length < 2) return "Masukkan nama minimal 2 karakter.";
    if (field.id === "contact-email" && !field.validity.valid) return "Masukkan alamat email yang valid.";
    if (field.id === "contact-subject" && value.length < 3) return "Subjek minimal 3 karakter.";
    if (field.id === "contact-message" && value.length < 20) return "Pesan minimal 20 karakter.";
    if (value.length > field.maxLength && field.maxLength > 0) return `${field.labels?.[0]?.textContent.trim() || "Input"} tidak boleh melebihi ${field.maxLength} karakter.`;
    return "";
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const fields = [...form.querySelectorAll("input[required], select[required], textarea[required]")];
    const summary = document.querySelector("[data-error-summary]");
    const errorList = summary?.querySelector("[data-error-list]");
    const prepared = document.querySelector("[data-prepared-email]");
    const preparedLink = document.querySelector("[data-prepared-email-link]");
    const counter = document.querySelector("[data-message-counter]");
    const message = form.querySelector("#contact-message");
    const touched = new WeakSet();

    function showFieldError(field) {
      const error = getError(field);
      const output = document.querySelector(`[data-error-for="${field.id}"]`);
      if (output) output.textContent = error;
      field.setAttribute("aria-invalid", String(Boolean(error)));
      return error;
    }
    function clearState() {
      fields.forEach((field) => { field.removeAttribute("aria-invalid"); const output=document.querySelector(`[data-error-for="${field.id}"]`); if(output) output.textContent=""; });
      if (summary) summary.hidden = true;
      if (errorList) errorList.replaceChildren();
      if (prepared) prepared.hidden = true;
      document.querySelectorAll("[data-copy-status]").forEach((item) => { item.textContent = ""; });
    }
    function updateCounter() { if (counter && message) counter.textContent = `${message.value.length} / 2000`; }
    function validateAll() {
      const invalid = fields.filter((field) => Boolean(showFieldError(field)));
      if (errorList) { errorList.replaceChildren(); invalid.forEach((field) => { const item=document.createElement("li"); const link=document.createElement("a"); link.href=`#${field.id}`; link.textContent=document.querySelector(`[data-error-for="${field.id}"]`)?.textContent || "Periksa field"; item.append(link); errorList.append(item); }); }
      if (summary) summary.hidden = invalid.length === 0;
      return invalid;
    }
    function buildMailto() {
      const data = new FormData(form);
      const body = `Halo Raden Dimas,\n\nNama: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\nTopik: ${String(data.get("topic")).trim()}\n\nPesan:\n${String(data.get("message")).trim()}\n\nTerima kasih.`;
      return `mailto:${RECIPIENT}?subject=${encodeURIComponent(String(data.get("subject")).trim())}&body=${encodeURIComponent(body)}`;
    }
    form.addEventListener("submit", (event) => { event.preventDefault(); fields.forEach((field) => touched.add(field)); const invalid=validateAll(); if(invalid.length){summary?.focus(); invalid[0].focus(); return;} if(preparedLink) preparedLink.href=buildMailto(); form.hidden=true; if(prepared){prepared.hidden=false; prepared.focus();} });
    fields.forEach((field) => { field.addEventListener("blur", () => { touched.add(field); showFieldError(field); }); const eventName=field.tagName==="SELECT"||field.type==="checkbox"?"change":"input"; field.addEventListener(eventName,()=>{if(touched.has(field)) showFieldError(field);}); });
    message?.addEventListener("input", updateCounter);
    form.addEventListener("reset", () => { window.setTimeout(() => { clearState(); updateCounter(); form.hidden=false; }, 0); });
    document.querySelector("[data-edit-email]")?.addEventListener("click", () => { if(prepared) prepared.hidden=true; form.hidden=false; form.querySelector("input")?.focus(); });
    document.querySelector("[data-reset-email]")?.addEventListener("click", () => { form.reset(); form.hidden=false; form.querySelector("input")?.focus(); });
    document.querySelector("[data-copy-email]")?.addEventListener("click", async () => { const status=document.querySelector("[data-copy-status]"); try{await navigator.clipboard.writeText(RECIPIENT); if(status) status.textContent="Alamat email berhasil disalin.";}catch{if(status) status.textContent="Alamat email belum dapat disalin. Salin secara manual.";} });
    updateCounter();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",initContactForm,{once:true}); else initContactForm();
})();
