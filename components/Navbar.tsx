"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, personalInfo } from "@/data/portfolio";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
      );

      const current = [...navItems]
        .reverse()
        .find((item) => {
          const section = document.getElementById(item.id);
          return section
            ? section.getBoundingClientRect().top <= 140
            : false;
        });

      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 bg-blue-500"
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left",
        }}
        aria-hidden="true"
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="leading-tight">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-bold tracking-[0.12em]">
              {personalInfo.name}
            </div>

            <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-[9px] font-semibold tracking-[0.18em] sm:text-[10px]">
              THINK. CODE. CREATE.
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-blue-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <a
            href="#contact"
            className="hidden rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20 sm:inline-flex"
          >
            Let&apos;s connect
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="block py-3 text-sm text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}