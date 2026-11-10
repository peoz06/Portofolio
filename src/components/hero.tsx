import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  ArrowDown,
  Code2,
  FolderGit2,
  MapPin,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon } from "./icons";
import ProfilePhoto from "./profile-photo";

export default function Hero() {
  const hasProfilePhoto = existsSync(
    join(process.cwd(), "public", "foto-profil.jpg"),
  );

  return (
    <section id="beranda" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="orb orb-violet" />
        <div className="orb orb-blue" />
        <div className="hero-beam" />
      </div>

      <div className="container-wide hero-inner">
        <div className="hero-copy">
          <div
            className="hero-eyebrow hero-anim"
            style={{ animationDelay: "80ms" }}
          >
            <span className="status-dot" />
            Terbuka untuk kolaborasi & proyek
          </div>

          <p
            className="hero-greeting hero-anim"
            style={{ animationDelay: "150ms" }}
          >
            Halo, saya
          </p>

          <h1
            className="hero-title hero-anim"
            style={{ animationDelay: "220ms" }}
          >
            <span className="gradient-text">Alfeus.</span>
          </h1>

          <div
            className="hero-role hero-anim"
            style={{ animationDelay: "300ms" }}
          >
            {profile.roles.map((role, index) => (
              <span key={role} className="hero-role-item">
                {index > 0 && <span className="role-sep">/</span>}
                {role}
              </span>
            ))}
          </div>

          <p
            className="hero-desc hero-anim"
            style={{ animationDelay: "370ms" }}
          >
            {profile.summary}
          </p>

          <div
            className="hero-actions hero-anim"
            style={{ animationDelay: "440ms" }}
          >
            <a href="#portofolio" className="btn btn-ghost btn-lg">
              Lihat Portofolio
              <ArrowDown size={16} />
            </a>
          </div>

          <div
            className="hero-meta hero-anim"
            style={{ animationDelay: "510ms" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={15} />
              github.com/{profile.githubHandle}
            </a>
            <span className="hero-meta-sep" aria-hidden="true" />
            <span>
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="hero-meta-sep" aria-hidden="true" />
            <span>{profile.institution}</span>
          </div>

          <a
            href="#tentang"
            className="scroll-cue hero-anim"
            style={{ animationDelay: "580ms" }}
          >
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll untuk explore
          </a>
        </div>

        <div
          className="hero-visual hero-anim"
          style={{ animationDelay: "420ms" }}
        >
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-photo-wrap">
            <div className="photo-halo" aria-hidden="true" />
            <ProfilePhoto hasPhoto={hasProfilePhoto} />
            <div className="float-card float-card-1">
              <span className="float-icon">
                <Code2 size={16} />
              </span>
              <span>
                <strong>Web Developer</strong>
                <small>Frontend & responsive</small>
              </span>
            </div>
            <div className="float-card float-card-2">
              <span className="float-icon">
                <FolderGit2 size={16} />
              </span>
              <span>
                <strong>3 Proyek</strong>
                <small>Built & in progress</small>
              </span>
            </div>
            <div className="hero-orbit" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
