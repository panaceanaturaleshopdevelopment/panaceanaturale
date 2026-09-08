
# Project Overview

## Goal
Website for Panacea Naturale — a family business from Čačak producing cold-pressed wheatgrass (spelt) juice since 2013. The site presents the product, educates users, shows stockists on a map, and enables ordering via phone/email.

---

# Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- React Leaflet + OpenStreetMap (interactive stockists map)
- CSS scroll snap (horizontal gallery)
- Custom i18n (LanguageContext — SR/EN)
- Resend (order inquiry email delivery)

---

# Project Structure

## Page sections (in order):
1. Navbar
2. Hero (`#home`)
3. O nama (`#about`)
4. O soku (`#juice`) — subsections: `#juice-zeleno-zdravlje`, `#juice-nutritivni-sastav`, `#juice-hladno-cedjenje`, `#juice-zasto-biraju`
5. Galerija (`#gallery`)
6. Upotreba (`#usage`)
7. Dostupnost (`#where`) — subsections: `#where-map`, `#where-phone`, `#where-email`
8. Česta pitanja (`#faq`)
9. Footer

## Key files:
- `src/context/LanguageContext.tsx` — all translations (SR/EN) + nav structure
- `src/lib/tx.tsx` — rich text helper: renders `**bold**` markers as styled spans
- `src/components/ui/Accordion.tsx` — reusable collapsible subsection; listens for `open-accordion` custom event
- `src/components/FloatingOrderButton.tsx` — fixed CTA bottom-right that opens the `OrderForm` modal

---

# Design Direction

## Brand Positioning
Premium wellness and health brand focused on cold-pressed wheatgrass/spelt juice.

The website should feel:
- clean
- natural
- trustworthy
- premium
- calm
- healthy

---

## Style Inspiration

Visual references:
- premium wellness brands (Looops Moments referenced for scroll/gallery style)
- Scandinavian minimalism
- Japanese-inspired clean layouts
- modern organic product websites

---

## Visual Principles

- airy layouts
- generous whitespace
- soft typography
- elegant product presentation
- natural photography
- subtle motion
- editorial feel

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Dark green | `#1E3A1E` | Navbar, footer background |
| Medium green | `#3D7A3D` | Section labels, accents |
| Muted green | `#5A8A5A` | Footer headings, logo color |
| Light green | `#7FA87F` | Hover underlines, footer tagline |
| Warm white | `#FAFAF7` | Section backgrounds (alt) |
| Warm neutral | `#F2F0E8` | Section backgrounds |
| Body text | `#2C2C22` | Main paragraph text |
| Muted text | `#5C5C50` | Secondary text |

---

## UX Tone

The experience should feel:
- calm
- premium
- simple
- healthy
- easy to trust

Avoid:
- cluttered layouts
- generic SaaS look
- crypto/web3 aesthetic
- overly corporate UI

---

# Navbar

- Dark green background (`#1E3A1E`) matching footer
- **Theme toggle**: change `THEME` constant at top of `Navbar.tsx` between `"dark"` and `"light"` to switch full color scheme
- Logo uses CSS mask (`backgroundColor: #5A8A5A`) for exact brand color
- Logo replaces hamburger on mobile — clicking toggles mobile menu
- Desktop hover dropdowns for O soku and Dostupnost subsections
- Mobile accordion submenus
- Language switcher: srb / eng
- Height: `h-20` (80px) — logo is `h-28` (112px) and bleeds 32px below the green bar
- `overflow: visible` on `<header>` allows logo to overflow without clipping
- Logo wrapper: `self-start items-start` — anchors to top, branch extends downward
- Scroll offset: **80px** applied to navbar anchor scrolls
- `main` padding: `pt-20` in `layout.tsx`

---

# Current Status

## Completed sections:

