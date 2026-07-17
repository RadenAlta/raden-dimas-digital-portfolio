# Projects Page — Milestone 7

## Tujuan dan struktur

Projects menampilkan karya pembelajaran secara faktual, dapat dicari, dan dapat difilter. Section terdiri dari hero/breadcrumb, portfolio summary, search/filter/result summary, project grid, empty state, proses pengembangan, technology overview, CTA, dan footer global.

## Project data dan status

Empat kartu yang diizinkan Milestone 7 adalah Raden Dimas Digital Portfolio (Sedang dikembangkan), TOEFL Prep+ (Konsep dan perancangan), Sistem Basis Data Perpustakaan (Proyek akademik), dan Data Clustering Analysis (Proyek pembelajaran). Tidak ada proyek AI kelima.

## Aturan data faktual

Halaman tidak menampilkan repository, live demo, screenshot, statistik, pengguna, akurasi, dataset, hasil pengujian, atau tanggal selesai yang belum dikonfirmasi. Visual kartu adalah pola CSS dekoratif.

## Search behavior

Input mencari judul, kategori, status, teknologi, deskripsi, serta istilah fokus melalui `data-project-search-text`. Pencarian case-insensitive dan langsung memperbarui tampilan tanpa submit server.

## Filter behavior

Button `data-project-filter` menggunakan `aria-pressed`. Filter default adalah Semua. Kategori Database menyimpan token tambahan `academic`, sehingga dua filter dapat menemukan kartu yang sama tanpa menggandakan project.

## Result count dan empty state

`#project-result-count` memakai live region polite dan menampilkan bentuk hasil yang sesuai. Empty state muncul ketika hasil nol serta menyediakan reset keyboard-accessible.

## No-JavaScript fallback

Seluruh kartu tersedia langsung dalam HTML dan visible secara default. `noscript` menjelaskan bahwa search/filter memerlukan JavaScript.

## Project card dan disabled actions

Setiap `article` memiliki visual dekoratif, kategori, status, judul, deskripsi, peran, teknologi, learning focus, dan actions. Repository/demo yang belum tersedia memakai `button disabled`, bukan link kosong.

## Process dan technology overview

Proses pribadi terdiri dari memahami masalah, menentukan scope, merancang, mengimplementasikan, serta menguji/evaluasi/dokumentasi. Teknologi dikelompokkan menjadi Web, Mobile, Database, Data, dan Workflow.

## JavaScript functions dan data attributes

`projects.js` memakai `normalizeText`, `getActiveFilter`, `matchesSearch`, `matchesFilter`, `updateResultCount`, `updateProjectVisibility`, `resetProjectSearch`, dan `initProjectFilters`. Hook utama: `data-project-form`, `data-project-search`, `data-project-filter`, `data-project-card`, `data-project-category`, `data-project-search-text`, `data-project-empty`, dan reset controls.

## Accessibility

Satu h1, breadcrumb berlabel, label search terlihat, filter berupa button, satu state aktif melalui `aria-pressed`, result count polite, status tertulis, visual dekoratif `aria-hidden`, disabled action native, serta kartu tersembunyi memakai `hidden`.

## Responsive behavior

Mobile memakai toolbar dan card satu kolom dengan filter overflow lokal. Tablet/desktop memakai project grid dua kolom agar kartu tetap nyaman dibaca. Tags dan actions membungkus tanpa overflow global.

## SEO

Title dan description Projects bersifat unik. Open Graph dasar tersedia; `og:url` menunggu domain produksi dan tidak ada `og:image` palsu.

## TODO aset dan link

- Screenshot proyek asli dan izin publikasi.
- Repository serta live URL yang telah dikonfirmasi.
- Domain produksi.

## Cara menguji

1. Buka `projects.html` melalui server lokal.
2. Uji default, tujuh filter, kata kunci portfolio/kotlin/mysql/python, query tidak dikenal, kombinasi search+filter, dan reset.
3. Periksa 390×844, 768×1024, dan 1440×900, dark/light theme, keyboard, Console, Network, dan no-JavaScript fallback.

## Belum diimplementasikan

Tidak ada screenshot, repository, demo, detail page, animasi kompleks, atau proyek AI.

## TODO Milestone 8

Berhenti setelah Milestone 7. Jangan mengembangkan Gallery atau Credentials tanpa scope dan aset terverifikasi.
