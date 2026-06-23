import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService, getPage } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const commercial = await getPage("commercial");
  return {
    title: commercial.meta.title,
    description: commercial.meta.description,
    alternates: { canonical: commercial.meta.canonical },
    openGraph: {
      title: commercial.meta.ogTitle,
      description: commercial.meta.ogDescription,
      url: commercial.meta.ogUrl,
      type: "website",
    },
  };
}

export default async function CommercialWaterHeaterServicesPage() {
  const service = await getService("commercial-water-heater-services");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
