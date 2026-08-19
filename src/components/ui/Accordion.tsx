"use client";

import { useEffect, useState } from "react";

type Props = {
  id?: string;
  heading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({ id, heading, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!id) return;
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail?.id === id) {
        setOpen(true);

        // After programmatic open, ensure the accordion scrolls into view with same offset
        setTimeout(() => {
          const el = document.getElementById(id);
          if (!el) return;
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }, 60);
      }
    };
    window.addEventListener("open-accordion", handler);
    return () => window.removeEventListener("open-accordion", handler);
  }, [id]);

  return (
    <div id={id}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between border-t border-[#C8C4B4] py-8 group"
      >
        <span className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D] group-hover:text-[#1E3A1E] transition-colors duration-200">
          {heading}
        </span>
        <svg
          className={`w-3.5 h-3.5 shrink-0 text-[#3D7A3D] group-hover:text-[#1E3A1E] transition-all duration-300 ${open ? "rotate-180" : ""}`}
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
          <div className="pb-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
