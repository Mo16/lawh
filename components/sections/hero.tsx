import Link from "next/link";
import { Phone, Star, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/badge";

interface HeroProps {
  badge?: string;
  headline: string;
  highlight?: string;
  subheadline: string;
  image: string;
  imageAlt?: string;
  bullets?: string[];
  variant?: "primary" | "compact";
}

export function Hero({
  badge,
  headline,
  highlight,
  subheadline,
  image,
  imageAlt = "Water heater service",
  bullets = ["Same-day service", "Licensed & insured", "30-min response", "Free estimates"],
  variant = "primary",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-sky-200 text-ink",
        variant === "compact" ? "pb-16 pt-8 sm:pb-20 sm:pt-12" : "pb-24 pt-10 sm:pb-28 sm:pt-14 lg:pb-36"
      )}
    >
      {/* soft cool ambient blobs (solid, blurred — not gradients) */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-primary-200/50 blur-3xl" />

      <div className="container-tight relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <SectionLabel className="mb-5">{badge ?? "LA Water Heaters"}</SectionLabel>

            <h1 className="text-balance">
              {headline}
              {highlight && (
                <>
                  {" "}
                  <span className="text-primary-600">{highlight}</span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {subheadline}
            </p>

            {/* Bullets */}
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 sm:max-w-md">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-500" />
                  <span className="truncate">{b}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="call" className="w-full sm:w-auto">
                <a href={SITE.phoneTel}>
                  <Phone className="h-5 w-5" />
                  Call {SITE.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="xl" variant="default" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/60 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <span className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
                  ))}
                </span>
                <span className="font-bold text-ink">{SITE.rating}</span>
                <span>({SITE.reviewCount}+ reviews)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-600" /> Licensed
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-green-600" /> 24/7 Available
              </span>
            </div>
          </div>

          {/* Right: Image card */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-ink/5">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating rating card */}
            <div className="absolute -left-3 -top-3 hidden rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-ink/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-white">
                  <Star className="h-6 w-6 fill-white" />
                </div>
                <div>
                  <div className="font-display text-2xl font-black leading-none text-ink">
                    {SITE.rating}
                  </div>
                  <div className="text-xs text-ink/60">{SITE.reviewCount}+ reviews</div>
                </div>
              </div>
            </div>

            {/* Floating same-day card */}
            <div className="absolute -bottom-3 -right-3 hidden rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-ink/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Same-Day</div>
                  <div className="text-xs text-ink/60">Service available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
