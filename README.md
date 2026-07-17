# Raden Dimas Digital Portfolio

Website portofolio personal dan proyek UAS Pemrograman Web I milik Raden Dimas Taufik Rahmat (NIM 250401010460, S1 Informatika, Universitas Siber Asia). Website berbahasa Indonesia ini berupa multi-page static site tanpa framework, backend, database, dependency, package manager, atau build step.

## Teknologi dan fitur

- Semantic HTML5, modern CSS3, dan vanilla JavaScript.
- Dark/light theme, navigasi responsif, skip link, focus-visible, reduced motion, dan progressive enhancement.
- Search/filter Projects, filter Credentials dan Gallery, Gallery lightbox, typing terbatas, form Contact mailto, serta halaman Privacy, Success, dan custom 404.
- Aset sertifikat lokal; tanpa CDN, analytics, tracking, atau hotlink gambar.

## Halaman

`index.html`, `about.html`, `projects.html`, `gallery.html`, `credentials.html`, `video.html`, `audio.html`, `contact.html`, `success.html`, `privacy.html`, dan `404.html`.

## Struktur

HTML dan metadata berada di root. `assets/css/` menyimpan stylesheet, `assets/js/` menyimpan script, `assets/images/` menyimpan gambar lokal, sedangkan folder audio/video saat ini hanya mempertahankan placeholder. `docs/` berisi brief, keputusan halaman, QA, deployment guide, screenshot plan, dan laporan UAS.

## Menjalankan

Gunakan Live Server dari root proyek, atau jalankan `python -m http.server 5500` lalu buka `http://localhost:5500/`. Tidak ada perintah build atau instalasi dependency.

## Batasan aktual

Form Contact tidak memiliki backend: data diproses lokal dan pengguna memilih membuka aplikasi email. Video dan audio asli belum tersedia, sehingga kedua halaman menampilkan fallback faktual tanpa media palsu atau autoplay. Foto profil, CV publik, dan social preview juga belum tersedia.

## Privasi

Website tidak memakai analytics, database, cookie sendiri, atau penyimpanan data form. `localStorage` hanya digunakan untuk preferensi tema dengan key `raden-portfolio-theme`. Tautan eksternal berpindah ke layanan pihak ketiga dan dijelaskan pada halaman Privacy.

## Deployment

Struktur siap untuk GitHub Pages, Netlify, Vercel static hosting, atau server statis biasa. Belum ada remote Git maupun deployment yang dikonfirmasi. Production URL: `TODO_DEPLOYMENT_URL`. Canonical, `og:url`, sitemap final, dan robots sitemap directive harus ditambahkan setelah URL nyata tersedia.

## Dokumentasi

- [Final QA](docs/FINAL_QA.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Screenshot Plan](docs/SCREENSHOT_PLAN.md)
- [Laporan UAS](docs/UAS_REPORT.md)
- [Motion System](docs/MOTION_SYSTEM.md)
- [Content Checklist](docs/CONTENT_CHECKLIST.md)

## Lisensi

Belum ditentukan. Konten personal dan gambar sertifikat tetap milik pemiliknya; tidak ada lisensi open-source yang diberikan melalui repository ini.
