"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Fixed background — stays pinned while the page scrolls over it */}
      <div className="fixed inset-x-0 top-20 -z-10 h-[75vw] bg-[#D6E4D6] md:inset-0 md:h-auto">
        <Image
          src="/images/9. visual1600x1200.png"
          alt="Panacea Naturale"
          fill
          sizes="100vw"
          className="object-contain object-top opacity-70 md:object-cover md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/10" />
      </div>

      {/* Hero section — visual only, text already in image */}
      <section
        id="home"
        className="h-[75vw] min-h-0 md:min-h-[calc(100vh-8rem)]"
      />
    </>
  );
}
