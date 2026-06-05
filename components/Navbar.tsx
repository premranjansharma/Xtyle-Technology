"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#about"    },
  { label: "Portfolio", href: "#portfolio"},
  { label: "Contact",   href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeHash,   setActiveHash]   = useState("");

  /* scroll + active-section detection */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveHash(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.07)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-300 mx-auto px-6 h-17.5 flex items-center gap-6">

          {/* ── Logo ──────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="XTYLE TECHNOLOGY – Home"
          >
            <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="XTYLE TECHNOLOGY logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-bold tracking-[-0.02em] text-[#0a0a0a]">
                XTYLE
              </span>
              <span className="text-[0.62rem] font-medium tracking-[0.18em] text-[#6b7280] uppercase">
                Technology
              </span>
            </div>
          </Link>

          {/* ── Desktop Links ─────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1 ml-auto list-none">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeHash === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "relative px-4 py-2 text-[0.88rem] font-medium rounded-lg transition-all duration-200",
                      "hover:bg-[#f3f4f6] hover:text-[#0a0a0a]",
                      isActive
                        ? "text-[#0057ff] bg-blue-50"
                        : "text-[#4b5563]",
                    ].join(" ")}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA Button ────────────────────────────────────── */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[0.85rem] font-semibold px-5 py-[0.52rem] rounded-full bg-[#0057ff] text-white hover:bg-[#003ebd] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,87,255,0.30)] active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            className="md:hidden ml-auto flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-[#f3f4f6] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                "block w-5 h-[1.5px] bg-[#374151] transition-all duration-300 origin-center",
                menuOpen ? "rotate-45 translate-y-[3.5px]" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-[1.5px] bg-[#374151] my-0.75 transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-[1.5px] bg-[#374151] transition-all duration-300 origin-center",
                menuOpen ? "-rotate-45 translate-y-[-3.5px]" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ─────────────────────────────────── */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      <div
        className={[
          "fixed top-0 right-0 bottom-0 z-40 w-72 bg-white shadow-2xl md:hidden",
          "flex flex-col pt-17.5 pb-8 px-6",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 list-none mt-4">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href} style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "flex items-center justify-between px-4 py-3 rounded-xl text-[0.95rem] font-medium transition-colors",
                  activeHash === href
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#374151] hover:bg-[#f9fafb]",
                ].join(" ")}
              >
                {label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#0057ff] text-white text-[0.92rem] font-semibold hover:bg-[#003ebd] transition-colors"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p className="text-center text-[0.75rem] text-[#9ca3af] mt-4">
            © {new Date().getFullYear()} XTYLE TECHNOLOGY
          </p>
        </div>
      </div>
    </>
  );
}