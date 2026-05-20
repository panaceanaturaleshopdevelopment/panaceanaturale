"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "sr", flag: "🇷🇸", label: "srb" },
  { code: "en", flag: "🇬🇧", label: "eng" },
] as const;

export default function Navbar() {
  const { language, setLanguage, navItems } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 128;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
    setMobileSubmenu(null);
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
      className={`fixed top-0 left-0 right-0 z-[1000] bg-[#1E3A1E] border-b transition-all duration-300 ${
        scrolled ? "border-[#2D5A2D] shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-32 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileOpen((o) => !o);
              } else {
                scrollTo("home");
              }
            }}
            aria-label="Početna"
          >
            <div
              style={{
                backgroundColor: "#5A8A5A",
                WebkitMaskImage: "url(/panacea_logo.png)",
                maskImage: "url(/panacea_logo.png)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                height: "7rem",
                aspectRatio: "535 / 466",
              }}
            />
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollTo(item.id)}
                  className="relative flex items-center gap-1 font-[family-name:var(--font-nav)] text-[13px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#7FA87F] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                  <svg className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-[#1E3A1E] border border-[#2D5A2D] shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <li key={child.id} className="border-b border-[#2D5A2D] last:border-0">
                      <button
                        onClick={() => scrollTo(child.id)}
                        className="w-full text-left px-4 py-2.5 font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] hover:bg-[#2D5A2D] transition-colors duration-150"
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="relative font-[family-name:var(--font-nav)] text-[13px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#7FA87F] after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 text-xs text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200"
            >
              <span className="text-sm leading-none">{current.flag}</span>
              <span className="hidden sm:inline">{current.label}</span>
              <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-[#1E3A1E] border border-[#2D5A2D] rounded-lg shadow-md overflow-hidden">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors ${
                        language === lang.code
                          ? "text-[#5A8A5A] cursor-default"
                          : "font-medium text-[#E8E4D8] hover:bg-[#2D5A2D] cursor-pointer"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2D5A2D] bg-[#1E3A1E]">
          <ul className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.id}>
                  <button
                    onClick={() => setMobileSubmenu((prev) => (prev === item.id ? null : item.id))}
                    className="w-full flex items-center justify-between py-3 font-[family-name:var(--font-nav)] text-[13px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors border-b border-[#2D5A2D]"
                  >
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenu === item.id ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileSubmenu === item.id && (
                    <ul className="pl-4 border-l border-[#2D5A2D] ml-2 mb-1">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => scrollTo(child.id)}
                            className="w-full text-left py-2.5 font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-3 font-[family-name:var(--font-nav)] text-[13px] uppercase tracking-[0.14em] text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors border-b border-[#2D5A2D] last:border-0"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
