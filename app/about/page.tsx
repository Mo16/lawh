import type { Metadata } from "next";
import { ShieldCheck, Star } from "lucide-react";
import { getSite, getPage } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Hero } from "@/components/sections/hero";
import { TrustBar, ReviewsSection, FinalCTA, ServiceAreasGrid } from "@/components/sections/blocks";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: `About ${SITE.name} — LA's Trusted Water Heater Experts`,
    description: `Learn about ${SITE.name}. ${SITE.years}+ years serving Los Angeles, ${SITE.reviewCount}+ five-star reviews, and 100% satisfaction guarantee. Licensed and insured.`,
    alternates: { canonical: `${SITE.url}/about` },
  };
}

export default async function AboutPage() {
  const [SITE, about] = await Promise.all([getSite(), getPage("about")]);

  const STATS = [
    { value: `${SITE.years}+`, label: "Years in business" },
    { value: SITE.rating.toString(), label: "Average rating" },
    { value: `${SITE.reviewCount}+`, label: "5-star reviews" },
    { value: about.statsSection.stat4Value, label: about.statsSection.stat4Label },
  ];

  return (
    <>
      <Hero
        badge={about.hero.badge}
        headline={about.hero.headline}
        highlight={about.hero.highlight}
        subheadline={about.hero.subheadline}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
        bullets={about.hero.bullets}
      />

      <TrustBar />

      {/* Story section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-3">{about.storySection.badge}</Badge>
              <h2>{SITE.years}+ Years Serving Los Angeles</h2>
              <div className="prose prose-lg mt-6 max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  {about.storySection.paragraph1}
                </p>
                <p className="mt-4">
                  {about.storySection.paragraph2}
                </p>
                <p className="mt-4">
                  {about.storySection.paragraph3}
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-2xl ring-1 ring-ink/5">
                <img
                  src={about.storySection.image}
                  alt={about.storySection.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-ink/5 sm:block">
                <div className="font-display text-3xl font-black leading-none text-primary-700">
                  {SITE.years}+
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink/60">Years in LA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">{about.teamSection.badge}</Badge>
            <h2>The People Behind {SITE.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.teamSection.paragraph}
            </p>
          </div>

          {/* Founder feature */}
          <Card className="mb-8 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="relative aspect-[4/5] lg:col-span-5 lg:aspect-auto">
                <img
                  src={about.teamSection.founder.image}
                  alt={about.teamSection.founder.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8 sm:p-10 lg:col-span-7">
                <Badge variant="accent" className="mb-3">{about.teamSection.founder.badge}</Badge>
                <h3 className="font-display text-3xl font-black text-ink sm:text-4xl">{about.teamSection.founder.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  {(() => { const CredIcon = getIcon(about.teamSection.founder.credentialIcon); return <CredIcon className="h-4 w-4 text-primary-600" />; })()}
                  <span>{about.teamSection.founder.credential1}</span>
                  <span className="text-ink/30">·</span>
                  <span>{about.teamSection.founder.credential2}</span>
                </div>
                <div className="prose prose-lg mt-5 max-w-none text-base leading-relaxed text-muted-foreground">
                  <p>
                    {about.teamSection.founder.paragraph1}
                  </p>
                  <p className="mt-4">
                    {about.teamSection.founder.paragraph2}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Crew — the team Zohrab leads */}
          <div className="grid gap-6 sm:grid-cols-3">
            {(about.teamSection.crew as Array<{ icon: string; role: string; bio: string }>).map((crew) => {
              const CrewIcon = getIcon(crew.icon);
              return (
                <Card key={crew.role} className="transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                      <CrewIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{crew.role}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{crew.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-900 py-14 text-white">
        <div className="container-tight">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-black sm:text-5xl lg:text-6xl">
                  <span className="text-primary-300">{s.value}</span>
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-white/60 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="accent" className="mb-3">{about.valuesSection.badge}</Badge>
            <h2>{about.valuesSection.heading}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {(about.valuesSection.values as Array<{ icon: string; title: string; desc: string }>).map((v, i) => {
              const ValIcon = getIcon(v.icon);
              return (
                <Card key={i} className="transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                      <ValIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{v.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">{about.certificationsSection.badge}</Badge>
            <h2>{about.certificationsSection.heading}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  {(() => { const CertIcon1 = getIcon(about.certificationsSection.cert1Icon); return <CertIcon1 className="h-7 w-7" />; })()}
                </div>
                <div className="font-display text-base font-bold">{about.certificationsSection.cert1Title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{about.certificationsSection.cert1Sub}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                  {(() => { const CertIcon2 = getIcon(about.certificationsSection.cert2Icon); return <CertIcon2 className="h-7 w-7" />; })()}
                </div>
                <div className="font-display text-base font-bold">{SITE.bbb}</div>
                <div className="mt-1 text-sm text-muted-foreground">{about.certificationsSection.cert2Sub}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-flame-50 text-flame-700">
                  <Star className="h-7 w-7 fill-flame-500" />
                </div>
                <div className="font-display text-base font-bold">{SITE.rating}/5 Google</div>
                <div className="mt-1 text-sm text-muted-foreground">{SITE.reviewCount}+ reviews</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ReviewsSection limit={6} />

      <ServiceAreasGrid />

      <FinalCTA
        headline={about.finalCTA.headline}
        subheadline={about.finalCTA.subheadline}
      />
    </>
  );
}
