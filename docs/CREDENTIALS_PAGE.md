# Credentials Page

Halaman `credentials.html` menampilkan tepat sembilan credential terkonfirmasi: Bangkit 2024 Batch 2, Dicoding Bootcamp Batch 5, Badan Ekraf Digital Talent 2026, Productivity with AI Bootcamp, Microsoft Elevate Data & AI, Google Certified Educator Level 1, Siswa Tersertifikasi Gemini — Universitas, AKIRA 5 Bahasa Jepang, dan International Millennial Summit.

Filter memakai token `mobile`, `data-ai`, `education`, `language`, `international`, dan `participation`. `assets/js/credentials.js` mengatur filter, `aria-pressed`, result count, empty state, dan reset tanpa menghapus card dari DOM. Tanpa JavaScript, sembilan card tetap terlihat.

Gambar lokal digunakan untuk BDT Participation, Productivity with AI, Microsoft Elevate, IMS, Dicoding Bootcamp, dan AKIRA 5. Pengguna mengizinkan gambar Dicoding dan AKIRA ditampilkan secara utuh, termasuk nomor yang tercetak di dalam gambar; nomor tersebut tidak disalin menjadi metadata atau teks HTML. Bangkit, Google, dan Gemini tetap memakai fallback CSS. Data pendidikan lama, ID program/tim, nilai, kehadiran, serta data mentah verifiable credential tidak dipublikasikan.

Pengujian: periksa tujuh filter dan jumlah hasil, reset, keyboard/focus, satu `h1`, kedua URL verifikasi Google, tampilan 390/768/1440 px, tema gelap/terang, serta perilaku tanpa JavaScript.

Tombol “Lihat Sertifikat” pada kartu Dicoding dan AKIRA memakai dialog pratinjau yang sama dengan Gallery. TODO: sediakan aset lokal yang telah disetujui untuk card fallback lain bila tersedia.
