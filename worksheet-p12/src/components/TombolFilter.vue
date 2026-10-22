<script setup>
import { pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <button type="button" id="atur-ulang" @click="aturUlang">
      Atur ulang
    </button>

    <button type="button" @click="pilihKategori('semua')">
      Semua
    </button>

    <button type="button" @click="pilihKategori('menu')">
      Menu
    </button>

    <button type="button" @click="pilihKategori('profil')">
      Profil
    </button>

    <button type="button" @click="pilihKategori('javascript')">
      JavaScript
    </button>

    <button type="button" @click="pilihKategori('lainnya')">
      Lainnya
    </button>
  </div>
</template>