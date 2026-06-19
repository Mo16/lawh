"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

interface NavChild { label: string; href: string; desc?: string; }
interface NavItem { label: string; href: string; children?: NavChild[]; }

const NAV: NavItem[] = [
  {
    label: "Water Heaters",
    href: "/water-heater-services",
    children: [
      { label: "Installation", href: "/water-heater-installation", desc: "Same-day new install" },
      { label: "Repair", href: "/water-heater-repair", desc: "Diagnosed and fixed today" },
      { label: "Replacement", href: "/water-heater-replacement", desc: "Old out, new in, same day" },
      { label: "Maintenance", href: "/water-heater-maintenance", desc: "Annual flush and inspection" },
      { label: "24/7 Emergency Repair", href: "/emergency-water-heater-repair", desc: "30-min response, 24/7" },
    ],
  },
  {
    label: "Tankless Water Heaters",
    href: "/tankless-water-heater-services",
    children: [
      { label: "Tankless Installation", href: "/tankless-water-heater-installation", desc: "Up to $1,900 in rebates" },
      { label: "Tankless Rebates", href: "/tankless-rebates", desc: "Save up to $1,900 — paperwork handled" },
      { label: "Tankless Repair", href: "/tankless-water-heater-repair", desc: "All brands, all error codes" },
      { label: "Tankless Replacement", href: "/tankless-water-heater-replacement", desc: "Same-day swap" },
      { label: "Annual Descaling", href: "/tankless-water-heater-maintenance", desc: "Required for warranty" },
    ],
  },
  {
    label: "Areas",
    href: "/service-areas",
    children: [
      { label: "Hollywood", href: "/water-heater-services-hollywood" },
      { label: "Beverly Hills", href: "/water-heater-services-beverly-hills" },
      { label: "Santa Monica", href: "/water-heater-services-santa-monica" },
      { label: "Pasadena", href: "/water-heater-services-pasadena" },
      { label: "Burbank", href: "/water-heater-services-burbank" },
      { label: "Glendale", href: "/water-heater-services-glendale" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* TOP PROMO STRIP — vibrant sky-blue "savings" bar */}
      <div className="relative overflow-hidden bg-primary-600 text-white">
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-xs font-semibold sm:text-sm">
          <Link href="/tankless-rebates" className="inline-flex items-center gap-2 hover:text-white">
            <span className="text-cta-300">★</span>
            Save up to <span className="font-bold text-cta-300 underline underline-offset-2 decoration-cta-300/60">$1,900</span> in tankless rebates
          </Link>
          <span className="hidden text-white/50 sm:inline">|</span>
          <Link href="/financing" className="hidden font-bold underline underline-offset-2 hover:text-cta-300 sm:inline">Easy Monthly Payments</Link>
        </div>
      </div>

      {/* TRUST BAR — dark navy info bar (desktop only) */}
      <div className="hidden border-t border-white/5 bg-ink-900 text-white/70 md:block">
        <div className="container-tight flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-primary-300" /> Serving All of Los Angeles</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-green-400" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-primary-300" /> Licensed</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-cta-400 text-cta-400" />)}
              </span>
              <span className="ml-1 font-semibold text-white">{SITE.rating}</span>
              <span className="text-white/60">/5 ({SITE.reviewCount}+ reviews)</span>
            </span>
            <a href={SITE.phoneTel} className="flex items-center gap-1.5 font-semibold text-white">
              <Phone className="h-3.5 w-3.5 text-cta-400" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all duration-200",
          scrolled
            ? "border-border/60 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        )}
      >
        <div className="container-tight flex h-20 items-center justify-between gap-4 lg:h-24">
          <Link href="/" aria-label="LA Water Heaters home" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setHover(item.label)}
                onMouseLeave={() => setHover(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-sky-100 hover:text-primary-700"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>

                {item.children && hover === item.label && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    <div className="w-72 overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-xl ring-1 ring-black/5">
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-b border-ink/5 px-4 py-3 transition-colors last:border-b-0 hover:bg-sky-50"
                        >
                          <div className="text-sm font-semibold text-ink">{child.label}</div>
                          {child.desc && (
                            <div className="mt-0.5 text-xs text-ink/55">{child.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center gap-2">
            {/* Desktop call button — orange (call CTA) */}
            <Button asChild size="sm" variant="call" className="hidden md:inline-flex">
              <a href={SITE.phoneTel}>
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">{SITE.phoneDisplay}</span>
                <span className="lg:hidden">Call Now</span>
              </a>
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:bg-sky-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU — animated slide-in drawer */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={cn(
          "fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Slide-in drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:bg-sky-50"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Mobile CTAs */}
          <div className="space-y-2.5">
            <Button asChild size="lg" variant="call" className="w-full">
              <a href={SITE.phoneTel}><Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
            </Button>
            <Button asChild size="lg" variant="default" className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>Get a Free Quote</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              ⚡ 30-Min Response
            </span>
            <span className="rounded-full bg-cta-50 px-3 py-1 text-xs font-semibold text-cta-700">
              ★ {SITE.rating}/5 · {SITE.reviewCount}+ reviews
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              🛡️ Licensed
            </span>
          </div>

          {/* Nav links */}
          <nav className="mt-5 divide-y divide-ink/5">
            {NAV.map(item => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block flex-1 py-3.5 text-base font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex h-10 w-10 items-center justify-center text-ink/60"
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={mobileExpanded === item.label}
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          mobileExpanded === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      mobileExpanded === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="mb-3 space-y-1 border-l-2 border-primary-200 pl-4">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm font-medium text-ink/65 hover:text-primary-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

/** Sticky bottom phone CTA for mobile — appears only after user scrolls past hero CTAs */
export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling roughly past the hero (CTAs sit within first 600–800px)
      setShow(window.scrollY > 720);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-2.5 px-4 py-3">
        <Button asChild size="lg" variant="call" className="flex-1">
          <a href={SITE.phoneTel}>
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button asChild size="lg" variant="default" className="flex-1">
          <Link href="/contact">Free Quote</Link>
        </Button>
      </div>
    </div>
  );
}
