# Credentials Page

Halaman `credentials.html` menampilkan tepat sembilan credential terkonfirmasi: Bangkit 2024 Batch 2, Dicoding Bootcamp Batch 5, Badan Ekraf Digital Talent 2026, Productivity with AI Bootcamp, Microsoft Elevate Data & AI, Google Certified Educator Level 1, Siswa Tersertifikasi Gemini — Universitas, AKIRA 5 Bahasa Jepang, dan International Millennial Summit.

Filter memakai token `mobile`, `data-ai`, `education`, `language`, `international`, dan `participation`. `assets/js/credentials.js` mengatur filter, `aria-pressed`, result count, empty state, dan reset tanpa menghapus card dari DOM. Tanpa JavaScript, sembilan card tetap terlihat.

Gambar lokal digunakan hanya untuk BDT Participation, Productivity with AI, Microsoft Elevate, dan IMS. Bangkit, Dicoding, Google, Gemini, dan AKIRA memakai fallback CSS. Data pendidikan lama, ID program/tim, nilai, kehadiran, nomor sertifikat/registrasi yang tidak diperlukan, serta data mentah verifiable credential tidak dipublikasikan.

Pengujian: periksa tujuh filter dan jumlah hasil, reset, keyboard/focus, satu `h1`, kedua URL verifikasi Google, tampilan 390/768/1440 px, tema gelap/terang, serta perilaku tanpa JavaScript.

TODO: sediakan aset lokal yang telah disanitasi untuk card fallback bila tersedia dan disetujui.
