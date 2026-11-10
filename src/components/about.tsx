import {
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";
import { currentFocus, funFacts, profile } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const facts = [
  {
    icon: GraduationCap,
    label: "Pendidikan",
    value: profile.studyProgram,
    detail: `${profile.faculty} · ${profile.institution}`,
  },
  {
    icon: Target,
    label: "Fokus",
    value: "Web · Data · Mobile",
    detail: "Produk digital yang berguna",
  },
  {
    icon: Sparkles,
    label: "Sedang dipelajari",
    value: "Next.js & Tailwind CSS",
    detail: "Ekosistem web modern",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: profile.location,
    detail: "Terbuka untuk remote",
  },
];

export default function About() {
  return (
    <section id="tentang" className="section about-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Tentang Saya"
          title={
            <>
              Di balik layar,
              <br />
              <span className="gradient-text">saya membangun.</span>
            </>
          }
          description="Mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun dengan rasa penasaran yang tinggi terhadap produk digital yang rapi, berguna, dan menyenangkan dipakai."
        />

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lead">
              Saya percaya teknologi yang baik bukan yang paling rumit, tapi
              yang paling{" "}
              <span className="text-white">terasa sederhana</span> bagi
              penggunanya.
            </p>
            <p>
              Saat ini saya menempuh studi D3 Teknologi Informasi di Fakultas
              Teknik, Politeknik Negeri Madiun. Di luar perkuliahan, saya
              mengasah kemampuan lewat proyek pribadi dan tugas tim—mulai dari
              landing page, aplikasi Android, sampai eksplorasi data.
            </p>
            <p>
              Saya tertarik pada persinggungan antara desain, kode, dan data:
              bagaimana sebuah antarmuka bisa terasa nyaman, bagaimana data
              bisa bercerita, dan bagaimana keduanya bisa membantu mengambil
              keputusan yang lebih baik.
            </p>

            <div className="about-facts">
              {facts.map((fact) => (
                <div className="fact-card" key={fact.label}>
                  <span className="fact-icon">
                    <fact.icon size={18} />
                  </span>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                  <small>{fact.detail}</small>
                </div>
              ))}
            </div>

            <div className="stats-row">
              {funFacts.map((fact) => (
                <div className="stat" key={fact.label}>
                  <span className="stat-num">{fact.value}</span>
                  <span className="stat-label">{fact.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="about-side">
            <Reveal delay={100}>
              <div className="about-card">
                <span className="card-label">Saat ini</span>
                <h3>
                  <Sparkles size={17} />
                  Yang sedang saya kerjakan
                </h3>

                <div className="focus-list">
                  {currentFocus.map((item, index) => (
                    <div className="focus-item" key={item.title}>
                      <span className="focus-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="focus-copy">
                        <strong>{item.title}</strong>
                        <span>{item.detail}</span>
                      </div>
                      <span
                        className={`focus-status is-${item.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="quote-card">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <p>
                  Detail kecil yang dikerjakan dengan rapi sering membuat
                  sebuah produk terasa jauh lebih baik.
                </p>
                <small>— Prinsip kerja saya</small>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
