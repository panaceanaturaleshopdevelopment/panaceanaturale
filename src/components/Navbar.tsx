"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, navItems } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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

        <button
          onClick={toggleLanguage}
          className="text-xl leading-none hover:scale-110 transition-transform"
          aria-label={`Switch to ${language === "sr" ? "English" : "Serbian"}`}
          title={language === "sr" ? "Switch to English" : "Prebaci na srpski"}
        >
          {language === "sr" ? "🇬🇧" : "🇷🇸"}
        </button>
      </nav>
    </header>
  );
}
