# LA Water Heaters — Admin CMS Design

**Date:** 2026-06-21
**Status:** Approved design, ready for implementation planning

## Goal

Add a self-contained CMS to the existing Next.js 14 site so a single admin can log in at `/admin` and edit **all content and images on every page** through simple dashboard forms — with **no database and no external services**.

## Decisions (locked)

| Decision | Choice |
|---|---|
| Content storage | Local JSON files in `/content` |
| Editable scope | Everything: global info, all collection pages, all prose pages, shared sections, header/footer |
| Login | Single shared password |
| Hosting target | Local / self-hosted Node server (`next dev` / `next start`) — **not** serverless static |
| Edit UX | Dashboard with schema-driven forms |
| Images | Upload files **and** paste URLs |
| New runtime dependencies | None (use Web Crypto + Node built-ins) |

### Hosting constraint (important)

Local-JSON persistence requires a **persistent filesystem**. It works on `next dev`, `next start`, a VPS, Render/Railway with a disk, or Docker with a volume. It will **not** persist on Vercel/Netlify serverless. If the site later moves to serverless, storage must switch to Supabase (out of scope here).

## Current content inventory (the editable surface)

| Area | Count | Source today |
|---|---|---|
| Global site info (phone, address, hours, rating, badges, social) | 1 | `data/site.ts` |
| Service pages (template-driven) | 14 | `data/services.ts` |
| Location pages | 7 | `data/locations.ts` |
| Brand pages | 6 | `data/brands.ts` |
| FAQ groups | 5 | `data/faqs.ts` |
| Prose pages: home, about, contact, financing, faq, privacy, terms, service-areas, blog, commercial, residential, tankless-services, water-heater-services, tankless-rebates | ~14 | hardcoded JSX |
| Shared sections (TrustBar, Process, WhyUs, Reviews, Stats, Emergency, FinalCTA, etc.) | — | `components/sections/blocks.tsx` |
| Header nav + Footer | — | `components/layout/header.tsx`, `components/layout/footer.tsx` |

## Architecture

### 1. Content store — `/content`

All editable values move from code into JSON files, seeded from the current content so the rendered site is byte-for-byte equivalent on day one.

```
content/
  site.json            # global SITE object
  services.json        # array of 14 service objects
  locations.json       # array of 7 locations
  brands.json          # array of 6 brands
  faqs.json            # keyed FAQ groups
  sections.json        # shared block copy (trust bar, process, why-us, reviews, stats, CTAs)
  layout.json          # header nav + footer content
  pages/
    home.json
    about.json
    contact.json
    financing.json
    faq.json
    privacy.json
    terms.json
    service-areas.json
    blog.json
    commercial.json
    residential.json
    tankless-services.json
    water-heater-services.json
    tankless-rebates.json
```

**Icons:** Lucide icon components cannot be serialized to JSON. JSON stores the icon **name** (e.g. `"icon": "Flame"`). A registry `lib/icons.ts` maps name → Lucide component at render time. Unknown/empty names fall back to a default icon.

### 2. Content layer — `lib/content.ts`

A server-only module that reads the JSON files and returns typed objects:

- `getSite()`, `getServices()`, `getService(slug)`, `getLocations()`, `getLocation(slug)`, `getBrands()`, `getBrand(slug)`, `getFaqs()`, `getPage(key)`, `getSections()`, `getLayout()`.
- Reads from disk via `fs/promises`, parses JSON, returns data shaped to the existing TypeScript interfaces (interfaces stay in `data/*.ts`; only the **values** move to JSON).
- Per-request caching via React `cache()` so a single render reads each file once.
- The existing `data/*.ts` value exports are removed/replaced by these reader calls; the `data/*.ts` files retain their **type/interface exports** which the content layer and admin schemas import.

**Rendering:** Pages become dynamic reads. Each page either uses `export const dynamic = 'force-dynamic'` or a tagged `revalidate`; on save the API calls `revalidatePath('/')` (and affected paths) so edits appear immediately. Client components that currently import `SITE` (e.g. `app/contact/page.tsx`, which is `"use client"`) are refactored so a server parent loads content and passes it down as props.

### 3. Admin app — `/admin`

**Auth**
- Secrets in `.env.local`: `ADMIN_PASSWORD`, `SESSION_SECRET`. A committed `.env.example` documents them.
- `/admin/login`: password form → `POST /api/admin/login`. Server compares the submitted password to `ADMIN_PASSWORD` (constant-time compare). On success it sets an HttpOnly, SameSite=Lax, `Secure`-in-prod cookie `admin_session` containing a signed token `{ exp }` signed with HMAC-SHA256 (Web Crypto `crypto.subtle`) using `SESSION_SECRET`.
- `POST /api/admin/logout` clears the cookie.
- `middleware.ts` runs on `/admin/:path*` and `/api/admin/:path*`. It allows `/admin/login` and `/api/admin/login`; for everything else it verifies the cookie signature and expiry, redirecting to `/admin/login` (pages) or returning 401 (API) when invalid.

