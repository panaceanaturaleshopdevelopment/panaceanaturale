"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollStrip from "@/components/ui/ScrollStrip";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

const videos = [
  {
    id: "ugN_-1-ohqc",
    caption: {
      sr: "Proces proizvodnje",
      en: "The production process",
    },
  },
  {
    id: "K0SaBB6R5QA",
    caption: {
      sr: "Iskustvo korisnika",
      en: "Customer's experience",
    },
  },
] as const;

/**
 * Rendered inside GallerySection, not its own top-level section — client asked for the
 * videos to live under Galerija rather than as a separate nav item/section, sized and
 * scrolled the same way as the photo strip above it.
 */
export default function VideoGrid() {
  const { language, t } = useLanguage();

  return (
    <div id="gallery-videos" className="max-w-4xl mx-auto px-8 pt-16">
      <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-6">
        {t.videos.heading}
      </p>
      <ScrollStrip>
        {videos.map((video) => (
          <div key={video.id} className="shrink-0 w-64 md:w-72 snap-start">
            <YouTubeEmbed id={video.id} aspect="aspect-[3/4]" />
            <p className="mt-3 font-[family-name:var(--font-serif)] text-[14px] text-[#2C2C22] font-light">
              {video.caption[language]}
            </p>
          </div>
        ))}
      </ScrollStrip>
    </div>
  );
}
