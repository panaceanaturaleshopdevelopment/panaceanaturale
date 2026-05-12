"use client";

import { createContext, useContext, useState } from "react";

type Language = "sr" | "en";

type NavItem = {
  id: string;
  label: string;
};

const nav: Record<Language, NavItem[]> = {
  sr: [
    { id: "home", label: "Početna" },
    { id: "about", label: "O nama" },
    { id: "juice", label: "O soku" },
    { id: "usage", label: "Upotreba" },
    { id: "where", label: "Gde pronaći" },
    { id: "contact", label: "Kontakt" },
  ],
  en: [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "juice", label: "About the juice" },
    { id: "usage", label: "How to use" },
    { id: "where", label: "Where to find" },
    { id: "contact", label: "Contact" },
  ],
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  navItems: NavItem[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("sr");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, navItems: nav[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
