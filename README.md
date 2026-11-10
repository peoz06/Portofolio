# Portofolio Alfeus Artha

Landing page portofolio pribadi untuk **Alfeus Artha Javaneo Harjono**, mahasiswa D3 Teknologi Informasi, Fakultas Teknik, Politeknik Negeri Madiun. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS, dengan tema gelap ungu–biru yang responsif.

## Fitur

- Hero profil dengan foto, status ketersediaan, dan tombol WhatsApp
- Bagian tentang, keahlian, dan portofolio proyek
- CTA WhatsApp Click-to-Chat di bagian kontak dan tombol mengambang
- Navigasi responsif dengan menu mobile dan penanda bagian aktif
- Animasi reveal, scroll progress, dan dukungan `prefers-reduced-motion`
- Metadata SEO, favicon, dan tampilan optimal di desktop maupun mobile

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk memeriksa versi produksi:

```bash
npm run build
npm start
```

Perintah lain:

```bash
npm run lint
```

## Menambahkan Foto Profil

1. Siapkan foto dengan orientasi **potret (disarankan rasio 4:5)**, misalnya `800 × 1000 px`.
2. Simpan file sebagai `public/foto-profil.jpg`.
3. Jalankan ulang server (`npm run dev`) atau build ulang untuk produksi.

Selama file tersebut belum ada, halaman otomatis menampilkan avatar inisial **AA** dengan latar gradien, jadi tidak ada gambar rusak atau permintaan file yang gagal.

## Mengubah Data

Hampir semua konten terpusat di `src/lib/data.ts`:

- `profile` — nama, inisial, peran, ringkasan, lokasi, program studi, nomor WhatsApp, dan GitHub
- `whatsappMessage` — pesan awal yang otomatis terisi di WhatsApp
- `skillGroups` — kartu keahlian beserta tag
- `tools` — daftar tools di bagian keahlian
- `projects` — judul, kategori, tahun, status, deskripsi, tag, gambar, dan tautan proyek
- `currentFocus` dan `funFacts` — konten bagian tentang

Nomor WhatsApp dikelola sebagai:

- `whatsappIntl`: `6285668399729` — dipakai untuk tautan `https://wa.me/...`
- `whatsappDisplay`: `+62 856-6839-9729` — teks yang ditampilkan

Jika nomor berubah, perbarui kedua nilai tersebut.

### Menambah Proyek

Tambahkan objek baru ke array `projects`:

```ts
{
  title: "Nama Proyek",
  category: "Web Platform",
  year: "2026",
  status: "Selesai", // "Selesai" | "On progress" | "Konsep"
  description: "Deskripsi singkat proyek.",
  tags: ["Next.js", "Tailwind CSS"],
  image: "/projects/nama-file.webp",
  href: "https://github.com/peoz06/nama-repo", // null jika belum ada tautan
}
```

Letakkan gambar pratinjau di `public/projects/`. Proyek dengan `href: null` tampil sebagai kartu statis tanpa panah tautan.

## Struktur Utama

```text
src/
  app/
    globals.css      # design system, animasi, dan aturan responsif
    layout.tsx       # font, metadata, viewport
    page.tsx         # komposisi halaman
  components/        # hero, about, skills, projects, contact, footer, dll.
  lib/data.ts        # data profil, keahlian, dan proyek
public/
  foto-profil.jpg    # foto profil
  projects/          # ilustrasi pratinjau proyek
```

## Deployment

Proyek ini dapat di-deploy ke Vercel atau platform yang mendukung Next.js.

### Vercel

1. Hubungkan repositori ke Vercel.
2. Framework akan terdeteksi otomatis sebagai Next.js.
3. Klik **Deploy**.

### Hosting lain

Jalankan `npm run build`, lalu jalankan `npm start` pada server Node.js. Pastikan `public/foto-profil.jpg` sudah ada sebelum build agar foto ikut terpakai.

## Catatan

- Proyek **Bramjono Transwisata** ditandai *On progress* karena masih dalam pengerjaan.
- Proyek **Lombok Idjo** ditandai *Konsep* dan tertaut ke repositori GitHub publiknya.
- Tahun pada footer ditulis statis (`2026`) agar kompatibel dengan Cache Components Next.js.
