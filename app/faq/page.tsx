import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { getSite, getFaqs, getPage } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FinalCTA } from "@/components/sections/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Water Heater FAQ — Common Questions Answered",
    description: `Common questions about water heaters, tankless installs, repairs, financing, and emergency service. ${SITE.name} — Los Angeles.`,
    alternates: { canonical: `${SITE.url}/faq` },
  };
}

const SECTIONS = [
  { title: "General Questions", key: "general" as const },
  { title: "Water Heaters", key: "tank" as const },
  { title: "Tankless Water Heaters", key: "tankless" as const },
  { title: "Emergency Service", key: "emergency" as const },
  { title: "Maintenance", key: "maintenance" as const },
];

export default async function FaqPage() {
  const [SITE, FAQS, faq] = await Promise.all([getSite(), getFaqs(), getPage("faq")]);

  // FAQ schema for SEO
  const allFaqs = SECTIONS.flatMap(s => FAQS[s.key]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        badge={faq.hero.badge}
        headline={faq.hero.headline}
        highlight={faq.hero.highlight}
        subheadline={faq.hero.subheadline}
        image={faq.hero.image}
        imageAlt={faq.hero.imageAlt}
        bullets={[`${allFaqs.length}+ answered questions`, "All categories", "Updated regularly", "Real expert answers"]}
      />

      <TrustBar />

      {/* FAQ sections */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <div className="space-y-10 sm:space-y-14">
            {SECTIONS.map((section) => (
              <div key={section.key}>
                <Badge variant="default" className="mb-3">{section.title}</Badge>
                <h2 className="mb-6 text-2xl sm:text-3xl">{section.title}</h2>
                <div className="rounded-2xl border border-border bg-card p-2 shadow-card sm:p-4">
                  <Accordion type="single" collapsible>
                    {FAQS[section.key].map((f, i) => (
                      <AccordionItem key={i} value={`${section.key}-${i}`} className="px-3 sm:px-4">
                        <AccordionTrigger>{f.q}</AccordionTrigger>
                        <AccordionContent>{f.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-primary-50 p-8 text-center">
            <h2 className="text-2xl">{faq.stillHaveQuestions.heading}</h2>
            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
              {faq.stillHaveQuestions.paragraph}
            </p>
            <Button asChild size="xl" variant="call" className="mt-6">
              <a href={SITE.phoneTel}>
                <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
