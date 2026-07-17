# About Page — Milestone 6

## Tujuan halaman

About menyajikan profil Raden Dimas Taufik Rahmat secara faktual dan terstruktur sebagai mahasiswa S1 Informatika yang sedang mengembangkan kemampuan web, mobile, data, dan artificial intelligence.

## Struktur section

1. Page hero dan breadcrumb.
2. Profile overview.
3. Deskripsi diri.
4. Personal values.
5. Formal education.
6. Learning journey.
7. Technical skills dan tabel.
8. Tools and technologies.
9. Soft skills.
10. Languages serta interests.
11. Career direction.
12. CTA dan footer global.

## Konten terverifikasi

Nama, NIM, program studi, Universitas Siber Asia, tahun mulai 2025, status mahasiswa aktif, domisili Bogor, Bahasa Indonesia sebagai bahasa utama, dan fokus web, mobile, data, serta AI berasal dari `CONTENT_CHECKLIST.md`. NIM tidak ditampilkan karena tidak dibutuhkan dalam narasi publik halaman ini.

## Aturan pendidikan formal

Pendidikan formal hanya menampilkan Universitas Siber Asia, S1 Informatika, 2025–sekarang, dan status mahasiswa aktif. Informasi pendidikan berbeda yang terdapat pada CV lama sengaja diabaikan sesuai aturan proyek. Program pelatihan ditempatkan terpisah dan hanya dapat ditampilkan setelah dikonfirmasi.

## Profile overview

Overview memakai placeholder monogram RD yang konsisten dengan Home dan description list untuk identitas. Komentar `TODO_ASSET` mencatat target foto asli `assets/images/profile/raden-dimas-profile.webp`.

## Deskripsi diri

Empat paragraf menjelaskan ketertarikan teknologi, cara belajar melalui tugas dan proyek, minat pada teknologi yang berguna, serta tujuan membangun kemampuan dan karya. Narasi tidak mengklaim keahlian atau pengalaman teknis profesional.

## Personal values

Lima kartu mencakup Continuous Learning, Responsibility, Problem Solving, Adaptability, dan Collaboration. Kartu tidak memiliki animasi aktif.

## Education

Satu education card menampilkan Universitas Siber Asia sebagai satu-satunya pendidikan formal. Elemen `time` digunakan pada tahun mulai dan notice menjelaskan pemisahan pelatihan serta sertifikasi.

## Learning and professional journey

Timeline publik hanya menampilkan UNSIA karena Bangkit Academy dan pengalaman Student One belum berstatus confirmed di `CONTENT_CHECKLIST.md`. Keduanya dicatat sebagai `TODO_CONTENT` pada source, bukan ditampilkan sebagai fakta.

## Technical skills

Skill dikelompokkan menjadi Web Development, Mobile Development, Data and Database, serta Development Tools. Semua memakai status “Sedang Dipelajari” sebagai fallback yang diwajibkan ketika level khusus belum dikonfirmasi. Tidak ada persentase atau level expert.

## Table implementation

Tabel memakai `caption`, `thead`, `tbody`, `th scope="col"`, dan `th scope="row"`. Pada mobile, `table-wrapper` menyediakan overflow horizontal lokal tanpa mengubah tabel menjadi card palsu.

## Soft skills

Delapan soft skill disajikan sebagai unordered list. Setiap item memiliki deskripsi singkat agar tidak menjadi kumpulan kata tanpa konteks.

## Languages

Bahasa Indonesia diberi label bahasa utama. Bahasa Inggris dan Bahasa Arab menggunakan deskripsi netral “Digunakan dalam proses pembelajaran” karena levelnya belum dikonfirmasi. Skor atau tingkat numerik tidak digunakan.

## Interests

Minat mencakup teknologi, pembelajaran digital, menulis, desain antarmuka, pengembangan diri, serta game strategi dan simulasi. Game dijelaskan sebagai rekreasi yang juga melatih perencanaan dan pemecahan masalah.

## Career direction

Arah jangka dekat berfokus pada penguatan dasar web, mobile, database, data analysis, dan AI. Arah jangka panjang menekankan solusi digital yang berguna, mudah digunakan, dan berbasis kebutuhan nyata. Ordered list merangkum lima langkah pengembangan.

## Accessibility

- Satu `h1` dengan heading section berurutan.
- Breadcrumb memakai navigasi berlabel.
- Description list, tabel, daftar, dan time memakai elemen native.
- Placeholder tidak memakai alt text palsu.
- Status kategori selalu memiliki teks.
- Table wrapper tetap dapat difokuskan melalui kontrol scroll browser bila overflow.
- Semua konten tersedia tanpa CSS atau JavaScript.
- Tidak ada autoplay atau animasi aktif.

## Responsive behavior

Layout dimulai satu kolom. Pada tablet, profile overview dan beberapa grid menjadi dua kolom. Pada desktop, narasi, education, career direction, dan CTA menggunakan split layout. Tabel hanya dapat overflow dalam wrapper.

## Aset yang masih TODO

- Foto profil asli dan izin publikasi.
- Domain produksi untuk `og:url`.
- CV final yang telah ditinjau serta izin download publik.

## Data yang masih memerlukan konfirmasi

- Bangkit Academy sebagai program pembelajaran di timeline About.
- Student One Islamic School dan periode pengalaman profesional.
- Program atau kegiatan 2026.
- Level kualitatif setiap skill.
- Level Bahasa Inggris dan Bahasa Arab.
- Seluruh kontak, sosial, sertifikasi, dan detail pengalaman dari CV.

## Hal yang belum diimplementasikan

Tidak ada JavaScript khusus About, reveal, counter, timeline animation, atau foto profil. Halaman lain tidak dikembangkan pada milestone ini.

## Cara menguji

1. Jalankan server lokal dari root proyek.
2. Buka `about.html` pada 390×844, 768×1024, dan 1440×900.
3. Periksa profile overview, heading, timeline, scroll tabel, CTA, footer, dark/light theme, dan menu mobile.
4. Uji keyboard, focus-visible, Escape pada menu, serta tabel dengan zoom dan scroll.
5. Matikan CSS dan JavaScript untuk memastikan urutan konten tetap logis.
6. Periksa Console dan Network agar tidak ada error atau aset 404.

## TODO Milestone 7

Berhenti setelah Milestone 6. Jangan mengembangkan Projects sebelum data proyek dan scope Milestone 7 dikonfirmasi.
