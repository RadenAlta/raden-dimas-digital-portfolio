# Deployment Guide

## Status deployment

Status: **DEPLOYED**

- Production URL: https://radenalta.github.io/raden-dimas-digital-portfolio/
- Repository: https://github.com/RadenAlta/raden-dimas-digital-portfolio
- Hosting: GitHub Pages
- Branch: `main`
- Source folder: root
- Build step: tidak ada

Catatan verifikasi: konfigurasi/API deployment telah dikonfirmasi, tetapi uji browser saat finalisasi ini membuka halaman GitHub Pages “Site not found”. Periksa kembali Pages Settings dan deployment terbaru sebelum menyatakan endpoint production lolos regression test.

Proyek adalah website statis multi-page dengan `index.html` sebagai entry point dan `404.html` yang dikenali GitHub Pages sebagai custom 404. Seluruh path aset bersifat relatif; tidak ada dependency install, backend, database, atau environment variable.

## Prasyarat dan struktur

- Git dan browser modern.
- Server lokal seperti Live Server atau `python -m http.server 5500`.
- Sembilan HTML aktif berada di root; CSS, JavaScript, gambar, dan video dekoratif berada di `assets/`; dokumentasi berada di `docs/`.
- Manifest hanya metadata aplikasi, bukan PWA offline karena tidak ada service worker.

## Uji sebelum publikasi

1. Pastikan working tree sesuai dan jalankan `git diff --check`.
2. Jalankan server lokal dan buka seluruh 11 HTML serta semua aset yang direferensikan.
3. Uji viewport 390×844, 768×1024, dan 1440×900; dark/light; keyboard; reduced motion; form; filter; lightbox; serta Console.
4. Periksa Contact mailto dan tautan eksternal secara manual.
5. Ambil bukti sesuai `SCREENSHOT_PLAN.md`.

## Alur maintenance

1. Edit project lokal.
2. Test lokal.
3. Commit perubahan yang sudah direview.
4. Push ke branch `main`.
5. GitHub Pages menjalankan deployment.
6. Periksa GitHub Actions sampai deployment berhasil.
7. Periksa production URL.
8. Lakukan regression test.

## Pemeriksaan setelah deployment

- Buka setiap URL secara langsung dan refresh halaman selain Home.
- Pastikan CSS, JavaScript, favicon, manifest, gambar, `robots.txt`, dan sitemap memberi respons yang benar.
- Uji URL tidak dikenal; custom 404 production bergantung pada host.
- Uji Contact mailto, semua external link, mobile navigation, tema, filter, lightbox, dan fallback media.
- Jalankan audit browser/Lighthouse bila tersedia; catat hasil nyata, bukan perkiraan.

## Rollback dan checklist Git

Sebelum push: review diff, pastikan tidak ada file privat, credential JSON, PDF sumber, `.env`, token, atau screenshot debugging; buat commit yang jelas setelah pengguna menyetujui. Jika deployment bermasalah, kembalikan melalui commit Git yang diketahui baik atau revert commit terkait—jangan memakai reset destruktif pada perubahan yang belum diamankan.

Canonical dan `og:url` tersedia pada sepuluh halaman publik; 404 tidak memiliki canonical. Sitemap memuat sembilan halaman SEO dan robots menunjuk ke sitemap produksi. Rendering visual custom 404 dan seluruh interaksi production tetap harus dibuktikan melalui pengujian browser manual.
