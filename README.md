# LA Water Heaters — Next.js + Tailwind + shadcn/ui

Mobile-first, conversion-focused website for LA Water Heaters — Los Angeles' trusted water heater specialists.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4 with custom theme tokens
- **UI Primitives:** shadcn/ui style (Button, Card, Badge, Accordion)
- **Icons:** lucide-react
- **Fonts:** Inter (body) + Plus Jakarta Sans (display) via `next/font`

## Brand Colors (from logo)

| Token | Use | Color |
|-------|-----|-------|
| `primary-700` | Deep ocean blue (LA in logo) | `#1d54d8` |
| `accent-500` | Sunset orange | `#f97316` |
| `flame-600` | Red flame | `#dc2626` |
| `primary-950` | Dark navy backgrounds | `#172a54` |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Page Map (33 pages)

### Core (7)
- `/` — Homepage
- `/about` — About us
- `/contact` — Contact form
- `/service-areas` — Location hub
- `/blog` — Blog index
- `/financing` — Financing options
- `/faq` — Combined FAQ

### Tank Water Heater Services (6)
- `/water-heater-services` — Pillar
- `/water-heater-installation`
- `/water-heater-repair`
- `/water-heater-replacement`
- `/water-heater-maintenance`
- `/emergency-water-heater-repair` — 24/7 emergency

### Tankless Services (5)
- `/tankless-water-heater-services` — Pillar
- `/tankless-water-heater-installation`
- `/tankless-water-heater-repair`
- `/tankless-water-heater-replacement`
- `/tankless-water-heater-maintenance`

### Audience Pages (2)
- `/commercial-water-heater-services`
- `/residential-water-heater-services`

### Brand Pages (5)
- `/rheem-water-heater`
- `/ao-smith-water-heater`
- `/bradford-white-water-heater`
- `/navien-tankless-water-heater`
- `/rinnai-tankless-water-heater`

### Location Pages (6)
- `/water-heater-services-hollywood`
- `/water-heater-services-beverly-hills`
- `/water-heater-services-santa-monica`
- `/water-heater-services-pasadena`
- `/water-heater-services-burbank`
- `/water-heater-services-glendale`

### Auxiliary (3)
- `/privacy` · `/terms` · 404 page

## Project Structure

```
lawh/
├── app/
│   ├── layout.tsx              # Root layout + Plumber JSON-LD
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind + shadcn theme
│   ├── sitemap.ts              # Dynamic sitemap (33 routes)
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404
│   └── [route]/page.tsx        # Each route's page
├── components/
│   ├── ui/                     # shadcn-style primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   └── logo.tsx            # Custom LA Water Heaters logo
│   ├── layout/
│   │   ├── header.tsx          # Sticky nav + mobile drawer
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx            # Hero with image, badges, CTAs
│   │   └── blocks.tsx          # All reusable sections
│   └── templates/
│       ├── service-page.tsx    # Service page template
│       ├── location-page.tsx   # Location page template
│       └── brand-page.tsx      # Brand page template
├── data/
│   ├── site.ts                 # Brand info, contact details
│   ├── services.ts             # 13 service definitions
│   ├── locations.ts            # 6 LA neighborhoods
│   ├── brands.ts               # 5 water heater brands
│   └── faqs.ts                 # FAQ + reviews
├── lib/
│   └── utils.ts                # cn() helper
└── tailwind.config.ts          # Brand tokens
```

## Mobile Responsiveness

Built mobile-first with:
- **Sticky bottom CTA** (Call + Quote) on mobile only (`<lg`)
- **Hamburger drawer** with expandable submenus
- **Single-column layouts** on mobile, multi-column on `sm+`
- **Responsive typography** with `clamp()`-style scaling
- **Touch targets** all 44px+ (`h-11`, `h-12`)
- **Safe-area padding** for iOS notch (`safe-bottom`)
- **Responsive images** loaded from Unsplash with proper sizing

## SEO & Conversion Features

- **JSON-LD schemas:** Plumber, Service, FAQPage, LocalBusiness on all relevant pages
- **Open Graph + Twitter** metadata on every page
- **Canonical URLs** on every page
- **Programmatic sitemap** covering all 33 routes
- **Conversion CTAs** in 8+ places per page: phone, quote, email
- **Trust signals:** rating, reviews, licensed & insured, response time
- **Urgency strips** on emergency pages
- **Promo strip** at top with rebate offer + financing link
- **Sticky mobile CTA** ensures phone always 1 tap away

## Admin / CMS

The site has a built-in CMS. Log in at **`/admin`** to edit the text and images on **every page** through simple forms — no code or database required.

### Setup

1. Copy `.env.example` to `.env.local` and set both values:
   ```
   ADMIN_PASSWORD=your-strong-password
   SESSION_SECRET=a-long-random-string-at-least-32-characters
   ```
2. Run the site with `npm run dev` (or `npm run build && npm start`).
3. Visit `/admin`, enter the password, and edit away. Saves go live immediately.

### What you can edit

| In the admin | Controls |
|---|---|
| **Site Settings** | Phone, email, address, hours, rating, review count, trust badges (used site-wide) |
| **Pages** | Homepage, About, Contact, Financing, FAQ intro, Privacy, Terms, Service Areas, Blog, and the hub pages (Commercial, Residential, Tankless, Water Heater Services) |
| **Services / Locations / Brands** | Every service, location, and brand page (headings, copy, lists, hero images, icons) |
| **FAQs** | All FAQ question/answer groups |
| **Reviews** | Customer testimonials |
| **Shared Sections** | Trust bar, process steps, why-us, reviews heading, stats, emergency strips, final CTA, service-areas grid |
| **Header & Footer** | Navigation links and footer columns/links |
| **Images** | Every image field can be uploaded from your computer **or** set by pasting a URL |

### How it works

- **Content store:** all editable content lives in `/content/*.json` (e.g. `site.json`, `services.json`, `content/pages/home.json`). The admin writes to these files.
- **Reads:** `lib/content.ts` reads the JSON fresh on every request (`unstable_noStore`), so edits appear immediately — every page is server-rendered on demand.
- **Auth:** a single shared password (`ADMIN_PASSWORD`) issues a signed, HttpOnly session cookie (HMAC via Web Crypto — no database, no extra dependencies). `middleware.ts` protects all `/admin` and `/api/admin` routes.
- **Uploads:** saved to `/public/uploads` (image types only, ≤ 8 MB, randomized filenames).

### Important: hosting requirement

The CMS writes to JSON files on disk, so it needs a **persistent filesystem** — `npm run dev`/`npm start`, a VPS, Render/Railway with a disk, Docker with a volume, etc. It will **not** persist on serverless/static hosting (Vercel/Netlify free tier). To deploy there, the storage layer would need to move to a database such as Supabase.

### Tests

```bash
node --test test/*.test.ts   # auth, content store, icon registry, content layer (14 tests)
```
(Use the `test/*.test.ts` glob, not a bare `test/` directory.)

### Advanced (editing JSON directly)

You can also hand-edit the files under `/content` instead of using the admin UI. Note: `data/*.ts` now holds only the TypeScript **types** — the values live in `/content`.

# lawh
