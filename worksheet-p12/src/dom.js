import { saring } from "./data.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");
const muatEl = document.querySelector("#muat");
const namaProfil = document.querySelector("#namaProfil");
const nimProfil = document.querySelector("#nimProfil");
const tahunProfil = document.querySelector("#tahunProfil");


export function buatKartu(proyek, favorit) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "favorit";
    tombol.dataset.id = proyek.id;

    tombol.textContent = favorit.includes(proyek.id)
        ? "★"
        : "☆";

    li.append(tombol);

    return li;
}


function tandaiTombolAktif(kategoriAktif) {
    barisFilter.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori === kategoriAktif
        );
    });
}



export function aturMemuat(aktif) {
    muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
    wadah.textContent = "";
    kosong.textContent = pesan;
    kosong.hidden = false;
}

export function tampilkanProfil(profil, tahun) {
    namaProfil.textContent = profil.nama;
    nimProfil.textContent = profil.nim;
    tahunProfil.textContent = tahun;
}