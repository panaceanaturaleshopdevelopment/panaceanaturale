"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { useLanguage } from "@/context/LanguageContext";

// Public container ID (not a secret). Tags/triggers are managed in the GTM UI, not in this repo.
const GTM_ID = "GTM-W8C7W6MW";

const STORAGE_KEY = "panacea-cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";
// Dispatched by the footer's "cookie settings" button to reopen the banner.
export const OPEN_SETTINGS_EVENT = "open-cookie-settings";

// First-party cookies set by common analytics/marketing tags (GA, Google Ads, Meta Pixel).
const TRACKING_COOKIE = /^(_ga|_gid|_gat|_gcl|_fbp|_fbc)/;

type Consent = "granted" | "denied";

// Fallback for when localStorage is unavailable (private mode, blocked storage):
// the choice then lasts for the current page view only.
let memoryConsent: Consent | null = null;

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {}
  return memoryConsent;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function deleteTrackingCookies() {
  const hostParts = location.hostname.split(".");
  // Try every parent domain too, since tags often set cookies on e.g. ".panaceanaturale.rs".
  const domains = ["", ...hostParts.map((_, i) => hostParts.slice(i).join("."))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!TRACKING_COOKIE.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export default function CookieConsent() {
  const { t } = useLanguage();
  // undefined until hydrated, so server and first client render match (no banner, no GTM).
  const consent = useSyncExternalStore(subscribe, readConsent, () => undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
  }, []);

  const choose = (value: Consent) => {
    const wasGranted = consent === "granted";
    memoryConsent = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setSettingsOpen(false);

    if (wasGranted && value === "denied") {
      // GTM and its tags can't be unloaded from a running page: clear their cookies and reload.
      deleteTrackingCookies();
      location.reload();
      return;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const showBanner = consent === null || (consent !== undefined && settingsOpen);
  const buttonClass =
    "rounded-md border border-[#C8A84B]/70 px-6 py-3 font-[family-name:var(--font-nav)] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F5F0DF] transition-colors duration-200 hover:border-[#C8A84B] hover:bg-[#3D7A3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A84B]";

  return (
    <>
      {/* GTM (and every tag inside it) only loads after explicit consent. */}
      {consent === "granted" && <GoogleTagManager gtmId={GTM_ID} />}

      {showBanner && (
        <section
          aria-label={t.cookies.label}
          className="fixed inset-x-0 bottom-0 z-[999] border-t border-[#2D5A2D] bg-[#1E3A1E] shadow-[0_-8px_24px_rgba(30,58,30,0.24)]"
        >
          <div className="max-w-4xl mx-auto px-6 py-5 md:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="flex-1 font-[family-name:var(--font-serif)] text-[15px] font-light leading-relaxed text-[#E8E4D8]">
              {t.cookies.message}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:w-72 sm:shrink-0">
              <button type="button" onClick={() => choose("granted")} className={buttonClass}>
                {t.cookies.accept}
              </button>
              <button type="button" onClick={() => choose("denied")} className={buttonClass}>
                {t.cookies.decline}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
