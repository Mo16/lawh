import type { Metadata } from "next";
import Link from "next/link";
import { Phone, DollarSign, CheckCircle2, Calendar, Shield, Clock, ArrowRight } from "lucide-react";
import { getSite } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FAQSection, FinalCTA, ReviewsSection } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Water Heater Financing Options in Los Angeles",
    description: `Easy monthly payments from $89/mo. Apply in 60 seconds with a soft credit pull — no impact to your score. Affordable financing on water heater install and replacement. Call ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/financing` },
  };
}

const FINANCING_FAQS = [
  { q: "What financing options do you offer?", a: "We offer flexible monthly payment plans on qualifying water heater installations and replacements, with terms up to 60 months at competitive rates. We work with multiple lending partners to find the best fit for your budget." },
  { q: "How does the application work?", a: "Apply online in 60 seconds. We do a soft credit pull (no impact to your score) and you get an instant decision. If approved, you can sign electronically and we schedule your install." },
  { q: "Will applying affect my credit score?", a: "No. Pre-approval is a soft credit pull that does not impact your credit score. Only when you accept and sign the loan agreement does a hard inquiry appear." },
  { q: "What's the minimum amount I can finance?", a: "Financing is typically available for jobs $1,000 and up. For smaller repairs, we accept all major credit cards." },
  { q: "Are there prepayment penalties?", a: "No. You can pay off your loan early at any time without penalty — actually saving on interest." },
  { q: "What if my credit isn't perfect?", a: "We work with multiple lenders covering a wide range of credit profiles. Even if your credit isn't perfect, we likely have an option for you. Call us — we'll find the right fit." },
];

const PLAN_HIGHLIGHTS = [
  { title: "Low monthly payments", desc: "Spread the cost over 24–60 months with competitive rates that fit your budget." },
  { title: "Instant approval", desc: "Apply in 60 seconds. Soft credit pull. Instant decision — get hot water today." },
  { title: "No prepayment penalty", desc: "Pay off early any time. Save on interest with no extra fees." },
  { title: "Flexible terms", desc: "Terms tailored to your situation — short or long-term, we make it work." },
];

export default async function FinancingPage() {
  const SITE = await getSite();

  return (
    <>
      <Hero
        badge="Financing Available"
        headline="Easy Monthly Payments for Your"
        highlight="New Water Heater"
        subheadline="From as low as $89/mo. Apply in 60 seconds with no impact to your credit. Get your water heater fixed today, pay over time."
        image="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?w=1600&h=1000&fit=crop&q=80"
        imageAlt="Water heater financing options"
        bullets={["From $89/mo", "60-second application", "Soft credit pull only", "Up to 60-month terms"]}
      />

      <TrustBar />

      {/* Plan highlights */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">Our Financing</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl text-balance lg:col-span-7">Simple Financing, Honest Terms</h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
              We've made financing as simple as possible. Apply, get approved, get hot water — all in the same day.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {PLAN_HIGHLIGHTS.map((p, i) => (
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
          <SectionLabel className="mb-4">How It Works</SectionLabel>
          <h2 className="max-w-3xl text-balance">Get Approved in 60 Seconds</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Apply Online", desc: "60 seconds. Basic info, no credit impact." },
              { step: "2", title: "Get Approved", desc: "Instant decision. See your monthly payment." },
              { step: "3", title: "Sign Electronically", desc: "E-sign your agreement. No paperwork." },
              { step: "4", title: "Get Hot Water", desc: "We schedule install. Same day if needed." },
            ].map((s, i) => (
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
                  <SectionLabel className="mb-3 text-cta-300 [&::before]:bg-cta-400">Example Payment</SectionLabel>
                  <h2 className="text-white">$2,495 install</h2>
                  <p className="mt-2 text-white/70">Standard 50-gallon gas water heater installed.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
                  <div className="text-xs uppercase tracking-wider text-white/60">Pay over 36 months</div>
                  <div className="mt-2 font-display text-5xl font-black">
                    <span className="text-cta-400">$89/mo</span>
                  </div>
                  <div className="mt-2 text-sm text-white/80">Low monthly payment · subject to credit approval</div>
                  <Button asChild size="lg" variant="default" className="mt-6 w-full">
                    <Link href="/contact">Apply Now <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="mt-4 text-center text-xs text-ink/55">
            Example only. Actual terms based on credit approval. Subject to lender requirements.
          </p>
        </div>
      </section>

      {/* What you can finance */}
      <section className="bg-sky-50 py-20 sm:py-24">
        <div className="container-tight">
          <SectionLabel className="mb-4">What You Can Finance</SectionLabel>
          <h2 className="max-w-3xl text-balance">Finance Any Water Heater Service</h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Tank water heater installation",
              "Tankless water heater installation",
              "Tank-to-tankless conversion",
              "Water heater replacement",
              "Major repair work",
              "Annual maintenance plans",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cta-500" />
                <span className="text-sm font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      <FAQSection faqs={FINANCING_FAQS} title="Financing FAQs" />

      <FinalCTA
        headline="Ready to apply?"
        subheadline="60 seconds, no credit impact, instant decision. Or call us — we'll help you over the phone."
      />
    </>
  );
}
