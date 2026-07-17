# Motion System — Milestone 11

Motion memperkuat hierarki melalui progressive enhancement. Root `.motion-ready` hanya ditambahkan setelah DOM, elemen reveal, preferensi motion, dan `IntersectionObserver` siap. Tanpa JavaScript, tanpa observer, ketika terjadi error, atau pada reduced motion, konten selalu terlihat.

Satu observer menangani `data-reveal` dengan varian fade-up, fade-in, slide-left, dan slide-right, lalu `unobserve` setelah reveal pertama. Stagger terbatas pada empat class dengan delay 60–240 ms. Hook diterapkan pada heading, card, timeline, CTA, Privacy, dan Success tanpa mengubah urutan DOM atau fokus.

Typing Home memakai Web Development, Mobile Development, Data Science, dan Artificial Intelligence selama maksimal dua siklus, lalu berhenti pada Artificial Intelligence. Output animasi `aria-hidden`; teks lengkap tersedia melalui `.sr-only`. Timer memakai `setTimeout`, berhenti saat tab tersembunyi, dilanjutkan tanpa timer ganda, dan tidak memakai storage. Reduced motion menampilkan satu teks statis lengkap tanpa caret.

Card interaksi hanya aktif pada pointer presisi dengan perpindahan maksimal 3 px. Lightbox, error summary, dan prepared state memakai entrance singkat tanpa menunda fokus. Timeline hanya reveal sekali. Tidak ada counter, terminal loader, canvas, cursor custom, parallax, equalizer, autoplay, atau loop `requestAnimationFrame`.

Fungsi utama: `prefersReducedMotion`, `getRevealElements`, `revealAllElements`, `applyRevealHooks`, `initScrollReveal`, `renderStaticTypingText`, `initTypingText`, `handleMotionPreferenceChange`, dan `initMotionSystem`. Class utama: `.motion-ready`, `.is-revealed`, `.reveal-delay-1..4`, `.typing-text`, `.typing-text__output`, dan `.typing-text__cursor`.

Matriks pengujian manual: JavaScript aktif/nonaktif, observer tidak tersedia, reduced motion berubah saat runtime, dua siklus typing, tab hidden/visible, filter Projects/Credentials/Gallery, dialog, Contact, kedua tema, keyboard, dan viewport 390/768/1440. TODO Milestone 12: audit lintas browser dan performa akhir; tidak diimplementasikan pada milestone ini.
