
import { ambilProyek } from "./api.js";
import { profil, tahun } from "./data.js";
import { isiProyek, pulihkan, muat } from "./state.js";

import {
    tampilkanProfil,
    tampilkanGalat,
    aturMemuat
} from "./dom.js";

import { pasangPendengar } from "./events.js";

async function mulai() {
    pulihkan(muat());

    tampilkanProfil(profil, tahun);
    pasangPendengar();
    aturMemuat(true);

    try {
        const daftar = await ambilProyek();
        isiProyek(daftar);
    } catch (galat) {
        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang."
        );
    } finally {
        aturMemuat(false);
    }
}

mulai();
