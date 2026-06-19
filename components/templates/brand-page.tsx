import Link from "next/link";
import {
  CheckCircle2, AlertCircle, Award, ShieldCheck, Phone, Star, Clock, ArrowRight,
} from "lucide-react";
import type { BrandData } from "@/data/brands";
import { FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import {
  TrustBar, Process, WhyUs, ReviewsSection, FAQSection, FinalCTA, ServiceAreasGrid,
} from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BrandPageProps {
  brand: BrandData;
}

export function BrandPageTemplate({ brand }: BrandPageProps) {
  const faqs = brand.category === "tankless" ? FAQS.tankless : FAQS.tank;

  // Brand schema
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} Water Heater Services`,
    description: brand.metaDescription,
    serviceType: `${brand.name} Water Heater Installation & Repair`,
    provider: {
      "@type": "Plumber",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.rating,
        reviewCount: SITE.reviewCount,
      },
    },
    areaServed: { "@type": "City", name: "Los Angeles" },
    brand: {
      "@type": "Brand",
      name: brand.name,
      description: brand.tagline,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />

      {/* Brand-specific hero — uses the brand's actual logo as the visual */}
      <section className="relative isolate overflow-hidden bg-sky-200 pb-24 pt-10 text-ink sm:pb-28 sm:pt-14 lg:pb-36">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-white/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-primary-200/50 blur-3xl" />

        <div className="container-tight relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              <SectionLabel className="mb-5">Authorized {brand.name} Installer</SectionLabel>

              <h1 className="text-balance">
                {brand.name} Water Heater{" "}
                <span className="text-primary-600">
                  {brand.category === "tankless" ? "Specialists" : "Experts"}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                {brand.tagline}. Same-day install and repair for all {brand.name} models across Los Angeles.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 sm:max-w-md">
                {[
                  `Authorized ${brand.name} installer`,
                  "Same-day service",
                  "Full warranty registration",
                  "All models stocked",
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
                    <Phone className="h-5 w-5" />
                    Call {SITE.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="xl" variant="default" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Get Free Quote <ArrowRight className="h-5 w-5" />
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

            {/* Right: Brand logo card */}
            <div className="relative lg:col-span-5">
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] bg-white p-10 shadow-2xl ring-1 ring-ink/5 sm:p-14">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="eager"
                />
              </div>

              {/* Floating "Authorized" card */}
              <div className="absolute -left-3 -top-3 hidden rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-ink/5 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink/55">Authorized</div>
                    <div className="text-sm font-bold text-ink">{brand.name} Installer</div>
                  </div>
                </div>
              </div>

              {/* Floating same-day card */}
              <div className="absolute -bottom-3 -right-3 hidden rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-ink/5 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Same-Day</div>
                    <div className="text-xs text-ink/60">Service available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* About the brand */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-3">About {brand.name}</Badge>
              <h2>Why Homeowners Choose {brand.name}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {brand.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-primary-50 p-4">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Origin</div>
                    <div className="text-sm font-semibold">{brand.origin}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-primary-50 p-4">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 fill-accent-500 text-accent-500" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer Rating</div>
                    <div className="text-sm font-semibold">{brand.rating}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Card className="bg-ink-900 text-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-5 flex h-20 items-center justify-center rounded-2xl bg-white px-6 py-4">
                    <img
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-[180px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-3 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary-300" />
                    <h3 className="text-white">Warranty</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">{brand.warranty}</p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <Button asChild size="lg" variant="call" className="w-full">
                      <a href={SITE.phoneTel}>
                        <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Models comparison */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="accent" className="mb-3">Models</Badge>
            <h2>{brand.name} Models We Install</h2>
            <p className="mt-3 text-base text-muted-foreground">
              We're authorized installers for the full {brand.name} lineup. Right unit for your home, every time.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 font-display font-bold text-primary-900 sm:px-6">Model</th>
                  <th className="px-4 py-3 font-display font-bold text-primary-900 sm:px-6">
                    {brand.category === "tankless" ? "Capacity (GPM)" : "Capacity"}
                  </th>
                  <th className="hidden px-4 py-3 font-display font-bold text-primary-900 sm:table-cell sm:px-6">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {brand.models.map((m, i) => (
                  <tr key={i} className="transition-colors hover:bg-muted/50">
                    <td className="px-4 py-4 font-semibold sm:px-6">{m.name}</td>
                    <td className="px-4 py-4 text-muted-foreground sm:px-6">{m.capacity}</td>
                    <td className="hidden px-4 py-4 text-muted-foreground sm:table-cell sm:px-6">{m.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile-only "best for" cards */}
          <div className="mt-4 space-y-2 sm:hidden">
            {brand.models.map((m, i) => (
              <div key={i} className="rounded-xl border border-border bg-white p-4 text-sm">
                <div className="font-semibold">{m.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">Why {brand.name}</Badge>
            <h2>Reasons to Choose {brand.name}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {brand.whyChoose.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common issues */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="flame" className="mb-3">
                <AlertCircle className="h-3 w-3" /> Common Issues
              </Badge>
              <h2>{brand.name} Issues We Repair</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                We're certified to diagnose and repair every common {brand.name} issue. OEM parts, same-day service, 1-year warranty on every repair.
              </p>
              <Button asChild size="lg" variant="call" className="mt-6">
                <a href={SITE.phoneTel}>
                  <Phone className="h-4 w-4" /> Call for Repair
                </a>
              </Button>
            </div>
            <div className="space-y-3">
              {brand.commonIssues.map((issue, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-flame-100 text-flame-600">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services we provide */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">Services</Badge>
            <h2>{brand.name} Services We Provide</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brand.weServices.map((service, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                <span className="text-sm font-semibold">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" variant="call">
              <a href={SITE.phoneTel}>
                <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="xl" variant="default">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Process />

      <WhyUs items={[
        `Authorized ${brand.name} installer`,
        "All models stocked on trucks",
        "Manufacturer warranty registration",
        "OEM parts only — no aftermarket",
        `${SITE.rating}/5 from ${SITE.reviewCount}+ reviews`,
        "Same-day service guarantee",
      ]} title={`Why We're LA's Top ${brand.name} Installer`} />

      <ReviewsSection limit={3} />

      <ServiceAreasGrid />

      <FAQSection faqs={faqs} />

      <FinalCTA
        headline={`Ready for a new ${brand.name} water heater?`}
        subheadline={`Same-day install across LA. Free estimate, upfront pricing, full warranty. Call now or book online.`}
      />
    </>
  );
}
