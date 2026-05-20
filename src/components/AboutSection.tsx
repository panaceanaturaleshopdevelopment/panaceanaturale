"use client";

import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/tx";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#F2F0E8] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-8 py-28">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {t.about.label}
        </p>

        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-8">
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {t.about.p1}
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {t.about.p2}
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {tx(t.about.p3)}
          </p>
        </div>

      </div>
    </section>
  );
}
