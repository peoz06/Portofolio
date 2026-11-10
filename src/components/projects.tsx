import Image from "next/image";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { profile, projects, type Project } from "@/lib/data";
import { GithubIcon } from "./icons";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

function ProjectCard({ project }: { project: Project }) {
  const statusClass = project.status.toLowerCase().replaceAll(" ", "-");

  const content = (
    <>
      <div className="project-media">
        <Image
          src={project.image}
          alt={`Pratinjau proyek ${project.title}`}
          width={1200}
          height={750}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="project-img"
        />
        <div className="project-media-shade" aria-hidden="true" />
        <span className={`project-status is-${statusClass}`}>
          <span className="status-mini-dot" aria-hidden="true" />
          {project.status}
        </span>
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="project-body">
        <div className="project-topline">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {!project.href && (
          <span className="project-note">
            Repo privat—akan dibuka setelah rilis.
          </span>
        )}
      </div>
    </>
  );

  if (!project.href) {
    return <article className="project-card is-static">{content}</article>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`Buka proyek ${project.title}`}
    >
      {content}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="portofolio" className="section projects-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Portofolio"
          title={
            <>
              Karya yang
              <br />
              <span className="gradient-text">sedang tumbuh.</span>
            </>
          }
          description="Beberapa proyek yang saya kerjakan untuk belajar, menyelesaikan tugas, dan mengeksplorasi ide—dari aplikasi mobile sampai landing page."
          action={
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon size={17} />
              Semua repo
              <ArrowUpRight size={15} />
            </a>
          }
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="portfolio-note">
            <span className="portfolio-note-icon">
              <FolderGit2 size={18} />
            </span>
            <p>
              <strong>Ingin melihat prosesnya?</strong> Eksperimen kecil dan
              proyek lain saya simpan di GitHub—termasuk pembaruan Bramjono
              Transwisata yang masih dalam tahap pengembangan.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jelajahi GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
