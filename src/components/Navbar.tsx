"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "sr", flag: "🇷🇸", label: "Srpski" },
  { code: "en", flag: "🇬🇧", label: "English" },
] as const;

export default function Navbar() {
  const { language, setLanguage, navItems } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">Panacea</span>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl leading-none">{current.flag}</span>
            <span>{current.label}</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <ul className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                      language === lang.code ? "font-medium text-gray-900" : "text-gray-600"
                    }`}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
