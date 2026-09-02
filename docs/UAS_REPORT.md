# Laporan UAS — Raden Dimas Digital Portfolio

## Identitas

- Nama: Raden Dimas Taufik Rahmat
- NIM: 250401010460
- Program Studi: S1 Informatika
- Universitas: Universitas Siber Asia
- Mata Kuliah: Pemrograman Web I
- Project: Raden Dimas Digital Portfolio

## Informasi produksi

- Production URL: https://radenalta.github.io/raden-dimas-digital-portfolio/
- Repository URL: https://github.com/RadenAlta/raden-dimas-digital-portfolio
- Hosting: GitHub Pages
- Branch: `main`
- Source folder: root
- Build step: tidak ada

Website merupakan static multi-page website berbahasa Indonesia yang dibuat dengan semantic HTML5, CSS3, dan vanilla JavaScript. Website tidak memakai framework, dependency, backend, database, analytics, atau build tool.

## Tujuan dan cakupan

Website berfungsi sebagai portofolio personal sekaligus penerapan materi Pemrograman Web I. Sebelas halaman menyajikan profil, pendidikan, proses belajar, proyek, sembilan credential, galeri, fallback multimedia, kontak publik, privasi, halaman bantuan email, dan custom 404.

Interaksi dibangun dengan progressive enhancement: navigasi mobile, tema dark/light, filter Projects, Credentials, dan Gallery, Gallery lightbox, motion yang menghormati reduced motion, serta form Contact. Form hanya memvalidasi input di browser dan menyiapkan draft `mailto`; website tidak menyimpan atau mengirim data ke backend.

## Multimedia dan privasi

Home memakai binary background video lokal yang telah dikonfirmasi untuk penggunaan publik, tanpa audio dan sebagai elemen dekoratif. Halaman multimedia khusus tidak lagi menjadi bagian portfolio setelah UAS selesai. Sertifikat dan gambar yang dipublikasikan memakai aset lokal; source PDF, credential JSON, hash, token, dan secret tidak dipublikasikan.

## SEO dan deployment

Sepuluh halaman publik memiliki canonical serta `og:url` absolut yang sesuai. `404.html` tidak dijadikan canonical. Sitemap mencantumkan sembilan halaman SEO; robots mengizinkan crawling dan menunjuk ke sitemap produksi. GitHub Pages menyajikan source dari root branch `main` tanpa build step dan telah mengenali `404.html` sebagai custom 404.

## Pengujian dan bukti

Audit source memeriksa jumlah halaman, metadata, heading, ID, path internal, syntax JavaScript, struktur CSS, manifest, sitemap, robots, privasi, dan file sensitif. Konfigurasi/API GitHub Pages telah dikonfirmasi, tetapi uji browser saat finalisasi membuka halaman “Site not found”; keterjangkauan endpoint harus diperiksa kembali setelah deployment. Dark/light, responsive layout, keyboard, typing, pemutaran video hero dekoratif, filter, lightbox, Contact mailto, dan visual custom 404 tetap **PENDING MANUAL TEST**.

Daftar 23 bukti screenshot produksi tersedia di `SCREENSHOT_PLAN.md`. Screenshot tidak dibuat dalam finalisasi source ini dan harus diambil dari production secara manual tanpa rekayasa.
