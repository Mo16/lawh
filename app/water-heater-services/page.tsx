import type { Metadata } from "next";
import { HubPageTemplate } from "@/components/templates/hub-page";
import { getService, getPage } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("water-heater-services");
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: page.meta.canonical },
    keywords: page.meta.keywords,
    openGraph: {
      title: page.meta.ogTitle,
      description: page.meta.ogDescription,
      url: page.meta.ogUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.twitterTitle,
      description: page.meta.twitterDescription,
    },
  };
}

export default async function WaterHeaterServicesHubPage() {
  const service = await getService("water-heater-services");
  if (!service) notFound();
  return <HubPageTemplate category="tank" service={service} />;
}
