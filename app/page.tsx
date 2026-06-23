import Link from "next/link";
import {
  Phone, ArrowRight, Flame, Zap, Settings, RefreshCw, ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { getSite, getServices, getBrands, getFaqs } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Hero } from "@/components/sections/hero";
import {
  TrustBar, Process, WhyUs, ReviewsSection, FAQSection, FinalCTA,
  ServiceAreasGrid, EmergencyStrip, StatsBand, EmergencySection,
} from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default async function HomePage() {
  const [SITE, SERVICES, BRANDS, FAQS] = await Promise.all([
    getSite(),
    getServices(),
    getBrands(),
    getFaqs(),
  ]);

  // Top 6 services to feature
  const featuredServices = [
    SERVICES.find(s => s.slug === "water-heater-installation")!,
    SERVICES.find(s => s.slug === "water-heater-repair")!,
    SERVICES.find(s => s.slug === "tankless-water-heater-installation")!,
    SERVICES.find(s => s.slug === "tankless-water-heater-repair")!,
    SERVICES.find(s => s.slug === "water-heater-replacement")!,
    SERVICES.find(s => s.slug === "emergency-water-heater-repair")!,
  ];

  return (
    <>
      <Hero
        badge="Available 24/7 — 30-Min Response"
        headline="Same-Day Water Heater Service Across"
        highlight="Los Angeles"
        subheadline={`LA's most trusted water heater specialists. Same-day install, repair, and replacement for tank and tankless. ${SITE.reviewCount}+ five-star reviews. Licensed, insured, and 24/7 emergency ready.`}
        image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&h=1000&fit=crop&q=80"
        imageAlt="LA Water Heaters licensed plumber installing water heater"
        bullets={[
          "Same-day installation",
          "Up to $1,900 in rebates",
          "30-minute response",
          "Licensed",
        ]}
      />

      <TrustBar />

      <EmergencyStrip />

      <StatsBand />

      {/* Services section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Our Services</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              Everything Your Water Heater Could Ever Need
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              From quick repairs to full tankless conversions — we handle it all. Same-day, fully warrantied, with upfront pricing and no surprises.
            </p>
          </div>

          {/* Featured services grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <Link key={s.slug} href={`/${s.slug}`} className="group block">
                  <Card className="h-full overflow-hidden ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="relative h-48 overflow-hidden bg-primary-800">
                      <img
                        src={s.hero.image}
                        alt={s.h1}
                        className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink/40" />
                      <div className="absolute left-4 top-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary-700 shadow-md">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="dark" className="bg-white/15">{s.badge}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-7">
                      <h3 className="text-xl font-bold group-hover:text-primary-700">{s.h1}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-ink/65">{s.shortDesc}</p>
                      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* View all services CTA */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="default">
              <Link href="/water-heater-services">All Water Heater Services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline-dark">
              <Link href="/tankless-water-heater-services">All Tankless Services <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two-column problem/solution — dark band */}
      <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
        <div className="container-tight relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionLabel className="mb-4 text-primary-300 [&::before]:bg-primary-400">Common Issues</SectionLabel>
              <h2 className="text-white">Hot water problems? <span className="text-primary-300">We've fixed them all.</span></h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                Whether it's a tank leak at midnight, a tankless throwing error codes, or a dead pilot light on a cold morning — we've seen it, diagnosed it, and fixed it thousands of times across LA.
              </p>
              <Button asChild size="xl" variant="call" className="mt-8">
                <a href={SITE.phoneTel}>
                  <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Flame, title: "No hot water", desc: "Pilot light, thermocouple, gas valve — diagnosed today." },
                { icon: AlertTriangle, title: "Tank leaking", desc: "Emergency containment + same-day replacement." },
                { icon: Zap, title: "Tankless error codes", desc: "All brands, all codes — fixed in one visit." },
                { icon: RefreshCw, title: "Old unit failing", desc: "Same-day swap with new energy-efficient model." },
                { icon: Settings, title: "Pilot won't stay lit", desc: "Most fixes done in 20-30 minutes." },
                { icon: ShieldCheck, title: "Need maintenance", desc: "Annual service extends life by 5+ years." },
              ].map((it, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white shadow-md">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{it.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />

      <EmergencySection />

      {/* Brands section */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Brands We Service</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              Authorized Installer for Every Major Brand
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              Factory-authorized for the brands that matter — full warranty registration, OEM parts, certified technicians.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BRANDS.map(b => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className="group flex flex-col items-center justify-center rounded-3xl bg-white p-7 text-center ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-16 w-full items-center justify-center">
                  <img
                    src={b.logoUrl}
                    alt={`${b.name} logo`}
                    loading="lazy"
                    className="max-h-12 max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="font-display text-base font-bold text-ink group-hover:text-primary-700">{b.name}</div>
                <div className="mt-0.5 text-xs uppercase tracking-wider text-ink/55">{b.category}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rebate CTA banner */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <Link href="/tankless-rebates" className="group block">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 ring-1 ring-white/5 sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cta-500/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary-500/15 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <SectionLabel className="text-cta-300 [&::before]:bg-cta-400">Tankless Rebates</SectionLabel>
                  <h2 className="mt-4 text-white">
                    Save up to <span className="text-cta-400">$1,900</span> on your new tankless.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    Stack SoCalGas, LADWP, and federal rebates with manufacturer instant savings. We handle every form — you keep the cash.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="xl" variant="default">
                      <span>See Your Rebates <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                    </Button>
                    <Button asChild size="xl" variant="call">
                      <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="font-display text-7xl font-black leading-none tracking-tight text-cta-400 sm:text-8xl lg:text-9xl">
                    $1,900
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">In Combined Rebates</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <WhyUs items={[
        `${SITE.years}+ years serving Los Angeles`,
        `Licensed`,
        "30-minute average emergency response",
        `${SITE.rating}/5 rating, ${SITE.reviewCount}+ reviews`,
        "Same-day install on most jobs",
        "Up to $1,900 in tankless rebates",
        "100% satisfaction guarantee",
        "Easy monthly payments from $89/mo",
      ]} />

      <ReviewsSection />

      <ServiceAreasGrid />

      <FAQSection faqs={FAQS.general.concat(FAQS.tank.slice(0, 2)).concat(FAQS.tankless.slice(0, 2))} />

      <FinalCTA />
    </>
  );
}
