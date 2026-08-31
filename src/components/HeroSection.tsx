"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* Fixed background — stays pinned while the page scrolls over it */}
      <div className="fixed inset-0 -z-10 bg-[#D6E4D6]">
        <Image
          src="/images/9. visual1600x1200.png"
          alt="Panacea Naturale"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/10" />
      </div>

      {/* Hero section — visual only, text already in image */}
      <section
        id="home"
        className="min-h-[calc(100vh-8rem)]"
      />
    </>
  );
}
