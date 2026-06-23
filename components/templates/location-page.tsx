import Link from "next/link";
import { MapPin, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import type { LocationData } from "@/data/locations";
import type { FAQ } from "@/data/faqs";
import { getSite, getFaqs, getServices } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Hero } from "@/components/sections/hero";
import {
  TrustBar, Process, WhyUs, ReviewsSection, FAQSection, FinalCTA, EmergencyStrip,
} from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface LocationPageProps {
  location: LocationData;
}

export async function LocationPageTemplate({ location }: LocationPageProps) {
  const [SITE, FAQS, SERVICES] = await Promise.all([getSite(), getFaqs(), getServices()]);
  const faqs: FAQ[] = FAQS.general;

  // Top services to feature on this location page
  const featuredServices = [
    SERVICES.find(s => s.slug === "water-heater-installation")!,
    SERVICES.find(s => s.slug === "water-heater-repair")!,
    SERVICES.find(s => s.slug === "tankless-water-heater-installation")!,
    SERVICES.find(s => s.slug === "emergency-water-heater-repair")!,
  ].filter(Boolean);

  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `${SITE.name} — ${location.name}`,
    description: location.description,
    url: `${SITE.url}/${location.slug}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "CA",
      addressCountry: "US",
      postalCode: location.zip[0],
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero
        badge={`📍 ${location.name}, CA`}
        headline={`Water Heater Services in`}
        highlight={location.name}
        subheadline={location.description + " Same-day service across " + location.name + " and surrounding areas."}
        image={location.image}
        imageAlt={`Water heater services in ${location.name}, CA`}
        bullets={[
          "Same-day service",
          `Serving ZIP ${location.zip[0]}`,
          "30-min response",
          "Licensed & insured",
        ]}
      />

      <TrustBar />

      <EmergencyStrip />

      {/* Local content — narrative section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <div className="text-center">
            <Badge variant="default" className="mb-3">
              <MapPin className="h-3 w-3" /> Local Specialists
            </Badge>
            <h2>Why {location.name} Trusts Us</h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {location.localContent}
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {location.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                <span className="text-sm font-medium">{challenge}</span>
              </div>
            ))}
          </div>

          {/* Service area details */}
          <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50 p-6 text-center sm:p-8">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-2 font-semibold text-primary-900">
                <MapPin className="h-4 w-4" /> {location.name}, CA
              </span>
              <span className="text-muted-foreground">
                Population: {location.population}
              </span>
              <span className="text-muted-foreground">
                ZIP: {location.zip.join(", ")}
              </span>
            </div>
            <Button asChild size="lg" variant="call">
              <a href={SITE.phoneTel}>
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured services in this location */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="accent" className="mb-3">Services</Badge>
            <h2>Water Heater Services in {location.name}</h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Tank, tankless, repair, replacement, emergency — all available across {location.name}.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredServices.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group block"
                >
                  <Card className="h-full transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold group-hover:text-primary-700">{s.badge}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{s.shortDesc}</p>
                          <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                            Learn more
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Process />

      <WhyUs items={[
        `Serving ${location.name} since ${SITE.founded}`,
        `${SITE.years}+ years of LA experience`,
        `Licensed`,
        "30-minute average response",
        `${SITE.rating}/5 star rating across LA`,
        "Same-day service guarantee",
      ]} title={`The #1 Choice for Water Heater Services in ${location.name}`} />

      <ReviewsSection limit={6} />

      {/* Nearby areas */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Badge variant="default" className="mb-3"><MapPin className="h-3 w-3" /> Nearby Areas</Badge>
            <h2>Also Serving Nearby</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {location.nearby.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card"
              >
                <MapPin className="h-3 w-3 text-accent-600" />
                {n}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline-dark" size="lg">
              <Link href="/service-areas">
                View All Service Areas <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`${location.name} Water Heater FAQ`} />

      <FinalCTA
        headline={`Need a water heater specialist in ${location.name}?`}
        subheadline={`We're 30 minutes away. Same-day service, free estimates, upfront pricing. Call now or get a quote online.`}
      />
    </>
  );
}
