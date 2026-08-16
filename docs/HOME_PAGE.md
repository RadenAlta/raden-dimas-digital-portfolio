# Home Page — Milestone 5

## Tujuan

Home memperkenalkan Raden Dimas Taufik Rahmat sebagai mahasiswa aktif S1 Informatika Universitas Siber Asia, memberi gambaran arah pembelajaran, dan menyediakan jalur ke About, Projects, serta Contact.

## Struktur section

1. Hero dan visual profil.
2. Profile highlights.
3. About preview.
4. Areas of focus.
5. Featured projects.
6. Learning journey preview.
7. Technology and tools preview.
8. Professional CTA.
9. Footer global.

## Konten terverifikasi

Nama, program studi, Universitas Siber Asia, status mahasiswa aktif sejak 2025, domisili Bogor, dan fokus web, mobile, data, serta AI berasal dari `CONTENT_CHECKLIST.md` dan instruksi Milestone 5. Pendidikan formal hanya menampilkan S1 Informatika di Universitas Siber Asia. Bangkit Academy ditempatkan sebagai program pembelajaran, bukan pendidikan formal.

## Hero structure

Hero memakai dua kolom pada desktop dan satu kolom pada mobile. Kolom utama berisi satu-satunya `h1`, deskripsi, tagline, status belajar, CTA, serta description list. Kolom visual berisi placeholder profil dan terminal card.

## Foto profil

Foto formal asli pengguna tersedia di `assets/images/profile/raden-dimas-profile.jpg` dan digunakan di dalam frame Home. Gambar memakai `object-fit: cover` serta focal point vertikal agar wajah tetap terlihat tanpa stretch.

## Terminal card

Terminal adalah snapshot teks statis dalam `pre`/`code`, bukan input atau perintah interaktif. Dekorasi titik tidak dibacakan screen reader dan isi faktual tetap dapat dibaca tanpa CSS atau JavaScript.

## Focus areas

Empat kartu mencakup Web Development, Mobile Development, Data & Analytics, dan Artificial Intelligence. Seluruh istilah menggunakan konteks mempelajari atau memperdalam, tanpa klaim ahli dan tanpa persentase.

## Featured projects

Home memprioritaskan Kelotra, Analisis Bisnis Supermarket Indonesia, dan School Administration Knowledge Assistant, lalu Digital Portfolio. Semua detail menuju anchor kartu yang sesuai di `projects.html`; tidak ada live demo palsu.

## Learning journey

Timeline membedakan Bangkit Academy sebagai program pembelajaran tahun 2024, UNSIA sebagai pendidikan formal sejak 2025, dan perluasan pembelajaran pada 2026 tanpa menyebut program yang belum dikonfirmasi.

## Technology preview

Teknologi dikelompokkan menjadi Web, Mobile, Data, dan Tools. Daftar menggunakan tag teks tanpa logo eksternal, level expert, persentase, atau angka statistik.

## CTA

CTA mengundang diskusi dan kolaborasi proyek pembelajaran. Tautan hanya menuju halaman lokal Contact dan Projects, tanpa klaim ketersediaan kerja profesional.

## Responsive behavior

Layout mobile-first. Pada mobile seluruh bagian satu kolom, pada tablet kartu menjadi dua kolom, dan pada desktop hero menjadi dua kolom serta kelompok fokus menjadi empat kolom. Terminal membatasi overflow pada area `pre`, bukan pada halaman.

## Accessibility decisions

- Tepat satu `h1`; heading section memakai `h2` dan judul kartu memakai `h3`.
- Section bernama melalui heading dan `aria-labelledby`.
- SVG serta placeholder visual dekoratif memakai `aria-hidden="true"`.
- Status disampaikan sebagai teks, bukan warna saja.
- Semua CTA adalah link native dengan focus-visible global.
- Konten tetap lengkap tanpa CSS dan JavaScript.
- Tidak ada autoplay atau animasi aktif pada milestone ini.

## Data attribute animasi berikutnya

`data-typing-text` menandai teks yang dapat dikembangkan menjadi typing animation. `data-typing-words` menyimpan urutan Web Development, Mobile Development, Data Science, dan Artificial Intelligence. Fallback “Web Development” tetap tampil; hook belum dijalankan oleh JavaScript.

## Aset yang masih TODO

- Social preview image khusus yang terverifikasi.
- Screenshot proyek asli setelah aset dan izin publikasi tersedia.
- CV asli tetap memakai placeholder global nonaktif.

## Belum diimplementasikan

Typing animation, terminal loading screen, canvas network, scroll reveal, counter, floating card, dan animasi kompleks lain belum dibuat. Halaman About dan Projects belum dikembangkan lebih lanjut pada milestone ini.

## Cara menguji

1. Jalankan server lokal dari root proyek.
2. Buka `index.html` pada 390×844, 768×1024, dan 1440×900.
3. Periksa dark/light theme, menu mobile, keyboard Tab/Escape, focus indicator, terminal, dan tidak adanya overflow horizontal.
4. Matikan JavaScript dan pastikan navigasi serta seluruh teks Home tetap tersedia.
5. Aktifkan reduced motion dan pastikan tidak ada gerakan non-esensial.
6. Periksa Console dan Network untuk error atau aset 404.

## TODO Milestone 6

Ikuti dokumen perencanaan berikutnya tanpa memperluas scope secara otomatis. Verifikasi data dan aset nyata sebelum mengembangkan halaman atau animasi selanjutnya.

## Enhancement — Hero video background

Home Hero memakai video dekoratif lokal `assets/videos/hero-binary-background.mp4` dengan poster `assets/images/backgrounds/hero-binary-background-poster.webp`. Sumber pengembangan berasal dari `C:/Users/raden/Downloads/17076-278405108_medium.mp4`: MP4/H.264, 1280×720 (16:9), 10 detik, 30 fps, 990.834 byte, satu track video, dan tanpa audio.

Video hanya berada di Hero Home. Dark theme memakai opacity `0.78`, filter `brightness(1.25) contrast(1.12)`, dan overlay 78%/54%/68%. Light theme memakai opacity `0.32`, filter `brightness(1.08) contrast(1.05)`, dan overlay 92%/76%/86% agar pola tetap samar sementara teks gelap terbaca. Poster diperbarui dari frame stabil sekitar detik ke-5 karena frame awal terlalu gelap. Tanpa JavaScript, poster tampil sebagai background. JavaScript hanya memutar video ketika MP4 didukung, tab terlihat, reduced motion tidak aktif, dan Save Data tidak aktif. Video dipause saat tab tersembunyi atau reduced motion aktif.

Elemen bersifat dekoratif: `aria-hidden`, `tabindex="-1"`, muted, tanpa controls, tanpa caption/transkrip, dan tidak mengubah reading/focus order. `preload="metadata"` menjaga transfer awal tetap ringan. Sampel frame awal, tengah, dan akhir tidak menunjukkan watermark atau identitas pribadi. **LICENSE_CONFIRMED_FOR_PUBLIC_USE:** pemilik project mengonfirmasi bahwa video angka biner diizinkan untuk digunakan secara gratis pada website publik. Video digunakan sebagai background dekoratif Home Hero, tidak memiliki audio, dan tidak memuat data pribadi. Atribusi tidak dicantumkan karena tidak diwajibkan berdasarkan konfirmasi pemilik project. Bukti atau URL sumber dapat ditambahkan kemudian bila tersedia.
