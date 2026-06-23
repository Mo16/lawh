import type { Metadata } from "next";
import { HubPageTemplate } from "@/components/templates/hub-page";
import { getService, getPage } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const tankless = await getPage("tankless-services");
  return {
    title: tankless.meta.title,
    description: tankless.meta.description,
    alternates: { canonical: tankless.meta.canonical },
    keywords: tankless.meta.keywords,
    openGraph: {
      title: tankless.meta.ogTitle,
      description: tankless.meta.ogDescription,
      url: tankless.meta.ogUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tankless.meta.twitterTitle,
      description: tankless.meta.twitterDescription,
    },
  };
}

export default async function TanklessWaterHeaterServicesHubPage() {
  const service = await getService("tankless-water-heater-services");
  if (!service) notFound();
  return <HubPageTemplate category="tankless" service={service} />;
}
