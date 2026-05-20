"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FloatingOrderButton() {
  const { language } = useLanguage();

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-accordion", { detail: { id: "where-phone" } }));
    setTimeout(() => {
      const el = document.getElementById("where-phone");
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[999] bg-[#1E3A1E] hover:bg-[#3D7A3D] text-[#E8E4D8] font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.18em] px-6 py-3.5 shadow-lg transition-colors duration-200"
    >
      {language === "sr" ? "Poruči" : "Order"}
    </button>
  );
}
