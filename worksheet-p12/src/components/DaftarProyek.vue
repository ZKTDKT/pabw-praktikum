<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)
</script>

<template>
  <div>
    <p v-if="state.memuat">Memuat proyek...</p>

    <p v-else-if="state.galat">
      {{ state.galat }}
    </p>

    <p v-else-if="tampil.length === 0">
      Belum ada proyek.
    </p>

    <ul>
      <li
        v-for="proyek in tampil"
        :key="proyek.id"
        class="kartu"
      >
        {{ proyek.judul }}

        <button
          type="button"
          class="favorit"
          :data-id="proyek.id"
          :aria-label="`Favorit ${proyek.judul}`"
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </li>
    </ul>
  </div>
</template>