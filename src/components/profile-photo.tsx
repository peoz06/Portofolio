"use client";

import Image from "next/image";
import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { profile } from "@/lib/data";

export default function ProfilePhoto({
  hasPhoto = false,
}: {
  hasPhoto?: boolean;
}) {
  const [failed, setFailed] = useState(!hasPhoto);
  const showFallback = !hasPhoto || failed;

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    element.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
    element.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
    element.style.setProperty("--mx", `${x * 100}%`);
    element.style.setProperty("--my", `${y * 100}%`);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--mx", "50%");
    element.style.setProperty("--my", "50%");
  };

  return (
    <div
      className="photo-frame"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="photo-fallback"
        role={showFallback ? "img" : undefined}
        aria-label={
          showFallback ? `Avatar inisial ${profile.firstName}` : undefined
        }
        aria-hidden={showFallback ? undefined : true}
      >
        <span>{profile.initials}</span>
      </div>

      {hasPhoto && !failed && (
        <Image
          src="/foto-profil.jpg"
          alt={`Foto profil ${profile.fullName}`}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 430px"
          className="photo-img"
          onError={() => setFailed(true)}
        />
      )}

      <div className="photo-shine" aria-hidden="true" />
      <div className="photo-gradient" aria-hidden="true" />

      <div className="photo-caption">
        <span className="photo-status">
          <span className="status-dot" />
          Open to collaborate
        </span>
        <p>{profile.fullName}</p>
        <span>{profile.studyProgram}</span>
      </div>
    </div>
  );
}
