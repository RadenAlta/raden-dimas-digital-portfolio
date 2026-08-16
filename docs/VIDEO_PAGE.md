# Video Page — Multimedia Completion

## Tujuan dan struktur

Halaman Video menyediakan hero, breadcrumb, notice, media stage, metadata sumber, ringkasan konten, CTA, dan footer global.

## Inspeksi media

Media lokal tersedia di `assets/videos/android-development-agentic-ai.mp4`. Halaman memakai elemen `<video>` native dengan `controls`, `preload="metadata"`, dan `playsinline`; autoplay dinonaktifkan. Media tidak dipotong, tidak diubah, dan tidak diduplikasi. Video dikreditkan kepada Android Developers dengan tautan sumber asli `https://www.youtube.com/watch?v=z7mHJfh7po0`.

## Perilaku dan aksesibilitas

Kontrol native dapat digunakan melalui keyboard dan tidak bergantung pada JavaScript. Karena transkrip sumber tidak disediakan, halaman menampilkan ringkasan singkat yang secara eksplisit berlabel “Ringkasan video”, bukan transkrip atau kutipan.

## Responsive dan pengujian

Player mempertahankan stage 16:9, memenuhi lebar container, dan memakai `object-fit: contain`. Pengujian dilakukan pada 390×844, 768×1024, dan 1440×900 serta dark/light theme.

## Catatan

- Tidak ada autoplay, iframe, CDN, custom player, atau preload global.
- Poster tidak dibuat karena tidak diperlukan untuk player responsif.
