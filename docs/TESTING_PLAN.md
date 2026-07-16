# Testing Plan

## Lingkungan dan viewport

- Jalankan melalui server lokal sederhana, bukan membuka file secara langsung.
- Viewport wajib: **360px, 390px, 768px, 1024px, dan 1440px**.
- Browser target awal: Chrome/Edge terbaru dan Firefox terbaru; Safari/iOS diuji bila perangkat tersedia.
- Catat browser, OS, viewport, tanggal, langkah, hasil aktual, hasil yang diharapkan, dan bukti untuk setiap temuan.

## Matriks pengujian

| Area | Skenario utama | Hasil yang diharapkan |
|---|---|---|
| Navigation | Buka semua link header/footer/CTA dari setiap halaman; menu mobile; active state; Back/Forward | Tidak ada broken link; fokus/status benar; menu dapat ditutup |
| Responsive layout | Uji semua viewport, orientation, zoom 200%, teks panjang | Tidak ada horizontal overflow, overlap, konten terpotong, atau target terlalu kecil |
| HTML semantics | Periksa lang, landmark, satu H1, urutan heading, elemen native | Struktur logis dan tervalidasi tanpa misuse ARIA |
| CSS | Tema, focus-visible, hover/focus parity, print/basic fallback | Style konsisten, contrast dan fokus terbaca, tanpa layout shift |
| JavaScript | Dengan JS aktif/nonaktif; rapid interaction; reload; console | Progressive enhancement bekerja; fallback tetap usable; tanpa error |
| Forms | Kosong, email salah/benar, batas pesan, submit keyboard | Label/error accessible, counter benar, valid submit menuju Success |
| Gallery | Semua filter, empty state, rapid filter, thumbnail | Item benar, fokus tidak hilang, layout stabil |
| Projects filter | Kategori, reset/all, tanpa JS, data kosong | Hasil benar dan state dijelaskan dengan teks |
| Lightbox | Enter/click, Tab loop, Shift+Tab, Escape, close, filter setelah close | Fokus terkelola dan kembali ke pemicu; background tidak interaktif |
| Video | Play/pause/seek/volume/fullscreen, caption, error file | Tidak autoplay; controls dan transcript tersedia; error dimengerti |
| Audio | Play/pause/seek/ended, equalizer, error file | Tidak autoplay; status teks benar; transcript tersedia |
| Theme | System preference, toggle, reload, kedua tema | Preferensi konsisten, tanpa flash signifikan, contrast terjaga |
| Keyboard | Tab seluruh halaman, Enter/Space/Escape, skip link | Semua fungsi dapat digunakan tanpa mouse dan urutan fokus logis |
| Reduced motion | Aktifkan preferensi OS/browser lalu reload/interaksi | Intro/typing/canvas/reveal disederhanakan atau nonaktif; konten tetap ada |
| Missing asset | Ubah/putus path gambar, audio, video secara terkontrol | Alt/fallback/placeholder tidak merusak layout; error tidak menyesatkan |
| Broken link | Jalankan pemeriksaan link internal dan klik manual | Semua target ada dan path bekerja pada root/subpath |
| Browser console | Load dan gunakan seluruh fitur | Tidak ada error, unhandled rejection, atau warning relevan yang diabaikan |
| Deployment | Uji URL langsung, refresh nested page, 404, aset, form | Semua path dan MIME benar; 404/Success berfungsi pada host |

## Pemeriksaan visual dan konten

- Bandingkan spacing, typography, cards, header/footer, dan state komponen antarhalaman.
- Pastikan pendidikan formal hanya Universitas Siber Asia, S1 Informatika, 2025–sekarang, Mahasiswa aktif.
- Cari `TODO` dan putuskan setiap item: diselesaikan, tetap menjadi placeholder yang jelas, atau tidak dipublikasikan.
- Periksa tidak ada angka, tautan, credential, pengalaman, pencapaian, atau kontak tanpa sumber konfirmasi.
- Periksa semua gambar memiliki dimensi dan alt yang sesuai.

## Pengujian performa

- Jalankan audit Lighthouse setelah konten/aset final.
- Inspeksi ukuran gambar/media dan loading behavior.
- Rekam performance saat canvas, scroll reveal, filter, lightbox, dan audio equalizer aktif.
- Pastikan animation frame berhenti pada tab tersembunyi dan tidak ada long task berulang.
- Uji koneksi lambat melalui throttling bila tersedia.

## Kriteria selesai

- Tidak ada defect kritis pada navigasi, form, keyboard, media, atau deployment.
- Tidak ada overflow pada lima viewport wajib.
- Tidak ada console error atau broken internal link.
- Reduced motion dan fallback tanpa JavaScript telah diuji.
- Semua temuan tersisa dicatat dengan severity, dampak, mitigasi, dan keputusan penerimaan.
