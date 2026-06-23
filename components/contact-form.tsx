"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import type { SiteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm({ site, content }: { site: SiteData; content: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Compact hero */}
      <section className="relative overflow-hidden bg-ink-900 py-14 text-white sm:py-20">
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="container-tight relative text-center">
          <Badge variant="dark" className="mb-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-300" /> {content.hero.badge}
          </Badge>
          <h1 className="text-white">{content.hero.headlinePrefix} <span className="text-primary-300">{content.hero.headlineHighlight}</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            {content.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-tight">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Contact info */}
            <div className="space-y-4 lg:col-span-5">
              <Card className="bg-primary-700 text-white">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-white">{content.callCard.heading}</h3>
                  <p className="mt-2 text-sm text-white/80">{content.callCard.subtext}</p>
                  <a
                    href={site.phoneTel}
                    className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">{content.callCard.callLabel}</div>
                      <div className="font-display text-2xl font-black">{site.phoneDisplay}</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.infoLabels.emailLabel}</div>
                      <a href={`mailto:${site.email}`} className="text-base font-semibold hover:text-primary-700">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.infoLabels.officeLabel}</div>
                      <div className="text-base font-semibold">{site.address.full}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-flame-50 text-flame-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{content.infoLabels.hoursLabel}</div>
                      <div className="text-base font-semibold">{site.hours}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{content.infoLabels.hoursNote}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3>{content.formCard.heading}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {content.formCard.introPart1} {site.phone}
                  </p>

                  {submitted ? (
                    <div className="mt-6 rounded-xl bg-green-50 p-6 text-center">
                      <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
                      <h4 className="text-green-900">{content.successMessage.heading}</h4>
                      <p className="mt-2 text-sm text-green-800">{content.successMessage.subtext} {site.phoneDisplay}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldNameLabel}</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldPhoneLabel}</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldEmailLabel}</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldServiceLabel}</label>
                        <select
                          required
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        >
                          <option value="">{content.formCard.fieldServicePlaceholder}</option>
                          {(content.formCard.serviceOptions as Array<{ value: string; label: string }>).map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldAddressLabel}</label>
                        <input
                          type="text"
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          placeholder={content.formCard.fieldAddressPlaceholder}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold">{content.formCard.fieldMessageLabel}</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder={content.formCard.fieldMessagePlaceholder}
                          className="w-full resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="h-4 w-4" /> {content.formCard.submitButtonText}
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        {content.formCard.disclaimerPart1} {site.name}. {content.formCard.disclaimerPart2}
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
