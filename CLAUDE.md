
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
- `src/components/FloatingOrderButton.tsx` — fixed CTA bottom-right, dispatches open-accordion + scrolls to `#where-phone`

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
- Scroll offset: **80px** applied to all anchor scrolls (`Navbar.tsx`, `FloatingOrderButton.tsx`)
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
- Background: `0. pocetna.png` (fixed, parallax scroll effect)
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
- Phone: `tel:` link
- Email: `mailto:` link (replaces previous Nodemailer form)
- Map z-index fix: `isolation: isolate` prevents Leaflet controls from overlapping navbar

### Česta pitanja (`#faq`)
- 6 Q&As (SR + EN)
- Custom FAQ accordion with 18px question text (not uppercase)
- Certificate link opens `cert_panacea.pdf` in new tab
- Renders nothing if `items` array is empty

### Footer
- Dark green (`#1E3A1E`), 3-column layout: brand | contact info | find us
- Contact: phone, email, full address
- Social: Instagram (linked), Facebook (placeholder `#`)
- Copyright line

### Floating order button
- Fixed bottom-right, always visible
- Opens `#where-phone` accordion + scrolls to it
- "Poruči" (SR) / "Order" (EN)

## Assets:
- Images: `public/images/` (0–7, hero + 6 gallery photos)
- Certificate: `public/documents/cert_panacea.pdf`

## Internationalisation:
- All text in `LanguageContext.tsx` under `translations.sr` and `translations.en`
- `tx()` helper in `src/lib/tx.tsx` renders `**bold**` inline
- FAQ items have optional `link: { text, url }` for inline links in answers
- To add nav entries: update `nav.sr` and `nav.en` arrays in LanguageContext

## Pending:
- [ ] Facebook link URL (currently `#` placeholder in Footer)
- [ ] Page metadata (`title`, `description`) in `layout.tsx` still default Next.js values
- [ ] `lang` attribute in `<html>` is hardcoded `"en"` — not reactive to language switch

---

see:
@AGENTS.md
@GIT.md
