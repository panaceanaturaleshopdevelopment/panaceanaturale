"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "sr", flag: "🇷🇸", label: "Srpski" },
  { code: "en", flag: "🇬🇧", label: "English" },
] as const;

export default function Navbar() {
  const { language, setLanguage, navItems } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAFAF7]/97 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-[#E4E2D8] shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-32 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 shrink-0">
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 text-[#1E3A1E]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
          <Image
            src="/panacea_logo.png"
            alt="Panacea"
            width={535}
            height={466}
            className="h-20 w-auto object-contain"
            priority
          />
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="relative font-[family-name:var(--font-nav)] text-[13px] font-500 uppercase tracking-[0.14em] text-[#5C5C50] hover:text-[#1E3A1E] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#3D7A3D] after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 text-xs text-[#5C5C50] hover:text-[#1E3A1E] transition-colors duration-200"
            >
              <span className="text-sm leading-none">{current.flag}</span>
              <span className="hidden sm:inline">{current.label}</span>
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-[#FAFAF7] border border-[#E4E2D8] rounded-lg shadow-md overflow-hidden">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors ${
                        language === lang.code
                          ? "text-[#A8A89A] cursor-default"
                          : "font-medium text-[#1E3A1E] hover:bg-[#F2F0E8] cursor-pointer"
                      }`}
                    >
                      <span className="text-sm leading-none">{lang.flag}</span>
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E2D8] bg-[#FAFAF7]">
          <ul className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left py-3 font-[family-name:var(--font-nav)] text-[13px] uppercase tracking-[0.14em] text-[#5C5C50] hover:text-[#1E3A1E] transition-colors border-b border-[#F2F0E8] last:border-0"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
