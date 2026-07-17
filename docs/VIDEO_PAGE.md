# Video Page — Milestone 9

## Tujuan dan struktur

Halaman Video menyediakan hero, breadcrumb, notice, featured-media fallback, metadata, topik yang direncanakan, informasi caption/transkrip, koleksi tiga kartu, CTA, dan footer global.

## Inspeksi media

File `Screen Recording 2026-07-17 080317.mp4` disebut dalam instruksi, tetapi tidak ditemukan di workspace, attachments, atau Google Drive lokal ketika milestone dikerjakan. Resolusi, durasi, codec, rasio, audio track, isi visual, dan keamanan publikasi belum dapat diperiksa. Karena itu tidak ada `<video>`, source, poster, caption, transkrip, atau metadata teknis yang dibuat.

## Perilaku dan aksesibilitas

Fallback memakai heading dan teks `TODO_ASSET`, bukan tombol play palsu. Jika media tersedia, implementasi harus memakai kontrol native, `preload="metadata"`, `playsinline`, tanpa autoplay atau loop. Caption dan transkrip hanya dibuat setelah audio diperiksa. Semua informasi saat ini tersedia tanpa JavaScript dan reduced motion tidak menghilangkan konten.

## Responsive dan pengujian

Metadata memakai grid responsif; koleksi tiga kolom pada desktop, dua pada tablet, dan satu pada mobile. Uji 390×844, 768×1024, dan 1440×900, kedua tema, keyboard, menu mobile, zoom, Console, Network, dan overflow setelah file video ditambahkan.

## TODO

- Unggah ulang screen recording ke lokasi yang dapat diakses.
- Periksa metadata, beberapa frame representatif, audio, dan informasi sensitif.
- Tambahkan video lokal hanya jika aman; buat caption/transkrip hanya bila faktual.
- Milestone berikutnya tidak dikembangkan dari halaman ini.
