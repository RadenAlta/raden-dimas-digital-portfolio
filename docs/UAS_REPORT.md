# Laporan UAS — Raden Dimas Digital Portfolio

## Halaman Judul dan Identitas

**Judul proyek:** Raden Dimas Digital Portfolio  
**Nama:** Raden Dimas Taufik Rahmat  
**NIM:** 250401010460  
**Program Studi:** S1 Informatika  
**Universitas:** Universitas Siber Asia  
**Mata kuliah:** Pemrograman Web I

## Latar belakang, tujuan, dan pengguna

Website dikembangkan sebagai portofolio personal sekaligus penerapan materi Pemrograman Web I. Tujuannya menyajikan profil, proses belajar, proyek, credential, dokumentasi visual, media fallback, dan kontak publik dalam struktur yang mudah dipahami. Target pengguna meliputi dosen penilai, rekan belajar, calon kolaborator, dan pengunjung yang ingin memahami fokus pembelajaran pemilik.

## Teknologi dan keputusan arsitektur

Proyek memakai semantic HTML5, CSS3, dan vanilla JavaScript sebagai website statis multi-page. Tanpa framework dipilih agar struktur DOM, styling, progressive enhancement, dan logika interaksi dapat dipelajari serta dijelaskan langsung. Tidak ada backend, database, package, analytics, atau build step.

Struktur root berisi 11 HTML, metadata web, dan folder `assets/` serta `docs/`. Arsitektur informasi terdiri dari Home, About, Projects, Gallery, Credentials, Video, Audio, Contact, Success, Privacy, dan 404. Navigasi global menghubungkan halaman utama, sementara breadcrumb dan footer membantu orientasi.

## Penjelasan halaman

- **Home:** ringkasan identitas, fokus belajar, CTA, dan typing progresif.
- **About:** profil, nilai, satu pendidikan formal Universitas Siber Asia, perjalanan belajar, keterampilan, dan arah karier.
- **Projects:** daftar proyek pembelajaran dengan search, kategori, status, dan detail faktual.
- **Gallery:** enam dokumentasi visual dengan filter dan lightbox accessible.
- **Credentials:** sembilan credential terpisah dengan filter, tanggal, status, issuer, dan link verifikasi yang telah dikonfirmasi.
- **Video:** struktur dan informasi fallback; file video asli belum tersedia.
- **Audio:** struktur dan informasi fallback; file audio asli belum tersedia.
- **Contact:** enam metode terverifikasi dan form yang menyiapkan draft mailto secara lokal, bukan mengirim ke server.
- **Privacy:** menjelaskan localStorage tema, ketiadaan backend/analytics/cookie sendiri, external links, credential image, media fallback, dan mailto.
- **Success:** panduan memeriksa aplikasi email; bukan bukti pesan terkirim.
- **404:** error code, penjelasan, recovery actions, helpful links, dan notice Contact.

## Desain, responsivitas, dan aksesibilitas

Design system dark-first memakai deep navy, cyan, purple, token warna/spacing/typography, card konsisten, dan light theme. Layout mobile-first menggunakan grid responsif, media intrinsic sizing, local overflow untuk tabel/filter, dan sticky-header offset. Aksesibilitas mencakup `lang=id`, landmark native, satu H1, skip link, focus-visible, accessible names, form labels/error association, dialog keyboard, alt/figcaption, reduced motion, dan fallback tanpa JavaScript.

## Motion dan interaksi

Motion memakai satu IntersectionObserver untuk reveal sekali, stagger ringan, typing maksimal dua siklus yang berhenti pada Artificial Intelligence, microinteraction pointer presisi, serta reduced-motion/static fallback. Search/filter tersedia pada Projects, Credentials, dan Gallery. Lightbox Gallery mengelola Escape dan return focus. Theme disimpan hanya dengan key `raden-portfolio-theme`.

## Form, multimedia, dan privasi

Form Contact memvalidasi input di browser dan menyusun mailto encoded; website tidak menyimpan atau mengirim data. Video/audio belum tersedia sehingga halaman secara jujur menampilkan fallback, tanpa autoplay atau media palsu. Data publik dibatasi pada informasi yang telah dikonfirmasi; source PDF privat, credential JSON, hash, token, dan secret tidak dipublikasikan.

## SEO, pengujian, dan kendala

Setiap halaman memiliki title/description unik serta Open Graph dasar dan Twitter summary tanpa gambar palsu. Canonical, `og:url`, sitemap final, dan robots sitemap directive menunggu URL produksi. Audit source, syntax, link internal, metadata, manifest, aset, privasi, dan HTTP lokal dilakukan. Visual, keyboard runtime, screen reader, cross-browser, Lighthouse, dan interaksi penuh tetap PENDING karena browser otomatis tidak dapat mengakses localhost.

Kendala utama adalah belum tersedianya media asli, social preview, remote Git, dan production URL. Solusinya memakai fallback yang transparan, path relatif, template sitemap aman, dan dokumentasi langkah manual.

## Deployment

Website siap secara struktur untuk static hosting tanpa build. **Production URL: TODO_DEPLOYMENT_URL.** Repository URL belum dicantumkan karena `git remote -v` kosong pada audit. Langkah deployment dan rollback dijelaskan di `DEPLOYMENT_GUIDE.md`.

## Daftar bukti dan kesimpulan

Daftar 23 screenshot yang diperlukan tersedia di `SCREENSHOT_PLAN.md`; seluruhnya PENDING. Proyek menunjukkan penerapan website multi-page statis, desain responsif, aksesibilitas, interaksi vanilla JavaScript, privasi, serta dokumentasi yang terstruktur tanpa melebihkan kemampuan implementasi.

Pengembangan berikutnya: memasukkan media asli yang aman, social preview terverifikasi, pengujian manual/cross-browser, optimasi berdasarkan hasil nyata, menentukan repository/production URL, memperbarui metadata URL, lalu deployment terkontrol.
