# pabw-praktikum
Latihan PABW

# PABW — ALDI — 25523188

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman Menu Makanan

Topik halaman saya: Menu Makanan Ala Anak Kos Hemat dan Mengenyangkan.

- Judul halaman: Menu Makanan Ala Anak Kos Hemat dan Mengenyangkan
- Deskripsi: halaman yang berisi daftar menu makanan sederhana dan hemat untuk anak kos.
- Tautan navigasi: Menu, Form Pesanan, Tentang
- Dua bagian utama: Menu Makanan, Form Pesanan
- Kolom tabel: No, Nama Makanan, Harga
- Kolom form: Nama, Menu Pesanan, Jumlah
- Gambar: menu-makanan.webp

## Catatan penggunaan AI

AI membantu saya dalam memahami penggunaan Git dan GitHub.
AI juga membantu saya memahami elemen HTML yang digunakan dalam
halaman web dan membantu saya menyelesaikan beberapa masalah atau error.

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru), dipilih karena terlihat jelas dan mudah dibaca.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

### Kriteria selesai

Mengubah --color-primary di satu baris harus mengubah warna tombol dan tautan.

## Catatan penggunaan AI
AI membantu saya dalam mengetahui isi worksheet yang saya kurang pahami maksud didalamnya, ada bagian kode juga yang saya tidak pahami dan saya minta penjelasan ke AI, kenapa ini tidak berasil?




# Worksheet P5 - Layout Modern: Flexbox dan Grid

## Sketsa Kerangka Halaman

```text
┌───────────────────────────────────────┐
│               HEADER                  │
│     Tema Gelap + Judul + Navbar      │
│                Flex                  │
├───────────────────────────────────────┤
│                                       │
│             MENU MAKANAN              │
│          Galeri menggunakan Grid      │
│                                       │
├───────────────────────────────────────┤
│                                       │
│             FORM PESANAN              │
│        Isi form menggunakan Flex      │
│                                       │
├───────────────────────────────────────┤
│                FOOTER                 │
│           Nama, NIM, Tahun            │
└───────────────────────────────────────┘

--Kerangka Layout P5--
Baris halaman: auto 1fr auto
Kolom isi: 16rem 1fr
Navbar menggunakan Flexbox.
Galeri menu menggunakan Grid.
Galeri menggunakan repeat(auto-fit`, minmax(16rem, 1fr)).
Menu dan Form menggunakan area bernama.

## Pertemuan 6 — Responsif Mobile-First


Membuat halaman responsif menggunakan viewport, satuan relatif, dan media query.

Pengujian dilakukan pada:
- 360 px
- 768 px
- 1280 px


## Deklarasi AI Pertemuan 8

Saya menggunakan AI untuk membantu memahami instruksi worksheet dan membantu saya bial terjadi error ini kenapa semua baik baik aja



# PABW Praktikum — Pertemuan 9

**Nama:** ALDI  
**NIM:** 25523188  
**Mata Kuliah:** Pengembangan Aplikasi Berbasis Web

## Deskripsi

Tugas ini merupakan praktikum Pertemuan 9 tentang DOM, Event, dan Interaktivitas menggunakan HTML, CSS, dan JavaScript.

Halaman web berisi menu makanan, daftar proyek, tombol filter, dan form pesanan.

## Fitur yang Dikerjakan

- Menampilkan daftar proyek dari data JavaScript.
- Membuat tombol filter berdasarkan kategori proyek.
- Menampilkan pesan ketika tidak ada proyek yang cocok.
- Memvalidasi form pesanan tanpa memuat ulang halaman.
- Menampilkan pesan kesalahan pada kolom yang belum benar.

## Struktur File

- `profil.html` — halaman utama.
- `tokens.css` — variabel desain.
- `base.css` — aturan dasar halaman.
- `layout.css` — pengaturan tata letak.
- `komponen.css` — tampilan komponen.
- `tema.css` — pengaturan tema.
- `responsif.css` — tampilan responsif.
- `js/app.js` — data profil dan proyek.
- `js/dom.js` — pengaturan DOM, filter, dan validasi form.
- `bukti/` — tangkapan layar pengujian.

## Penggunaan AI

menggunakan ChatGPT untuk membantu memahami instruksi tugas dan memperbaiki kode JavaScript. Saya menguji kode sendiri melalui browser dan Console, serta memeriksa hasil filter dan validasi form sebelum mengumpulkan tugas.


### Pertemuan 10 — JavaScript Asinkron

**Penggunaan AI:** 1. Membantu saya dalam menaro code di git, memberi nama
2. menanyakan struktur kesimpulan cepat worksheet, seperti disuruh ngpain
3. menanyakan kode tdk valid, nyasar
4. Membantu saya membuat kalimat jawaban sayaa menjadi bagus
5.dan menanyakan bukti apa saja yang perlu saya kirimkan


## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

### 1. Pemecahan Modul
JavaScript dibagi menjadi beberapa modul sesuai tanggung jawabnya:
- `js/data.js` — data dan fungsi pengolahan data.
- `js/state.js` — menyimpan dan mengubah keadaan aplikasi serta mengelola `localStorage`.
- `js/dom.js` — menampilkan data ke halaman.
- `js/events.js` — mengatur pendengar peristiwa.
- `js/app.js` — menghubungkan modul dan menjalankan aplikasi.
- `js/api.js` — mengambil data proyek dari server, dilanjutkan dari Pertemuan 10.

### 2. Penyimpanan Data
Aplikasi menggunakan `localStorage` dan JSON untuk menyimpan pilihan kategori aktif dan daftar favorit pengguna. Nilai bawaan digunakan jika belum ada data tersimpan. Data rusak ditangani menggunakan `try/catch`, dan nomor versi diperiksa sebelum data digunakan.

### 3. Pengujian
Pengujian dilakukan dengan membuat simpanan rusak melalui Console, memuat ulang halaman, dan memeriksa bahwa halaman tetap terbuka serta simpanan yang tidak valid dihapus. Pengujian versi skema juga dilakukan menggunakan data `{}`.

### 4. Data yang Tidak Disimpan
Token, kata sandi, dan data pribadi sensitif tidak disimpan di `localStorage` karena penyimpanan tersebut tidak terenkripsi.

### 5. Versi Node.js dan npm
- Node.js (`node -v`): `v24.22.0`
- npm (`npm -v`): `11.19.1`

### 6. Deklarasi Penggunaan AI
AI digunakan untuk membantu memahami instruksi worksheet, menjelaskan konsep modul JavaScript dan `localStorage`, serta membantu menyusun dokumentasi. Implementasi, pemeriksaan kode, dan pengujian akhir dilakukan oleh saya sendiri. Saran AI diperiksa kembali dan disesuaikan dengan hasil pekerjaan.

