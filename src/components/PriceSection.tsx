"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PACKAGE_PRICE_RSD, formatPriceRSD } from "@/lib/pricing";

export default function PriceSection() {
  const { language, t } = useLanguage();
  const p = t.price;

  return (
    <section id="price" className="bg-[#F2F0E8]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">
        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {p.label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <h2 className="font-[family-name:var(--font-serif)] text-[38px] md:text-[44px] font-light text-[#1E3A1E] leading-tight mb-12">
          {p.heading}
        </h2>

        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="font-[family-name:var(--font-serif)] text-[56px] leading-none font-light text-[#1E3A1E]">
              {formatPriceRSD(PACKAGE_PRICE_RSD, language)}{" "}
              <span className="text-[24px] text-[#5C5C50] font-light">{p.currency}</span>
            </p>
            <p className="mt-3 font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.16em] text-[#6B6B5E]">
              {p.perPackage}
            </p>
            <p className="mt-6 font-[family-name:var(--font-serif)] text-[15px] text-[#5C5C50] italic">
              {p.note}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center border border-dashed border-[#C8C4B4] rounded-sm min-h-[220px] w-full">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.16em] text-[#8C8C7A] text-center px-6">
              {p.photoSoon}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
