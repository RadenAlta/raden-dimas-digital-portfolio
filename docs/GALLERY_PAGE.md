# Gallery Page

Halaman `gallery.html` berisi hero, breadcrumb, pengantar, filter, result count, grid, empty state, dialog lightbox, CTA, dan footer. Sembilan gambar credential lokal digunakan; kategori Projects dan Learning Activities sengaja kosong. Pengguna mengizinkan publikasi utuh gambar Dicoding Bootcamp, AKIRA 5, dan halaman pertama sertifikat Bangkit. Halaman Student Learning Achievement Bangkit tidak dipublikasikan. Google Certified Educator dan Gemini kini menggunakan gambar lokal.

`assets/js/gallery.js` mengatur filter, reset, result count, dialog, backdrop, focus return, dan scroll lock. Dialog memiliki nama yang dapat diakses, dapat ditutup dengan tombol, Escape bawaan elemen `dialog`, atau backdrop. Tanpa JavaScript semua figure dan caption tetap tersedia.

Pengujian: periksa semua filter, empty state, pembukaan/penutupan dialog, Escape, focus return, keyboard, tema, dan viewport 390/768/1440 px. TODO: tambahkan gambar Projects atau Learning Activities hanya setelah aset asli aman tersedia.
