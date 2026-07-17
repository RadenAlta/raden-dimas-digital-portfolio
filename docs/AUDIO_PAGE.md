# Audio Page — Milestone 9

## Tujuan dan struktur

Halaman Audio menyediakan hero, breadcrumb, notice, featured-audio fallback, metadata, informasi transkrip, koleksi tiga kartu, CTA, dan footer global.

## Media dan fallback

Folder `assets/audio/` hanya berisi `.gitkeep`; tidak ada rekaman audio khusus. Audio screen recording juga tidak dapat diperiksa karena file video tidak ditemukan. Audio tidak diekstrak dan tidak ada `<audio>`, source, durasi, transcript, atau visualizer palsu.

## Progressive enhancement

`assets/js/audio-player.js` bersifat null-safe dan tidak menampilkan kontrol custom tanpa elemen audio nyata. Script menyediakan `formatTime()`, pembaruan play/mute/waktu/progress, seek, volume, playback rate, error handling, serta `initAudioPlayer()`. Native controls tetap menjadi jalur utama jika audio ditambahkan kemudian.

## Accessibility, reduced motion, dan no-JavaScript

Fallback menggunakan heading dan teks faktual. Kontrol masa depan memakai button/input native dan label yang berubah sesuai status. Tanpa JavaScript, fallback tetap terbaca; jika audio nyata ditambahkan, native player harus tetap tersedia. Tidak ada equalizer atau animasi karena belum ada audio.

## Responsive dan pengujian

Metadata serta koleksi responsif dari tiga ke dua lalu satu kolom. Uji 390×844, 768×1024, dan 1440×900, kedua tema, keyboard, focus-visible, menu mobile, reduced motion, Console, Network, dan overflow.

## TODO

- Sediakan rekaman audio asli yang aman.
- Periksa format, durasi, bahasa, isi, dan privasi.
- Tambahkan transcript asli bersama rekaman final.
- Uji native dan custom controls setelah media tersedia.
