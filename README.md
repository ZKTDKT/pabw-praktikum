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