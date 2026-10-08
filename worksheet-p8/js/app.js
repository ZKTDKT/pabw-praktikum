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
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}
const formatKeahlian = (daftar) => daftar.join(" · ");

const kalimat = buatPerkenalan(profil);

console.log(nama);
console.log(nim);
console.log(peran);
console.log(keahlian);
console.log(jumlahProyek);
console.log(kalimat);
console.log(formatKeahlian(profil.keahlian));
console.log(profil);
console.log(buatPerkenalan({
  nama: "Budi",
  peran: "Mahasiswa Teknik"
}));

console.log(buatPerkenalan({
  nama: "Sinta",
  peran: "Web Developer"
}));

console.log(buatPerkenalan({
  nama: "Raka",
  peran: "UI/UX Designer"
}));

console.log(formatKeahlian(["HTML", "CSS"]));
console.log(formatKeahlian(["JavaScript", "PHP", "MySQL"]));
console.log(formatKeahlian(["Java", "Python", "R"]));