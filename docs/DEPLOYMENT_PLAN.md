# Deployment Plan

## Local development

- Jalankan situs dari root proyek menggunakan basic static web server.
- Jangan memakai build tool; root publik adalah root repository.
- Uji URL halaman melalui HTTP lokal agar path, media, module behavior, dan 404 dapat dinilai secara realistis.
- Simpan semua aset pada path lokal dan hindari absolute filesystem path di source.

## Pilihan static hosting

### Netlify

- Hubungkan repository atau lakukan deploy folder root secara terkontrol.
- Publish directory: root proyek; build command: kosong/tidak ada.
- Tambahkan konfigurasi hanya bila diperlukan untuk 404, security header, atau cache.
- Pastikan `404.html` dikenali oleh platform.
- Form tetap versi akademik statis menuju `success.html`; jangan mengaktifkan atau mengklaim Netlify Forms tanpa keputusan terpisah.

### GitHub Pages

- Publikasikan dari branch/folder yang disetujui pengguna.
- Gunakan relative URL agar aset bekerja jika situs berada pada subpath repository.
- Pastikan kapitalisasi nama file cocok karena hosting bersifat case-sensitive.
- Uji `404.html`; perilaku custom 404 dapat berbeda untuk project site.

Platform final dipilih pengguna setelah preview kedua opsi atau berdasarkan kebutuhan penilaian.

## Path validation

- Semua halaman root merujuk aset melalui `assets/...` dan halaman melalui nama file relatif.
- Hindari path berawalan `/` bila deployment GitHub Pages memakai subpath.
- Periksa link, gambar, poster, track caption, audio, video, PDF, favicon, dan social preview.
- Uji direct URL serta refresh setiap halaman pada production.
- Periksa filename case dan karakter aman.

## Custom domain

- `TODO`: tentukan apakah custom domain diperlukan.
- `TODO`: konfirmasi nama domain, kepemilikan, registrar, DNS, canonical URL, dan redirect `www`/non-`www`.
- Jangan menambahkan DNS atau canonical production sebelum URL dikonfirmasi.

## Production checklist

- [ ] Seluruh sebelas halaman tersedia dan title/description unik.
- [ ] Semua data personal dan klaim telah disetujui.
- [ ] Semua `TODO` ditangani secara sengaja.
- [ ] Tidak ada broken link, missing asset, atau console error.
- [ ] Path bekerja pada subpath dan case-sensitive host.
- [ ] Form valid mengarah ke Success tanpa klaim penyimpanan/pengiriman.
- [ ] 404, Privacy, video, audio, caption, transcript, dan CV diuji.
- [ ] Lima viewport wajib, keyboard, contrast, dan reduced motion diuji.
- [ ] Gambar/media dioptimalkan dan tidak autoplay.
- [ ] Favicon, social preview, robots/canonical strategy ditinjau.
- [ ] Tidak ada secret, file personal sensitif, dependency, atau build artifact tak perlu.
- [ ] Repository/status Git bersih sesuai keputusan pengguna; deployment tidak dilakukan tanpa izin.

## Post-deployment testing

1. Buka Home dan setiap halaman melalui navigasi production.
2. Buka URL halaman langsung dan lakukan refresh.
3. Uji URL salah untuk memastikan pemulihan 404.
4. Uji form, theme persistence, gallery/lightbox, project filter, video/audio, dan download CV.
5. Uji keyboard dan reduced motion pada production.
6. Periksa console, network 404, MIME type, mixed content, dan caching.
7. Jalankan audit performance/accessibility dan bandingkan dengan local.
8. Catat URL, tanggal deployment, revision, hasil test, dan rollback plan.
