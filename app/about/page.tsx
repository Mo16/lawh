import type { Metadata } from "next";
import { ShieldCheck, Award, Users, Clock, Star, Wrench, Zap } from "lucide-react";
import { SITE } from "@/data/site";
import { Hero } from "@/components/sections/hero";
import { TrustBar, ReviewsSection, FinalCTA, ServiceAreasGrid } from "@/components/sections/blocks";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `About ${SITE.name} — LA's Trusted Water Heater Experts`,
  description: `Learn about ${SITE.name}. ${SITE.years}+ years serving Los Angeles, ${SITE.reviewCount}+ five-star reviews, and 100% satisfaction guarantee. Licensed and insured.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: `Fully licensed, bonded, and insured for your protection.` },
  { icon: Clock, title: "Always On Time", desc: "We respect your schedule. 30-minute average response, same-day service on most jobs." },
  { icon: Users, title: "Real People, Real Service", desc: "When you call, a real person answers. No phone trees, no automated runaround." },
  { icon: Award, title: "100% Satisfaction Guarantee", desc: "If you're not 100% satisfied with our work, we make it right — guaranteed." },
];

const STATS = [
  { value: `${SITE.years}+`, label: "Years in business" },
  { value: SITE.rating.toString(), label: "Average rating" },
  { value: `${SITE.reviewCount}+`, label: "5-star reviews" },
  { value: "30 min", label: "Avg response time" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        headline="LA's Trusted"
        highlight="Water Heater Experts"
        subheadline={`Since ${SITE.founded}, we've installed and serviced thousands of water heaters across Los Angeles. Family-owned, locally operated, and obsessed with doing right by our customers.`}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=1000&fit=crop&q=80"
        imageAlt="LA Water Heaters team"
        bullets={["Family-owned since 2008", `${SITE.reviewCount}+ five-star reviews`, `Licensed`, "100% satisfaction guarantee"]}
      />

      <TrustBar />

      {/* Story section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Badge variant="default" className="mb-3">Our Story</Badge>
              <h2>{SITE.years}+ Years Serving Los Angeles</h2>
              <div className="prose prose-lg mt-6 max-w-none text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  {SITE.name} started in {SITE.founded} with a simple goal: be the water heater company we'd want to call ourselves. No phone trees, no upsells, no surprise charges — just licensed plumbers showing up on time and fixing what's broken.
                </p>
                <p className="mt-4">
                  Over the years, we've grown from a one-truck operation in Studio City to a fully-staffed team serving every neighborhood in Los Angeles. We've installed every brand from Rheem to Navien, fixed every issue from dead pilot lights to flooded basements, and built relationships with thousands of LA homeowners along the way.
                </p>
                <p className="mt-4">
                  What hasn't changed: we still answer the phone ourselves, we still give written quotes before we touch anything, and we still guarantee every job 100%. That's why {SITE.reviewCount}+ Angelenos have left us five-star reviews — and why they keep calling us back.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-2xl ring-1 ring-ink/5">
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&h=1500&fit=crop&q=80"
                  alt={`${SITE.name} technician servicing a water heater`}
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
            <Badge variant="default" className="mb-3">Our Team</Badge>
            <h2>The People Behind {SITE.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Licensed plumbers, master technicians, and the friendly office team that picks up when you call.
            </p>
          </div>

          {/* Founder feature */}
          <Card className="mb-8 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="relative aspect-[4/5] lg:col-span-5 lg:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1100&fit=crop&q=80"
                  alt="Zohrab Grigoriyan, founder of LA Water Heaters"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8 sm:p-10 lg:col-span-7">
                <Badge variant="accent" className="mb-3">Founder &amp; Master Plumber</Badge>
                <h3 className="font-display text-3xl font-black text-ink sm:text-4xl">Zohrab Grigoriyan</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary-600" />
                  <span>Licensed</span>
                  <span className="text-ink/30">·</span>
                  <span>20+ years in the trade</span>
                </div>
                <div className="prose prose-lg mt-5 max-w-none text-base leading-relaxed text-muted-foreground">
                  <p>
                    Zohrab founded {SITE.name} in {SITE.founded} after two decades fixing water heaters across Los Angeles. He still runs every install crew through the same playbook he used on day one: show up on time, give an honest quote, and don't leave until it's right.
                  </p>
                  <p className="mt-4">
                    When he's not on a job site, Zohrab is training new techs, picking up the phone himself, or testing the latest tankless units in his own shop. He answers every escalation personally — that's the {SITE.name} guarantee.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Crew — the team Zohrab leads */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Wrench,
                role: "Installation Crew",
                bio: `Licensed install techs trained on Zohrab's playbook — tank, tankless, and high-efficiency systems from Rheem and A.O. Smith to Navien and Rinnai.`,
              },
              {
                icon: Zap,
                role: "Service & Repair",
                bio: "Fast, honest diagnostics on error codes, pilot issues, leaks, and emergency calls. We find what others miss and fix it right the first time.",
              },
              {
                icon: Users,
                role: "Customer Care",
                bio: "A real person answers when you call — no phone trees. We schedule every job, keep you updated, and keep the trucks moving across LA.",
              },
            ].map((crew) => (
              <Card key={crew.role} className="transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                    <crew.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">{crew.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{crew.bio}</p>
                </CardContent>
              </Card>
            ))}
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
            <Badge variant="accent" className="mb-3">Our Values</Badge>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Card key={i} className="transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Badge variant="default" className="mb-3">Certifications</Badge>
            <h2>Licensed, Bonded, and Trusted</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div className="font-display text-base font-bold">Licensed</div>
                <div className="mt-1 text-sm text-muted-foreground">Bonded &amp; insured</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                  <Award className="h-7 w-7" />
                </div>
                <div className="font-display text-base font-bold">{SITE.bbb}</div>
                <div className="mt-1 text-sm text-muted-foreground">Better Business Bureau</div>
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
        headline="Ready to work with LA's trusted water heater team?"
        subheadline="Free estimates, upfront pricing, same-day service. Call now or get a quote online."
      />
    </>
  );
}
