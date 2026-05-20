"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (!textRef.current) return;
      textRef.current.style.transform = `translateY(${y * 0.35}px)`;
      textRef.current.style.opacity = String(Math.max(0, 1 - y / 450));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Fixed background — stays pinned while the page scrolls over it */}
      <div className="fixed inset-0 -z-10 bg-[#D6E4D6]">
        <Image
          src="/images/0. pocetna.png"
          alt="Panacea Naturale"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-stone-900/30" />
      </div>

      {/* Hero text — scrolls at 0.35× speed and fades out */}
      <section
        id="home"
        className="min-h-[calc(100vh-8rem)] flex items-center justify-center"
      >
        <div
          ref={textRef}
          className="max-w-4xl mx-auto px-8 text-center"
          style={{ textShadow: "0 0 12px rgba(30, 58, 30, 0.8), 0 0 28px rgba(61, 122, 61, 0.5)" }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-[3.5rem] font-medium italic leading-relaxed text-[#F7F4EE]">
            {t.hero.quote}
          </p>
          <p className="mt-8 font-[family-name:var(--font-cormorant)] text-[22px] italic font-medium tracking-wide text-[#F7F4EE]">
            — {t.hero.attribution}
          </p>
        </div>
      </section>
    </>
  );
}
