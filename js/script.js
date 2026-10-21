// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}

// ===== BAGIAN MAHASISWA 2 (Beranda) =====

// ===== BAGIAN MAHASISWA 3 (Wulan halaman kegiatan) =====
const kegiatan = [
  {
    id: 1,
    nama: "Sosialisasi Permendikbudristek No. 55 Tahun 2024",
    kategori: "sosialisasi",
    tanggal: "12 November 2026",
    lokasi: "Auditorium Politeknik Negeri Cilacap",
    deskripsi: "Sosialisasi kebijakan pencegahan dan penanganan kekerasan di lingkungan perguruan tinggi bagi seluruh mahasiswa baru dan perwakilan ormawa."
  },
  {
    id: 2,
    nama: "Pelatihan Peer Counselor Mahasiswa PNC",
    kategori: "pelatihan",
    tanggal: "20 November 2026",
    lokasi: "Ruang Seminar Gedung A",
    deskripsi: "Pelatihan pembekalan konselor sebaya untuk memberikan dukungan awal yang aman dan berempati kepada rekan mahasiswa."
  },
  {
    id: 3,
    nama: "Kampanye Kampus Aman & Bebas Kekerasan",
    kategori: "kampanye",
    tanggal: "27 November 2026",
    lokasi: "Plaza Utama Kampus PNC",
    deskripsi: "Aksi kampanye damai, pembagian materi edukasi, serta penandatanganan komitmen bersama civitas akademika demi lingkungan kampus aman."
  },
  {
    id: 4,
    nama: "FGD Penyusunan SOP Penanganan Aduan",
    kategori: "diskusi",
    tanggal: "4 Desember 2026",
    lokasi: "Ruang Rapat Satgas PPKPT",
    deskripsi: "Diskusi kelompok terarah bersama dosen, tenaga kependidikan, dan mahasiswa dalam menyempurnakan alur layanan pelaporan yang aman dan rahasia."
  },
  {
    id: 5,
    nama: "Workshop Pertolongan Pertama Trauma Psikologis",
    kategori: "pelatihan",
    tanggal: "11 Desember 2026",
    lokasi: "Laboratorium Terpadu",
    deskripsi: "Workshop pengenalan prinsip psychological first aid bagi pengurus ormawa dan relawan satgas."
  },
];

const daftarKegiatan = document.getElementById("daftarKegiatan");
const cariKegiatan = document.getElementById("cariKegiatan");
const kategoriKegiatan = document.getElementById("kategoriKegiatan");
const pesanKosong = document.getElementById("pesanKosong");
const modal = document.getElementById("modalKegiatan");
const detailKegiatan = document.getElementById("detailKegiatan");
const tutupModal = document.getElementById("tutupModal");

if (daftarKegiatan && cariKegiatan && kategoriKegiatan) {
  function tampilkanKegiatan() {
    const kataKunci = cariKegiatan.value.toLowerCase().trim();
    const kategori = kategoriKegiatan.value;

    const hasil = kegiatan.filter(item => {
      const cocokNama = item.nama.toLowerCase().includes(kataKunci);
      const cocokKategori = kategori === "semua" || item.kategori === kategori;
      return cocokNama && cocokKategori;
    });

    daftarKegiatan.innerHTML = hasil.map(item => `
      <article class="kartu-kegiatan">
        <span class="label-kategori">${item.kategori}</span>
        <h3>${item.nama}</h3>
        <p><strong>Tanggal:</strong> ${item.tanggal}</p>
        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
        <button type="button" class="btn-detail" data-id="${item.id}" onclick="bukaDetail(${item.id})">Lihat Detail</button>
      </article>
    `).join("");

    if (pesanKosong) {
      pesanKosong.hidden = hasil.length > 0;
    }
  }

  function bukaDetail(id) {
    const item = kegiatan.find(k => k.id == id);
    if (!item || !detailKegiatan || !modal) return;

    detailKegiatan.innerHTML = `
      <p style="margin-bottom: 10px;"><b>Kategori:</b> <span class="label-kategori" style="margin-left: 6px;">${item.kategori}</span></p>
      <p style="margin-top: 12px; line-height: 1.6;"><b>Deskripsi:</b><br>${item.deskripsi}</p>
    `;

    modal.style.display = "flex";
    modal.classList.add("aktif");
    modal.removeAttribute("hidden");
    modal.hidden = false;

    if (tutupModal) {
      tutupModal.focus();
    }
  }

  function tutupModalKegiatan() {
    if (modal) {
      modal.style.display = "none";
      modal.classList.remove("aktif");
      modal.setAttribute("hidden", "");
      modal.hidden = true;
    }
  }

// ===== BAGIAN MAHASISWA 4 (Kontak) =====
