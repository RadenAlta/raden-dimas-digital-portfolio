# Global Components

## Tujuan

Komponen global menyediakan header, navigasi, theme toggle, footer, dan back-to-top yang konsisten pada seluruh sebelas halaman. Implementasi memakai HTML semantik, CSS, dan vanilla JavaScript tanpa dependency.

## Header structure

Header memakai `.site-header` dan container `.site-header__inner`. Isinya adalah brand RD, tombol menu, navigasi utama, icon-only theme toggle, dan link download CV. Header bersifat sticky dan memperoleh class `.is-scrolled` setelah halaman digulir.

## Navigation structure

Navigasi tetap tersedia langsung dalam HTML. Setiap halaman utama menggunakan `aria-current="page"` pada link aktif. Active state memakai warna, font weight, dan border indicator.

## Mobile menu behavior

Pada viewport di bawah 1024px, JavaScript menambahkan class `.js-enabled` lalu menampilkan navigasi sebagai panel. Tombol menu:

- Mengubah `aria-expanded` dan label aksesibel.
- Menambah/menghapus class `.is-open`.
- Mengunci scroll body selama panel terbuka.
- Menutup menu melalui tombol, overlay, link, klik luar, Escape, atau resize desktop.
- Memindahkan fokus ke link pertama saat dibuka.
- Mengembalikan fokus ke tombol ketika ditutup dengan Escape.

Tanpa JavaScript, navigasi tetap terlihat sebagai fallback.

## Theme selection logic

Urutan tema:

1. Nilai valid dari localStorage.
2. Preferensi sistem `prefers-color-scheme`.
3. Dark sebagai fallback.

Tema diterapkan pada `document.documentElement.dataset.theme` dengan nilai `dark` atau `light`.

Theme toggle menampilkan ikon berdasarkan tindakan berikutnya: tema aktif dark menampilkan matahari untuk mengaktifkan tema terang, sedangkan tema aktif light menampilkan bulan untuk mengaktifkan tema gelap. `aria-label` dan `title` selalu mengikuti tindakan tersebut.

## localStorage key

`raden-portfolio-theme`

Operasi penyimpanan dilindungi agar halaman tetap bekerja saat localStorage tidak tersedia.

## Footer structure

Footer terdiri dari:

- Brand RD dan deskripsi singkat terverifikasi.
- Quick links.
- Supporting links untuk Privacy dan kembali ke atas.
- Placeholder teks sosial tanpa URL palsu.
- Copyright dengan `<time data-current-year>` dan fallback 2026.

## CV download behavior

CV tersedia sebagai PDF lokal di `assets/documents/Raden-Dimas-Taufik-Rahmat-CV.pdf`. Seluruh header memakai link native dengan atribut `download`, nama file stabil, ikon SVG lokal, visible label “Download CV”, dan accessible name “Download CV Raden Dimas Taufik Rahmat”. Link tidak membuka tab baru.

## Back-to-top behavior

Button `[data-back-to-top]` muncul setelah scroll melewati 480px hanya jika dokumen cukup panjang. Klik menggulir ke atas secara smooth, kecuali reduced motion aktif.

## Keyboard dan Escape behavior

- Menu dan theme toggle memakai button native.
- Escape menutup menu dan mengembalikan fokus.
- Theme toggle dapat diaktifkan dengan Enter atau Space secara native.
- Focus-visible menggunakan ring design token.
- Tidak ada tabindex positif atau kontrol palsu berbasis div.

## Reduced-motion behavior

Reduced motion menghilangkan durasi transisi panel menu, header, ikon, button, dan back-to-top. Scroll ke atas menggunakan behavior `auto`.

## CSS classes utama

- Header: `.site-header`, `.is-scrolled`, `.site-header__inner`.
- Navigation: `.site-nav`, `.site-nav__list`, `.site-nav__link`, `.is-open`.
- Controls: `.menu-toggle`, `.theme-toggle`, `.header-cv-download`.
- Footer: `.site-footer`, `.site-footer__grid`, `.site-footer__links`.
- Back-to-top: `.back-to-top`, `.is-visible`.
- State body: `.menu-open`.

## JavaScript functions utama

`main.js`:

- `prefersReducedMotion()`
- `initMobileNavigation()`
- `closeMobileNavigation()` sebagai helper internal.
- `initHeaderScrollState()`
- `initCurrentYear()`
- `initBackToTop()`
- `initGlobalComponents()`

`theme.js`:

- `getStoredTheme()`
- `getPreferredTheme()`
- `applyTheme()`
- `updateThemeButton()`
- `initThemeToggle()`

## Cara menguji dark/light theme

1. Buka salah satu halaman melalui server lokal.
2. Pada tema dark, pastikan ikon matahari dan label aksesibel “Aktifkan tema terang” tersedia.
3. Aktifkan tombol dan pastikan ikon berubah menjadi bulan, label aksesibel menjadi “Aktifkan tema gelap”, serta `data-theme="light"` diterapkan.
4. Reload dan pindah halaman untuk memeriksa persistence.
5. Aktifkan kembali tombol untuk kembali ke dark.

## Cara menguji mobile menu

1. Gunakan viewport di bawah 1024px.
2. Buka menu dan periksa `aria-expanded="true"`.
3. Tutup dengan tombol, Escape, overlay, klik luar, dan link.
4. Pastikan Escape mengembalikan fokus.
5. Resize ke desktop saat menu terbuka dan pastikan state di-reset.
6. Matikan JavaScript sementara dan pastikan link navigasi masih tersedia.

## Belum diimplementasikan

Hero Home, typing animation, canvas, intro terminal, scroll reveal, filter proyek, lightbox galeri, validasi contact, video hero dekoratif, page transition, dan custom cursor belum dibuat.

## TODO Milestone 5

- Bangun konten serta hero Home berdasarkan data yang telah dikonfirmasi.
- Pertahankan shell global dan event initialization yang ada.
- Integrasikan CTA tanpa membuat URL atau statistik palsu.
- Uji kembali header/footer setelah konten Home membuat halaman lebih panjang.
