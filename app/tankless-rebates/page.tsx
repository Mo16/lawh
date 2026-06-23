import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, ArrowRight, CheckCircle2, DollarSign,
} from "lucide-react";
import { getSite, getPage } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FAQSection, FinalCTA, ReviewsSection } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Tankless Water Heater Rebates Los Angeles — Save up to $1,900",
    description: `Save up to $1,900 on a new tankless water heater with utility, federal, and manufacturer rebates. We handle all the paperwork. Free in-home estimate. Call ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/tankless-rebates` },
  };
}

export default async function TanklessRebatesPage() {
  const SITE = await getSite();
  const rebates = await getPage("tankless-rebates");
  return (
    <>
      <Hero
        badge={rebates.hero.badge}
        headline={rebates.hero.headline}
        highlight={rebates.hero.highlight}
        subheadline={rebates.hero.subheadline}
        image={rebates.hero.image}
        imageAlt={rebates.hero.imageAlt}
        bullets={rebates.hero.bullets}
      />

      <TrustBar />

      {/* Rebate breakdown */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{rebates.rebatesSection.label}</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              {rebates.rebatesSection.heading}
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              {rebates.rebatesSection.paragraph}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {(rebates.rebatesSection.rebates as Array<{ label: string; amount: string; desc: string; icon: string }>).map((r, i) => {
              const Icon = getIcon(r.icon);
              return (
                <Card key={i} className="bg-sky-50 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-500 text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/55">{r.label}</div>
                    <div className="mt-1 font-display text-3xl font-black text-ink sm:text-4xl">{r.amount}</div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Total savings highlight */}
          <div className="mt-10 rounded-3xl bg-ink-900 p-8 text-center text-white sm:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-cta-300">{rebates.rebatesSection.totalLabel}</div>
            <div className="mt-3 font-display text-6xl font-black tracking-tight text-cta-400 sm:text-7xl lg:text-8xl">
              {rebates.rebatesSection.totalAmount}
            </div>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              {rebates.rebatesSection.totalParagraph}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="xl" variant="call">
                <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/contact">{rebates.rebatesSection.ctaGetQuoteText} <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How we handle it */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{rebates.howWeHandleItSection.label}</SectionLabel>
          <h2 className="max-w-3xl text-balance">{rebates.howWeHandleItSection.heading}</h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(rebates.howWeHandleItSection.steps as Array<{ step: string; title: string; desc: string }>).map((s, i) => (
              <div key={i} className="rounded-3xl bg-white p-7 ring-1 ring-ink/5 shadow-card">
                <div className="font-display text-sm font-bold tracking-[0.18em] text-ink/45">
                  0{s.step}.
                </div>
                <div className="mt-8 text-xl font-bold leading-tight font-display text-ink">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why tankless */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">{rebates.whyTanklessSection.label}</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="text-balance">{rebates.whyTanklessSection.heading}</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                {rebates.whyTanklessSection.paragraph}
              </p>
              <div className="mt-8 space-y-3">
                {(rebates.whyTanklessSection.bullets as string[]).map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta-500" />
                    <span className="text-sm font-medium text-ink">{b}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="xl" variant="default" className="mt-8">
                <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
              </Button>
            </div>

            <div className="lg:col-span-6">
              <Card className="bg-sky-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-500 text-white shadow-md">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/55">{rebates.whyTanklessSection.savingsCardLabel}</div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink/55">{rebates.whyTanklessSection.savingsRebatesLabel}</div>
                      <div className="mt-1 font-display text-3xl font-black text-ink">{rebates.whyTanklessSection.savingsRebatesAmount}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink/55">{rebates.whyTanklessSection.savingsBillsLabel}</div>
                      <div className="mt-1 font-display text-3xl font-black text-ink">{rebates.whyTanklessSection.savingsBillsAmount}</div>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-ink/10 pt-5">
                    <div className="text-xs uppercase tracking-wider text-ink/55">{rebates.whyTanklessSection.savingsTotalLabel}</div>
                    <div className="mt-1 font-display text-5xl font-black text-cta-500">{rebates.whyTanklessSection.savingsTotalAmount}</div>
                  </div>
                  <p className="mt-4 text-xs text-ink/55">
                    {rebates.whyTanklessSection.savingsDisclaimer}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      <FAQSection faqs={rebates.faqsSection.faqs} title={rebates.faqsSection.title} />

      <FinalCTA
        headline={rebates.finalCTA.headline}
        subheadline={rebates.finalCTA.subheadline}
      />
    </>
  );
}
