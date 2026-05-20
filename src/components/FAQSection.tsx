"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function FAQItem({ question, answer, link }: { question: string; answer: string; link?: { text: string; url: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#C8C4B4]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span className="font-[family-name:var(--font-serif)] text-[18px] leading-snug text-[#2C2C22] font-light group-hover:text-[#1E3A1E] transition-colors duration-200">
          {question}
        </span>
        <svg
          className={`w-4 h-4 shrink-0 mt-1 text-[#3D7A3D] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-[family-name:var(--font-serif)] text-[18px] leading-[1.9] text-[#5C5C50] font-light pb-6">
            {answer}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D7A3D] hover:text-[#1E3A1E] underline underline-offset-2 transition-colors duration-200"
              >
                {link.text}
              </a>
            )}
            {link && "."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t } = useLanguage();
  const { label, items } = t.faq;

  if (items.length === 0) return null;

  return (
    <section id="faq" className="bg-[#F2F0E8]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div>
          {items.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} link={item.link} />
          ))}
          <div className="border-t border-[#C8C4B4]" />
        </div>

      </div>
    </section>
  );
}
