# Information Architecture

## Sitemap

```text
Home (index.html)
├── About (#about)
├── Experience (#experience)
├── Projects (#projects)
├── Skills (#skills)
├── Contact (#contact)
├── Privacy (privacy.html)
├── Success (success.html)
└── 404 (404.html)
```

Halaman utama memuat seluruh section portfolio. Success, Privacy, dan 404 tetap menjadi halaman pendukung terpisah.

## Daftar halaman dan konten

| Halaman | Tujuan | Konten utama |
|---|---|---|
| Home | Memberi gambaran singkat dan jalur eksplorasi | Hero, tagline, ringkasan profil, bidang minat, karya pilihan `TODO`, CTA |
| About / Experience / Skills | Anchor sections pada `index.html` | Bio ringkas, milestone terverifikasi, dan skill yang sedang dipelajari |
| Projects | Menampilkan karya terverifikasi | Tiga project pilihan, teknologi, deskripsi, dan tautan yang tersedia pada `index.html#projects` |
| Contact | Memberi cara menghubungi | Kanal publik dan form nama/email/pesan pada `index.html#contact` |
| Success | Mengonfirmasi alur form statis | Pesan bahwa formulir selesai diproses di sisi halaman tanpa klaim tersimpan/terkirim, tautan kembali |
| Privacy | Menjelaskan privasi situs | Penjelasan form statis, penyimpanan preferensi sesi/tema, media lokal, pembaruan kebijakan |
| 404 | Memulihkan navigasi | Pesan halaman tidak ditemukan, tautan Home dan halaman utama |

## Hubungan navigasi

- Logo/nama situs selalu menuju `index.html`.
- Header menyediakan akses ke section `#home`, `#about`, `#experience`, `#projects`, `#skills`, dan `#contact`.
- CTA kontekstual menggunakan anchor pada `index.html`.
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
| Home | Hi, I’m Raden Dimas Taufik Rahmat. | About, Experience, Projects, Skills, Contact |
| Success | Formulir Selesai | Langkah Berikutnya |
| Privacy | Privasi | Data Formulir, Penyimpanan Lokal, Pembaruan |
| 404 | Halaman Tidak Ditemukan | Pilihan Navigasi |

Nama section dapat disesuaikan saat implementasi, tetapi hierarki dan satu `h1` per halaman harus dipertahankan.

## Struktur folder final yang direncanakan

```text
/
├── index.html, success.html, privacy.html, 404.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/{profile,projects,gallery,certificates,backgrounds,icons}/
│   ├── videos/
│   └── documents/
└── docs/{screenshots,wireframes,testing}/
```

Folder source code dan subfolder dokumentasi tersebut baru dibuat pada milestone yang membutuhkannya.
