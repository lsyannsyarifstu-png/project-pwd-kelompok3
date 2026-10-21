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

// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====

// ===== BAGIAN MAHASISWA 4 (Kontak) =====
