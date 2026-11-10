"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, profile, whatsappLink } from "@/lib/data";
import { GithubIcon, WhatsappIcon } from "./icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      let current = navItems[0].href.slice(1);
      for (const item of navItems) {
        const element = document.getElementById(item.href.slice(1));
        if (element && element.getBoundingClientRect().top <= 160) {
          current = item.href.slice(1);
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <nav className="container-wide nav-shell" aria-label="Navigasi utama">
          <a
            href="#beranda"
            className="brand"
            aria-label="Alfeus — kembali ke beranda"
            onClick={() => setIsOpen(false)}
          >
            <span className="brand-mark">A</span>
            <span className="brand-text">
              alfeus<span className="brand-dot">.</span>
            </span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === id ? "is-active" : ""}
                    aria-current={active === id ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-nav"
            >
              <WhatsappIcon size={16} />
              <span>Hubungi Saya</span>
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div>
            <p className="mobile-menu-label">Navigasi</p>
            <ul className="mobile-menu-links">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setIsOpen(false)}>
                    <span>{item.label}</span>
                    <small>0{index + 1}</small>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu-footer">
            <p className="mobile-menu-label">Mari terhubung</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg mobile-menu-cta"
            >
              <WhatsappIcon size={18} />
              Hubungi via WhatsApp
              <ArrowUpRight size={17} />
            </a>
            <div className="mobile-menu-meta">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} />
                @{profile.githubHandle}
              </a>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
