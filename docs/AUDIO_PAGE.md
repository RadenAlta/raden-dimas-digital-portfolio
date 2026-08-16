# Audio Page — Multimedia Completion

## Tujuan dan struktur

Halaman Audio menyediakan hero, breadcrumb, notice, media card, metadata sumber, CTA, dan footer global.

## Media dan fallback

Media lengkap tersedia di `assets/audio/focus-study-medieval-fantasy.mp3`. Halaman memakai elemen `<audio>` native dengan `controls` dan `preload="metadata"`; autoplay dinonaktifkan. Media tidak dipotong, dinormalisasi, dikonversi, atau diduplikasi. Sumber dikreditkan melalui URL `https://www.youtube.com/watch?v=oCA8DkQHC40`.

## Progressive enhancement

Player native menjadi kontrol utama dan tidak memerlukan library atau player JavaScript khusus. Dekorasi not dan bar pada card bersifat statis serta tidak mengklaim sinkronisasi dengan audio.

## Accessibility, reduced motion, dan no-JavaScript

Kontrol native tetap tersedia tanpa JavaScript dan dapat digunakan melalui keyboard. Karena audio bersifat instrumental, transkrip tidak diperlukan. Dekorasi SVG disembunyikan dari teknologi bantu.

## Responsive dan pengujian

Media card dan player menyesuaikan lebar viewport. Pengujian dilakukan pada 390×844, 768×1024, dan 1440×900 serta dark/light theme.

## Catatan performa

- Audio hanya memakai `preload="metadata"`; tidak ada preload global atau Service Worker caching.
- Ukuran audio besar perlu diperhatikan sebelum Git hosting. Git LFS tidak dikonfigurasi otomatis.
