import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star, Facebook } from "lucide-react";
import { SITE } from "@/data/site";
import { LOCATIONS, ADDITIONAL_AREAS } from "@/data/locations";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* Final CTA banner */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="container-tight relative py-16 text-center sm:py-20">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-300">
              Available 24/7
            </span>
            <h2 className="mt-5 text-balance text-white">
              Need a water heater specialist <span className="text-primary-300">today</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Same-day service across Los Angeles. Free estimates, upfront pricing, no surprises. We answer your call 24/7.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="xl" variant="default">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary-300" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-green-400" /> 30-Min Response</span>
              <span className="flex items-center gap-2">
                <span className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-primary-300 text-primary-300" />)}</span>
                {SITE.rating}/5 ({SITE.reviewCount}+ reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer links grid */}
      <div className="bg-ink-900 text-white/70">
        <div className="container-tight py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Logo variant="light" />
              <p className="mt-5 text-sm leading-relaxed">
                LA's trusted water heater specialists since 2008. Tank, tankless, all major brands. Licensed, insured, and 24/7 emergency ready across Los Angeles County.
              </p>
              <div className="mt-6 space-y-2.5 text-sm">
                <a href={SITE.phoneTel} className="flex items-center gap-3 text-white">
                  <Phone className="h-4 w-4 text-primary-300" />
                  <span className="font-semibold">{SITE.phone}</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-300" />
                  <span>{SITE.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                  <span>{SITE.address.full}</span>
                </div>
              </div>
            </div>

            {/* Tank services */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Water Heaters</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/water-heater-services">All Services</Link></li>
                <li><Link href="/water-heater-installation">Installation</Link></li>
                <li><Link href="/water-heater-repair">Repair</Link></li>
                <li><Link href="/water-heater-replacement">Replacement</Link></li>
                <li><Link href="/water-heater-maintenance">Maintenance</Link></li>
                <li><Link href="/emergency-water-heater-repair">24/7 Emergency</Link></li>
              </ul>
            </div>

            {/* Tankless */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Tankless</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/tankless-water-heater-services">All Tankless</Link></li>
                <li><Link href="/tankless-water-heater-installation">Installation</Link></li>
                <li><Link href="/tankless-water-heater-repair">Repair</Link></li>
                <li><Link href="/tankless-water-heater-replacement">Replacement</Link></li>
                <li><Link href="/tankless-water-heater-maintenance">Annual Descaling</Link></li>
                <li><Link href="/tankless-rebates" className="font-semibold text-cta-400">$1,900 Rebates →</Link></li>
              </ul>
            </div>

            {/* Areas */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h4>
              <ul className="space-y-2.5 text-sm">
                {LOCATIONS.map(l => (
                  <li key={l.slug}><Link href={`/${l.slug}`}>{l.name}</Link></li>
                ))}
                {ADDITIONAL_AREAS.map(area => (
                  <li key={area} className="text-white/55">{area}</li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/financing">Financing</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/service-areas">All Areas</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-tight flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {year} {SITE.name}. All rights reserved. Lic. #{SITE.license}.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
