# Final QA — Milestone 12

Tanggal: 17 Juli 2026. Lingkungan: Windows, audit source lokal dan HTTP server Python. Browser visual/interaksi tidak berhasil dijalankan karena browser pengujian terisolasi dari localhost. Status menggunakan PASS, FAIL, PENDING, atau NOT APPLICABLE.

| Area | Status | Catatan |
|---|---|---|
| Git baseline dan AGENTS.md | PASS | Milestone 11 sudah di-commit; AGENTS.md tidak diubah. |
| Jumlah HTML, title, description, H1, ID | PASS | Audit otomatis source dijalankan untuk 11 halaman. |
| CSS syntax/braces dan token | PASS | Pemeriksaan statis dijalankan; konflik 404 diperbaiki. |
| JavaScript syntax dan API terlarang | PASS | Seluruh file JS diperiksa dengan Node dan pencarian source. |
| Content dan pendidikan formal | PASS | Hanya Universitas Siber Asia/S1 Informatika sebagai pendidikan formal. |
| Privacy/security source | PASS | Tidak ditemukan secret, credential JSON, source PDF, atau form storage di folder publik. |
| Internal relative links | PASS | Target file/anchor diperiksa secara otomatis. |
| External link markup | PASS | Atribut target/rel/accessibility diperiksa pada source; status jaringan URL PENDING. |
| Accessibility source | PASS | Lang, landmark, satu H1, skip link, label, dialog/filter markup diperiksa. |
| Accessibility keyboard/screen reader | PENDING | Memerlukan browser dan pembaca layar manual. |
| Responsive dan visual 3 viewport × 2 tema | PENDING | Browser localhost tidak tersedia untuk pengujian visual. |
| Motion source dan reduced motion | PASS | Guard progressive enhancement dan reduced-motion diperiksa. |
| Motion/interaksi runtime | PENDING | Memerlukan browser manual. |
| Form source dan fallback | PASS | Label, error association, mailto, dan jalur tanpa backend diperiksa. |
| Form runtime | PENDING | Validasi/error/prepared state perlu diuji manual. |
| Projects/Credentials/Gallery filters | PENDING | Source diperiksa; regresi runtime perlu browser. |
| Gallery lightbox | PENDING | Markup/source diperiksa; focus trap/return/Escape perlu browser. |
| Images dan certificate paths | PASS | File lokal yang direferensikan tersedia; tidak ada hotlink gambar. |
| Video fallback | PASS | Tidak mengklaim video tersedia; tidak ada autoplay. |
| Audio fallback | PASS | Tidak mengklaim audio tersedia; tidak ada autoplay. |
| SEO title/description/Open Graph | PASS | Unik dan faktual; tanpa `og:image`, canonical, atau `og:url` palsu. |
| Manifest JSON | PASS | JSON valid, lang/description/path ikon tersedia. |
| Robots | PASS | Baseline Allow tanpa sitemap palsu. |
| Sitemap current state | PASS | XML template valid tanpa URL palsu; isi final PENDING production URL. |
| Favicon | PASS | SVG lokal valid secara source dan direferensikan semua halaman. |
| Halaman 404 source | PASS | Struktur, recovery links, satu H1, dan path relatif lengkap. |
| Custom HTTP 404 production | PENDING | Hanya dapat dibuktikan setelah hosting dikonfigurasi. |
| HTTP 200 file lokal | PASS | Diuji melalui server lokal untuk HTML dan aset referensi. |
| Deployment readiness source | PASS | Tidak membutuhkan build/backend; remote dan deployment PENDING. |
| Screenshots | PENDING | Tidak dibuat; daftar dan langkah manual tersedia. |
| Dokumentasi UAS | PASS | Struktur laporan dibuat; bukti visual dan URL produksi PENDING. |

Tidak ada hasil Lighthouse, validator eksternal, cross-browser, network status external URL, atau deployment yang diklaim. Setiap item runtime/visual tetap PENDING sampai pengujian manual dilakukan.

## Ukuran aset sertifikat

| File | Ukuran |
|---|---:|
| `akira-japanese-training-2026.png` | 1.897.983 byte |
| `bangkit-mobile-development-2024.png` | 786.055 byte |
| `bdt-2026-participation.png` | 656.955 byte |
| `bdt-2026-productivity-ai-graduation.png` | 650.051 byte |
| `dicoding-bootcamp-android-2025.png` | 888.301 byte |
| `gemini-certified-student-university.png` | 191.992 byte |
| `google-certified-educator-level-1.png` | 203.034 byte |
| `international-millennial-summit-2023.png` | 1.376.872 byte |
| `microsoft-elevate-data-ai-2025.png` | 1.215.246 byte |

Tidak dilakukan kompresi pada Milestone 12 agar keterbacaan sertifikat tidak berubah tanpa verifikasi visual.
