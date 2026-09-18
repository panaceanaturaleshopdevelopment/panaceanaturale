"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contact" className="bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">
        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {c.label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <h2 className="font-[family-name:var(--font-serif)] text-[38px] md:text-[44px] font-light text-[#1E3A1E] leading-tight mb-12">
          {c.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
              {c.phoneLabel}
            </p>
            <a
              href="tel:+381615000280"
              className="font-[family-name:var(--font-serif)] text-[20px] font-light text-[#1E3A1E] hover:text-[#3D7A3D] transition-colors duration-200"
            >
              0615000280
            </a>
          </div>

          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
              {c.emailLabel}
            </p>
            <a
              href="mailto:panacea.naturale@gmail.com"
              className="font-[family-name:var(--font-serif)] text-[20px] font-light text-[#1E3A1E] hover:text-[#3D7A3D] transition-colors duration-200 break-all"
            >
              panacea.naturale@gmail.com
            </a>
          </div>

          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
              {c.addressLabel}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] font-light text-[#1E3A1E]">
              {t.footer.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
