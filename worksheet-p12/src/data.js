export const profil = {
    nama : "ALDI",
    nim : "25523188",
    peran : "Mahasiswa Informatika",
    keahlian : ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

export const tahun = 2026;

export function saring(daftar, kategori) {
    return daftar.filter(
        (proyek) =>
            kategori === "semua" ||
            proyek.kategori === kategori
    );
}