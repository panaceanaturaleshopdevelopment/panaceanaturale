"use client";

import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/tx";
import Accordion from "@/components/ui/Accordion";

export default function UsageSection() {
  const { t } = useLanguage();
  const u = t.usage;

  return (
    <section id="usage" className="bg-[#F2F0E8]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {u.label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-8 mb-16">
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {tx(u.intro)}
          </p>
        </div>

        <Accordion heading={u.kako.heading}>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {tx(u.kako.p1)}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.kako.p2}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {tx(u.kako.p3)}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.kako.p4}
            </p>
          </div>
        </Accordion>

        <Accordion heading={u.kolicina.heading}>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {tx(u.kolicina.p1)}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.kolicina.p2}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.kolicina.p3}
            </p>
          </div>
        </Accordion>

        <Accordion heading={u.koMoze.heading}>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.koMoze.p1}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {u.koMoze.p2}
            </p>
          </div>
        </Accordion>

      </div>
    </section>
  );
}
