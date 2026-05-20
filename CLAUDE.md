
# Project Overview

## Goal
Short explanation of the website/project.

---

# Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Nodemailer (contact form email via Gmail SMTP)
- React Leaflet + OpenStreetMap (interactive stockists map)

---

# Design Direction



---

# Project Structure

Sections (in page order):
1. Navbar
2. Hero (`#home`)
3. O nama (`#about`)
4. O soku (`#juice`) — subsections: `#juice-zeleno-zdravlje`, `#juice-nutritivni-sastav`, `#juice-hladno-cedjenje`, `#juice-zasto-biraju`
5. Upotreba (`#usage`)
6. Dostupnost (`#where`)
7. Kontakt (placeholder)

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
- premium wellness brands
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

## Color Direction

Preferred:
- warm neutrals
- muted greens
- earthy tones
- soft off-whites

Avoid:
- aggressive gradients
- neon colors
- excessive glow
- harsh contrast

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

# Coding Rules

- Prefer reusable components
- Keep code production-ready
- Avoid unnecessary dependencies
- Ask before major architectural changes

---

# Workflow Rules

- Do not rewrite unrelated files
- Work section-by-section
- Explain major decisions before implementation
- Ask before introducing major changes

---

# Current Status

- Navbar: complete
- Hero: background image (`1. psenica.png`) with quote overlay, CSS fade-in animation
- O nama: complete, final text in place
- O soku: complete — product fact stats (100%, 30ml, 10-12 days), nutritive table, 4 subsections with IDs ready for nav
- Upotreba: complete — intro, Kako koristiti, Preporučena dnevna količina, Ko može koristiti
- Dostupnost: complete
  - [x] Interactive OpenStreetMap with 23 stockist pins (red SVG markers with popups)
  - [x] Phone number clickable (`tel:`) — opens dialer on mobile
  - [x] Email contact form functional (Nodemailer + Gmail SMTP)
  - [ ] Gmail App Password still needs to be configured in `.env.local` before form sends emails
- Kontakt: placeholder, not started
- Photos/visuals: images added to `public/images/`, not yet integrated beyond hero
- All text content managed on `feature/text-content` branch



see:
@AGENTS.md
@GIT.md