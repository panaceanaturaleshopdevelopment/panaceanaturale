"use client";

import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[#1E3A1E] text-[#E8E4D8]">
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
              <a href="tel:+381677208129" className="block font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200">
                +381 67 7208 129
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
                href="#"
                className="flex items-center gap-2 font-[family-name:var(--font-serif)] text-[14px] font-light text-[#C8C4B4] hover:text-[#E8E4D8] transition-colors duration-200"
              >
                <FacebookIcon />
                Facebook
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