**Dashboard**
- `/admin` layout: left sidebar with groups — Site Settings · Homepage · Pages · Services · Locations · Brands · FAQs · Shared Sections · Header & Footer — plus a "View site" link and "Log out".
- Collections (Services/Locations/Brands) show a list → click an item → edit form.
- Each editor renders from a **field schema** (see below). Saving does `POST /api/admin/save { key, data }`.

**Field schema + generic editor**
- A `lib/admin/schemas.ts` describes each content area as a list of fields with types: `text`, `textarea`, `number`, `boolean`, `image`, `list` (array of strings), `group` (object), `repeatable` (array of groups), `select` (e.g. icon name from the registry).
- A generic `<FieldEditor>` React component renders inputs for a schema and produces the JSON object on save. This keeps each area's editor declarative and consistent.

**Save API — `POST /api/admin/save`**
- Body `{ key, data }`. `key` is validated against an **allowlist** mapping content keys → absolute file paths under `/content` (prevents path traversal; only known files writable).
- Lightweight shape validation per key (presence of required top-level fields).
- Atomic write: write to a temp file, then rename over the target.
- Calls `revalidatePath` for affected routes.

**Image upload — `POST /api/admin/upload`**
- Accepts `multipart/form-data` via `await request.formData()` (no dependency).
- Validates MIME type (`image/png|jpeg|webp|gif|svg+xml`) and size (≤ 8 MB).
- Sanitizes filename, adds a random suffix, writes to `/public/uploads/<name>`, returns `{ url: "/uploads/<name>" }`.
- The `image` field type offers Upload **or** URL paste; stored value is the path/URL string.

### 4. Security

- All `/admin/*` and `/api/admin/*` except login gated by middleware.
- Write allowlist prevents writing outside `/content`.
- Upload validation (type + size + filename sanitization + random suffix).
- Cookie: HttpOnly, SameSite=Lax, Secure in production, signed, with expiry (e.g. 7 days).
- Constant-time password comparison.
- `.env.local` is already gitignored; `/public/uploads` is gitignored except a `.gitkeep`.

### 5. File/route summary (new)

```
content/...                      # seeded JSON (above)
lib/content.ts                   # readers
lib/icons.ts                     # icon-name registry
lib/admin/auth.ts                # sign/verify session token (Web Crypto)
lib/admin/store.ts               # allowlist + atomic JSON read/write
lib/admin/schemas.ts             # field schemas per content area
middleware.ts                    # route protection
app/admin/login/page.tsx         # password form
app/admin/layout.tsx             # sidebar shell
app/admin/page.tsx               # dashboard home
app/admin/[section]/...          # editors (site, pages, services, ... )
app/api/admin/login/route.ts
app/api/admin/logout/route.ts
app/api/admin/save/route.ts
app/api/admin/upload/route.ts
components/admin/FieldEditor.tsx  # generic schema-driven form
components/admin/ImageField.tsx   # upload + URL
public/uploads/.gitkeep
.env.example
```

## Implementation phases (all delivered)

- **Phase A — Foundation:** content store + `lib/content.ts` + `lib/icons.ts`; migrate `site/services/locations/brands/faqs` values to JSON; refactor template-driven pages to read from the content layer (no visual change). Auth (`/admin/login`, middleware, login/logout APIs), save & upload APIs, generic `FieldEditor`/`ImageField`, dashboard shell, and editors for Site Settings + Services + Locations + Brands + FAQs.
- **Phase B — Prose pages:** extract hardcoded copy/images from each prose page into `content/pages/*.json`, refactor the pages to read it, add their editors.
- **Phase C — Shared chrome:** extract `blocks.tsx`, `header.tsx`, `footer.tsx` copy into `sections.json` / `layout.json`, refactor, add editors.

## Testing

- **Unit (`node:test`, no new deps):**
  - content reader returns expected shape from a sample JSON
  - save allowlist rejects unknown/traversal keys and accepts known ones
  - session token sign → verify round-trips; tampered/expired token fails
- **Manual checklist:**
  - unauthenticated `/admin` redirects to login; wrong password rejected; correct password logs in
  - edit a field (e.g. site phone) → Save → value changes on the live page
  - upload an image → appears on the page; paste-URL also works
  - logout clears session; protected APIs return 401 without session
  - `npm run build` succeeds

## Out of scope (YAGNI)

- Multi-user accounts / roles (single shared password only)
- Draft/publish workflow or version history (saves go live immediately)
- Supabase/serverless storage (local JSON only; documented constraint)
- Inline click-to-edit on live pages (dashboard forms only; possible future enhancement)
- Rich-text/WYSIWYG beyond plain multi-line text fields
```

## Risks / notes

- `app/contact/page.tsx` is a client component (`useState`); it must be split into a server loader + client form to read content.
- Some prose pages mix structured data and hardcoded copy; extraction must preserve existing markup/classes exactly to avoid visual regressions.
- Pages currently statically generated will become dynamic (or revalidated) — acceptable for a self-hosted/local target.
