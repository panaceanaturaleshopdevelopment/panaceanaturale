"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import OrderForm from "@/components/OrderForm";

export default function FloatingOrderButton() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[999] min-h-16 min-w-44 rounded-md border border-[#C8A84B]/70 bg-[#1E3A1E] px-10 py-5 font-[family-name:var(--font-nav)] text-[13px] font-semibold uppercase tracking-[0.18em] text-[#F5F0DF] shadow-[0_8px_24px_rgba(30,58,30,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8A84B] hover:bg-[#3D7A3D] hover:shadow-[0_12px_28px_rgba(30,58,30,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF7]"
      >
        {language === "sr" ? "Poruči" : "Order"}
      </button>
      {isOpen && <OrderForm onClose={() => setIsOpen(false)} />}
    </>
  );
}
