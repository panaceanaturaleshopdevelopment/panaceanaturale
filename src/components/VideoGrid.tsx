"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const videos = [
  {
    id: "byQ2bghKGog",
    aspect: "aspect-video",
    caption: {
      sr: "Proizvodnja ZDRAVOG soka od SPELTE - U nasem ataru 990",
      en: "Production of HEALTHY spelt juice — on our land",
    },
  },
  {
    id: "K0SaBB6R5QA",
    aspect: "aspect-[9/16]",
    caption: {
      sr: "Iskustvo korisnika",
      en: "Customer's experience",
    },
  },
] as const;

function PlayIcon() {
  return (
    <svg className="ml-1 h-6 w-6 text-[#1E3A1E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoEmbed({ id, aspect }: { id: string; aspect: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-sm bg-[#1E3A1E]`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-200 group-hover:bg-black/30">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAFAF7]/90 shadow-lg transition-transform duration-200 group-hover:scale-105">
              <PlayIcon />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Rendered inside GallerySection, not its own top-level section — client asked for the
 * videos to live under Galerija rather than as a separate nav item/section.
 */
export default function VideoGrid() {
  const { language, t } = useLanguage();

  return (
    <div id="gallery-videos" className="max-w-4xl mx-auto px-8 pt-16">
      <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-6">
        {t.videos.heading}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        {videos.map((video) => (
          <div key={video.id}>
            <VideoEmbed id={video.id} aspect={video.aspect} />
            <p className="mt-4 font-[family-name:var(--font-serif)] text-[16px] text-[#2C2C22] font-light">
              {video.caption[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
