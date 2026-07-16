# Design System

## Tujuan

Design system memberi fondasi visual konsisten untuk seluruh halaman Raden Dimas Digital Portfolio. Sistem ini dark-first, tanpa dependency eksternal, dan memakai custom properties agar mudah dipahami serta dikembangkan pada milestone berikutnya.

## Prinsip visual

- Profesional, modern, bersih, dan berorientasi teknologi.
- Deep navy sebagai dasar dengan surface yang terbaca.
- Cyan sebagai aksen utama dan purple sebagai aksen sekunder.
- Whitespace, hierarki tipografi, serta border halus lebih diutamakan daripada glow.
- Komponen tetap dapat dipakai tanpa JavaScript.

## Token warna

| Token | Dark | Light | Kegunaan |
|---|---|---|---|
| `--color-background` | `#07111f` | `#f5f8fc` | Latar utama |
| `--color-surface` | `#101d2f` | `#ffffff` | Card dan control |
| `--color-surface-elevated` | `#16263a` | `#f0f5fa` | Surface bertingkat |
| `--color-text` | `#f3f7fc` | `#101c2d` | Teks utama |
| `--color-text-muted` | `#aebdd0` | `#51657d` | Teks sekunder |
| `--color-primary` | `#42d7e8` | `#087d91` | Link dan aksi utama |
| `--color-secondary` | `#9b8cf8` | `#6554c0` | Aksi sekunder |
| `--color-success` | `#5bd6a2` | `#187a55` | Status positif |
| `--color-danger` | `#ff7b87` | `#b5273c` | Error |
| `--color-border` | `#2a3d54` | `#c9d5e3` | Border halus |
| `--color-focus` | `#f4c95d` | `#8a5b00` | Focus ring |

## Typography

- Display: `"Space Grotesk", "Segoe UI", system-ui, sans-serif`.
- Body: `"Inter", "Segoe UI", system-ui, sans-serif`.
- Monospace: `"JetBrains Mono", "Cascadia Code", Consolas, monospace`.
- Semua font berasal dari perangkat pengguna; tidak ada import eksternal.
- Skala ukuran `xs` hingga `3xl` menggunakan `clamp()` pada heading utama agar responsif.

## Spacing scale

`--space-1` sampai `--space-12` membentuk skala dari 0.25rem hingga 6rem. Gunakan token ini untuk padding, margin, dan gap; hindari nilai acak.

## Radius dan shadow

- Radius: `sm`, `md`, `lg`, `xl`, dan `full`.
- Shadow: `sm`, `md`, dan `lg`.
- Shadow dipakai hemat untuk elevation, bukan efek neon.

## Layout primitives

- `.container`, `.container--narrow`, `.container--wide`
- `.section`, `.section--compact`
- `.stack`, `.stack--sm`, `.stack--lg`
- `.cluster`
- `.grid`, `.grid--2`, `.grid--3`, `.grid--4`
- `.split-layout`
- `.content-wrapper`
- `.page-shell`, `.page-header`, `.page-content`
- `.media-wrapper`, `.table-wrapper`

Contoh:

```html
<section class="section">
  <div class="container stack">
    <h2>Judul bagian</h2>
    <div class="grid grid--3">...</div>
  </div>
</section>
```

## Button variants

Gunakan class dasar `.button`, lalu satu modifier:

- `.button--primary` untuk aksi utama.
- `.button--secondary` untuk aksi alternatif.
- `.button--ghost` untuk kontrol ringan.
- `.button--icon` untuk tombol ikon berbentuk lingkaran.

Disabled state menggunakan atribut native `disabled`. `aria-disabled="true"` hanya untuk elemen yang memang memerlukannya.

## Card variants

- `.card`: surface standar.
- `.card--elevated`: elevation dan shadow.
- `.card--interactive`: feedback hover dan focus-within.
- `.empty-state`: placeholder konten jujur.
- `.asset-placeholder`: area aset yang belum tersedia.
- `.terminal-card`: surface monospace; belum memiliki animasi.

## Navigation states

- `.site-nav__link` memberi ukuran target dan tampilan konsisten.
- Halaman aktif memakai `aria-current="page"`, font lebih tebal, dan underline border sehingga tidak bergantung pada warna.
- Mobile memakai daftar horizontal yang dapat digulir karena menu interaktif belum dibuat.
- Tombol menu dan tema baru memiliki tampilan visual.

## Focus state

Semua elemen fokus menggunakan ring `--color-focus` dengan lebar dan offset token. Outline tidak dihapus. Skip link muncul saat menerima fokus.

## Dark dan light theme

Dark theme aktif dari `:root`. Light theme tersedia melalui selector `[data-theme="light"]`. JavaScript theme toggle belum diimplementasikan.

Untuk pengujian manual, ubah sementara:

```html
<html lang="id" data-theme="light">
```

Perubahan harus dikembalikan menjadi `<html lang="id">` setelah pengujian.

## Responsive rules

- Default: mobile.
- Tablet: `min-width: 640px`.
- Desktop: `min-width: 1024px`.
- Large desktop: `min-width: 1280px`, hanya untuk gutter.
- Grid dan split layout berawal satu kolom.
- Navigasi mobile tetap terlihat aman tanpa JavaScript.
- Container memakai fluid gutter dan tidak menggunakan fixed width.

## Accessibility considerations

- Kontras dibangun melalui pasangan token dark/light yang berbeda.
- Active navigation memakai border dan font weight selain warna.
- Link tetap memiliki underline.
- Target control minimal 44px.
- Focus-visible selalu tersedia.
- Reduced motion mematikan smooth scroll dan transform feedback.
- Reading width dibatasi agar paragraf nyaman dibaca.

## Belum diimplementasikan

Konten halaman lengkap, hero final, timeline, cards khusus proyek/galeri/kredensial, form final, media player, menu mobile interaktif, theme toggle, serta seluruh animasi belum dibuat.

## TODO Milestone 4

- Implementasikan navigasi mobile yang dapat dibuka/ditutup dan dikelola dengan keyboard.
- Implementasikan theme toggle dengan penyimpanan preferensi dan fallback.
- Sempurnakan footer global serta state navigasi.
- Uji screen reader, focus management, dan perilaku tanpa JavaScript.
- Pertahankan token serta komponen global sebagai sumber style utama.

