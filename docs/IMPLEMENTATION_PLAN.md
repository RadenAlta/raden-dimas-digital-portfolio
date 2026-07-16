# Implementation Plan

Prinsip dependency: milestone dikerjakan berurutan kecuali dinyatakan lain. Setiap milestone berhenti untuk pemeriksaan sebelum milestone berikutnya.

## 1. Project planning

- **Tujuan:** menetapkan scope, arsitektur informasi, kebutuhan konten/aset, animasi, aksesibilitas, pengujian, deployment, dan risiko.
- **File:** sepuluh dokumen di `docs/`.
- **Hasil:** baseline perencanaan lengkap tanpa source code website.
- **Pemeriksaan:** kelengkapan dokumen, konsistensi identitas, semua data tidak pasti menjadi `TODO`, status Git.
- **Dependency:** tidak ada.

## 2. Project scaffold

- **Tujuan:** membuat sebelas HTML dan struktur folder minimum.
- **File:** seluruh HTML root; folder `assets/` sesuai kebutuhan; file CSS/JS dasar.
- **Hasil:** semua halaman terbuka dan saling terhubung dengan konten placeholder yang jujur.
- **Pemeriksaan:** path relatif, lang, landmark, heading, server lokal, tidak ada broken link.
- **Dependency:** milestone 1.

## 3. Design system

- **Tujuan:** menetapkan token warna, tipografi, spacing, radius, shadow, container, button, card, dan tema.
- **File:** CSS global dan dokumentasi visual bila diperlukan.
- **Hasil:** sistem dark-first konsisten dengan contrast memadai.
- **Pemeriksaan:** contrast, focus-visible, ukuran teks, light/dark theme, reduced motion dasar.
- **Dependency:** milestone 2.

## 4. Global navigation and footer

- **Tujuan:** membangun skip link, header, desktop/mobile navigation, footer, theme control, dan back-to-top.
- **File:** seluruh HTML, CSS komponen, JS navigasi/tema.
- **Hasil:** navigasi konsisten, accessible, dan responsif.
- **Pemeriksaan:** keyboard, Escape, fokus, active state, 360–1440px, path setiap halaman.
- **Dependency:** milestone 2–3.

## 5. Home page

- **Tujuan:** membuat hero, pengantar, bidang minat, karya pilihan terverifikasi, dan CTA.
- **File:** `index.html`, CSS halaman, JS khusus bila diperlukan.
- **Hasil:** landing page profesional tanpa klaim palsu.
- **Pemeriksaan:** heading, CTA, responsive hero, placeholder aset, performa awal.
- **Dependency:** milestone 3–4 dan konten minimum.

## 6. About page

- **Tujuan:** menyajikan bio, pendidikan UNSIA, skill kualitatif, minat, dan timeline terverifikasi.
- **File:** `about.html`, CSS/JS terkait.
- **Hasil:** profil informatif; formal education hanya UNSIA S1 Informatika.
- **Pemeriksaan:** akurasi data, label skill tanpa persentase, heading, timeline keyboard/reduced motion.
- **Dependency:** milestone 3–4 dan konfirmasi bio/skill.

## 7. Projects page

- **Tujuan:** menampilkan proyek nyata dengan filter yang usable.
- **File:** `projects.html`, CSS kartu/filter, JS filter.
- **Hasil:** katalog proyek dengan empty state bila data belum tersedia.
- **Pemeriksaan:** data/tautan, filter mouse-keyboard, state tanpa JS, gambar dan alt text.
- **Dependency:** milestone 3–4 dan data proyek terverifikasi.

## 8. Gallery and credentials

- **Tujuan:** membangun gallery filter/lightbox dan daftar kredensial.
- **File:** `gallery.html`, `credentials.html`, CSS/JS gallery/lightbox.
- **Hasil:** visual dan sertifikat nyata dapat ditelusuri secara accessible.
- **Pemeriksaan:** focus trap/return, Escape, caption, alt, ID kredensial, aset hilang, mobile.
- **Dependency:** milestone 3–4 dan aset/data terverifikasi.

## 9. Video and audio

- **Tujuan:** mengintegrasikan media lokal tanpa autoplay beserta deskripsi/transcript.
- **File:** `video.html`, `audio.html`, media lokal, CSS/JS state equalizer.
- **Hasil:** player native accessible dan fallback tersedia.
- **Pemeriksaan:** controls, preload, poster/cover, transcript, keyboard, reduced motion, ukuran file.
- **Dependency:** milestone 3–4 dan media terverifikasi.

