
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");
const muatEl = document.querySelector("#muat");
const namaProfil = document.querySelector("#namaProfil");
const nimProfil = document.querySelector("#nimProfil");
const tahunProfil = document.querySelector("#tahunProfil");

export function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul;

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

export function render(state) {
    wadah.textContent = "";

    const tampil = state.daftarProyek.filter(
        (proyek) =>
            state.kategoriAktif === "semua" ||
            proyek.kategori === state.kategoriAktif
    );

    tandaiTombolAktif(state.kategoriAktif);

    if (tampil.length === 0) {
        kosong.textContent = "Belum ada proyek.";
        kosong.hidden = false;
        return;
    }

    kosong.hidden = true;

    tampil.forEach((proyek) => {
        wadah.append(buatKartu(proyek));
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