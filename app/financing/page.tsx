import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getSite, getPage } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FAQSection, FinalCTA, ReviewsSection } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Water Heater Financing Options in Los Angeles",
    description: `Easy monthly payments from $89/mo. Apply in 60 seconds with a soft credit pull — no impact to your score. Affordable financing on water heater install and replacement. Call ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/financing` },
  };
}

export default async function FinancingPage() {
  const financing = await getPage("financing");

  return (
    <>
      <Hero
        badge={financing.hero.badge}
        headline={financing.hero.headline}
        highlight={financing.hero.highlight}
        subheadline={financing.hero.subheadline}
        image={financing.hero.image}
        imageAlt={financing.hero.imageAlt}
        bullets={financing.hero.bullets}
      />

      <TrustBar />

      {/* Plan highlights */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{financing.planHighlightsSection.label}</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">{financing.planHighlightsSection.heading}</h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              {financing.planHighlightsSection.paragraph}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {(financing.planHighlightsSection.plans as Array<{ title: string; desc: string }>).map((p, i) => (
              <Card key={i} className="transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
                <CardContent className="p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cta-500 text-white shadow-md">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{financing.howItWorksSection.label}</SectionLabel>
          <h2 className="max-w-3xl text-balance">{financing.howItWorksSection.heading}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(financing.howItWorksSection.steps as Array<{ step: string; title: string; desc: string }>).map((s, i) => (
              <div key={i} className="rounded-3xl bg-white p-7 ring-1 ring-ink/5 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500 font-display text-xl font-black text-white shadow-md">
                  {s.step}
                </div>
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example calculation */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-narrow">
          <Card className="overflow-hidden bg-ink-900 text-white ring-1 ring-white/5">
            <CardContent className="p-8 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <SectionLabel className="mb-3 text-cta-300 [&::before]:bg-cta-400">{financing.exampleSection.label}</SectionLabel>
                  <h2 className="text-white">{financing.exampleSection.installTitle}</h2>
                  <p className="mt-2 text-white/70">{financing.exampleSection.installDesc}</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                  <div className="text-xs uppercase tracking-wider text-white/60">{financing.exampleSection.termLabel}</div>
                  <div className="mt-2 font-display text-5xl font-black">
                    <span className="text-cta-400">{financing.exampleSection.monthlyAmount}</span>
                  </div>
                  <div className="mt-2 text-sm text-white/80">{financing.exampleSection.monthlyNote}</div>
                  <Button asChild size="lg" variant="default" className="mt-6 w-full">
                    <Link href={financing.exampleSection.ctaHref}>{financing.exampleSection.ctaText} <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="mt-4 text-center text-xs text-ink/55">
            {financing.exampleSection.disclaimer}
          </p>
        </div>
      </section>

      {/* What you can finance */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{financing.financeableSection.label}</SectionLabel>
          <h2 className="max-w-3xl text-balance">{financing.financeableSection.heading}</h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(financing.financeableSection.items as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cta-500" />
                <span className="text-sm font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      <FAQSection faqs={financing.faqsSection.faqs} title={financing.faqsSection.title} />

      <FinalCTA
        headline={financing.finalCTA.headline}
        subheadline={financing.finalCTA.subheadline}
      />
    </>
  );
}
