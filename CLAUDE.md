
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
- Text scrolls at 0.35× speed, fades on scroll (ref-based, no React re-renders)
- Three layers: `bg-[#D6E4D6]` container + `opacity-70` image + `bg-gradient-to-b from-stone-900/40 to-stone-900/10`
- Green text-shadow on quote for legibility
- Bold Cormorant Garamond, italic

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
- Phone: `061 5000280` with `tel:+381615000280` link
- Email: `mailto:` link (replaces previous Nodemailer form)
- Map z-index fix: `isolation: isolate` prevents Leaflet controls from overlapping navbar

### Česta pitanja (`#faq`)
- 6 Q&As (SR + EN)
- Custom FAQ accordion with 18px question text (not uppercase)
- Certificate link opens `cert_panacea.pdf` in new tab
- Renders nothing if `items` array is empty

### Footer
- Dark green (`#1E3A1E`), 3-column layout: brand | contact info | find us
- Contact: `061 5000280` | `panacea.naturale@gmail.com` | Čačak, Serbia address
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
- Email recipient: `panacea.naturale@gmail.com`
- Email subject includes the order number and bottle count
- Customer email is used as `replyTo`; the body includes name, address, message, and contact details
- Required server environment variables: `RESEND_API_KEY` and verified `RESEND_FROM_EMAIL`

## Assets:
- Images: `public/images/` (0–7, hero + 6 gallery photos)
- Certificate: `public/documents/cert_panacea.pdf`

## Internationalisation:
- All text in `LanguageContext.tsx` under `translations.sr` and `translations.en`
- `useLanguage()` hook provides `t` (translations) and `setLanguage()` function
- `tx()` helper in `src/lib/tx.tsx` renders `**bold**` inline formatting
- FAQ items have optional `link: { text, url }` for inline links in answers
- To add nav entries: update `nav.sr` and `nav.en` arrays in LanguageContext
- Language toggle: lowercase `srb` / `eng` in navbar (mobile and desktop)

## Fonts:
- **Serif headers**: Cormorant Garamond (300, 400, 500) — elegant, premium feel
- **Navigation/labels**: Raleway (400, 500, 600) — clean, geometric
- **Fallback**: Geist Sans system font stack

## Pending:
- [x] Facebook link URL — Updated: `https://www.facebook.com/people/Panacea-Naturale/61562838522730/`
- [ ] Page metadata (`title`, `description`) in `layout.tsx` — Update with proper SEO titles and descriptions
- [ ] `lang` attribute in `<html>` — Make reactive to language context (currently hardcoded `"en"`)

## Deployment Readiness:
- ✅ All pages fully functional and responsive
- ✅ Mobile-first design implemented
- ✅ OpenStreetMap is CDN-based; order email delivery uses Resend
- ✅ Mailto and tel: links work on all devices
- ⚠️ Complete 2 pending items above before production launch

---

## Quick Reference:
- **Site URL structure**: Single-page with anchor sections (#home, #about, #juice, etc.)
- **Scroll offset**: 80px (navbar height) — applied to all anchor jumps
- **Color theme**: Toggle in `Navbar.tsx` top-level `THEME` constant (`"dark"` or `"light"`)
- **Mobile breakpoint**: `md:` = 768px (Tailwind default)
- **Stockists data**: 23 locations stored in `StockistsMap.tsx` (hardcoded, can be moved to CMS)
- **Gallery images**: 6 photos in `public/images/` (1–7.jpg, 0.jpg is hero background)
- **PDF certificate**: `public/documents/cert_panacea.pdf`

## Contact Integration:
- **Phone**: `061 5000280` (`tel:+381615000280`, tel: protocol, works on all devices)
- **Email**: `mailto:panacea.naturale@gmail.com` (free, native HTML, no backend required)
- **Map**: OpenStreetMap via React Leaflet (CDN-based, free)
- **Order form**: `POST /api/orders` via Resend; requires `RESEND_API_KEY` and `RESEND_FROM_EMAIL`

---

see:
@AGENTS.md
@GIT.md
