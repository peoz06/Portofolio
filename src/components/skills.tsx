import { BarChart3, Code2, Palette, Smartphone } from "lucide-react";
import { skillGroups, tools, type SkillIcon } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const icons = {
  code: Code2,
  chart: BarChart3,
  mobile: Smartphone,
  design: Palette,
} satisfies Record<SkillIcon, typeof Code2>;

export default function Skills() {
  return (
    <section id="keahlian" className="section skills-section">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Keahlian"
          title={
            <>
              Skill yang terus
              <br />
              <span className="gradient-text">saya asah.</span>
            </>
          }
          description="Dari menulis antarmuka sampai membaca data, saya menikmati proses belajar lintas disiplin untuk membangun produk yang utuh."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={index * 80}>
                <article className="skill-card">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="skill-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="toolbelt">
            <span className="toolbelt-label">Toolbox</span>
            <div className="tool-list">
              {tools.map((tool) => (
                <span className="tool-pill" key={tool}>
                  <span className="tool-dot" aria-hidden="true" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
