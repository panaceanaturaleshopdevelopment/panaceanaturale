# Panacea Naturale

Website for Panacea Naturale, a family business from Cacak producing cold-pressed wheatgrass (spelt) juice since 2013.

The site is a responsive single-page presentation with bilingual Serbian/English content, product education, a stockists map, contact details, and an order inquiry form.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4
- React Leaflet and OpenStreetMap for the stockists map
- Resend for order email delivery
- Custom i18n using `LanguageContext` (SR/EN)
- `next/font` with Cormorant Garamond and Raleway

## Local Development

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Available checks:

```bash
npm run lint
npm run build
npm start
```

`npm run build` creates the production build. `npm start` serves that build and must be run after a successful build.

## Project Structure

```text
src/
  app/
    api/orders/route.ts       Server endpoint for order inquiries
    globals.css               Global styles and brand tokens
    layout.tsx                Root layout, fonts, metadata, providers
    page.tsx                  Single-page section composition
    providers.tsx             Client context providers
  components/                 Page sections and reusable UI
    OrderForm.tsx             Order inquiry modal and client submission
    FloatingOrderButton.tsx   Fixed order CTA
    StockistsMap.tsx          Leaflet map and stockist data
    ui/Accordion.tsx          Reusable collapsible section
  context/LanguageContext.tsx All SR/EN translations and navigation
  lib/tx.tsx                  Renders **bold** translation markers
public/
  images/                     Hero and gallery images
  documents/                  Product certificate PDF
```

## Order Inquiry Flow

The floating `Poruci` / `Order` button opens `OrderForm`. The form requires full name, email address, phone number, physical address, and a package count selected from a dropdown. The message field is optional. One package contains 7 bottles.

The client sends JSON to `POST /api/orders`. The server validates the input, converts packages to bottles, generates a unique `PN-...` order number, and sends an email to `panacea.naturale@gmail.com` through Resend.

The email subject includes the order number and total bottle count. The email body includes the package count, bottle count, customer name, address, message, and contact details. The customer email is used as `replyTo`.

The submit action is labeled `Pošalji upit` in Serbian and `Send inquiry` in English.

## Resend Configuration

Resend setup is required before real order delivery works. Create a Resend account, create an API key, verify the sending domain, and configure:

```env
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL="Panacea Naturale <orders@your-verified-domain.com>"
```

For local development, place these values in `.env.local`. Environment files are ignored by `.gitignore` and must never be committed. Do not use a `NEXT_PUBLIC_` prefix for the API key.

`RESEND_FROM_EMAIL` must use a domain verified in Resend. The fallback `onboarding@resend.dev` sender is only suitable for limited development testing and should not be relied on for production.

The current implementation sends the order notification to Panacea only. It does not send an automatic confirmation email to the customer.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` under **Settings > Environment Variables**.
4. Enable the variables for Production, and Preview if preview orders should be tested.
5. Verify the sending domain in Resend and add its DNS records at the domain registrar.
6. Deploy or redeploy the project.

Vercel automatically runs the Next.js build and deploys `src/app/api/orders/route.ts` as a serverless function. Environment variable changes require a new deployment. Test a real inquiry after deployment and check delivery, subject, reply-to, and body content.

## Content and Translations

All visible copy is stored in `src/context/LanguageContext.tsx`. When adding or changing copy, update both `translations.sr` and `translations.en`. Navigation items are maintained in the `nav` arrays in the same file.

The page sections appear in this order: Navbar, Hero, About, Juice, Gallery, Usage, Availability, FAQ, and Footer. Anchor IDs are documented in `CLAUDE.md`.

The site uses an 80px navbar offset for anchor scrolling. The hero visual is a 1600x1200 4:3 image with baked-in text; mobile uses `object-contain` and a matching aspect-ratio section so the text is not cropped or followed by empty space.

## Important Contacts and Assets

- Phone: `061 5000280` (`tel:+381615000280`)
- Email: `panacea.naturale@gmail.com`
- Instagram and Facebook links are maintained in `Footer.tsx`
- Hero: `public/images/9. visual1600x1200.png`
- Gallery: `public/images/`
- Certificate: `public/documents/cert_panacea.pdf`
- Stockist locations are currently hardcoded in `StockistsMap.tsx`

## Production Checklist

- Configure and test Resend in the production environment.
- Add accurate page metadata in `src/app/layout.tsx`.
- Make the document `lang` attribute react to the selected language if needed.
- Consider adding rate limiting, a honeypot or CAPTCHA, and request logging to protect the public order endpoint from spam.
- Confirm the verified email domain, DNS records, phone number, social links, map locations, and certificate before launch.

## Notes for Maintainers

- Keep changes small and consistent with the existing Tailwind and component patterns.
- Do not edit generated `.next` files.
- Do not commit secrets or `.env*` files.
- `npm run lint` currently reports one unrelated warning for an unused translation variable in `HeroSection.tsx`; it does not fail the command.
