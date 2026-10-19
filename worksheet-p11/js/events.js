import {
    pilihKategori,
    tambahFavorit
} from "./state.js";

export function pasangPendengar() {
    const barisFilter = document.querySelector("#filter");

    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol || !barisFilter.contains(tombol)) return;

        pilihKategori(tombol.dataset.kategori);
    });

const wadah = document.querySelector("#daftar");

wadah.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");

    if (!tombol) return;

    tambahFavorit(Number(tombol.dataset.id));
});

    const formPesanan = document.querySelector("#form form");
    const inputNama = document.querySelector("#nama");
    const inputMenu = document.querySelector("#Menu-Pesanan");
    const inputJumlah = document.querySelector("#jumlah");

    const tombolKirim = formPesanan.querySelector(
        'button[type="submit"]'
    );

    const statusPesanan = document.querySelector("#status-pesanan");

    const kolomForm = [
        inputNama,
        inputMenu,
        inputJumlah
    ];

    function kolomSah(kolom) {
        const nilai = kolom.value.trim();

        if (nilai === "") return false;

        if (kolom === inputJumlah) {
            return Number.isInteger(Number(nilai))
                && Number(nilai) >= 1;
        }

        return true;
    }

    function perbaruiPesan(kolom) {
        const sah = kolomSah(kolom);
        const pembungkus = kolom.closest(".form-kolom");
        const pesan = pembungkus.querySelector(".pesan-galat");

        if (sah) {
            kolom.removeAttribute("aria-invalid");
            pesan.classList.remove("tampil");
        } else {
            kolom.setAttribute("aria-invalid", "true");
            pesan.classList.add("tampil");
        }

        return sah;
    }

    function perbaruiTombolKirim() {
        tombolKirim.disabled = !kolomForm.every(
            (kolom) => kolomSah(kolom)
        );
    }

    kolomForm.forEach((kolom) => {
        kolom.addEventListener("input", () => {
            perbaruiPesan(kolom);
            perbaruiTombolKirim();
        });
    });

    formPesanan.addEventListener("submit", (event) => {
        event.preventDefault();

        statusPesanan.hidden = true;
        statusPesanan.textContent = "";

        kolomForm.forEach((kolom) => {
            perbaruiPesan(kolom);
        });

        perbaruiTombolKirim();

        const kolomSalah = kolomForm.find(
            (kolom) => !kolomSah(kolom)
        );

        if (kolomSalah) {
            kolomSalah.focus();
            return;
        }

        statusPesanan.textContent =
            "Validasi berhasil. Data pesanan siap diproses.";

        statusPesanan.hidden = false;
    });

    perbaruiTombolKirim();
}
