import type { ServiceData } from "@/data/services";
import { FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { Hero } from "@/components/sections/hero";
import {
  TrustBar, ProblemSolution, WhatsIncluded, Process, WhyUs,
  ReviewsSection, FAQSection, FinalCTA, ServiceAreasGrid,
  SignsSection, EmergencyStrip,
} from "@/components/sections/blocks";

interface ServicePageProps {
  service: ServiceData;
  showEmergencyStrip?: boolean;
}

export function ServicePageTemplate({ service, showEmergencyStrip }: ServicePageProps) {
  const faqs = FAQS[service.faqKey] || FAQS.general;

  // JSON-LD Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    serviceType: service.badge,
    provider: {
      "@type": "Plumber",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.rating,
        reviewCount: SITE.reviewCount,
      },
    },
    areaServed: {
      "@type": "City",
      name: "Los Angeles",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/${service.slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  // FAQ Page schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        badge={service.badge}
        headline={service.hero.headline}
        subheadline={service.hero.subheadline}
        image={service.hero.image}
        imageAlt={service.h1}
      />

      <TrustBar />

      {showEmergencyStrip && <EmergencyStrip />}

      <ProblemSolution
        problems={service.problemSolution.problems}
        solutions={service.problemSolution.solutions}
      />

      <WhatsIncluded items={service.whatsIncluded} />

      <Process steps={service.process} />

      {service.signs && (
        <SignsSection title={service.signs.title} items={service.signs.items} />
      )}

      <WhyUs items={service.whyUs} />

      <ReviewsSection limit={6} />

      <ServiceAreasGrid />

      <FAQSection faqs={faqs} />

      <FinalCTA />
    </>
  );
}
