import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/1. psenica.png"
        alt="Polje pšenice"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-stone-900/35" />

      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center animate-fade-in">
        <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-[3.5rem] font-light italic leading-relaxed text-[#F7F4EE]">
          &ldquo;Snaga tvoga tela leži u sokovima biljaka.&rdquo;
        </p>
        <p className="mt-7 font-[family-name:var(--font-raleway)] text-[11px] uppercase tracking-[0.22em] text-[#D9D4C5]">
          Otac kineske medicine&ensp;&middot;&ensp;Shin-Nongu
        </p>
      </div>
    </section>
  );
}
