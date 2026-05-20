"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  { src: "/images/1. psenica.png", alt: "Polje pšenice" },
  { src: "/images/3. trava.png", alt: "Pšenična trava" },
  { src: "/images/4. uzgajanje.png", alt: "Uzgajanje pšenične trave" },
  { src: "/images/5. cedjenje1.png", alt: "Hladno ceđenje soka" },
  { src: "/images/6. cedjenje2.png", alt: "Hladno ceđenje soka" },
  { src: "/images/7. bocice.png", alt: "Flašice soka od pšenične trave" },
];

function GalleryImage({
  index,
  src,
  alt,
  aspect = "aspect-[3/2]",
  onOpen,
}: {
  index: number;
  src: string;
  alt: string;
  aspect?: string;
  onOpen: (i: number) => void;
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      className={`relative w-full ${aspect} overflow-hidden group cursor-zoom-in`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
    </button>
  );
}

export default function GallerySection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() => setActive((i) => (i !== null ? (i + 1) % images.length : null)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <section id="gallery" className="bg-[#FAFAF7]">
        <div className="max-w-4xl mx-auto px-8 pt-28 pb-0">
          <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
            {t.gallery.label}
          </p>
          <div className="w-10 h-px bg-[#3D7A3D] mb-12" />
        </div>

        <div className="max-w-4xl mx-auto px-8 pb-28 space-y-4">
          <GalleryImage index={0} {...images[0]} onOpen={setActive} />

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <GalleryImage index={1} {...images[1]} aspect="aspect-[4/3]" onOpen={setActive} />
            </div>
            <div className="col-span-2">
              <GalleryImage index={2} {...images[2]} aspect="aspect-[4/3]" onOpen={setActive} />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <GalleryImage index={3} {...images[3]} aspect="aspect-[4/3]" onOpen={setActive} />
            </div>
            <div className="col-span-3">
              <GalleryImage index={4} {...images[4]} aspect="aspect-[4/3]" onOpen={setActive} />
            </div>
          </div>

          <GalleryImage index={5} {...images[5]} onOpen={setActive} />
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[1100] bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 p-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image — stopPropagation on the img itself so only the backdrop closes */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={active}
            src={images[active].src}
            alt={images[active].alt}
            className="max-w-[88vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 p-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-white/40">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
