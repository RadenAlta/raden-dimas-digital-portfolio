# Asset Checklist

Semua path berikut adalah rencana. Folder aset belum dibuat pada milestone 1. Nama file memakai huruf kecil dan tanda hubung agar path konsisten.

| Aset | Lokasi rencana | Nama rekomendasi | Format | Ukuran/rasio rekomendasi | Status | Halaman |
|---|---|---|---|---|---|---|
| Foto profil utama | `assets/images/profile/` | `raden-dimas-profile.jpg` | JPEG | 1576×2364 | Tersedia | Home, About |
| Foto profil kecil | `assets/images/profile/` | `raden-dimas-profile-small.webp` | WebP | 320×320, 1:1 | TODO | Header/card/footer bila dipakai |
| Gambar proyek | `assets/images/projects/school-administration-assistant/` | `01-playground-daftar-ulang.png`, `02-playground-guardrail-wali-kelas.png`, `03-prompt-template.png` | PNG | Rasio asli | Tersedia dan diperiksa | Projects, Gallery |
| Gambar galeri | `assets/images/gallery/` | `gallery-[slug].webp` | WebP/JPEG | min. 1600px sisi panjang; rasio asli dicatat | TODO per item | Gallery |
| Gambar sertifikat | `assets/images/certificates/` | `certificate-[slug].webp` | WebP/JPEG; PDF asli hanya bila diizinkan | 1600×1131, kira-kira A4 landscape | TODO per sertifikat | Credentials |
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
- Video dekoratif Home tidak autoplay; poster tersedia sebagai fallback untuk reduced motion atau perangkat yang tidak mendukung pemutaran.
- Alt text/caption menjelaskan fungsi atau konteks, bukan mengulang nama file.

## TODO aset prioritas

1. Sertifikat dan data verifikasi yang boleh tampil.
2. CV yang telah ditinjau untuk informasi sensitif.
3. Favicon dan social preview final.

## Catatan Hero binary background

Video hero berukuran 990.834 byte, berdurasi 10 detik pada 30 fps, dan tidak memiliki audio. Poster WebP berukuran 1280×720 menjadi fallback. Aset hanya dipakai sebagai dekorasi Home Hero dan tidak menjadi halaman Video portfolio.
