import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`section-heading ${align === "center" ? "is-center" : ""}`.trim()}
    >
      <div className="section-heading-main">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-desc">{description}</p>}
      </div>
      {action && <div className="section-heading-action">{action}</div>}
    </Reveal>
  );
}
