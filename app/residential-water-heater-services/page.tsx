import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService, getPage } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const residential = await getPage("residential");
  return {
    title: residential.meta.title,
    description: residential.meta.description,
    alternates: { canonical: residential.meta.canonical },
    openGraph: {
      title: residential.meta.ogTitle,
      description: residential.meta.ogDescription,
      url: residential.meta.ogUrl,
      type: "website",
    },
  };
}

export default async function ResidentialWaterHeaterServicesPage() {
  const service = await getService("residential-water-heater-services");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
