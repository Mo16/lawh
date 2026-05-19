import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, ArrowRight, CheckCircle2, FileText, DollarSign, Zap, Award, Shield,
} from "lucide-react";
import { SITE } from "@/data/site";
import { FAQS } from "@/data/faqs";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FAQSection, FinalCTA, ReviewsSection } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tankless Water Heater Rebates Los Angeles — Save up to $1,900",
  description: `Save up to $1,900 on a new tankless water heater with utility, federal, and manufacturer rebates. We handle all the paperwork. Free in-home estimate. Call ${SITE.phone}.`,
  alternates: { canonical: `${SITE.url}/tankless-rebates` },
};

const REBATES = [
  {
    label: "SoCalGas Rebate",
    amount: "Up to $1,000",
    desc: "Available for qualifying high-efficiency tankless gas water heaters installed in your home.",
    icon: Zap,
  },
  {
    label: "Federal Tax Credit",
    amount: "Up to $600",
    desc: "Inflation Reduction Act energy-efficient home improvement credit on qualifying ENERGY STAR units.",
    icon: Award,
  },
  {
    label: "LADWP Rebate",
    amount: "Up to $300",
    desc: "Los Angeles Department of Water & Power rebate for qualifying high-efficiency residential installations.",
    icon: Shield,
  },
];

const REBATE_FAQS = [
  { q: "How much can I actually save with rebates?", a: "Most LA homeowners qualify for between $1,200 and $1,900 in combined rebates and tax credits when installing a high-efficiency tankless unit. The exact amount depends on your utility, the unit you choose, and your tax situation." },
  { q: "Do you handle the paperwork for me?", a: "Yes — we handle every rebate application from start to finish. We submit the SoCalGas and LADWP forms, provide IRS-ready documentation for the federal tax credit, and follow up until you've received your check." },
  { q: "Which units qualify for rebates?", a: "Most ENERGY STAR-certified tankless gas water heaters from Navien, Rinnai, Noritz, and Takagi qualify. We'll recommend the unit that maximizes your rebate eligibility based on your home." },
  { q: "How long does it take to receive the rebate?", a: "Utility rebates typically arrive within 6–10 weeks after installation. Federal tax credits are claimed when you file your taxes for the year the install was completed." },
  { q: "Can I combine multiple rebates?", a: "Yes. The federal tax credit stacks on top of utility rebates, so most homeowners claim two or three programs together. We'll show you exactly which ones you qualify for during your free estimate." },
  { q: "What if I'm replacing an existing tankless?", a: "Rebates typically apply to new installs and tank-to-tankless conversions, not direct tankless-to-tankless replacements. We'll confirm eligibility before you commit." },
];

export default function TanklessRebatesPage() {
  return (
    <>
      <Hero
        badge="Rebates Available"
        headline="Save up to $1,900 on a New"
        highlight="Tankless Water Heater"
        subheadline="Combine SoCalGas, LADWP, and federal rebates with manufacturer instant savings. We handle every form. You keep the cash."
        image="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&h=1000&fit=crop&q=80"
        imageAlt="Tankless water heater rebates Los Angeles"
        bullets={[
          "SoCalGas rebates up to $1,000",
          "Federal tax credit up to $600",
          "LADWP rebate up to $300",
          "All paperwork handled",
        ]}
      />

      <TrustBar />

      {/* Rebate breakdown */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Rebate Programs</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">
              Stack Three Rebate Programs Together
            </h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              Most LA homeowners qualify for all three. We confirm your eligibility during your free in-home estimate and submit every application on your behalf.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {REBATES.map((r, i) => (
              <Card key={i} className="bg-sky-50 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-500 text-white shadow-md">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink/55">{r.label}</div>
                  <div className="mt-1 font-display text-3xl font-black text-ink sm:text-4xl">{r.amount}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Total savings highlight */}
          <div className="mt-10 rounded-3xl bg-ink-900 p-8 text-center text-white sm:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-cta-300">Combined Savings</div>
            <div className="mt-3 font-display text-6xl font-black tracking-tight text-cta-400 sm:text-7xl lg:text-8xl">
              Up to $1,900
            </div>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Off your new tankless water heater install. Most LA homeowners qualify — call us to find out exactly how much you'll save.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="xl" variant="call">
                <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href="/contact">Get Free Quote <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How we handle it */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Zero Paperwork for You</SectionLabel>
          <h2 className="max-w-3xl text-balance">We Handle Every Form, Start to Finish</h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Free Estimate", desc: "We confirm which rebates you qualify for and the exact amount you'll save." },
              { step: "2", title: "Choose Your Unit", desc: "We recommend a unit that maximizes your eligible rebates." },
              { step: "3", title: "Same-Day Install", desc: "Professional install with all permits, code compliance, and warranty registration." },
              { step: "4", title: "We Submit Everything", desc: "Utility forms, IRS documentation, manufacturer rebates — all handled by us." },
            ].map((s, i) => (
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
          <SectionLabel className="mb-4">Why Tankless</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="text-balance">More Than Rebates — Long-Term Savings</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                Tankless units pay you back twice: once on the rebate, then every month on your gas bill. Most LA homeowners save 25–35% on water heating costs and never run out of hot water again.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Up to 35% lower monthly gas bills",
                  "Endless hot water — never run out",
                  "20+ year lifespan (vs 8–12 for tank)",
                  "90% smaller — frees up garage/closet space",
                  "Full manufacturer warranty registered for you",
                ].map((b, i) => (
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
                    <div className="text-xs font-bold uppercase tracking-wider text-ink/55">10-Year Total Savings</div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink/55">Rebates</div>
                      <div className="mt-1 font-display text-3xl font-black text-ink">$1,900</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink/55">Lower bills*</div>
                      <div className="mt-1 font-display text-3xl font-black text-ink">$2,400+</div>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-ink/10 pt-5">
                    <div className="text-xs uppercase tracking-wider text-ink/55">Estimated 10-yr savings</div>
                    <div className="mt-1 font-display text-5xl font-black text-cta-500">$4,300+</div>
                  </div>
                  <p className="mt-4 text-xs text-ink/55">
                    *Estimated savings vs. a standard tank water heater for an average LA household. Actual savings vary.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      <FAQSection faqs={REBATE_FAQS} title="Tankless Rebate FAQs" />

      <FinalCTA
        headline="Ready to claim your $1,900 in rebates?"
        subheadline="Free in-home estimate. We confirm your exact rebate amount before any work begins. Same-day install available."
      />
    </>
  );
}