## 10. Contact and supporting pages

- **Tujuan:** membuat form akademik statis, success, privacy, dan 404.
- **File:** `contact.html`, `success.html`, `privacy.html`, `404.html`, CSS/JS validasi.
- **Hasil:** form berlabel dengan required/email validation, counter, error accessible, aksi ke Success.
- **Pemeriksaan:** valid/invalid states, keyboard, tanpa klaim terkirim/tersimpan, direct URL 404/privacy.
- **Dependency:** milestone 3–4 dan aturan form.

## 11. Professional animations

- **Tujuan:** menambahkan animasi yang disetujui secara bertahap.
- **File:** CSS animasi dan modul JS terkait.
- **Hasil:** intro sesi, typing, grid/network, reveal, counter terverifikasi, hover, timeline, equalizer, transition, dan cursor opsional.
- **Pemeriksaan:** session-only, no layout shift, no interaction blocking, mobile, reduced motion, CPU/console.
- **Dependency:** milestone 5–10; counter menunggu angka terverifikasi.

## 12. Responsive design

- **Tujuan:** menyempurnakan layout mobile, tablet, dan desktop.
- **File:** CSS global/halaman yang relevan.
- **Hasil:** layout stabil tanpa horizontal scrolling.
- **Pemeriksaan:** 360, 390, 768, 1024, 1440px; portrait/landscape; zoom 200%.
- **Dependency:** milestone 3–11.

## 13. Accessibility

- **Tujuan:** audit dan memperbaiki semantik, keyboard, fokus, media, contrast, dan motion.
- **File:** seluruh HTML/CSS/JS yang terdampak.
- **Hasil:** pengalaman operasional tanpa mouse dan dengan reduced motion.
- **Pemeriksaan:** heading/landmark, tab order, skip link, focus return, labels/errors, alt/transcript, automated scan dan manual test.
- **Dependency:** milestone 4–12.

## 14. SEO and performance

- **Tujuan:** metadata unik, sharing metadata, favicon, struktur dokumen, dan optimasi aset.
- **File:** seluruh HTML, aset icon/social preview, konfigurasi hosting bila perlu.
- **Hasil:** metadata tepat dan load ringan pada hosting statis.
- **Pemeriksaan:** title/description/canonical strategy, image dimensions, lazy loading, Lighthouse, cache.
- **Dependency:** milestone 5–13 dan aset branding.

## 15. Content and asset integration

- **Tujuan:** mengganti seluruh placeholder dengan data/aset yang telah disetujui.
- **File:** halaman konten dan folder aset terkait.
- **Hasil:** tidak ada klaim atau aset palsu; TODO tersisa terdokumentasi.
- **Pemeriksaan:** provenance, ejaan, path, file size, alt/caption/transcript, pencarian `TODO`.
- **Dependency:** konfirmasi pengguna dan milestone 5–14.

## 16. Testing

- **Tujuan:** menjalankan matriks pengujian fungsional, visual, aksesibilitas, kompatibilitas, dan deployment preview.
- **File:** catatan/bukti di `docs/testing/` dan `docs/screenshots/` bila diminta.
- **Hasil:** temuan tercatat, diperbaiki, atau diterima secara eksplisit.
- **Pemeriksaan:** seluruh skenario dalam `TESTING_PLAN.md` dan regression test.
- **Dependency:** milestone 2–15.

## 17. Documentation

- **Tujuan:** memperbarui README, petunjuk penggunaan, struktur, fitur, keputusan, dan TODO final.
- **File:** `README.md` dan dokumen perencanaan relevan.
- **Hasil:** proyek mudah dijalankan dan dipresentasikan.
- **Pemeriksaan:** instruksi benar-benar dijalankan pada clone bersih/lingkungan wajar; tidak ada dokumentasi usang.
- **Dependency:** milestone 16.

## 18. Deployment

- **Tujuan:** memublikasikan versi terverifikasi ke satu atau dua static host.
- **File:** konfigurasi hosting minimal bila diperlukan; tanpa build pipeline yang tidak perlu.
- **Hasil:** URL production yang dapat diakses dengan path dan 404 yang benar.
- **Pemeriksaan:** production checklist, smoke test semua halaman, console/network, mobile, form, media, metadata.
- **Dependency:** milestone 16–17 dan pilihan platform pengguna.
