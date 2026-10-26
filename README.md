# Sanak Retreat Bali — frontend redesign (Phase 2)

Next.js (App Router, JavaScript) · React · GSAP + ScrollTrigger · plain CSS. Built from the Phase 1 audit in `docs/source-audit/`.
Not deployed and not committed.

```bash
npm install
npm run images   # regenerate public/images from the selected originals (only needed after changing src/data/imageSources.mjs)
npm run dev      # or: npm run build && npm start
```

## Structure (11 pages)

| Route | Replaces on the old site |
|---|---|
| `/` | home |
| `/stay` | accommodation, accomodation, guest-services-facilities |
| `/stay/three-bedroom-pool-villa`, `/stay/one-bedroom-bungalow`, `/stay/two-bedroom-bungalow` | the three room pages |
| `/experiences` | explore-local + 7 activity pages |
| `/dining-spa` | dining, spa-yoga, chefs-surprise-dinner, romantic-dining, picnic-at-the-waterfall |
| `/packages` | packages + 6 current package pages (deals pages not migrated) |
| `/we-care` | we-care + the-sanak-story |
| `/gallery`, `/contact` | gallery; get-to-us |

Old legitimate URLs are 308-redirected in `next.config.mjs`. Spam posts, archives, `/link-partners/`, `/840-2/`, the expired `-2` packages' content and the brochure are not migrated.

## Where things live

- Content: `src/data/*.js` (site facts and booking URLs, rooms, packages and rates, experiences).
- Images: `src/data/imageSources.mjs` maps each image key to its original file and alt text; `scripts/optimize-images.mjs` writes WebP derivatives (480–1800 px) to `public/images` and `src/data/images.json`. Originals in `docs/source-audit` are never modified. That folder (the Phase 1 audit, original photos and screenshots) is kept locally and is deliberately not committed: it contains security-incident evidence and is not needed to build or serve the site, so `npm run images` only works on a machine that has it.
- `next.config.mjs` sets `images: { unoptimized: true }`; responsive images come from the pre-generated widths via `srcset`.
- Fonts: exactly two families via `next/font`: Oswald (headings, uppercase; the closest web font to the condensed lettering in the logo) and Source Sans 3 (everything else).

## Booking destinations

- Rooms: `boutiquehoteldirectbookings.com` (header "Book a room", room pages, CTAs).
- Packages: Secret Retreats with promo `RET-SANAK`, used only on package buttons, as on the current package pages.
- No date-search widget and no contact form: the original widget was hidden and the form has no backend; email, phone and WhatsApp links are used instead.

## Facts deliberately withheld pending owner confirmation

Bungalow count (10 vs 11) · Two Bedroom capacity (6 vs 4 + 1) and extra-bed count · deals (two conflicting pages) and "Book Direct" perks · brochure phone number and brochure PDF · We Care percentages and counts · healer's name · room sizes (brochure only) · wood type · YouTube video rights · accreditation badges (TripAdvisor 2018, Secret Retreats membership). Package rates are shown as currently published (valid to 31 March 2027), including the 31 October gap between seasons. See `docs/source-audit/08-issues-gaps-questions.md`.
