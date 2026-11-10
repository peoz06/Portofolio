export const profile = {
  fullName: "Alfeus Artha Javaneo Harjono",
  firstName: "Alfeus",
  initials: "AA",
  role: "Web Developer & Data Enthusiast",
  roles: ["Web Developer", "Data Analyst", "Mobile Programmer"],
  summary:
    "Mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun yang senang mengubah ide menjadi pengalaman digital—dari website yang responsif dan visual data yang informatif, sampai aplikasi mobile yang mudah digunakan.",
  location: "Indonesia",
  studyProgram: "D3 Teknologi Informasi",
  faculty: "Fakultas Teknik",
  institution: "Politeknik Negeri Madiun",
  whatsappDisplay: "+62 856-6839-9729",
  whatsappIntl: "6285668399729",
  github: "https://github.com/peoz06",
  githubHandle: "peoz06",
};

export const whatsappMessage =
  "Halo Alfeus! Saya melihat portofolio Anda dan ingin berdiskusi.";

export const whatsappLink = `https://wa.me/${profile.whatsappIntl}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Kontak", href: "#kontak" },
];

export type SkillIcon = "code" | "chart" | "mobile" | "design";

export type SkillGroup = {
  title: string;
  description: string;
  tags: string[];
  icon: SkillIcon;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    description:
      "Membangun landing page dan antarmuka web yang responsif, cepat, dan nyaman dipakai di berbagai ukuran layar.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    icon: "code",
  },
  {
    title: "Data Analysis",
    description:
      "Mengolah data menjadi informasi yang mudah dibaca—dari pembersihan data sampai visualisasi untuk mengambil keputusan.",
    tags: ["SQL", "Spreadsheet", "Data Visualization"],
    icon: "chart",
  },
  {
    title: "Mobile Development",
    description:
      "Mengembangkan aplikasi Android dengan alur yang intuitif, mulai dari rancangan layar sampai implementasi fitur.",
    tags: ["Kotlin", "Android Studio", "Material Design"],
    icon: "mobile",
  },
  {
    title: "Web Design",
    description:
      "Merancang tampilan yang bersih dan konsisten dengan perhatian pada hierarki, tipografi, dan pengalaman pengguna.",
    tags: ["Figma", "Wireframing", "Prototyping"],
    icon: "design",
  },
];

export const tools = [
  "HTML & CSS",
  "JavaScript",
  "Kotlin",
  "Android Studio",
  "Tailwind CSS",
  "Next.js",
  "Figma",
  "Git & GitHub",
];

export type ProjectStatus = "Selesai" | "On progress" | "Konsep";

export type Project = {
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  image: string;
  href: string | null;
};

export const projects: Project[] = [
  {
    title: "Aplikasi Manajemen Keuangan",
    category: "Android App",
    year: "2025",
    status: "Selesai",
    description:
      "Aplikasi Android untuk mencatat transaksi, memantau saldo, dan mengelola prioritas keuangan bersama tim dengan alur yang sederhana.",
    tags: ["Kotlin", "Android Studio", "Material Design"],
    image: "/projects/keuangan.svg",
    href: "https://github.com/peoz06/Aplikasi-Manajemen-Keuangan-Kel-3",
  },
  {
    title: "Bramjono Transwisata",
    category: "Travel Website",
    year: "2026",
    status: "On progress",
    description:
      "Website katalog paket travel dan open trip dengan layanan custom trip, galeri destinasi, serta alur pemesanan yang responsif.",
    tags: ["Web Development", "UI/UX", "Responsive"],
    image: "/projects/bramjono.webp",
    href: null,
  },
  {
    title: "Lombok Idjo",
    category: "Restaurant Website",
    year: "2025",
    status: "Konsep",
    description:
      "Website restoran dengan suasana hangat: hero visual, menu andalan, informasi reservasi, serta kanal kritik dan saran.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: "/projects/lombokidjo.webp",
    href: "https://github.com/peoz06/LombokIdjo",
  },
];

export const currentFocus = [
  {
    title: "Bramjono Transwisata",
    detail: "Website travel & open trip",
    status: "On progress",
  },
  {
    title: "Portofolio pribadi",
    detail: "Next.js, Tailwind CSS, dan animasi web",
    status: "Live",
  },
  {
    title: "Eksplorasi data",
    detail: "Visualisasi dan analisis data sederhana",
    status: "Belajar",
  },
];

export const funFacts = [
  { value: "3", label: "Proyek yang dikerjakan" },
  { value: "3", label: "Bidang keahlian" },
  { value: "∞", label: "Rasa ingin tahu" },
];
