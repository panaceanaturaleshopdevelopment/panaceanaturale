"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  { src: "/images/1. psenica.png", alt: "Polje pšenice" },
  { src: "/images/3. trava.png", alt: "Pšenična trava" },
  { src: "/images/4. uzgajanje.png", alt: "Uzgajanje pšenične trave" },
  { src: "/images/5. cedjenje1.png", alt: "Hladno ceđenje soka" },
  { src: "/images/6. cedjenje2.png", alt: "Hladno ceđenje soka" },
  { src: "/images/7. bocice.png", alt: "Flašice soka od pšenične trave" },
  { src: "/images/8. slider panacea.png", alt: "Panacea Naturale" },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevLightbox = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
  const nextLightbox = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % images.length : null)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, prevLightbox, nextLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      <section id="gallery" className="bg-[#FAFAF7] pb-20">

        {/* Header */}
        <div className="max-w-4xl mx-auto px-8 pt-28 pb-10">
          <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
            {t.gallery.label}
          </p>
          <div className="w-10 h-px bg-[#3D7A3D]" />
        </div>

        {/* Strip */}
        <div className="max-w-4xl mx-auto px-8">
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="shrink-0 w-64 md:w-72 aspect-[3/4] relative overflow-hidden group cursor-zoom-in snap-start"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  priority={i === 0}
                />
              </button>
            ))}
            {/* right breathing room */}
            <div className="shrink-0 w-4" />
          </div>

          {/* Prev */}
          {canLeft && (
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm text-[#1E3A1E] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Next */}
          {canRight && (
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm text-[#1E3A1E] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
        </div>

      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[1100] bg-black/92 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 p-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={lightbox}
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-[88vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 p-2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-white/40">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
