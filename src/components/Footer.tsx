"use client";

import { useLanguage } from "@/context/LanguageContext";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer id="footer" className="bg-[#1E3A1E] text-[#E8E4D8]">
      <div className="max-w-4xl mx-auto px-8 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">

          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-nav)] text-[12px] uppercase tracking-[0.28em] text-[#E8E4D8] mb-1">
              Panacea Naturale
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[14px] font-light text-[#7FA87F]">
              {f.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#5A8A5A] mb-3">
              {f.contactHeading}
            </p>
            <div className="space-y-1.5">
              <a href="tel:+381615000280" className="block font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200">
                0615000280
              </a>
              <a href="mailto:panacea.naturale@gmail.com" className="block font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200">
                panacea.naturale@gmail.com
              </a>
              <p className="font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4]">
                {f.address}
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#5A8A5A] mb-3">
              {f.followHeading}
            </p>
            <div className="space-y-1.5">
              <a
                href="https://www.instagram.com/panacea_naturale?igsh=MXVvaGJ2ZDdycjFkbQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Panacea-Naturale/61562838522730/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@PanaceaNaturale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200"
              >
                <YouTubeIcon />
                YouTube
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#2D5A2D] pt-4">
          <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.14em] text-[#4A7A4A]">
            {f.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
