# Contact Page — Milestone 10

Contact menampilkan empat metode terverifikasi: email, LinkedIn, GitHub, dan Bogor, Jawa Barat, Indonesia. Setiap kartu memakai ikon SVG lokal yang sesuai dengan jenis kanal; ikon dekoratif menggunakan `currentColor`, `aria-hidden`, dan `focusable="false"`. Kartu lokasi hanya menampilkan lokasi umum tanpa alamat jalan atau embed peta. Form statis memvalidasi nama, email, topik, subjek, pesan, dan persetujuan di browser. Tidak ada action server, fetch, database, storage, cookie, atau analytics.

Submit valid membuat mailto dengan subject dan body melalui `encodeURIComponent`, lalu menampilkan prepared-email state. Pengguna harus memilih “Buka Aplikasi Email” dan tetap menekan kirim di aplikasi email. Error terkait melalui `aria-describedby`, `aria-invalid`, field error, dan summary. Copy hanya menyalin alamat email dan melaporkan hasil lewat `aria-live`.

Tanpa JavaScript, metode kontak serta seluruh penjelasan tetap tersedia; form tidak menyesatkan sebagai pengiriman server. Uji kasus: kosong, batas panjang, email invalid, consent, data valid, edit, reset, counter, copy, serta mailto. TODO: browser test dan review deployment; integrasi backend tidak diterapkan.
