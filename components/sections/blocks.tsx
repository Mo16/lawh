import Link from "next/link";
import {
  Phone, Star, Clock, ShieldCheck, CheckCircle2, ArrowRight,
  Award, ThumbsUp, Truck, MapPin, AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSite, getLocations, getAdditionalAreas, getReviews, getSections } from "@/lib/content";
import type { FAQ } from "@/data/faqs";
import { Button } from "@/components/ui/button";
import { Badge, SectionLabel } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/* ========================================================================
   TRUST BAR — Big-number stats row (CoolFix "10 / 1,500+ / 4.9" style)
   ======================================================================== */
export async function TrustBar() {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const tb = sections.trustBar;
  const items = [
    { icon: Star, value: `${SITE.rating}/5`, label: `${SITE.reviewCount}+ reviews` },
    { icon: ShieldCheck, value: tb.items[0].value, label: tb.items[0].label },
    { icon: Clock, value: tb.items[1].value, label: tb.items[1].label },
    { icon: Award, value: tb.items[2].value, label: tb.items[2].label },
    { icon: Truck, value: tb.items[3].value, label: tb.items[3].label },
    { icon: ThumbsUp, value: tb.items[4].value, label: tb.items[4].label },
  ];
  return (
    <section className="border-y border-ink/5 bg-sky-50">
      <div className="container-tight py-8">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {items.map((it, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <it.icon className="mb-1.5 h-5 w-5 text-primary-600" />
              <div className="text-sm font-bold text-ink sm:text-base">{it.value}</div>
              <div className="text-[10px] uppercase tracking-wide text-ink/55 sm:text-xs">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   BIG STATS BAND — Display CoolFix-style headline numbers
   ======================================================================== */
export async function StatsBand() {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const sb = sections.statsBand;
  const stats = [
    { num: `${SITE.years}+`, label: sb.stats[0].label },
    { num: `${SITE.reviewCount}+`, label: sb.stats[1].label },
    { num: `${SITE.rating}`, label: sb.stats[2].label },
  ];
  const [headingBefore, headingAfter] = sb.heading.split(sb.headingHighlight);
  return (
    <section className="bg-sky-50 py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4">{sb.sectionLabel}</SectionLabel>
        <h2 className="max-w-2xl text-balance">
          {headingBefore}<span className="text-primary-600">{sb.headingHighlight}</span>{headingAfter}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="border-t border-ink/15 pt-6">
              <div className="stat-number">{s.num}</div>
              <div className="mt-3 text-sm uppercase tracking-wider text-ink/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   EMERGENCY SECTION — full dedicated 24/7 emergency block on solid red
   ======================================================================== */
export async function EmergencySection() {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const es = sections.emergencySection;
  return (
    <section className="bg-emergency-600 py-20 text-white sm:py-24">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/25">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              {es.badge}
            </div>
            <h2 className="mt-5 text-balance text-white">
              {es.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {es.paragraph}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneTel}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-emergency-700 shadow-2xl ring-1 ring-white/40 transition-transform hover:-translate-y-0.5 hover:bg-emergency-50 sm:text-lg"
              >
                <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/emergency-water-heater-repair"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:text-lg"
              >
                {es.emergencyCtaLabel} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/25 pt-6">
              <div>
                <div className="font-display text-3xl font-black text-white sm:text-4xl">{es.stat1Value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/75">{es.stat1Label}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-white sm:text-4xl">{es.stat2Value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/75">{es.stat2Label}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-white sm:text-4xl">{es.stat3Value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/75">{es.stat3Label}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3">
              {(es.scenarios as { title: string; desc: string }[]).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-emergency-700/10 shadow-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emergency-600 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{item.title}</div>
                    <div className="mt-1 text-xs text-ink/65">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   EMERGENCY STRIP — kept for urgency (red banner)
   ======================================================================== */
export async function EmergencyStrip() {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const estrip = sections.emergencyStrip;
  return (
    <div className="bg-emergency-600 text-white">
      <div className="container-tight flex flex-col items-center justify-center gap-2 py-3 text-center text-sm font-semibold sm:flex-row sm:gap-4">
        <span className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 animate-pulse" />
          {estrip.text}
        </span>
        <a
          href={SITE.phoneTel}
          className="rounded-full bg-white px-5 py-1.5 font-bold text-emergency-700 shadow-md transition-transform hover:scale-105"
        >
          {estrip.ctaLabel} {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

/* ========================================================================
   PROCESS / HOW IT WORKS — CoolFix "01., 02." numbered cards
   ======================================================================== */
interface ProcessProps {
  steps?: { step: string; title: string; desc: string }[];
  title?: string;
  subtitle?: string;
}
export async function Process({
  steps,
  title,
  subtitle,
}: ProcessProps) {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const proc = sections.process;
  const resolvedSteps = steps ?? proc.defaultSteps;
  const resolvedTitle = title ?? proc.defaultTitle;
  const resolvedSubtitle = subtitle ?? proc.defaultSubtitle;
  return (
    <section className="bg-sky-50 py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4">{proc.sectionLabel}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-3xl text-balance lg:col-span-7">{resolvedTitle}</h2>
          <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">{resolvedSubtitle}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(resolvedSteps as { step: string; title: string; desc: string }[]).map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            const featured = i === 0;
            return (
              <div
                key={i}
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1",
                  featured
                    ? "bg-primary-500 text-white shadow-card-hover"
                    : "bg-white text-ink ring-1 ring-ink/5 shadow-card hover:shadow-card-hover"
                )}
              >
                <div>
                  <div className={cn(
                    "font-display text-sm font-bold tracking-[0.18em]",
                    featured ? "text-white/70" : "text-ink/45"
                  )}>
                    {num}.{" "}
                    <span className="uppercase">
                      {s.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                  <div className={cn("mt-12 text-2xl font-bold leading-tight font-display", featured ? "text-white" : "text-ink")}>
                    {s.title}
                  </div>
                  <p className={cn("mt-3 text-sm leading-relaxed", featured ? "text-white/85" : "text-ink/65")}>
                    {s.desc}
                  </p>
                </div>
                <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-current backdrop-blur transition-transform group-hover:translate-x-1">
                  <ArrowRight className={cn("h-4 w-4", featured ? "text-white" : "text-primary-600")} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="call">
            <a href={SITE.phoneTel}><Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}</a>
          </Button>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">{proc.ctaBookText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   PROBLEM / SOLUTION — Two-column comparison, lighter palette
   ======================================================================== */
interface ProblemSolutionProps {
  problems: string[];
  solutions: string[];
  title?: string;
}
export function ProblemSolution({ problems, solutions, title = "Everything Your Water Heater Could Ever Need" }: ProblemSolutionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4">Our Services</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-3xl text-balance lg:col-span-7">{title}</h2>
          <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
            From sudden breakdowns to seasonal checkups — we handle it all. Explore our expert services designed to get your hot water back fast.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card className="bg-flame-50/60 ring-1 ring-flame-100">
            <CardContent className="p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-flame-600 text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-2xl text-flame-700">Common Problems</h3>
              </div>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary-50/70 ring-1 ring-primary-100">
            <CardContent className="p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-2xl text-primary-800">How We Fix It</h3>
              </div>
              <ul className="space-y-3">
                {solutions.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   WHAT'S INCLUDED — feature grid, sky background
   ======================================================================== */
interface WhatsIncludedProps {
  items: { title: string; desc: string }[];
  title?: string;
  subtitle?: string;
}
export function WhatsIncluded({ items, title = "What's Included In Every Service", subtitle }: WhatsIncludedProps) {
  return (
    <section className="bg-sky-50 py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4">Every Service Includes</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-3xl text-balance lg:col-span-7">{title}</h2>
          {subtitle && (
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">{subtitle}</p>
          )}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-7 ring-1 ring-ink/5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   WHY US — dark contrast section (CoolFix testimonials black band)
   ======================================================================== */
export async function WhyUs({ items, title = "Why LA Homeowners Choose Us" }: { items: string[]; title?: string }) {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const wu = sections.whyUs;
  return (
    <section className="bg-ink-900 py-20 text-white sm:py-24">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel className="mb-4 text-primary-300 [&::before]:bg-primary-400">{wu.sectionLabel}</SectionLabel>
            <h2 className="text-white">{title}</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {wu.paragraph} {SITE.years}+ years, {SITE.reviewCount}+ five-star reviews, and a 100% satisfaction guarantee on every job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="call">
                <a href={SITE.phoneTel}><Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}</a>
              </Button>
              <Button asChild size="lg" variant="default">
                <Link href="/contact">{wu.ctaBookText}</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <span className="text-sm font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   REVIEWS — "Look What Our Clients Say" testimonials grid
   ======================================================================== */
export async function ReviewsSection({ limit = 6 }: { limit?: number }) {
  const [SITE, reviews, sections] = await Promise.all([getSite(), getReviews(), getSections()]);
  const rv = sections.reviews;
  const items = reviews.slice(0, limit);
  return (
    <section className="bg-ink-900 py-20 text-white sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4 text-primary-300 [&::before]:bg-primary-400">{rv.sectionLabel}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-3xl text-balance text-white lg:col-span-7">
            {rv.heading}
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5">
            {rv.paragraph}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-3xl bg-white p-7 text-ink shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex">
                  {[1, 2, 3, 4, 5].map(j => (
                    <Star key={j} className="h-4 w-4 fill-primary-500 text-primary-500" />
                  ))}
                </span>
                <span className="text-xs text-ink/50">{r.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink/85">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-ink/55">
                    {r.location} · {r.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/70">
          <span className="flex">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="h-4 w-4 fill-primary-300 text-primary-300" />
            ))}
          </span>
          <span className="font-display text-base font-bold text-white">{SITE.rating}/5</span>
          <span>· {SITE.reviewCount}+ verified reviews</span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   FAQ SECTION
   ======================================================================== */
export async function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const SITE = await getSite();
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-narrow">
        <SectionLabel className="mb-4">FAQ</SectionLabel>
        <h2 className="text-balance">{title}</h2>
        <div className="mt-10 rounded-3xl bg-sky-50 p-2 ring-1 ring-ink/5 sm:p-4">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-3 sm:px-4">
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-ink/60">Have a different question?</p>
          <Button asChild size="lg" className="mt-3" variant="call">
            <a href={SITE.phoneTel}><Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   FINAL CTA — Big sky-blue conversion banner
   ======================================================================== */
interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
}
export async function FinalCTA({
  headline,
  subheadline,
}: FinalCTAProps) {
  const [SITE, sections] = await Promise.all([getSite(), getSections()]);
  const fc = sections.finalCta;
  const resolvedHeadline = headline ?? fc.defaultHeadline;
  const resolvedSubheadline = subheadline ?? fc.defaultSubheadline;
  return (
    <section className="relative overflow-hidden bg-sky-200 py-24 text-ink sm:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
      <div className="container-tight relative text-center">
        <SectionLabel className="mx-auto mb-5 justify-center">{fc.sectionLabel}</SectionLabel>
        <h2 className="mx-auto max-w-3xl text-balance">
          {resolvedHeadline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {resolvedSubheadline}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="xl" variant="call">
            <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
          </Button>
          <Button asChild size="xl" variant="default">
            <Link href="/contact">{fc.ctaBookText}</Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink/55 sm:text-sm">
          <span>{fc.badge1}</span>
          <span>{fc.badge2}</span>
          <span>{fc.badge3}</span>
          <span>{fc.badge4}</span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   AREAS WE SERVE — Compact location grid
   ======================================================================== */
export async function ServiceAreasGrid() {
  const [locations, additionalAreas, sections] = await Promise.all([getLocations(), getAdditionalAreas(), getSections()]);
  const sa = sections.serviceAreas;
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4">{sa.sectionLabel}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-3xl text-balance lg:col-span-7">{sa.heading}</h2>
          <p className="text-base leading-relaxed text-ink/70 sm:text-lg lg:col-span-5">
            {sa.paragraph}
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map(l => (
            <Link
              key={l.slug}
              href={`/${l.slug}`}
              className="group flex items-center gap-3 rounded-2xl bg-sky-50 p-5 ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 ring-1 ring-ink/5 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-ink">{l.name}</div>
                <div className="truncate text-xs text-ink/55">ZIP {l.zip[0]}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
            </Link>
          ))}
        </div>

        {/* Additional neighborhoods we serve (no dedicated pages) */}
        <div className="mt-10 rounded-3xl bg-sky-50 p-6 ring-1 ring-ink/5 sm:p-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-ink/55">
            {sa.alsoServingLabel}
          </div>
          <ul className="flex flex-wrap gap-2">
            {additionalAreas.map(area => (
              <li
                key={area}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink/75 ring-1 ring-ink/5"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   SIGNS YOU NEED — Warning signs grid (urgency)
   ======================================================================== */
export function SignsSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-tight">
        <SectionLabel className="mb-4 text-flame-700 [&::before]:bg-flame-600">Warning Signs</SectionLabel>
        <h2 className="max-w-3xl text-balance">{title}</h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl bg-flame-50/60 p-5 ring-1 ring-flame-100">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-flame-600" />
              <span className="text-sm font-medium text-ink">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Re-export so any callers still importing Badge work */
export { Badge };
