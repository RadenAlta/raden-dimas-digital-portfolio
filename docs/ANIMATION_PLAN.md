# Animation Plan

Animasi dibangun dengan CSS dan vanilla JavaScript, ditambahkan setelah konten serta layout stabil. Tidak ada animasi yang boleh menghalangi interaksi, mengubah urutan baca, atau menyebabkan layout shift.

| Animasi | Tujuan & halaman | Trigger / implementasi | Fallback, mobile & reduced motion | Risiko & pengujian |
|---|---|---|---|---|
| Intro terminal satu sesi | Memberi pembuka bertema teknologi; Home | Load pertama; JS `sessionStorage`, class CSS, timeout singkat, tombol skip | Tanpa JS langsung tampil konten; mobile dipersingkat; reduced motion dilewati | Risiko blocking/flash. Uji reload, tab baru, storage unavailable, skip, fokus, timing |
| Hero typing | Menekankan tagline; Home | Setelah hero siap; JS memperbarui teks tanpa menghapus fallback | Teks lengkap tersedia di HTML; mobile lebih lambat/sederhana; reduced motion statis | Risiko screen reader/noise/layout. Uji ukuran container, accessible name, resize |
| Technology grid | Atmosfer halus; Home/global | CSS pseudo-element/background-position | Background statis pada mobile/reduced motion | Risiko repaint/contrast. Uji CPU, scroll, teks di atasnya |
| Canvas network | Aksen teknologi; Home | JS canvas dengan `requestAnimationFrame`, pause saat tab tersembunyi | Tidak dibuat bila JS gagal; jumlah node turun di mobile; nonaktif reduced motion | Risiko CPU/baterai. Uji Performance, resize, DPR, visibility change |
| Scroll reveal | Hierarki visual; halaman konten | `IntersectionObserver` menambah class; konten visible secara default | Tanpa observer tetap visible; mobile durasi singkat; reduced motion tanpa transisi | Risiko konten tersembunyi. Uji tanpa JS, back navigation, keyboard/anchor |
| Animated counter | Menyorot angka terverifikasi; Home | IntersectionObserver + `requestAnimationFrame` satu kali | Angka final di HTML; mobile durasi pendek; reduced motion langsung final | Risiko data palsu dan CPU. Hanya aktif setelah nilai dikonfirmasi; uji format/visibility |
| Floating profile card | Memberi kedalaman; Home/About | CSS transform lembut, tanpa mengubah layout | Statis di mobile dan reduced motion | Risiko motion sickness/blur. Uji overlap, zoom, contrast |
| Project card hover | Memberi feedback; Home/Projects | CSS hover/focus-within pada transform/shadow | Pada touch gunakan state statis; reduced motion tanpa transform | Risiko hanya-hover. Uji keyboard, touch, layout card |
| Timeline reveal | Mengarahkan urutan baca; About | IntersectionObserver + CSS opacity/transform | Timeline langsung terlihat tanpa JS/mobile/reduced motion | Risiko urutan semantik tertukar. Uji DOM order dan tab order |
| Gallery filtering | Memberi transisi perubahan kategori; Gallery | Event tombol JS; class/filter dengan opacity singkat | Semua item tampil tanpa JS; mobile/reduced motion perubahan instan | Risiko fokus pada item tersembunyi. Uji keyboard, empty state, rapid click |
| Gallery lightbox | Memperbesar aset; Gallery | Klik/Enter; elemen dialog native bila cocok, JS focus management | Link ke gambar/detail menjadi fallback; mobile full viewport; reduced motion tanpa zoom | Risiko focus trap/scroll. Uji Escape, return focus, Tab, screen reader, orientation |
| Theme transition | Menghaluskan perubahan tema; global | Tombol tema mengubah data attribute; CSS color transition | Tema tetap berfungsi tanpa transisi; reduced motion instan | Risiko flash/contrast. Uji reload, system preference, semua komponen |
| Back-to-top | Mempermudah halaman panjang; global | Tampil setelah scroll; click memakai native smooth behavior bila diizinkan | Selalu dapat berupa anchor; mobile tombol ringkas; reduced motion scroll instan | Risiko menutupi konten. Uji keyboard, zoom, safe area |
| Custom cursor opsional | Feedback dekoratif; desktop tertentu | Hanya `pointer:fine` dan setelah evaluasi performa; JS pointer events | Tidak dibuat pada touch; nonaktif reduced motion; cursor native selalu fallback | Risiko aksesibilitas/performa. Uji high contrast, zoom, pointer coarse; hapus jika tidak bermanfaat |

## Batas implementasi

- Animasi hanya memakai `transform` dan `opacity` bila memungkinkan.
- Elemen memiliki ruang final sebelum animasi dimulai.
- `requestAnimationFrame` dihentikan saat tidak terlihat atau halaman tersembunyi.
- Durasi pendek dan easing konsisten; tidak ada loop dekoratif agresif.
- `prefers-reduced-motion: reduce` menonaktifkan smooth scroll, typing, canvas, floating, reveal, dan transisi tidak esensial.
- Intro selalu memiliki jalur skip dan tidak boleh mengunci pembaca layar pada konten semu.
- Fake terminal command tidak digunakan; teks intro harus faktual dan singkat.
