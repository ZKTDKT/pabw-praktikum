
<script setup>
import { ref, reactive, computed } from 'vue'

const nama = ref('')
const menuPesanan = ref('')
const jumlah = ref('')
const statusPesanan = ref('')

const tersentuh = reactive({
  nama: false,
  menu: false,
  jumlah: false,
})

const namaSah = computed(() => nama.value.trim() !== '')
const menuSah = computed(() => menuPesanan.value.trim() !== '')
const jumlahSah = computed(() =>
  Number.isInteger(Number(jumlah.value)) &&
  jumlah.value !== '' &&
  Number(jumlah.value) >= 1
)

const semuaSah = computed(() =>
  namaSah.value && menuSah.value && jumlahSah.value
)

function bersihkanStatus() {
  statusPesanan.value = ''
}

function kirimPesanan() {
  tersentuh.nama = true
  tersentuh.menu = true
  tersentuh.jumlah = true

  if (!semuaSah.value) {
    statusPesanan.value = ''
    return
  }

  statusPesanan.value =
    'Validasi berhasil. Data pesanan siap diproses.'
}
</script>

<template>
  <section id="form">
    <h2>Form Pesanan</h2>

    <form novalidate @submit.prevent="kirimPesanan">
      <div class="form-kolom">
        <label for="nama">Nama:</label>
        <input
          id="nama"
          v-model="nama"
          type="text"
          name="nama"
          required
          :aria-invalid="tersentuh.nama && !namaSah ? 'true' : undefined"
          @input="tersentuh.nama = true; bersihkanStatus()"
        />
        <p
          class="pesan-galat"
          :class="{ tampil: tersentuh.nama && !namaSah }"
        >
          Nama wajib diisi. Masukkan nama terlebih dahulu.
        </p>
      </div>

      <div class="form-kolom">
        <label for="Menu-Pesanan">Menu Pesanan:</label>
        <input
          id="Menu-Pesanan"
          v-model="menuPesanan"
          type="text"
          name="Menu-Pesanan"
          required
          :aria-invalid="tersentuh.menu && !menuSah ? 'true' : undefined"
          @input="tersentuh.menu = true; bersihkanStatus()"
        />
        <p
          class="pesan-galat"
          :class="{ tampil: tersentuh.menu && !menuSah }"
        >
          Menu pesanan wajib diisi. Masukkan nama menu.
        </p>
      </div>

      <div class="form-kolom">
        <label for="jumlah">Jumlah:</label>
        <input
          id="jumlah"
          v-model="jumlah"
          type="number"
          name="jumlah"
          min="1"
          step="1"
          required
          :aria-invalid="tersentuh.jumlah && !jumlahSah ? 'true' : undefined"
          @input="tersentuh.jumlah = true; bersihkanStatus()"
        />
        <p
          class="pesan-galat"
          :class="{ tampil: tersentuh.jumlah && !jumlahSah }"
        >
          Jumlah harus berupa bilangan bulat minimal 1.
        </p>
      </div>

      <p
        id="status-pesanan"
        role="status"
        :hidden="!statusPesanan"
      >
        {{ statusPesanan }}
      </p>

      <button type="submit" :disabled="!semuaSah">
        Simpan
      </button>
    </form>
  </section>
</template>