### Navbar
- Dark green theme (`#1E3A1E`) with light theme toggle — change `THEME` constant at top of `Navbar.tsx`
- Height `h-20` (80px); logo `h-28` bleeds 32px below the bar (`overflow: visible`, `self-start`)
- Logo: CSS mask div with `backgroundColor: #5A8A5A` — exact brand color, no filter approximation
- Mobile: logo replaces hamburger (click toggles menu on `window.innerWidth < 768`)
- Dropdown submenus for O soku and Dostupnost (hover desktop, accordion mobile)
- Language switcher: lowercase `srb` / `eng`
- Nav text contrast: `#D8D4C4` default, `#F0EDE4` hover

### Hero (`#home`)
- Background: `9. visual1600x1200.png` (fixed responsive visual)
- Text is baked into the visual asset; the hero component does not render a text overlay
- Mobile uses `object-contain` and a 4:3 section height to avoid cropping and empty space
- Desktop uses a full-viewport `object-cover` presentation
- Visual layers: `bg-[#D6E4D6]` container + `opacity-70` image + `bg-gradient-to-b from-stone-900/40 to-stone-900/10`

### O nama (`#about`)
- Complete, final text in place (SR + EN)

### O soku (`#juice`)
- Intro with 3 fact stats (100%, 30ml, 10–12 days)
- 4 collapsible subsections (Accordion component)
- Nutrient table with bilingual nutrient names
- All text translated SR/EN

### Galerija (`#gallery`)
- Horizontal scroll strip, portrait cards (`3:4`), CSS snap
- Arrows shown at scroll boundaries
- Click any card → full-screen lightbox with prev/next, keyboard nav, backdrop close

### Upotreba (`#usage`)
- Intro paragraph + 3 collapsible subsections (Accordion)
- All text translated SR/EN

### Dostupnost (`#where`)
- Interactive OpenStreetMap with 23 stockist pins (red SVG markers + popups)
- 3 collapsible subsections: map, phone, email
- Phone: `0615000280` with `tel:+381615000280` link
- Email: `mailto:` link (replaces previous Nodemailer form)
- Map z-index fix: `isolation: isolate` prevents Leaflet controls from overlapping navbar

### Česta pitanja (`#faq`)
- 6 Q&As (SR + EN)
- Custom FAQ accordion with 18px question text (not uppercase)
- Certificate link opens `cert_panacea.pdf` in new tab
- Renders nothing if `items` array is empty

### Footer
- Dark green (`#1E3A1E`), 3-column layout: brand | contact info | find us
- Contact: `0615000280` | `panacea.naturale@gmail.com` | Čačak, Serbia address
- Social: Instagram (linked), Facebook (linked)
- Copyright line
- All text responsive, mobile-friendly 3→1 column layout

### Floating order button
- Fixed bottom-right, always visible, larger with rounded corners, gold border, premium shadow, and hover lift
- Opens the `OrderForm` modal with required full name, email, phone, physical address, and package count fields
- Package count is a dropdown; each package contains 7 bottles
- Includes an optional message field and bilingual SR/EN labels
- Submits to `POST /api/orders`
- "Poruči" (SR) / "Order" (EN); form submit action is "Pošalji upit" / "Send inquiry"

### Order email flow
- `src/components/OrderForm.tsx` provides the client-side order form and submission state
- `src/app/api/orders/route.ts` validates the request, converts packages to 7 bottles per package, generates a unique `PN-...` order number, and sends the email through Resend
- Email recipient is read from `ORDER_RECIPIENT_EMAIL` (not hardcoded — deliberately kept out of source since this repo is public; see Pending below), currently set to `panacea.naturale.shop@gmail.com` in Vercel
- Email subject includes the order number and bottle count
- Customer email is used as `replyTo`; the body includes name, address, order date/time, message, and contact details
- Required server environment variables: `RESEND_API_KEY`, verified `RESEND_FROM_EMAIL`, and `ORDER_RECIPIENT_EMAIL`
- In Vercel, `RESEND_API_KEY` is stored as type `Secret` (write-only, never readable again, even in the dashboard) since it's a real credential. `RESEND_FROM_EMAIL` and `ORDER_RECIPIENT_EMAIL` are stored as type `Config` instead (readable in the dashboard and via `vercel env pull`) since they're not secrets, just settings — this makes it possible to actually verify their current value later instead of only being able to blindly overwrite it
- Security controls: 16 KB request limit, server-side validation, honeypot field, and best-effort limit of 5 requests per IP per 10 minutes
- The current in-memory limiter is not shared between Vercel serverless instances; add shared rate limiting or CAPTCHA/Turnstile before high-traffic launch

