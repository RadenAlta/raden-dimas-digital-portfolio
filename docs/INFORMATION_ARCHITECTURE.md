# Information Architecture

## Sitemap

```text
Home (index.html)
├── About Me (about.html)
├── Projects (projects.html)
├── Gallery (gallery.html)
├── Credentials (credentials.html)
├── Contact (contact.html)
│   └── Success (success.html)
├── Privacy (privacy.html)
└── 404 (404.html)
```

Halaman utama—Home, About Me, Projects, Gallery, Credentials, dan Contact—tersedia pada navigasi utama. Success, Privacy, dan 404 tetap dapat diakses melalui alur masing-masing.

## Daftar halaman dan konten

| Halaman | Tujuan | Konten utama |
|---|---|---|
| Home | Memberi gambaran singkat dan jalur eksplorasi | Hero, tagline, ringkasan profil, bidang minat, karya pilihan `TODO`, CTA |
| About Me | Menjelaskan profil dan perjalanan belajar | Bio `TODO`, pendidikan formal UNSIA, minat, skill dengan label kualitatif, timeline terverifikasi |
| Projects | Menampilkan karya terverifikasi | Filter kategori, kartu proyek, teknologi, deskripsi dan tautan `TODO` |
| Gallery | Menampilkan dokumentasi visual | Filter, grid gambar lokal, caption, lightbox; seluruh item `TODO` hingga aset tersedia |
| Credentials | Menampilkan sertifikat/kredensial nyata | Daftar sertifikat, penerbit, tanggal dan ID hanya jika terverifikasi |
| Contact | Memberi cara menghubungi | Form nama/email/pesan, counter karakter, penjelasan simulasi statis, kontak terverifikasi `TODO` |
| Success | Mengonfirmasi alur form statis | Pesan bahwa formulir selesai diproses di sisi halaman tanpa klaim tersimpan/terkirim, tautan kembali |
| Privacy | Menjelaskan privasi situs | Penjelasan form statis, penyimpanan preferensi sesi/tema, media lokal, pembaruan kebijakan |
| 404 | Memulihkan navigasi | Pesan halaman tidak ditemukan, tautan Home dan halaman utama |

## Hubungan navigasi

- Logo/nama situs selalu menuju `index.html`.
- Header menyediakan akses ke seluruh halaman konten utama.
- CTA kontekstual menghubungkan Home → About/Projects/Contact, About → Projects, Projects → Contact, Gallery → Credentials, dan media → Contact.
- Form Contact menggunakan aksi ke `success.html` pada versi akademik statis.
- Success dan 404 menyediakan jalur kembali ke Home.
- Footer menyediakan tautan halaman utama, Privacy, dan tombol kembali ke atas.
- Semua tautan memakai path relatif yang valid untuk root project dan hosting subpath.

## Komponen global

### Header

- Skip link sebagai elemen pertama yang dapat difokuskan.
- Identitas/logo teks menuju Home.
- Navigasi utama dengan penanda halaman aktif berbentuk teks/struktur, bukan warna saja.
- Tombol menu mobile dan tombol tema dengan nama yang jelas.
- Header tidak menutupi target fokus atau heading saat anchor digunakan.

### Footer

- Nama pemilik dan ringkasan peran.
- Navigasi sekunder dan Privacy.
- Tautan sosial hanya setelah URL dikonfirmasi.
- Tahun dapat dihitung oleh JavaScript dengan fallback teks.
- Tidak mengklaim kontak atau layanan yang belum terverifikasi.

### Mobile navigation

- Aktif di bawah 640px dan tetap usable hingga 1023px bila ruang tidak cukup.
- Tombol native dengan status terbuka/tertutup yang dapat diumumkan.
- Fokus tetap dapat diprediksi; menu dapat ditutup dengan Escape, klik tautan, atau klik area luar.
- Scroll halaman dikelola tanpa menyebabkan layout shift atau kehilangan fokus.

## Struktur heading

Setiap halaman hanya memiliki satu `h1`; judul section utama memakai `h2`, dan subbagian memakai `h3` tanpa melompati tingkat.

| Halaman | H1 | H2 yang direncanakan |
|---|---|---|
| Home | Raden Dimas Taufik Rahmat | Tentang Singkat, Bidang Minat, Karya Pilihan, Mari Terhubung |
| About Me | Tentang Saya | Profil, Pendidikan, Bidang yang Dipelajari, Perjalanan Belajar |
| Projects | Proyek | Daftar Proyek, Proses Belajar/CTA |
| Gallery | Galeri | Filter Galeri, Dokumentasi |
| Credentials | Kredensial | Sertifikat, Pembelajaran Berkelanjutan |
| Contact | Kontak | Formulir Kontak, Informasi Kontak |
| Success | Formulir Selesai | Langkah Berikutnya |
| Privacy | Privasi | Data Formulir, Penyimpanan Lokal, Pembaruan |
| 404 | Halaman Tidak Ditemukan | Pilihan Navigasi |

Nama section dapat disesuaikan saat implementasi, tetapi hierarki dan satu `h1` per halaman harus dipertahankan.

## Struktur folder final yang direncanakan

```text
/
├── index.html, about.html, projects.html, gallery.html
├── credentials.html, contact.html
├── success.html, privacy.html, 404.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/{profile,projects,gallery,certificates,backgrounds,icons}/
│   ├── videos/
│   └── documents/
└── docs/{screenshots,wireframes,testing}/
```

Folder source code dan subfolder dokumentasi tersebut baru dibuat pada milestone yang membutuhkannya.
