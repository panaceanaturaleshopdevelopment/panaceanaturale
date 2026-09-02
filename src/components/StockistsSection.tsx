"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import Accordion from "@/components/ui/Accordion";

const StockistsMap = dynamic(() => import("./StockistsMap"), { ssr: false });

export default function StockistsSection() {
  const { t } = useLanguage();
  const s = t.stockists;

  return (
    <section id="where" className="bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {s.label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <Accordion id="where-map" heading={s.map}>
          <div className="w-full h-96 border border-[#E4E2D8] overflow-hidden isolate">
            <StockistsMap />
          </div>
        </Accordion>

        <Accordion id="where-phone" heading={s.phone.heading}>
          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light mb-6">
            {s.phone.text}
          </p>
          <a
            href="tel:+381615000280"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-nav)] text-[12px] uppercase tracking-[0.18em] text-[#1E3A1E] hover:text-[#3D7A3D] transition-colors duration-200"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            0615000280
          </a>
        </Accordion>

        <Accordion id="where-email" heading={s.email.heading}>
          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light mb-8">
            {s.email.text}
          </p>
          <a
            href={`mailto:panacea.naturale@gmail.com?subject=${encodeURIComponent(s.email.subject)}`}
            className="inline-block font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.18em] text-[#FAFAF7] bg-[#1E3A1E] px-8 py-3.5 hover:bg-[#3D7A3D] transition-colors duration-200"
          >
            {s.email.button}
          </a>
        </Accordion>

      </div>
    </section>
  );
}
