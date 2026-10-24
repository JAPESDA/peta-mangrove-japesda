# Peta Rehabilitasi Mangrove JAPESDA

Dashboard peta satelit interaktif tentang rehabilitasi mangrove oleh **JAPESDA** (Jaring Advokasi Pengelolaan Sumberdaya Alam) di **Provinsi Gorontalo** dan **Sulawesi Tengah**, periode 2000–2026.

Data disusun berjenjang **Provinsi → Kabupaten → Desa**. Untuk setiap desa ditampilkan luas tanam, jumlah bibit, jenis mangrove, nama program, mitra/donor, dan sumber data (laporan donor, publikasi ilmiah, liputan media).

## Ringkasan data

| Provinsi | Kabupaten | Luas terdokumentasi | Bibit | Desa |
|---|---|---|---|---|
| Gorontalo | Pohuwato | 12 ha | ±161.500 | Siduwonge, Torosiaje, Torosiaje Jaya, Bumi Bahari, Dudewulo |
| Gorontalo | Boalemo | 1 ha | ±36.000 | Limbatihu, Bangga, Dulupi |
| Sulawesi Tengah | Banggai | ±10 ha (klaim, belum terverifikasi) | 10.000 | Uwedikan, Lambangan |
| **Total** | | **13 ha terverifikasi + ±10 ha klaim** | **±207.500** | **10 desa** |

> ⚠️ Angka ini adalah **batas bawah yang terdokumentasi di sumber publik**, bukan total kinerja JAPESDA.
> Titik di peta adalah **perkiraan lokasi pusat desa**, bukan poligon lokasi tanam.

## Fitur

- Peta citra satelit (Esri World Imagery), bisa diganti ke peta jalan OpenStreetMap
- Warna titik = status keandalan data; ukuran titik = jumlah bibit
- Filter provinsi, kabupaten, dan pencarian (desa, program, jenis mangrove, mitra)
- Panel detail per desa: semua kegiatan, tahun, luas, bibit, jenis, mitra, catatan, dan tautan sumber
- Tab **Sumber & Catatan**: daftar lengkap sumber dan kesenjangan data
- Responsif untuk ponsel

## Struktur file

```
index.html   → tampilan dashboard (peta + panel)
data.js      → seluruh data (edit file ini untuk memperbarui)
README.md
```

## Publikasi di GitHub Pages

1. Buat repository baru di GitHub (misalnya `peta-mangrove-japesda`).
2. Upload `index.html`, `data.js`, dan `README.md` ke root repository.
3. Buka **Settings → Pages**, pilih **Source: Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Setelah 1–2 menit, dashboard bisa diakses di
   `https://<username>.github.io/peta-mangrove-japesda/`

Dashboard juga bisa dibuka langsung dengan klik ganda `index.html` di komputer (perlu internet untuk peta).

## Cara memperbarui data

Semua data ada di `data.js`. Setiap desa punya daftar `kegiatan`:

```js
{
  program: "Nama program",
  tahun: "2025",
  luas_ha: 2.5,          // null bila sumber tidak menyebut hektar
  bibit: 10000,          // null bila tidak diketahui
  jenis: ["Rhizophora mucronata"],
  mitra: "Nama donor/mitra",
  status: "verified",    // verified | media | unverified | protect
  catatan: "Keterangan tambahan",
  sumber: ["id_sumber"]  // harus ada di bagian `sumber` di bawah
}
```

- **Koordinat**: ganti `lat`/`lng` dengan titik GPS lapangan bila sudah tersedia.
- **`bibit_dihitung: false`**: pakai untuk bibit yang sudah termasuk angka gabungan desa lain (mencegah hitung ganda).
- **`status: "protect"`**: untuk perlindungan/tata kelola (mis. Hutan Desa) — tidak dijumlahkan sebagai rehabilitasi.
- Desa baru: salin satu blok desa, ubah isinya, dan tambahkan sumbernya di bagian `sumber`.

## Kesenjangan data

- Tidak ditemukan data rehabilitasi mangrove JAPESDA di Gorontalo Utara, Bone Bolango, Kabupaten Gorontalo, maupun kabupaten Sulawesi Tengah selain Banggai.
- Desa Bangga (SUSCLAM, ±2010): penanaman tercatat, tetapi luas dan jumlah bibit tidak terdokumentasi.
- Tidak ada angka penanaman terpublikasi untuk 2022–2026.

## Lisensi & atribusi

Citra satelit © Esri, Maxar, Earthstar Geographics. Peta jalan © OpenStreetMap contributors.
Data dikompilasi dari sumber publik yang tercantum di dashboard; disusun untuk keperluan MEL JAPESDA.
