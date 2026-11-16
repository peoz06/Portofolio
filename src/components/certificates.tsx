import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Building2,
  CalendarDays,
  Hash,
} from "lucide-react";
import { certificates, type Certificate } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="certificate-card">
      <a
        href={certificate.image}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-media"
        aria-label={`Buka sertifikat ${certificate.title} ${certificate.program} secara penuh`}
      >
        <Image
          src={certificate.image}
          alt={`Sertifikat ${certificate.title} atas nama Alfeus Artha Javaneo Harjono — ${certificate.program} di ${certificate.issuer}`}
          width={2000}
          height={1414}
          unoptimized
          sizes="(max-width: 860px) 100vw, 58vw"
          className="certificate-img"
        />
        <span className="certificate-media-shade" aria-hidden="true" />
        <span className="certificate-zoom">
          <ArrowUpRight size={15} />
          Perbesar
        </span>
      </a>

      <div className="certificate-body">
        <div className="certificate-topline">
          <span>{certificate.program}</span>
          <span>2026</span>
        </div>

        <h3>
          <Award size={18} aria-hidden="true" />
          {certificate.title}
        </h3>

        <p className="certificate-desc">{certificate.description}</p>

        <dl className="certificate-meta">
          <div>
            <dt>
              <Building2 size={13} aria-hidden="true" />
              Lembaga
            </dt>
            <dd>{certificate.issuer}</dd>
          </div>
          <div>
            <dt>
              <CalendarDays size={13} aria-hidden="true" />
              Periode
            </dt>
            <dd>{certificate.period}</dd>
          </div>
          <div>
            <dt>
              <Hash size={13} aria-hidden="true" />
              Nomor
            </dt>
            <dd>{certificate.number}</dd>
          </div>
        </dl>

        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost certificate-action"
        >
          Lihat sertifikat
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default function Certificates() {
  return (
    <section id="sertifikat" className="section certificates-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Sertifikat"
          title={
            <>
              Terdokumentasi
              <br />
              <span className="gradient-text">dengan baik.</span>
            </>
          }
          description="Pengalaman magang yang saya tempuh beserta bukti penyelesaiannya—bisa dibuka langsung versi penuhnya."
        />

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.number} delay={index * 90}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
