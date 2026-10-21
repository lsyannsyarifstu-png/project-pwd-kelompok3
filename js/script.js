const tombolTema = document.getElementById("tombol-tema");

// Mode gelap
if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    tombolTema.textContent = document.body.classList.contains("gelap")
      ? "Mode Terang"
      : "Mode Gelap";
  });
}

// Data kegiatan
const kegiatan = [
  {
    id: 1,
    nama: "Sosialisasi Permendikbudristek No. 55 Tahun 2024",
    kategori: "sosialisasi",
    tanggal: "12 November 2026",
    lokasi: "Auditorium Politeknik Negeri Cilacap",
    deskripsi:
      "Sosialisasi kebijakan pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi.",
  },
  {
    id: 2,
    nama: "Pelatihan Peer Counselor Mahasiswa PNC",
    kategori: "pelatihan",
    tanggal: "20 November 2026",
    lokasi: "Ruang Seminar Gedung A",
    deskripsi:
      "Pelatihan konselor sebaya untuk memberikan dukungan awal kepada mahasiswa.",
  },
  {
    id: 3,
    nama: "Kampanye Kampus Aman & Bebas Kekerasan",
    kategori: "kampanye",
    tanggal: "27 November 2026",
    lokasi: "Plaza Utama Kampus PNC",
    deskripsi: "Kampanye edukasi untuk mewujudkan lingkungan kampus yang aman.",
  },
  {
    id: 4,
    nama: "FGD Penyusunan SOP Penanganan Aduan",
    kategori: "diskusi",
    tanggal: "4 Desember 2026",
    lokasi: "Ruang Rapat Satgas PPKPT",
    deskripsi:
      "Diskusi penyempurnaan alur layanan pelaporan yang aman dan rahasia.",
  },
  {
    id: 5,
    nama: "Workshop Pertolongan Pertama Trauma Psikologis",
    kategori: "pelatihan",
    tanggal: "11 Desember 2026",
    lokasi: "Laboratorium Terpadu",
    deskripsi:
      "Workshop pengenalan pertolongan pertama psikologis bagi relawan.",
  },
];

const daftar = document.getElementById("daftarKegiatan");
const pencarian = document.getElementById("cariKegiatan");
const filter = document.getElementById("kategoriKegiatan");
const pesanKosong = document.getElementById("pesanKosong");
const modal = document.getElementById("modalKegiatan");
const detail = document.getElementById("detailKegiatan");
const tombolTutup = document.getElementById("tutupModal");

// Jalankan hanya jika elemen halaman kegiatan tersedia
if (daftar && pencarian && filter) {
  function tampilkanKegiatan() {
    const kataKunci = pencarian.value.toLowerCase().trim();
    const kategori = filter.value;

    const hasil = kegiatan.filter(
      (item) =>
        item.nama.toLowerCase().includes(kataKunci) &&
        (kategori === "semua" || item.kategori === kategori),
    );

    daftar.innerHTML = hasil
      .map(
        (item) => `
      <article class="kartu-kegiatan">
        <span class="label-kategori">${item.kategori}</span>
        <h3>${item.nama}</h3>
        <p><strong>Tanggal:</strong> ${item.tanggal}</p>
        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
        <button type="button" class="btn-detail"
                data-id="${item.id}">Lihat Detail</button>
      </article>
    `,
      )
      .join("");

    if (pesanKosong) {
      pesanKosong.hidden = hasil.length !== 0;
    }
  }

  // Tombol detail
  daftar.addEventListener("click", function (event) {
    const tombol = event.target.closest(".btn-detail");
    if (!tombol) return;

    const item = kegiatan.find((k) => k.id === Number(tombol.dataset.id));

    if (!item || !modal || !detail) return;

    detail.innerHTML = `
      <p><strong>Kategori:</strong> ${item.kategori}</p>
      <p><strong>Tanggal:</strong> ${item.tanggal}</p>
      <p><strong>Lokasi:</strong> ${item.lokasi}</p>
      <p><strong>Deskripsi:</strong> ${item.deskripsi}</p>
    `;

    modal.hidden = false;
    modal.classList.add("aktif");
    if (tombolTutup) tombolTutup.focus();
  });

  // Pencarian dan filter
  pencarian.addEventListener("input", tampilkanKegiatan);
  filter.addEventListener("change", tampilkanKegiatan);

  tampilkanKegiatan();
}

// Tutup modal
if (tombolTutup && modal) {
  tombolTutup.addEventListener("click", function () {
    modal.classList.remove("aktif");
    modal.hidden = true;
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("aktif");
      modal.hidden = true;
    }
  });
}
