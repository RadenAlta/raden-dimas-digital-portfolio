# Raden Dimas Digital Portfolio

Website portofolio personal dan proyek UAS Pemrograman Web I milik Raden Dimas Taufik Rahmat (NIM 250401010460, S1 Informatika, Universitas Siber Asia). Website berbahasa Indonesia ini berupa multi-page static site tanpa framework, backend, database, dependency, package manager, atau build step.

## Teknologi dan fitur

- Semantic HTML5, modern CSS3, dan vanilla JavaScript.
- Icon-only dark/light theme toggle, navigasi responsif, skip link, focus-visible, reduced motion, dan progressive enhancement.
- Search/filter Projects, filter Credentials dan Gallery, Gallery lightbox, typing terbatas, form Contact mailto, serta halaman Privacy, Success, dan custom 404.
- Aset sertifikat lokal; tanpa CDN, analytics, tracking, atau hotlink gambar.
- Video angka biner lokal menjadi background dekoratif Home Hero dengan poster, reduced-motion fallback, pemeriksaan Save Data, dan pause saat tab tersembunyi.
- Foto profil formal lokal digunakan pada Home dan About.
- Project nyata Kelotra, Analisis Bisnis Supermarket Indonesia, dan School Administration Knowledge Assistant tersedia pada Projects; tiga screenshot Langflow aman tersedia di Gallery.

## Halaman

`index.html`, `about.html`, `projects.html`, `gallery.html`, `credentials.html`, `video.html`, `audio.html`, `contact.html`, `success.html`, `privacy.html`, dan `404.html`.

## Struktur

HTML dan metadata berada di root. `assets/css/` menyimpan stylesheet, `assets/js/` menyimpan script, sedangkan `assets/images/`, `assets/audio/`, dan `assets/videos/` menyimpan media lokal. `docs/` berisi brief, keputusan halaman, QA, deployment guide, screenshot plan, dan laporan UAS.

## Menjalankan

Gunakan Live Server dari root proyek, atau jalankan `python -m http.server 5500` lalu buka `http://localhost:5500/`. Tidak ada perintah build atau instalasi dependency.

## Batasan aktual

Form Contact tidak memiliki backend: data diproses lokal dan pengguna memilih membuka aplikasi email. Halaman Video dan Audio memakai media lokal melalui player HTML5 native dengan autoplay dinonaktifkan dan `preload="metadata"`. CV publik tersedia sebagai PDF lokal; social preview belum tersedia.

## Privasi

Website tidak memakai analytics, database, cookie sendiri, atau penyimpanan data form. `localStorage` hanya digunakan untuk preferensi tema dengan key `raden-portfolio-theme`. Tautan eksternal berpindah ke layanan pihak ketiga dan dijelaskan pada halaman Privacy.

## Deployment

- **Live Website:** https://radenalta.github.io/raden-dimas-digital-portfolio/
- **Repository:** https://github.com/RadenAlta/raden-dimas-digital-portfolio
- **Hosting:** GitHub Pages
- **Branch:** `main`
- **Source Folder:** root
- **Deployment Status:** Active

Website dipublikasikan langsung dari root branch `main` tanpa dependency atau build step. Canonical, `og:url`, sitemap, dan robots menggunakan URL produksi final.

Video Hero berstatus `LICENSE_CONFIRMED_FOR_PUBLIC_USE`. Pemilik project mengonfirmasi bahwa video angka biner diizinkan untuk digunakan secara gratis pada website publik. Video digunakan sebagai background dekoratif Home Hero, tidak memiliki audio, dan tidak memuat data pribadi. Atribusi tidak dicantumkan karena tidak diwajibkan berdasarkan konfirmasi pemilik project. Bukti atau URL sumber dapat ditambahkan kemudian bila tersedia.

## Dokumentasi

- [Final QA](docs/FINAL_QA.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Screenshot Plan](docs/SCREENSHOT_PLAN.md)
- [Laporan UAS](docs/UAS_REPORT.md)
- [Motion System](docs/MOTION_SYSTEM.md)
- [Content Checklist](docs/CONTENT_CHECKLIST.md)

## Lisensi

Belum ditentukan. Konten personal dan gambar sertifikat tetap milik pemiliknya; tidak ada lisensi open-source yang diberikan melalui repository ini.
