"use client";

import { useState } from "react";
import Image from "next/image";

function PlayIcon() {
  return (
    <svg className="ml-1 h-6 w-6 text-[#1E3A1E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/**
 * Click-to-play facade: shows the YouTube thumbnail with a play button, and only
 * mounts the actual iframe after a click, so nothing loads from YouTube until the
 * user actually wants to watch.
 */
export default function YouTubeEmbed({ id, aspect }: { id: string; aspect: string }) {
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
