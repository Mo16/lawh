import Link from "next/link";
import {
  Phone, ArrowRight, Star, Clock, ShieldCheck, CheckCircle2,
  DollarSign, Zap, Wrench,
} from "lucide-react";
import type { ServiceData } from "@/data/services";
import type { FAQ } from "@/data/faqs";
import { getSite, getServices, getBrands, getFaqs } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import {
  TrustBar, Process, WhyUs, ReviewsSection, FAQSection, FinalCTA,
  ServiceAreasGrid, EmergencySection,
} from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface HubPageProps {
  /** "tank" or "tankless" — determines child services + brand filter */
  category: "tank" | "tankless";
  /** The pillar service (used for hero + meta) */
  service: ServiceData;
  /** Optional faq list override */
  faqs?: FAQ[];
}

/**
 * Service Hub / Pillar template.
 * Built for SEO topic-cluster pillar pages: maximum internal linking to child
 * service pages, comprehensive content depth, and aggressive CRO.
 */
export async function HubPageTemplate({ category, service, faqs }: HubPageProps) {
  const [SITE, SERVICES, BRANDS, FAQS] = await Promise.all([getSite(), getServices(), getBrands(), getFaqs()]);

  // Children = every service of this category, EXCLUDING this hub itself.
  const childServices = SERVICES.filter(
    (s: ServiceData) => s.category === category && s.slug !== service.slug
  );

  const filteredBrands = BRANDS.filter(b => b.category === category);

  // Build comprehensive FAQ list — pull from category-specific + general
  const hubFaqs: FAQ[] =
    faqs ??
    [
      ...(category === "tankless" ? FAQS.tankless : FAQS.tank),
      ...FAQS.general.slice(0, 3),
      ...FAQS.maintenance.slice(0, 2),
    ].filter((f: FAQ, i: number, arr: FAQ[]) => arr.findIndex((x: FAQ) => x.q === f.q) === i);

  // Comparison data — tailored to category intent
  const comparison =
    category === "tank"
      ? {
          headline: "Tank vs Tankless — Which Is Right for You?",
          left: {
            title: "Stick with Tank",
            items: [
              "Lower upfront cost ($1,895–$2,795)",
              "Simpler install — no gas line upgrade usually",
              "Reliable, proven technology",
              "Best for homes that don't run out often",
              "8–12 year typical lifespan",
            ],
          },
          right: {
            title: "Switch to Tankless",
            items: [
              "Endless hot water — never run out",
              "25–35% lower gas bills",
              "20+ year lifespan (2× tank)",
              "Frees up garage/closet space",
              "Up to $1,900 in rebates",
            ],
          },
        }
      : {
          headline: "Tankless vs Tank — Why Make the Switch?",
          left: {
            title: "Old Tank Water Heater",
            items: [
              "Runs out after long showers",
              "Stores 40–75 gallons of hot water 24/7",
              "Higher gas bills",
              "8–12 year lifespan",
              "Takes up garage/closet space",
            ],
          },
          right: {
            title: "New Tankless System",
            items: [
              "Endless hot water on demand",
              "Heats water only when you need it",
              "25–35% lower gas bills",
              "20+ year lifespan",
              "90% smaller — frees up space",
            ],
          },
        };

  // Decision helper — "Which service do I need?"
  const decisionHelper =
    category === "tank"
      ? [
          { title: "Tank is leaking", action: "Replacement", href: "/water-heater-replacement", desc: "Don't repair a leak — replace fast to prevent water damage." },
          { title: "No hot water", action: "Repair", href: "/water-heater-repair", desc: "Pilot, thermocouple, gas valve — diagnosed today." },
          { title: "Need a new heater", action: "Installation", href: "/water-heater-installation", desc: "Same-day install. All sizes. All brands." },
          { title: "Annual upkeep", action: "Maintenance", href: "/water-heater-maintenance", desc: "Flush + anode check extends life by 5+ years." },
          { title: "Right now — emergency", action: "24/7 Emergency", href: "/emergency-water-heater-repair", desc: "Tank leaking or flooding? 30-min response." },
        ]
      : [
          { title: "Want endless hot water", action: "Tankless Install", href: "/tankless-water-heater-installation", desc: "Up to $1,900 in rebates handled by us." },
          { title: "Error codes / no hot water", action: "Tankless Repair", href: "/tankless-water-heater-repair", desc: "All brands, all error codes — fixed in one visit." },
          { title: "Upgrading old tankless", action: "Replacement", href: "/tankless-water-heater-replacement", desc: "Same-day swap with newer, more efficient unit." },
          { title: "Annual maintenance", action: "Descaling", href: "/tankless-water-heater-maintenance", desc: "Required to maintain manufacturer warranty." },
          { title: "Switching from tank", action: "Conversion", href: "/tankless-water-heater-installation", desc: "Tank-to-tankless conversion with full rebate handling." },
        ];

  // ── Schema ─────────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/water-heater-services` },
      { "@type": "ListItem", position: 3, name: service.h1, item: `${SITE.url}/${service.slug}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: service.h1,
    itemListElement: childServices.map((child: ServiceData, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/${child.slug}`,
      name: child.h1,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    serviceType: category === "tank" ? "Tank Water Heater Services" : "Tankless Water Heater Services",
    provider: {
      "@type": "Plumber",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.rating,
        reviewCount: SITE.reviewCount,
      },
    },
    areaServed: { "@type": "City", name: "Los Angeles" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.h1} Catalog`,
      itemListElement: childServices.map((c: ServiceData) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.h1, url: `${SITE.url}/${c.slug}` },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((f: FAQ) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-sky-200 pb-24 pt-10 text-ink sm:pb-28 sm:pt-14 lg:pb-36">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-white/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-primary-200/50 blur-3xl" />

        <div className="container-tight relative">
          {/* Breadcrumbs (visible) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex flex-wrap items-center gap-1.5 text-ink/55">
              <li><Link href="/" className="hover:text-primary-700">Home</Link></li>
              <li className="text-ink/30">/</li>
              <li className="font-semibold text-ink">{service.h1}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-5">{category === "tank" ? "Tank Water Heater Services" : "Tankless Water Heater Services"}</SectionLabel>

              <h1 className="text-balance">
                {service.hero.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                {service.hero.subheadline}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 sm:max-w-md">
                {[
                  "Same-day service",
                  category === "tankless" ? "$1,900 in rebates" : "Free estimates",
                  "30-minute response",
                  `Licensed`,
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" />
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" variant="call" className="w-full sm:w-auto">
                  <a href={SITE.phoneTel}>
                    <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="xl" variant="default" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Free In-Home Estimate <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/60 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="h-3.5 w-3.5 fill-cta-500 text-cta-500" />
                    ))}
                  </span>
                  <span className="font-bold text-ink">{SITE.rating}</span>
                  <span>({SITE.reviewCount}+ reviews)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary-600" /> Licensed
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-green-600" /> 24/7 Available
                </span>
              </div>
            </div>

            {/* Right: Hub services jump card — instant navigation */}
            <div className="lg:col-span-5">
              <Card className="bg-white ring-1 ring-ink/5">
                <CardContent className="p-7 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary-700">
                    Jump to a service
                  </div>
                  <div className="mt-4 space-y-1.5">
                    {childServices.slice(0, 6).map((child: ServiceData) => {
                      const Icon = getIcon(child.icon);
                      return (
                        <Link
                          key={child.slug}
                          href={`/${child.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-2xl bg-sky-50 px-4 py-3 transition-all hover:bg-primary-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 ring-1 ring-ink/5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="text-sm font-semibold text-ink">{child.badge}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* DECISION HELPER — answers "which service do I need?" */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Pick Your Service</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              Which {category === "tank" ? "tank" : "tankless"} water heater service do you need?
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              Pick the situation that matches your home — we'll get you to the right service fast. Not sure? Call us and we'll diagnose it for free.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {decisionHelper.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="group flex flex-col rounded-3xl bg-sky-50 p-7 ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-card-hover"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-ink/55">
                  If your problem is
                </div>
                <div className="mt-1 font-display text-xl font-bold text-ink">{d.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{d.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Go to {d.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHILD SERVICES — compact list (scannable, easy to compare) */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">All {category === "tank" ? "Tank" : "Tankless"} Services</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              {category === "tank"
                ? "Complete water heater services for every LA home"
                : "Complete tankless water heater services in Los Angeles"}
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              {category === "tank"
                ? "From quick repairs to full replacements — pick the service that fits. Same-day, upfront pricing, all major brands."
                : "Installation, repair, replacement, descaling — all major brands. We handle rebates, permits, and warranty paperwork."}
            </p>
          </div>

          <ul className="mt-12 divide-y divide-ink/5 overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 shadow-card">
            {childServices.map((child: ServiceData, idx: number) => {
              const features = child.whatsIncluded.slice(0, 3);
              const Icon = getIcon(child.icon);
              return (
                <li key={child.slug} id={child.slug}>
                  <Link
                    href={`/${child.slug}`}
                    className="group flex flex-col gap-5 px-5 py-5 transition-colors hover:bg-sky-50 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-6"
                  >
                    {/* Thumbnail with icon overlay */}
                    <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-2xl bg-primary-800 ring-1 ring-ink/5 sm:h-20 sm:w-32">
                      <img
                        src={child.hero.image}
                        alt={child.h1}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink/25" />
                      <div className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg bg-white text-primary-700 shadow-sm">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Title + description + features */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700">
                          0{idx + 1} · {child.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink group-hover:text-primary-700 sm:text-xl">
                        {child.h1}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/65">
                        {child.shortDesc}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                        {features.map((f: { title: string; desc: string }, i: number) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-ink/75">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-600" />
                            <span className="font-medium text-ink/85">{f.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right CTA */}
                    <div className="flex shrink-0 items-center gap-1.5 self-start text-sm font-bold text-primary-600 sm:self-center">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <Button asChild size="lg" variant="call">
              <a href={SITE.phoneTel}>
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="default">
              <Link href="/contact">Free In-Home Estimate <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COMPARISON — fulfills informational intent */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Make the Right Choice</SectionLabel>
          <h2 className="max-w-3xl text-balance">{comparison.headline}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Both options have a place. Here's the honest comparison so you can pick what's right for your home, your budget, and how you use hot water.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Card className="bg-sky-50">
              <CardContent className="p-7 sm:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-200 text-primary-800">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl text-ink">{comparison.left.title}</h3>
                </div>
                <ul className="space-y-3">
                  {comparison.left.items.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span className="text-ink/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-cta-50 ring-1 ring-cta-200">
              <CardContent className="p-7 sm:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cta-500 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl text-cta-800">{comparison.right.title}</h3>
                </div>
                <ul className="space-y-3">
                  {comparison.right.items.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cta-600" />
                      <span className="text-ink/85">{p}</span>
                    </li>
                  ))}
                </ul>
                {category === "tank" && (
                  <div className="mt-6 border-t border-cta-200 pt-5">
                    <Link
                      href="/tankless-rebates"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-cta-700 hover:text-cta-800"
                    >
                      See $1,900 in tankless rebates <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <WhyUs
        items={[
          `${SITE.years}+ years serving Los Angeles`,
          `Licensed & insured`,
          "30-minute average emergency response",
          `${SITE.rating}/5 from ${SITE.reviewCount}+ reviews`,
          "Same-day service guarantee",
          category === "tankless" ? "Up to $1,900 in tankless rebates" : "All major tank brands stocked",
          "100% satisfaction or your money back",
          "5-year workmanship warranty",
        ]}
        title={`Why LA homeowners trust us for ${category === "tank" ? "tank" : "tankless"} water heaters`}
      />

      {/* PROCESS */}
      <Process />

      {/* BRANDS — authorized installer */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Authorized Brands</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              Authorized installer for every major {category === "tank" ? "tank" : "tankless"} brand
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              Factory-authorized service means full warranty registration, OEM parts, and certified technicians.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map(b => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className="group flex items-center gap-4 rounded-3xl bg-sky-50 p-6 ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
              >
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-ink/5">
                  <img
                    src={b.logoUrl}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base font-bold text-ink group-hover:text-primary-700">{b.name}</div>
                  <div className="mt-0.5 line-clamp-2 text-xs text-ink/60">{b.tagline}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TANKLESS REBATE BANNER (only on tankless hub) */}
      {category === "tankless" && (
        <section className="bg-white py-12 sm:py-16">
          <div className="container-tight">
            <Link href="/tankless-rebates" className="group block">
              <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 ring-1 ring-white/5 sm:p-10">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cta-500/15 blur-3xl" />
                <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <SectionLabel className="text-cta-300 [&::before]:bg-cta-400">Tankless Rebates</SectionLabel>
                    <h2 className="mt-4 text-white">
                      Save up to <span className="text-cta-400">$1,900</span> on your install
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                      Stack SoCalGas, LADWP, and federal rebates with manufacturer instant savings. We handle every form.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                    <Button asChild size="lg" variant="call">
                      <span><DollarSign className="h-4 w-4" /> See Your Rebates <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* EMERGENCY (only on tank hub — emergencies are typically tank) */}
      {category === "tank" && <EmergencySection />}

      {/* REVIEWS */}
      <ReviewsSection limit={6} />

      {/* SERVICE AREAS */}
      <ServiceAreasGrid />

      {/* FAQ — comprehensive */}
      <FAQSection
        faqs={hubFaqs}
        title={`Frequently asked questions about ${category === "tank" ? "water heaters" : "tankless water heaters"}`}
      />

      {/* FINAL CTA */}
      <FinalCTA
        headline={
          category === "tank"
            ? "Ready to fix or replace your water heater?"
            : "Ready to switch to tankless?"
        }
        subheadline={
          category === "tank"
            ? "Same-day service across LA. Free written estimate, upfront pricing, and a 100% satisfaction guarantee."
            : "Free in-home estimate including your exact rebate amount. Same-day install available across LA."
        }
      />
    </>
  );
}
