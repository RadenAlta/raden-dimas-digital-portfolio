# Risk Register

Skala: kemungkinan dan dampak dinilai Rendah, Sedang, atau Tinggi; diperbarui pada akhir setiap milestone.

| Risiko | Kemungkinan | Dampak | Mitigasi | Indikator/pemilik tindak lanjut |
|---|---|---|---|---|
| Animasi terlalu berat | Sedang | Tinggi | Tambah setelah layout stabil; batasi node/loop; pause saat hidden; reduced motion; profiling | FPS turun/long task; developer melakukan profiling |
| Website terlalu kompleks untuk Pemrograman Web I | Sedang | Tinggi | Vanilla HTML/CSS/JS modular, komentar ringkas, progressive enhancement, dokumentasi alur | Fitur sulit dijelaskan; sederhanakan sebelum menambah fitur |
| Data belum terverifikasi | Tinggi | Tinggi | Gunakan `TODO`, content checklist, persetujuan sebelum publikasi | Klaim tanpa sumber; pemilik mengonfirmasi data |
| Aset belum tersedia | Tinggi | Sedang | Placeholder jujur, expected filename, prioritas aset, jangan membuat foto/sertifikat palsu | Area kosong atau deadline integrasi; pemilik menyediakan aset |
| Broken relative path | Sedang | Tinggi | Relative URL konsisten, lowercase filename, link scan dan direct URL test | 404 network/deployment; developer memperbaiki path |
| Mobile overflow | Sedang | Tinggi | Mobile-first, flexible media/grid, `min-width: 0`, uji lima viewport | Scroll horizontal/teks terpotong; regression test CSS |
| Accessibility regression | Sedang | Tinggi | Checklist per milestone, keyboard/manual test, contrast dan reduced motion test | Fokus hilang/heading salah; blok release sampai diperbaiki |
| Browser compatibility | Sedang | Sedang | API browser standar, feature detection, fallback tanpa JS, cross-browser test | Fitur gagal di Firefox/Safari; sederhanakan/beri fallback |
| Website sulit dijelaskan saat presentasi | Sedang | Tinggi | Modul kecil, nama deskriptif, diagram sederhana, catatan keputusan, rehearsal | Pemilik tidak dapat menjelaskan fitur; kurangi kompleksitas |
| Scope creep | Sedang | Sedang | Stop per milestone, perubahan scope dicatat, prioritaskan halaman wajib | Milestone bertambah tanpa acceptance criteria |
| Konten placeholder ikut production | Sedang | Tinggi | Pencarian `TODO`, content gate dan production checklist | `TODO` tampil sebagai fakta final |
| Informasi sensitif masuk CV/sertifikat | Sedang | Tinggi | Review manual, redaksi dengan izin, minimisasi data | Nomor/alamat sensitif terlihat; tarik aset dan ganti |
| Contrast buruk pada gradient/glass | Sedang | Tinggi | Overlay stabil, token warna, test contrast kedua tema | Teks sulit dibaca pada card/background |
| Intro menghalangi akses | Sedang | Tinggi | Session-only, tombol skip, timeout singkat, konten default visible | Fokus terkunci atau repeat setiap load; nonaktifkan intro |
| Filter/lightbox kehilangan fokus | Sedang | Tinggi | Dialog native bila tepat, focus trap/return, keyboard test | Fokus ke body/item tersembunyi; perbaiki sebelum release |
| Media terlalu besar | Sedang | Sedang | Kompres, poster, preload metadata/none, batas ukuran yang ditinjau | Load lambat/data tinggi; optimasi atau external strategy berizin |
| Static form disalahpahami | Sedang | Sedang | Copy eksplisit bahwa tidak ada backend; action ke Success | Pengunjung mengira pesan terkirim; perjelas CTA/copy |
| Perbedaan Netlify dan GitHub Pages | Sedang | Sedang | Hindari root-relative path, test preview di target, dokumentasikan 404 | Aset gagal pada subpath; pilih/configure platform |
| Custom cursor mengganggu | Rendah | Sedang | Opsional, hanya fine pointer, reduced motion off, native fallback | Lag/visibility buruk; hapus fitur |

## Risiko utama milestone 1

1. **Data dan aset belum terverifikasi:** dapat menahan integrasi konten, sehingga `TODO` harus dipertahankan dan tidak disamarkan sebagai fakta.
2. **Kompleksitas animasi:** daftar animasi cukup luas untuk proyek akademik; implementasi perlu bertahap dan boleh disederhanakan jika performa atau kemampuan menjelaskan menurun.
3. **Kompatibilitas path deployment:** perbedaan root site dan GitHub Pages subpath harus memengaruhi seluruh keputusan URL sejak scaffold.
4. **Aksesibilitas sebagai regression risk:** navigasi mobile, filter, lightbox, media, dan intro memerlukan pengujian keyboard/reduced motion sejak dibuat, bukan hanya di akhir.
