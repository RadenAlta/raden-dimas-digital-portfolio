# Final QA — Milestone 13

Lingkungan production: **GitHub Pages**
Production URL: https://radenalta.github.io/raden-dimas-digital-portfolio/

Status menggunakan `PASS`, `FAIL`, `PENDING`, atau `NOT APPLICABLE`. Hanya pemeriksaan source yang benar-benar dijalankan ditandai PASS; rendering dan interaksi yang belum diuji browser tetap `PENDING MANUAL TEST`.

| Area | Status | Catatan |
|---|---|---|
| Repository, branch, dan remote | PASS | Repository `RadenAlta/raden-dimas-digital-portfolio`, branch `main`, remote origin sesuai. |
| GitHub Pages deployment | PASS | Konfirmasi pengguna/API: built, public, HTTPS, source `main` root, deployment commit berhasil. |
| Production URL availability | FAIL | Uji browser pada finalisasi ini membuka halaman GitHub Pages “Site not found”; perlu periksa ulang Pages Settings/deployment lalu regression test. |
| 9 HTML | PASS | Jumlah source tepat sembilan halaman aktif. |
| Title, description, H1, dan ID | PASS | Audit otomatis source: unik, satu H1 per halaman, tanpa duplicate ID. |
| Canonical | PASS | Tepat delapan URL absolut; tidak ada canonical pada 404. |
| Open Graph URL | PASS | Tepat delapan `og:url`, sama dengan canonical halaman. |
| Sitemap | PASS | XML valid, sembilan halaman SEO, tanpa Success atau 404. |
| Robots | PASS | Allow `/` dan Sitemap URL production final. |
| Manifest | PASS | JSON valid dan favicon lokal tersedia. |
| Internal paths dan anchor | PASS | Target relatif yang direferensikan tersedia. |
| JavaScript syntax | PASS | Seluruh file JS lulus `node --check`. |
| CSS source | PASS | Braces seimbang; tanpa `transition: all`, undefined custom property, atau `object-fit: fill`. |
| Inline CSS/JavaScript, CDN, dependency | PASS | Tidak ditemukan pada source. |
| Privacy dan penyimpanan | PASS | Website statis; form tidak disimpan; localStorage hanya untuk theme key `raden-portfolio-theme`. |
| Sensitive/public files | PASS | Tidak ditemukan `.env`, API key, token/password, source PDF, atau credential JSON pada project. |
| Hero video dan poster | PASS | Path source lokal tersedia; izin penggunaan publik terdokumentasi. |
| Custom 404 source | PASS | `404.html` tersedia dan dikonfirmasi dikenali GitHub Pages. |
| Actual portfolio production rendering | PENDING | PENDING MANUAL TEST setelah URL tidak lagi menampilkan “Site not found”. |
| Dark/light visual quality | PENDING | PENDING MANUAL TEST. |
| Responsive 390/768/1440 | PENDING | PENDING MANUAL TEST. |
| Keyboard, focus, dan skip link | PENDING | PENDING MANUAL TEST. |
| Typing dan hero video runtime | PENDING | PENDING MANUAL TEST. |
| Filter dan Gallery lightbox | PENDING | PENDING MANUAL TEST. |
| Contact validation/mailto | PENDING | PENDING MANUAL TEST; jangan kirim email saat pengujian. |
| Custom 404 visual production | PENDING | PENDING MANUAL TEST. |
| Screenshot UAS | PENDING | PENDING MANUAL CAPTURE sesuai `SCREENSHOT_PLAN.md`. |

Status production/API tidak menggantikan pengujian visual browser. Tidak ada hasil Lighthouse, screen reader, cross-browser, atau interaksi runtime yang diklaim PASS pada finalisasi source ini.
