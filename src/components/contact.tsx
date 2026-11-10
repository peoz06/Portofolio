import {
  ArrowUpRight,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { profile, whatsappLink } from "@/lib/data";
import { GithubIcon, WhatsappIcon } from "./icons";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section id="kontak" className="section contact-section">
      <div className="container-wide">
        <Reveal>
          <div className="contact-card">
            <div className="contact-glow" aria-hidden="true" />

            <div className="contact-content">
              <span className="eyebrow">Kontak</span>
              <h2 className="contact-title">
                Punya ide?
                <br />
                <span className="gradient-text">Mari wujudkan.</span>
              </h2>
              <p className="contact-desc">
                Saya terbuka untuk kolaborasi proyek, tugas kuliah, atau
                sekadar berdiskusi tentang web, data, dan mobile. Cara paling
                cepat untuk terhubung adalah lewat WhatsApp.
              </p>

              <div className="contact-actions">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <WhatsappIcon size={18} />
                  Hubungi Saya via WhatsApp
                  <ArrowUpRight size={17} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-lg"
                >
                  <GithubIcon size={17} />
                  Lihat GitHub
                </a>
              </div>

              <div className="contact-info">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                >
                  <span className="contact-info-icon">
                    <Phone size={16} />
                  </span>
                  <span>
                    <small>WhatsApp</small>
                    {profile.whatsappDisplay}
                  </span>
                </a>
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <MapPin size={16} />
                  </span>
                  <span>
                    <small>Lokasi</small>
                    {profile.location}
                  </span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <Sparkles size={16} />
                  </span>
                  <span>
                    <small>Ketersediaan</small>
                    Terbuka untuk proyek
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-side" aria-hidden="true">
              <div className="chat-card">
                <div className="chat-head">
                  <span className="chat-avatar">{profile.initials}</span>
                  <div className="chat-head-copy">
                    <strong>{profile.firstName}</strong>
                    <span>
                      <span className="status-dot" />
                      online
                    </span>
                  </div>
                  <WhatsappIcon size={18} className="chat-wa-icon" />
                </div>

                <div className="chat-body">
                  <div className="chat-bubble chat-in">
                    Halo Alfeus! Saya tertarik untuk berdiskusi tentang sebuah
                    proyek.
                  </div>
                  <div className="chat-bubble chat-out">
                    Halo! Siap, ceritakan saja idenya.
                  </div>
                  <span className="chat-time">
                    Percakapan berlanjut di WhatsApp
                  </span>
                </div>

                <div className="chat-input">
                  <span>Tulis pesan...</span>
                  <Send size={15} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
