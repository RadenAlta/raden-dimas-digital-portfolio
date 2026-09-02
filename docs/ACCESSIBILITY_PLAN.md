# Accessibility Plan

## Semantic HTML

- Setiap dokumen menggunakan `lang="id"`, title unik, serta landmark native `header`, `nav`, `main`, dan `footer`.
- Gunakan `button` untuk aksi dan `a` untuk navigasi; hindari ARIA bila elemen native sudah cukup.
- Daftar, figure/caption, time, address, dan form memakai elemen native sesuai fungsi.
- Status aktif, error, dan pilihan tidak disampaikan dengan warna saja.

## Skip link dan heading

- Skip-to-content menjadi elemen fokus pertama dan terlihat saat fokus.
- Target `main` dapat menerima fokus secara wajar dan tidak tertutup sticky header.
- Setiap halaman memiliki satu `h1`; `h2` dan `h3` mengikuti hierarki tanpa lompatan.
- Heading menjelaskan section dan tidak digunakan semata-mata untuk ukuran visual.

## Keyboard navigation dan focus-visible

- Semua link, tombol menu, theme control, filter, player, lightbox, dan form dapat dioperasikan dengan keyboard.
- Tab order mengikuti urutan visual/logis; tidak menggunakan `tabindex` positif.
- Focus indicator kontras, tidak terpotong, dan konsisten untuk `:focus-visible`.
- Escape menutup menu/lightbox; fokus kembali ke pemicu setelah komponen ditutup.
- Hover behavior juga tersedia lewat focus/focus-within.

## Alt text dan media

- Gambar informatif memiliki alt text berdasarkan konteks; dekorasi memakai alt kosong.
- Foto profil menyebut identitas secara ringkas; screenshot proyek menjelaskan UI/fitur yang relevan.
- Sertifikat memiliki deskripsi teks lengkap di halaman sehingga gambar bukan satu-satunya sumber informasi.
- Video dekoratif Home memiliki poster fallback, muted, tanpa controls, dan tidak mengubah urutan baca/fokus.

## Form dan validasi accessible

- Semua field memiliki label eksplisit dan petunjuk terkait programmatically.
- Required state dijelaskan dalam teks; tipe email memakai validasi format.
- Error tampil dekat field, menggunakan bahasa jelas, dan terhubung ke field; summary error dipertimbangkan untuk beberapa kesalahan.
- Fokus diarahkan secara hati-hati ke error pertama/summary setelah submit gagal.
- Counter karakter menyampaikan batas dan sisa secara tidak mengganggu; tidak mengumumkan setiap ketikan.
- Success page tidak mengklaim pesan tersimpan atau terkirim karena tidak ada backend.

## Contrast dan tema

- Teks normal ditargetkan minimal 4.5:1; teks besar dan komponen UI minimal 3:1.
- Cyan/purple tidak otomatis dipakai untuk teks kecil sebelum contrast diuji pada kedua tema.
- Link dibedakan dengan lebih dari warna, misalnya underline atau indikator konsisten.
- Uji forced colors/high contrast dan pastikan focus, border, serta state tetap terlihat.

## Reduced motion

- Media query `prefers-reduced-motion: reduce` menonaktifkan atau mempersingkat animasi non-esensial.
- Konten tidak bergantung pada reveal; posisi final menjadi default.
- Typing menampilkan kalimat final, canvas tidak berjalan, floating/equalizer statis, dan smooth scroll dinonaktifkan.
- Video hero dekoratif tidak autoplay dan tidak menimbulkan flashing content.

## Lightbox focus management

- Pemicu menyimpan referensi fokus sebelum lightbox dibuka.
- Judul/caption dan tombol tutup memiliki nama yang jelas.
- Fokus awal menuju tombol tutup atau judul dialog sesuai struktur.
- Tab/Shift+Tab tetap berada di dialog selama terbuka; Escape menutupnya.
- Background tidak interaktif saat dialog terbuka; scroll background dicegah tanpa layout shift.
- Setelah tutup, fokus kembali ke thumbnail asal, termasuk setelah filter berubah.

## Pemeriksaan

- Manual keyboard-only dan screen reader smoke test.
- Zoom browser 200% dan text spacing.
- Contrast checker dan automated accessibility scan sebagai pelengkap, bukan pengganti audit manual.
- Uji 360px hingga 1440px, reduced motion, forced colors, tanpa JavaScript, dan aset gagal dimuat.
