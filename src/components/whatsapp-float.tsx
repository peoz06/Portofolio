"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { WhatsappIcon } from "./icons";

export default function WhatsappFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${isVisible ? "is-visible" : ""}`}
      aria-label="Chat dengan Alfeus via WhatsApp"
      tabIndex={isVisible ? 0 : -1}
    >
      <span className="wa-float-label">Butuh diskusi? Chat saya</span>
      <span className="wa-float-btn">
        <WhatsappIcon size={26} />
        <ArrowUpRight size={13} className="wa-float-arrow" />
      </span>
    </a>
  );
}
