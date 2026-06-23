import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { getSite, getLocations, getAdditionalAreas, getFaqs, getPage } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { TrustBar, ReviewsSection, FinalCTA, FAQSection } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Water Heater Services Across Los Angeles County",
    description: `${SITE.name} serves all of LA County including Hollywood, Beverly Hills, Santa Monica, Pasadena, Burbank, Glendale. 30-min response. Call ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/service-areas` },
  };
}

export default async function ServiceAreasPage() {
  const [SITE, LOCATIONS, ADDITIONAL_AREAS, FAQS, sa] = await Promise.all([
    getSite(),
    getLocations(),
    getAdditionalAreas(),
    getFaqs(),
    getPage("service-areas"),
  ]);

  return (
    <>
      <Hero
        badge={sa.hero.badge}
        headline={sa.hero.headline}
        highlight={sa.hero.highlight}
        subheadline={sa.hero.subheadline}
        image={sa.hero.image}
        imageAlt={sa.hero.imageAlt}
        bullets={sa.hero.bullets}
      />

      <TrustBar />

      {/* Locations grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">{sa.locationsSection.badge}</Badge>
            <h2>{sa.locationsSection.heading}</h2>
            <p className="mt-3 text-base text-muted-foreground">
              {sa.locationsSection.paragraph}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map(l => (
              <Link key={l.slug} href={`/${l.slug}`} className="group block">
                <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-card-hover">
                  <div className="relative h-44 overflow-hidden bg-primary-800">
                    <img
                      src={l.image}
                      alt={`${l.name}, CA`}
                      className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/40" />
                    <div className="absolute left-4 top-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-primary-700 shadow-md backdrop-blur">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="font-display text-2xl font-black text-white">{l.name}</div>
                      <div className="text-xs uppercase tracking-wider text-white/70">ZIP {l.zip[0]}</div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{l.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Pop. {l.population}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-accent-600">
                        View services
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Additional neighborhoods served (no dedicated pages) */}
          <div className="mt-12 rounded-3xl bg-sky-50 p-7 ring-1 ring-ink/5 sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="default" className="mb-3">{sa.additionalAreasSection.badge}</Badge>
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{sa.additionalAreasSection.heading}</h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {sa.additionalAreasSection.paragraph}
              </p>
            </div>
            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
              {ADDITIONAL_AREAS.map(area => (
                <li
                  key={area}
                  className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-ink/80 ring-1 ring-ink/5"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Don't see yours? */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight text-center">
          <h2>{sa.notListedSection.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            {sa.notListedSection.paragraph}
          </p>
          <Button asChild size="xl" variant="call" className="mt-6">
            <a href={SITE.phoneTel}>
              <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>

      <ReviewsSection limit={6} />

      <FAQSection faqs={FAQS.general} title="Service Area FAQ" />

      <FinalCTA />
    </>
  );
}
