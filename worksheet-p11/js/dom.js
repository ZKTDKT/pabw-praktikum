
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");
const muatEl = document.querySelector("#muat");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;

  return li;
}

export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.textContent = "Belum ada proyek.";
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) return;

    const kategori = tombol.dataset.kategori;

    const terpilih = daftar.filter(
      (proyek) =>
        kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });

  tandaiTombolAktif(
    barisFilter.querySelector('[data-kategori="semua"]')
  );
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.textContent = pesan;
  kosong.hidden = false;
}

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

  if (nilai === "") {
    return false;
  }

  if (kolom === inputJumlah) {
    return Number.isInteger(Number(nilai)) && Number(nilai) >= 1;
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
  const semuaSah = kolomForm.every((kolom) =>
    kolomSah(kolom)
  );

  tombolKirim.disabled = !semuaSah;
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

  const kolomPertamaSalah = kolomForm.find(
    (kolom) => !kolomSah(kolom)
  );

  if (kolomPertamaSalah) {
    kolomPertamaSalah.focus();
    return;
  }

  statusPesanan.textContent =
    "Validasi berhasil. Data pesanan siap diproses.";
  statusPesanan.hidden = false;
});

perbaruiTombolKirim();


