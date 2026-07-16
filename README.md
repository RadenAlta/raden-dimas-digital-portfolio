# Raden Dimas Digital Portfolio

Website portofolio pribadi profesional dan proyek UAS mata kuliah Pemrograman Web I. Proyek ini berupa website statis multi-page berbahasa Indonesia yang dibangun tanpa framework, backend, database, package manager, atau build tool.

## Identitas mahasiswa

- Nama: Raden Dimas Taufik Rahmat
- NIM: 250401010460
- Kelas: IF209
- Program studi: S1 Informatika
- Universitas: Universitas Siber Asia
- Mata kuliah: Pemrograman Web I
- Dosen pengampu: Dr. Fauziah, S.Kom., MMSI.

## Tujuan akademik

Proyek digunakan untuk mempraktikkan semantic HTML5, CSS3, vanilla JavaScript, struktur website multi-page, responsive design, aksesibilitas, serta pengelolaan aset lokal dalam bentuk yang mudah dipahami dan dijelaskan oleh mahasiswa.

## Teknologi

- Semantic HTML5
- CSS3
- Vanilla JavaScript
- Static hosting

Tidak ada external dependency.

## Daftar halaman

- `index.html` — Home
- `about.html` — About Me
- `projects.html` — Projects
- `gallery.html` — Gallery
- `credentials.html` — Credentials
- `video.html` — Video
- `audio.html` — Audio
- `contact.html` — Contact
- `success.html` — Simulasi hasil form statis
- `privacy.html` — Privasi
- `404.html` — Halaman tidak ditemukan

## Struktur folder

```text
/
├── *.html
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── gallery/
│   │   ├── certificates/
│   │   ├── backgrounds/
│   │   └── icons/
│   ├── audio/
│   ├── videos/
│   └── documents/
└── docs/
    ├── screenshots/
    ├── wireframes/
    └── testing/
```

Folder aset kosong dipertahankan dengan `.gitkeep`.

## Menjalankan secara lokal

### Python HTTP server

Dari root proyek, jalankan:

```text
python -m http.server 5500
```

Lalu buka:

```text
http://localhost:5500
```

Hentikan server dengan `Ctrl+C`.

### Live Server

1. Buka root proyek di Visual Studio Code.
2. Pasang ekstensi Live Server jika pengguna menyetujuinya.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Gunakan alamat yang ditampilkan oleh Live Server.

Live Server adalah alat pengembangan opsional dan bukan dependency proyek.

## Aset yang belum tersedia

- Foto profil dan versi kecil.
- Gambar proyek dan galeri.
- Gambar sertifikat.
- Video, poster, caption, dan transcript.
- Audio, cover, dan transcript.
- CV PDF.
- Social preview image.
- Favicon final; saat ini menggunakan favicon inisial RD sederhana.

## TODO

- Integrasikan konten dan aset yang telah diverifikasi.
- Ganti `TODO_ASSET` pada tautan CV setelah file tersedia.
- Ganti `TODO_DOMAIN` pada `robots.txt` dan `sitemap.xml` setelah domain dikonfirmasi.
- Bangun design system, navigasi interaktif, halaman lengkap, animasi, dan responsive design sesuai milestone.
- Implementasikan formulir akademik statis pada milestone kontak.
- Jalankan pengujian browser, keyboard, mobile, reduced motion, serta deployment.

## Status proyek

**Milestone 2 — Project Scaffold.**

Scaffold dasar telah disiapkan, tetapi website belum selesai. Konten, desain lengkap, interaksi, media, form, animasi, dan pengujian production masih menunggu milestone berikutnya.

Form kontak belum tersedia. Website tidak mengirim email dan tidak menyimpan data; halaman Success hanya akan menjadi bagian dari simulasi alur form statis.
