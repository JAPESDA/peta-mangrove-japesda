/*
 * Data rehabilitasi mangrove JAPESDA — Gorontalo & Sulawesi Tengah (2000–2026)
 * Disusun dari laporan donor, publikasi ilmiah, dan liputan media.
 *
 * CATATAN PENTING:
 * - Koordinat adalah PERKIRAAN titik pusat desa, BUKAN poligon lokasi tanam.
 *   Ganti dengan titik GPS lapangan bila sudah tersedia.
 * - luas_ha hanya diisi bila sumber menyebut hektar penanaman secara eksplisit.
 * - bibit_dihitung:false = sudah termasuk dalam angka kegiatan lain (hindari hitung ganda).
 * - status: "verified"  = laporan donor / publikasi ilmiah
 *           "media"     = liputan media / sumber internal, angka bibit saja
 *           "unverified"= tanpa angka atau klaim belum terverifikasi
 *           "protect"   = perlindungan/tata kelola, BUKAN rehabilitasi (tidak dijumlahkan)
 */
window.MANGROVE_DATA = {
  updated: "24 Oktober 2026",
  desa: [
    /* ===================== PROVINSI GORONTALO ===================== */
    {
      id: "siduwonge", desa: "Siduwonge", kecamatan: "Randangan",
      kabupaten: "Pohuwato", provinsi: "Gorontalo",
      lat: 0.4600, lng: 121.8800,
      kegiatan: [
        {
          program: "MFF Small Grant Facility — Silvofishery, Rehabilitasi Mangrove & Pemberdayaan Kelompok Perempuan",
          tahun: "Mei 2014 – Mei 2015", luas_ha: 5, bibit: 40000,
          jenis: ["Tidak disebut"], mitra: "Mangroves for the Future (IUCN/UNDP); JAPESDA pelaksana",
          status: "verified",
          catatan: "Tingkat tumbuh 62% (kemarau panjang). Laporan yang sama mencatat tambahan 55.000 bibit 'ditanam langsung' (tidak dijumlahkan). Nilai hibah IDR 195.425.000.",
          sumber: ["mff_siduwonge"]
        },
        {
          program: "ROAM — Restoration Opportunity Assessment CA Tanjung Panjang",
          tahun: "2017 – 2019", luas_ha: null, bibit: null,
          jenis: ["–"], mitra: "IUCN, Charles Darwin University, Blue Forests",
          status: "unverified",
          catatan: "Asesmen & skenario rehabilitasi 25 tahun, bukan penanaman.",
          sumber: ["mongabay_2019_tp"]
        }
      ]
    },
    {
      id: "torosiaje", desa: "Torosiaje (Laut)", kecamatan: "Popayato",
      kabupaten: "Pohuwato", provinsi: "Gorontalo",
      lat: 0.4806, lng: 121.4417,
      kegiatan: [
        {
          program: "Program Teluk Tomini – SUSCLAM",
          tahun: "s.d. 2012", luas_ha: null, bibit: 5000,
          jenis: ["Ceriops", "Rhizophora", "Bruguiera"], mitra: "IUCN, Wetlands International (dana CIDA Kanada)",
          status: "media",
          catatan: "Luas mangrove Torosiaje 135 ha, ±25 ha rusak (konteks, bukan luas tanam).",
          sumber: ["mongabay_2012"]
        },
        {
          program: "MFF Small Grant Facility — Rehabilitasi Mangrove & Peningkatan Pendapatan Perempuan (produk buah mangrove)",
          tahun: "2014 – 2015", luas_ha: 7, bibit: 95000,
          jenis: ["Tidak disebut"], mitra: "Mangroves for the Future; berkoordinasi erat dengan KSL Paddakauang",
          status: "verified",
          catatan: "Klaster Torosiaje/Torosiaje Jaya. 7 ha merupakan capaian bersama dengan KSL Paddakauang (penerima hibah MFF lain). Nilai IDR 198.775.000.",
          sumber: ["mff_torosiaje"]
        },
        {
          program: "Penanaman mangrove Hari Konservasi Alam Nasional",
          tahun: "Agustus 2020", luas_ha: null, bibit: null,
          jenis: ["Tidak disebut"], mitra: "–",
          status: "unverified",
          catatan: "Hanya ditemukan judul berita 'Japesda inisiasi penanaman mangrove di Torosiaje'; angka tidak ditemukan.",
          sumber: ["antara_2020"]
        }
      ]
    },
    {
      id: "torosiaje-jaya", desa: "Torosiaje Jaya", kecamatan: "Popayato",
      kabupaten: "Pohuwato", provinsi: "Gorontalo",
      lat: 0.4880, lng: 121.4510,
      kegiatan: [
        {
          program: "Pengelolaan Mangrove Berkelanjutan di Pohuwato (Siemenpuu Foundation)",
          tahun: "2017 – 2018", luas_ha: null, bibit: 20000,
          jenis: ["Tidak disebut"], mitra: "Siemenpuu Foundation (Finlandia), €25.000 / 14 bulan",
          status: "media",
          catatan: "±20.000 bibit GABUNGAN Torosiaje Jaya, Bumi Bahari, Dudewulo (dicatat di sini). Sudah termasuk 6.000 bibit yang diberitakan Mongabay 2017.",
          sumber: ["siemenpuu", "mongabay_2017"]
        },
        {
          program: "Gerakan Sadar Mangrove (kampanye penyadartahuan)",
          tahun: "7 Desember 2019", luas_ha: null, bibit: 1500,
          jenis: ["Tidak disebut"], mitra: "Siemenpuu, DLHK Provinsi, BKSDA, KPH, AJI",
          status: "media",
          catatan: "Penanaman ke-5 JAPESDA di Torosiaje sepanjang 2019; angka 4 penanaman lainnya tidak dilaporkan.",
          sumber: ["kumparan_2019"]
        }
      ]
    },
    {
      id: "bumi-bahari", desa: "Bumi Bahari", kecamatan: "Popayato",
      kabupaten: "Pohuwato", provinsi: "Gorontalo",
      lat: 0.4950, lng: 121.4600,
      kegiatan: [
        {
          program: "Pengelolaan Mangrove Berkelanjutan di Pohuwato (Siemenpuu Foundation)",
          tahun: "2017 – 2018", luas_ha: null, bibit: null, bibit_dihitung: false,
          jenis: ["Tidak disebut"], mitra: "Siemenpuu Foundation",
          status: "media",
          catatan: "Termasuk dalam ±20.000 bibit gabungan yang dicatat di Torosiaje Jaya.",
          sumber: ["siemenpuu", "mongabay_2017"]
        }
      ]
    },
    {
      id: "dudewulo", desa: "Dudewulo", kecamatan: "Popayato Barat",
      kabupaten: "Pohuwato", provinsi: "Gorontalo",
      lat: 0.5010, lng: 121.3620,
      kegiatan: [
        {
          program: "Pengelolaan Mangrove Berkelanjutan di Pohuwato (Siemenpuu Foundation)",
          tahun: "2017 – 2018", luas_ha: null, bibit: null, bibit_dihitung: false,
          jenis: ["Tidak disebut"], mitra: "Siemenpuu Foundation",
          status: "media",
          catatan: "Termasuk dalam ±20.000 bibit gabungan yang dicatat di Torosiaje Jaya.",
          sumber: ["siemenpuu", "mongabay_2017"]
        }
      ]
    },
    {
      id: "limbatihu", desa: "Limbatihu", kecamatan: "Paguyaman Pantai",
      kabupaten: "Boalemo", provinsi: "Gorontalo",
      lat: 0.4920, lng: 122.5450,
      kegiatan: [
        {
          program: "Rehabilitasi ekosistem mangrove (periode bertepatan dengan SUSCLAM 2008–2012 — inferensi)",
          tahun: "2010", luas_ha: 1, bibit: 10000,
          jenis: ["Ceriops"], mitra: "Pemerintah desa/daerah, masyarakat",
          status: "verified",
          catatan: "Jarak tanam 1×1 m. Setelah 5 tahun: 8.745 pohon hidup (±87%), tinggi rata-rata 232,85 cm.",
          sumber: ["nike_2016"]
        }
      ]
    },
    {
      id: "bangga", desa: "Bangga", kecamatan: "Paguyaman Pantai",
      kabupaten: "Boalemo", provinsi: "Gorontalo",
      lat: 0.4870, lng: 122.5950,
      kegiatan: [
        {
          program: "Program Teluk Tomini – SUSCLAM (penanaman artifisial inisiatif warga)",
          tahun: "± 2010 (inferensi)", luas_ha: null, bibit: null,
          jenis: ["Ceriops tagal", "Rhizophora"], mitra: "Warga setempat, didukung SUSCLAM (IUCN / dana CIDA)",
          status: "unverified",
          catatan: "Dua lokasi: lahan bekas tambak di belakang permukiman (relatif berhasil, dipagari dari kambing) dan pantai depan permukiman (gagal, terabrasi). Luas & jumlah bibit TIDAK terdokumentasi.",
          sumber: ["atlas_2012", "manay_2021"]
        }
      ]
    },
    {
      id: "dulupi", desa: "Dulupi", kecamatan: "Dulupi",
      kabupaten: "Boalemo", provinsi: "Gorontalo",
      lat: 0.5450, lng: 122.4000,
      kegiatan: [
        {
          program: "Penanaman mangrove bersama masyarakat (nama program tidak disebut)",
          tahun: "Februari 2020", luas_ha: null, bibit: 26000,
          jenis: ["Tidak disebut"], mitra: "Masyarakat desa",
          status: "media",
          catatan: "Angka dari keterangan foto di situs JAPESDA; tidak ditemukan liputan media independen.",
          sumber: ["japesda_24th"]
        }
      ]
    },

    /* ===================== PROVINSI SULAWESI TENGAH ===================== */
    {
      id: "uwedikan", desa: "Uwedikan", kecamatan: "Luwuk Timur",
      kabupaten: "Banggai", provinsi: "Sulawesi Tengah",
      lat: -0.9580, lng: 123.0350,
      kegiatan: [
        {
          program: "Penyiapan Masyarakat untuk Pengelolaan Mangrove & Sumberdaya Pesisir Berkelanjutan (CEPF No. 66433)",
          tahun: "Juli 2019 (hibah Feb 2017 – Sep 2019)", luas_ha: null, bibit: 5000,
          jenis: ["Ceriops tagal"], mitra: "CEPF (US$89.783,65)",
          status: "media",
          catatan: "Tahap kedua, Pulau Batang & Pulau Sasapan. Zona rehabilitasi DPL Uwedikan 3,04 ha (zonasi, bukan luas tanam). Mangrove desa ±350 ha, ±209 ha rusak.",
          sumber: ["mongabay_2019_banggai", "cepf_66433"]
        },
        {
          program: "Usulan Hutan Desa mangrove (perhutanan sosial)",
          tahun: "2024 – 2025", luas_ha: null, bibit: null,
          jenis: ["–"], mitra: "Yayasan Pesisir Lestari, KPH Balantak",
          status: "protect",
          catatan: "Usulan Hutan Desa 200,74 ha — perlindungan/pengelolaan, TIDAK dihitung sebagai rehabilitasi.",
          sumber: ["japesda_hd"]
        }
      ]
    },
    {
      id: "lambangan", desa: "Lambangan", kecamatan: "Pagimana",
      kabupaten: "Banggai", provinsi: "Sulawesi Tengah",
      lat: -0.7650, lng: 122.8100,
      kegiatan: [
        {
          program: "Penyiapan Masyarakat untuk Pengelolaan Mangrove & Sumberdaya Pesisir Berkelanjutan (CEPF No. 66433)",
          tahun: "2019 (hibah Feb 2017 – Sep 2019)", luas_ha: null, bibit: 5000,
          jenis: ["Ceriops tagal"], mitra: "CEPF",
          status: "media",
          catatan: "Zona rehabilitasi DPL Lambangan 8,04 ha (zonasi, bukan luas tanam).",
          sumber: ["mongabay_2019_banggai", "cepf_66433"]
        },
        {
          program: "Aksi tanam mangrove bersama KKN Tematik UNG",
          tahun: "26 September 2021", luas_ha: null, bibit: null,
          jenis: ["Tidak disebut"], mitra: "Universitas Negeri Gorontalo",
          status: "unverified",
          catatan: "Tidak ada angka bibit/luas.",
          sumber: ["gopos_2021", "banggairaya_2021"]
        }
      ]
    }
  ],

  /* Klaim tingkat kabupaten yang tidak bisa dibagi per desa */
  klaim_kabupaten: [
    {
      provinsi: "Sulawesi Tengah", kabupaten: "Banggai", luas_ha: 10,
      keterangan: "Blue Ventures (2021) menyebut 'sekitar 10 hektar' berhasil direhabilitasi di Uwedikan + Lambangan. Kemungkinan merujuk zona rehabilitasi DPL 11,08 ha (laporan akhir CEPF 66433), bukan luas tanam terkonfirmasi. 10.000 bibit pada jarak 1×1 m ≈ 1 ha.",
      sumber: ["blueventures_2021", "cepf_66433"]
    }
  ],

  kesenjangan: [
    "Gorontalo Utara, Bone Bolango, Kabupaten Gorontalo: tidak ditemukan data rehabilitasi mangrove oleh JAPESDA.",
    "Sulawesi Tengah selain Banggai (Tojo Una-Una, Banggai Kepulauan, Banggai Laut, Parigi Moutong): tidak ditemukan. Di Kadoda (Togean) kerja JAPESDA berupa penutupan area tangkap gurita, bukan mangrove.",
    "2022–2026: tidak ada angka penanaman baru yang terpublikasi.",
    "Tidak ditemukan laporan tahunan JAPESDA yang merangkum total luas rehabilitasi."
  ],

  sumber: {
    mff_siduwonge: { judul: "MFF SGF — Silvofishery, Mangrove Rehabilitation & Women's Group Empowerment (Siduwonge)", media: "Mangroves for the Future", tahun: "2015", url: "https://www.mangrovesforthefuture.org/grants/small-grant-facilities/indonesia/phase-2-sgf-projects/cycle-3-indonesia-does-not-have-cycle-2/development-of-silvofishery-mangrove-rehabilitation-and-womens-group-empowerment-through-utilization-of-non-timber-mangrove-product", jenis: "Laporan donor" },
    mff_torosiaje: { judul: "MFF SGF — Mangrove Rehabilitation & Women Income (Torosiaje, Pohuwato)", media: "Mangroves for the Future", tahun: "2015", url: "http://www.mangrovesforthefuture.org/grants/small-grant-facilities/indonesia/phase-2-sgf-projects/cycle-3-indonesia-does-not-have-cycle-2/mangrove-rehabilitation-and-increasing-of-women-income-through-household-scale-business-based-on-mangrove-fruit-product-in-torsiaje-pohuwato-district/", jenis: "Laporan donor" },
    mongabay_2012: { judul: "Kala Suku Bajo Jadi Penyelamat Mangrove", media: "Mongabay Indonesia", tahun: "18 Des 2012", url: "https://www.mongabay.co.id/2012/12/18/kala-suku-bajo-jadi-penyelamat-mangrove/", jenis: "Media" },
    mongabay_2017: { judul: "Mangrove di Gorontalo Ikut Menyusut, Begini Kondisinya", media: "Mongabay Indonesia", tahun: "29 Jul 2017", url: "https://mongabay.co.id/2017/07/29/mangrove-di-gorontalo-ikut-menyusut-begini-kondisinya/", jenis: "Media" },
    mongabay_2019_tp: { judul: "Polemik Cagar Alam Tanjung Panjang: Tambak hingga TORA [Bagian 1]", media: "Mongabay Indonesia", tahun: "18 Mei 2019", url: "https://mongabay.co.id/2019/05/18/polemik-cagar-alam-tanjung-panjang-tambak-hingga-tora-bagian-1/", jenis: "Media" },
    siemenpuu: { judul: "Hankkeet päättyneet 2018 — Kestävä mangrovemetsien hallinta Pohuwatossa", media: "Siemenpuu Foundation", tahun: "2018", url: "https://siemenpuu.org/toimintamme/tulokset/ohjelmakausi-2018-2021/vuonna-2018-paattyneet-hankkeet/", jenis: "Laporan donor" },
    kumparan_2019: { judul: "Konsistensi Gerakan Sadar Mangrove di Gorontalo", media: "Banthayo.id / Kumparan", tahun: "11 Des 2019", url: "https://kumparan.com/banthayoid/konsistensi-gerakan-sadar-mangrove-di-gorontalo-1sQKVYy5zHa", jenis: "Media" },
    antara_2020: { judul: "Torosiaje, surga bahari di ujung Gorontalo (memuat tautan 'Japesda inisiasi penanaman mangrove di Torosiaje')", media: "Antara", tahun: "Agt 2020", url: "https://www.antaranews.com/berita/3596403/torosiaje-surga-bahari-di-ujung-gorontalo", jenis: "Media" },
    nike_2016: { judul: "Evaluation of Mangrove Ecosystem Rehabilitation Program in Limbatihu Village (Saleh dkk., Nikè 4(4))", media: "Universitas Negeri Gorontalo", tahun: "Des 2016", url: "https://repository.ung.ac.id/get/karyailmiah/3674/Evaluation-of-Mangrove-Ecosystem-Rehabilitation-Program-in-Limbatihu-Village-District-Paguyaman-Pantai-Boalemo-Regency.pdf", jenis: "Publikasi ilmiah" },
    atlas_2012: { judul: "Atlas Mangrove Teluk Tomini (Damanik & Djamaludin) — subbagian 'Penanaman Artifisial di Desa Bangga'", media: "Program Teluk Tomini – SUSCLAM", tahun: "Jan 2012", url: "https://adoc.pub/atlas-mangrove-teluk-tomini-penyusun-ridha-damanik-rignolda-.html", jenis: "Laporan program" },
    manay_2021: { judul: "Kondisi sosial ekonomi Desa Bangga 2010–2011 (Helman Manay)", media: "Jambura History and Culture Journal", tahun: "2021", url: null, jenis: "Publikasi ilmiah" },
    japesda_24th: { judul: "Berjejaring dan Berkembang Selama 24 Tahun, Selamat Ulang Tahun JAPESDA", media: "japesda.or.id", tahun: "2020", url: "https://japesda.or.id/berjejaring-dan-berkembang-selama-24-tahun-selamat-ulangtahun-japesda/", jenis: "Sumber internal" },
    mongabay_2019_banggai: { judul: "Mangrove yang Kembali Bersemi di Banggai", media: "Mongabay Indonesia", tahun: "28 Jul 2019", url: "https://mongabay.co.id/2019/07/28/mangrove-yang-kembali-bersemi-di-banggai/", jenis: "Media" },
    cepf_66433: { judul: "CEPF Final Project Completion Report — Grant No. 66433", media: "Critical Ecosystem Partnership Fund", tahun: "28 Nov 2019", url: null, jenis: "Laporan donor" },
    blueventures_2021: { judul: "Nurain Lapolo: Women are on the frontlines of this fight on climate breakdown", media: "Blue Ventures (blog)", tahun: "1 Apr 2021", url: "https://blog.blueventures.org/en/nurain-lapolo-women-are-on-the-frontlines-of-this-fight-on-climate-breakdown/", jenis: "Lembaga mitra" },
    gopos_2021: { judul: "Jaga Ekosistem Perairan, Mahasiswa KKN UNG Desa Lambangan–Japesda Buat Aksi Penanaman Mangrove", media: "Gopos.id", tahun: "27 Sep 2021", url: "https://gopos.id/jaga-ekosistem-perairan-mahasiswa-kkn-ung-desa-lambangan-japesda-gorontalo-buat-aksi-penanaman-mangrove/", jenis: "Media" },
    banggairaya_2021: { judul: "Mahasiswa KKN UNG Bersama Japesda Tanam Mangrove di Lambangan", media: "Banggai Raya", tahun: "2021", url: "https://banggairaya.id/mahasiswa-kkn-ung-bersama-japesda-tanam-mangrove-di-lambangan/", jenis: "Media" },
    japesda_hd: { judul: "Lembaga Desa Mangrove Lestari Semakin Dekat Menuju Pengelolaan Mangrove Berbasis Masyarakat", media: "japesda.or.id", tahun: "2025", url: "https://japesda.or.id/lembaga-desa-mangrove-lestari-semakin-dekat-menuju-pengelolaan-mangrove-berbasis-masyarakat/", jenis: "Sumber internal" }
  }
};
