# Asset Checklist

Semua path berikut adalah rencana. Folder aset belum dibuat pada milestone 1. Nama file memakai huruf kecil dan tanda hubung agar path konsisten.

| Aset | Lokasi rencana | Nama rekomendasi | Format | Ukuran/rasio rekomendasi | Status | Halaman |
|---|---|---|---|---|---|---|
| Foto profil utama | `assets/images/profile/` | `raden-dimas-profile.jpg` | JPEG | 1576×2364 | Tersedia | Home, About |
| Foto profil kecil | `assets/images/profile/` | `raden-dimas-profile-small.webp` | WebP | 320×320, 1:1 | TODO | Header/card/footer bila dipakai |
| Gambar proyek | `assets/images/projects/school-administration-assistant/` | `01-playground-daftar-ulang.png`, `02-playground-guardrail-wali-kelas.png`, `03-prompt-template.png` | PNG | Rasio asli | Tersedia dan diperiksa | Projects, Gallery |
| Gambar galeri | `assets/images/gallery/` | `gallery-[slug].webp` | WebP/JPEG | min. 1600px sisi panjang; rasio asli dicatat | TODO per item | Gallery |
| Gambar sertifikat | `assets/images/certificates/` | `certificate-[slug].webp` | WebP/JPEG; PDF asli hanya bila diizinkan | 1600×1131, kira-kira A4 landscape | TODO per sertifikat | Credentials |
| Poster video | `assets/images/backgrounds/` | `video-poster.webp` | WebP/JPEG | 1280×720, 16:9 | TODO | Video |
| Video demo | `assets/videos/` | `portfolio-introduction.mp4` | MP4 H.264; WebM opsional | 1920×1080 atau 1280×720, 16:9 | TODO | Video |
| Caption video | `assets/videos/` | `portfolio-introduction-id.vtt` | WebVTT | Sinkron dengan video | TODO | Video |
| Audio perkenalan | `assets/audio/` | `portfolio-introduction.mp3` | MP3; OGG opsional | 128–192 kbps, durasi TODO | TODO | Audio |
| Cover audio | `assets/images/backgrounds/` | `audio-cover.webp` | WebP/JPEG | 1200×1200, 1:1 | TODO | Audio |
| CV | `assets/documents/` | `cv-raden-dimas.pdf` | PDF accessible | A4, ukuran file ideal < 2 MB | TODO | About, Contact |
| Favicon | `assets/images/icons/` | `favicon.svg`, `favicon-32.png` | SVG dan PNG | SVG + 32×32 | TODO | Semua halaman |
| Social preview | `assets/images/backgrounds/` | `social-preview.webp` | WebP/JPEG/PNG | 1200×630 | TODO | Metadata semua halaman |
| Hero binary background | `assets/videos/` dan `assets/images/backgrounds/` | `hero-binary-background.mp4`, `hero-binary-background-poster.webp` | MP4 H.264 + WebP | 1280×720, 16:9 | `LICENSE_CONFIRMED_FOR_PUBLIC_USE` | Home Hero |

## Aturan penerimaan aset

- Aset harus berasal dari pengguna atau sumber yang hak penggunaannya jelas; tidak memakai hotlink acak.
- Foto personal tidak boleh digenerasikan atau direkayasa sebagai pengganti.
- Sertifikat tidak boleh dibuat ulang sehingga tampak sebagai dokumen asli.
- Nama, tanggal, credential ID, dan informasi sensitif diperiksa sebelum publikasi.
- Dimensi eksplisit dicantumkan saat implementasi untuk mencegah layout shift.
- Gambar dikompresi dengan kualitas baca yang memadai; versi asli disimpan di luar website bila terlalu besar.
- Video dan audio tidak autoplay; transcript teks wajib tersedia.
- Alt text/caption menjelaskan fungsi atau konteks, bukan mengulang nama file.

## TODO aset prioritas

1. Media khusus halaman Video dan transkrip.
2. Media khusus halaman Audio dan transkrip.
4. Sertifikat dan data verifikasi yang boleh tampil.
5. Video, poster, caption, deskripsi, dan transcript.
6. Audio, cover, dan transcript.
7. CV yang telah ditinjau untuk informasi sensitif.
8. Favicon dan social preview final.

## Catatan Hero binary background

Video final berukuran 990.834 byte, berdurasi 10 detik pada 30 fps, dan tidak memiliki audio. Poster WebP berasal dari frame awal stabil dengan ukuran 1280×720. Aset hanya boleh dipakai sebagai dekorasi Home Hero. Tidak ditemukan watermark atau identitas pribadi pada sampel visual, tetapi sumber dan lisensi belum dikonfirmasi; deployment publik harus menunggu konfirmasi hak penggunaan.
