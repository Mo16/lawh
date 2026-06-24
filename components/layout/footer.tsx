import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star, Facebook } from "lucide-react";
import { getSite, getLocations, getLayout } from "@/lib/content";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export async function Footer() {
  const [SITE, locations, layout] = await Promise.all([getSite(), getLocations(), getLayout()]);
  const year = new Date().getFullYear();
  const footer = layout.footer;
  return (
    <footer>
      {/* Final CTA banner */}


      {/* Footer links grid */}
      <div className="bg-ink-900 text-white/70">
        <div className="container-tight py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Logo variant="light" />
              <p className="mt-5 text-sm leading-relaxed">
                {footer.blurb}
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
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">{footer.columns[0].heading}</h4>
              <ul className="space-y-2.5 text-sm">
                {footer.columns[0].links.map((link: { label: string; href: string; highlight?: boolean }) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Tankless */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">{footer.columns[1].heading}</h4>
              <ul className="space-y-2.5 text-sm">
                {footer.columns[1].links.map((link: { label: string; href: string; highlight?: boolean }) => (
                  <li key={link.href}>
                    <Link href={link.href} className={link.highlight ? "font-semibold text-cta-400" : undefined}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h4>
              <ul className="space-y-2.5 text-sm">
                {locations.map(l => (
                  <li key={l.slug}><Link href={`/${l.slug}`}>{l.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">{footer.columns[2].heading}</h4>
              <ul className="space-y-2.5 text-sm">
                {footer.columns[2].links.map((link: { label: string; href: string; highlight?: boolean }) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-tight flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {year} {SITE.name}. {footer.legal}
            </div>
            <div className="flex gap-4">
              {footer.legalLinks.map((link: { label: string; href: string }) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
