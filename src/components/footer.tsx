import { ArrowUp, Heart } from "lucide-react";
import { navItems, profile, whatsappLink } from "@/lib/data";
import { GithubIcon, WhatsappIcon } from "./icons";

const focusAreas = ["Web Development", "Data Analysis", "Mobile Development"];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#beranda"
              className="brand"
              aria-label="Alfeus — kembali ke beranda"
            >
              <span className="brand-mark">A</span>
              <span className="brand-text">
                alfeus<span className="brand-dot">.</span>
              </span>
            </a>
            <p>
              Mahasiswa D3 Teknologi Informasi di Politeknik Negeri Madiun
              yang membangun pengalaman digital di persimpangan web, data, dan
              mobile.
            </p>
            <div className="footer-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Alfeus"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Alfeus"
              >
                <WhatsappIcon size={17} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Fokus</h4>
            <ul>
              {focusAreas.map((area) => (
                <li key={area}>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact-col">
            <h4>Mari terhubung</h4>
            <p>Ada ide atau ingin berkolaborasi? Pintunya terbuka.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              <WhatsappIcon size={16} />
              Kirim pesan
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-github"
            >
              github.com/{profile.githubHandle}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.fullName}.
          </p>
          <p className="footer-made">
            Dibuat dengan <Heart size={13} className="footer-heart" /> Next.js
            &amp; Tailwind CSS
          </p>
          <a href="#beranda">
            Kembali ke atas
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
