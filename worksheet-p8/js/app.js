const nama = "ALDI";
const nim = "25523188";
const peran = "Mahasiswa Informatika";

const keahlian = [
  "HTML",
  "CSS",
  "JavaScript"
];

const jumlahProyek = 3;

const profil = {
  nama: nama,
  nim: nim,
  peran: peran,
  keahlian: keahlian
};

let pilihanAktif = "semua";

const namaTampilan = null ?? nama;

const profilAman = {
  alamat: {
    kota: "Yogyakarta"
  }
};

const kota = profilAman.alamat?.kota ?? "Kota belum diisi";

console.log(pilihanAktif);
console.log(namaTampilan);
console.log(kota);
const kalimat = `Nama saya ${profil.nama}, saya ${profil.peran}.`;

console.log(nama);
console.log(nim);
console.log(peran);
console.log(keahlian);
console.log(jumlahProyek);
console.log(kalimat);
console.log(profil);