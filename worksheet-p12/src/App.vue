<script setup>
import FormKontak from './components/FormKontak.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import TombolFilter from './components/TombolFilter.vue'
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import { onMounted, watch } from 'vue'
import {
  state,
  simpan,
  muat,
  pulihkan,
  isiProyek,
} from './state.js'
import { ambilProyek } from './api.js'

onMounted(async () => {
  pulihkan(muat())

  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat =
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
  <KepalaProfil :profil="profil" />
      <!-- TODO C.1: buat <header> di sini.
       Isinya: satu <h1> berisi judul halaman Anda.
       Di dalamnya juga ada <nav> berisi 3 tautan ke bagian halaman. -->
      <header>
        <div class="header-baris">
          <input type="checkbox" id="tema" class="pengalih-tema" />
          <label for="tema" class="tombol-tema">Tema Gelap</label>

          <h1>Menu Makanan Ala Anak kos Hemat Dan Mengenyangkan</h1>

          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#form">Form Pesanan</a></li>
              <li><a href="#tentang">Tentang</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <!-- TODO C.2: buat <main> di sini sebagai pembungkus semua bagian isi.
       Di dalamnya ada 2 <section>, masing-masing punya <h2> sendiri. -->
      <main class="isi">
        <!-- TODO D.1: di dalam section pertama, buat tabel data Anda.
         Wajib ada: <caption>, <thead>, <th scope="col">, dan minimal 3 baris data. -->
        <section id="menu">
          <h2>Menu Makanan</h2>

          <figure>
            <img
  src="./assets/menu-makanan.webp"
  alt="Menu makanan hemat untuk anak kos"
  width="640"
  height="360"
  loading="lazy"
/>
            <figcaption>Best recomended</figcaption>
          </figure>

          <div class="table-wrap">
          <table> 
            <caption>
              Daftar Menu Makanan
            </caption>

            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Makanan</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>

            <tbody class="katalog">
              <tr class="kartu">
                <td>1</td>
                <td>Nasi Dadar 2 Telur</td>
                <td>Rp. 15.000</td>
              </tr>
              <tr class="kartu">
                <td>2</td>
                <td>Nasi Ayam Sip</td>
                <td>Rp. 10.000</td>
              </tr>
              <tr class="kartu">
                <td>3</td>
                <td>Ayam balungan</td>
                <td>Rp. 12.000</td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>

        <!-- TODO E.1: di dalam section kedua, buat form Anda.
         Wajib ada: minimal 3 kolom, setiap kolom punya <label for> yang
         cocok dengan id input-nya, dan satu atribut validasi. -->

<section id="proyek">
  <h2>Proyek Saya</h2>

  <TombolFilter />

  <DaftarProyek />
</section>


 <FormKontak />

      </main>

      <!-- TODO C.3: buat <footer> di sini.
       Isinya: nama Anda, NIM Anda, dan tahun. -->
    <footer id="tentang">
  <p>Nama: <span id="namaProfil"></span></p>
  <p>NIM: <span id="nimProfil"></span></p>
  <p>Tahun: <span id="tahunProfil"></span></p>
</footer>
    </div>
</template>