#### Resend account & domain status (as of 2026-09-08)
- **Active Resend account**: dedicated business account registered with `panacea.naturale.shop@gmail.com` credentials (replaces an earlier personal/sandbox account used only during initial setup — that old account's API key is no longer referenced anywhere and can be revoked whenever convenient).
- **API key**: named `panacea-vercel-production` (sending-access only), stored as `RESEND_API_KEY` in Vercel (`panaceanaturale-z1e3`, Production environment). Not recorded here — rotate via the Resend dashboard/MCP tools and update the Vercel env var + redeploy if it ever needs to change.
- **Domain added to Resend**: `panaceanaturale.rs` (Resend domain id `58cdc29e-e5c7-444f-864f-c667c30a7e45`, region `us-east-1`, sending enabled, receiving disabled).
- **DNS records added** (via `vercel dns add`, since this domain's zone is managed in Vercel):
  - DKIM — `TXT resend._domainkey` (record id `rec_734c4e6f07bfdf339e1dd287`)
  - SPF — `MX send` → `feedback-smtp.us-east-1.amazonses.com`, priority 10 (record id `rec_d7e65d34792a690089073efa`)
  - SPF — `TXT send` → `v=spf1 include:amazonses.com ~all` (record id `rec_6cff613639e352526137f20e`)
- **Verification status**: `pending`. Likely blocked by an unresolved registrar issue — see the yu.net nameserver item below; Resend's verification crawler may hit resolvers still pointed at the old DNS host, which has no knowledge of these records.
- **Current `RESEND_FROM_EMAIL`**: still `onboarding@resend.dev` (Resend's shared sandbox address) as an interim measure. This currently delivers successfully **only** because the order recipient (`panacea.naturale.shop@gmail.com`) happens to match this Resend account's own owner email — sandbox mode only allows sending to the account owner. This is a fragile coincidence, not a real fix: it would break for any other recipient (e.g. emailing a customer directly) and isn't something to build on.
- **Once `panaceanaturale.rs` shows `verified` in Resend**: update `RESEND_FROM_EMAIL` in Vercel to an address on that domain (e.g. `orders@panaceanaturale.rs`) and redeploy — this removes the sandbox restriction entirely and enables sending to any recipient.

## Assets:
- Images: `public/images/` (0–7, hero + 6 gallery photos)
- Certificate: `public/documents/cert_panacea.pdf`

## Fonts:
- **Serif headers**: Cormorant Garamond (300, 400, 500) — elegant, premium feel
- **Navigation/labels**: Raleway (400, 500, 600) — clean, geometric
- **Fallback**: Geist Sans system font stack

## Pending:

### Unblocked — can be worked whenever
- [x] Facebook link URL — Updated: `https://www.facebook.com/people/Panacea-Naturale/61562838522730/`
- [x] Page metadata (`title`, `description`) in `layout.tsx` — set to Serbian SEO copy (matches the app's default language), replacing the default "Create Next App" placeholder
- [x] `lang` attribute in `<html>` — now reactive: `layout.tsx` sets the SSR default to `"sr"`, and `LanguageProvider` (`LanguageContext.tsx`) syncs `document.documentElement.lang` client-side via `useEffect` whenever the user toggles language. Verified via SSR curl check (correct `lang="sr"` + title/description on initial load); the client-side toggle itself wasn't click-tested in an actual browser, only reasoned through as a standard React pattern.
- [ ] Shared order-endpoint anti-abuse protection (rate limiting/CAPTCHA) — current in-memory limiter doesn't work across Vercel's serverless instances; needed before high-traffic launch

### Blocked — waiting on yu.net support, nothing to do here until they respond
- [ ] **yu.net nameserver fix** *(blocks the two items below)* — `panaceanaturale.rs`'s `.rs` registry delegation still lists both the old nameservers (`ns1/ns2.stapozelis.com`) and the new Vercel ones (`ns1/ns2.vercel-dns.com`) simultaneously, more than 4 days after the change was made — not normal propagation, the old ones were never removed at the registrar. Causes inconsistent site resolution (some visitors/resolvers still get the old site). Support has been contacted at my.yu.net; awaiting their fix.
- [ ] **Resend domain verification** *(blocked by yu.net fix above)* — `panaceanaturale.rs` has been added to a dedicated Resend account and its DNS records added in Vercel; verification is `pending`, likely because Resend's crawler can inconsistently hit the old, un-migrated nameservers. Once yu.net's fix lands and delegation is confirmed clean, re-check verification status; once verified, update `RESEND_FROM_EMAIL` to an address on that domain and redeploy.
- [ ] **`sokodpsenicnetrave.rs` nameserver migration** *(deliberately held, not just waiting)* — a second, currently-unused domain on the same Vercel project. User wants it migrated to Vercel nameservers too, but this is intentionally on hold until yu.net resolves the first domain's issue — no point risking the same split-delegation bug on a second domain mid-fix. Vercel's project side is already configured to expect it.
- [ ] **Vercel project migration to the business account** *(deliberately deferred, not forgotten)* — move the Vercel project from the personal `brkovicana` Hobby account to `panaceanaturaleshop-hub`, mirroring the GitHub org migration (already done). Deferred specifically until the yu.net situation is fully resolved and stable, so a second DNS-adjacent change doesn't overlap with an in-flight one. See `project_vercel_resend_setup` memory for the full Vercel-Team-requires-payment / manual-transfer-risk research behind this decision.

### Done, contributing context
- [x] **Repo made public** — moved to the `panaceanaturaleshopdevelopment` GitHub org, then made public, deliberately: Vercel's free Hobby plan cannot auto-deploy a *private* org-owned repo (Pro-only), and paying for Pro/a Team was explicitly ruled out. Before making it public, `ORDER_RECIPIENT_EMAIL` was moved out of hardcoded source into an env var so the current code no longer exposes it. **Known residual gap**: earlier commits in git history still contain the recipient email in plain text (from before this change) — a deliberate, accepted tradeoff (history left as-is rather than rewritten) rather than an oversight.

## Deployment Readiness:
- ✅ All pages fully functional and responsive
- ✅ Mobile-first design implemented
- ✅ OpenStreetMap is CDN-based; order email delivery uses Resend
- ✅ Mailto and tel: links work on all devices
- ✅ `npm audit` and `npm audit --omit=dev` report zero known vulnerabilities
- ✅ Page metadata and reactive `lang` attribute done — see Pending above
- ⚠️ Add shared order-endpoint anti-abuse protection before high-traffic production use
- ✅ Order-inquiry emails now reach `panacea.naturale.shop@gmail.com` in production (now via `ORDER_RECIPIENT_EMAIL`), but only via a fragile interim workaround (Resend sandbox `from` address that happens to match the account owner's email) — not yet a real fix. See the Resend domain verification and yu.net nameserver pending items above.

---

## Quick Reference:
- **Site URL structure**: Single-page with anchor sections (#home, #about, #juice, etc.)
- **Scroll offset**: 80px (navbar height) — applied to all anchor jumps
- **Color theme**: Toggle in `Navbar.tsx` top-level `THEME` constant (`"dark"` or `"light"`)
- **Mobile breakpoint**: `md:` = 768px (Tailwind default)
- **Stockists data**: 23 locations stored in `StockistsMap.tsx` (hardcoded, can be moved to CMS)
- **Gallery images**: 6 photos in `public/images/` (1–7.jpg, 0.jpg is hero background)
- **PDF certificate**: `public/documents/cert_panacea.pdf`

See README.md for contact integration details (phone/email/map/order-form mechanics) and the Security section (validation, rate limiting, secret handling, audit status) — both are stable/generic and maintained there to avoid duplication.

---

see:
@README.md
@AGENTS.md
@GIT.md
