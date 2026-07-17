# Deployment Guide

## Kondisi proyek

Proyek adalah website statis dengan `index.html` sebagai entry point, `404.html` sebagai halaman bantuan, path aset relatif, tanpa build step, dependency install, backend, database, atau environment variable. Pada audit 17 Juli 2026, repository Git tersedia tetapi `git remote -v` tidak menghasilkan remote. Production URL berstatus `TODO_DEPLOYMENT_URL`.

## Prasyarat dan struktur

- Git dan browser modern.
- Server lokal seperti Live Server atau `python -m http.server 5500`.
- Sebelas HTML berada di root; CSS, JavaScript, gambar, audio, dan video berada di `assets/`; dokumentasi berada di `docs/`.
- Manifest hanya metadata aplikasi, bukan PWA offline karena tidak ada service worker.

## Uji sebelum publikasi

1. Pastikan working tree sesuai dan jalankan `git diff --check`.
2. Jalankan server lokal dan buka seluruh 11 HTML serta semua aset yang direferensikan.
3. Uji viewport 390×844, 768×1024, dan 1440×900; dark/light; keyboard; reduced motion; form; filter; lightbox; serta Console.
4. Periksa Contact mailto dan tautan eksternal secara manual.
5. Ambil bukti sesuai `SCREENSHOT_PLAN.md`.

## Opsi hosting

GitHub Pages dapat menyajikan file root tanpa build. Pengguna harus lebih dahulu membuat/menentukan repository, menambahkan remote yang benar, push sendiri, lalu mengaktifkan Pages dari branch yang dipilih. Hosting statis lain seperti Netlify, Vercel static hosting, atau web server biasa cukup diarahkan ke root proyek tanpa build command. Tidak ada konfigurasi vendor yang diperlukan.

## Menentukan URL produksi

URL produksi hanya boleh dicatat setelah deployment berhasil dan halaman dapat dibuka. Setelah dikonfirmasi:

1. Tambahkan canonical absolut yang tepat pada setiap halaman.
2. Tambahkan `og:url` sesuai path halaman.
3. Isi `sitemap.xml` dengan URL absolut untuk Home, About, Projects, Gallery, Credentials, Video, Audio, Contact, dan Privacy; jangan masukkan Success atau 404.
4. Tambahkan baris `Sitemap: https://domain-valid/sitemap.xml` ke `robots.txt`.
5. Ganti `TODO_DEPLOYMENT_URL` di dokumentasi dan laporan.

## Pemeriksaan setelah deployment

- Buka setiap URL secara langsung dan refresh halaman selain Home.
- Pastikan CSS, JavaScript, favicon, manifest, gambar, `robots.txt`, dan sitemap memberi respons yang benar.
- Uji URL tidak dikenal; custom 404 production bergantung pada host.
- Uji Contact mailto, semua external link, mobile navigation, tema, filter, lightbox, dan fallback media.
- Jalankan audit browser/Lighthouse bila tersedia; catat hasil nyata, bukan perkiraan.

## Rollback dan checklist Git

Sebelum push: review diff, pastikan tidak ada file privat, credential JSON, PDF sumber, `.env`, token, atau screenshot debugging; buat commit yang jelas setelah pengguna menyetujui. Jika deployment bermasalah, kembalikan melalui commit Git yang diketahui baik atau revert commit terkait—jangan memakai reset destruktif pada perubahan yang belum diamankan.

TODO: remote repository, production URL, canonical, `og:url`, sitemap final, robots sitemap directive, deployment, dan verifikasi custom 404.
