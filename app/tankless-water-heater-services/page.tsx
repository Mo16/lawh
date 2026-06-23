import type { Metadata } from "next";
import { HubPageTemplate } from "@/components/templates/hub-page";
import { getService, getSite } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Tankless Water Heater Services Los Angeles — Install, Repair & Convert | LA Water Heaters",
    description:
      "Tankless water heater services across Los Angeles. Installation, repair, and tank-to-tankless conversion. Up to $1,900 in rebates handled. All major brands. 4.9★ from 819+ reviews. Call (818) 555-0173.",
    alternates: { canonical: `${SITE.url}/tankless-water-heater-services` },
    keywords: [
      "tankless water heater los angeles",
      "tankless water heater installation los angeles",
      "tankless water heater repair los angeles",
      "tankless water heater replacement los angeles",
      "tank to tankless conversion los angeles",
      "navien tankless los angeles",
      "rinnai tankless los angeles",
      "noritz tankless los angeles",
      "tankless water heater rebates los angeles",
      "tankless water heater descaling los angeles",
    ],
    openGraph: {
      title: "Tankless Water Heater Services Los Angeles — Install, Repair & Convert",
      description:
        "Tankless install, repair & conversion across LA. Up to $1,900 in rebates handled. 4.9★ from 819+ reviews. Call (818) 555-0173.",
      url: `${SITE.url}/tankless-water-heater-services`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tankless Water Heater Services Los Angeles",
      description: "Install, repair & convert. Up to $1,900 in rebates. 4.9★ from 819+ reviews.",
    },
  };
}

export default async function TanklessWaterHeaterServicesHubPage() {
  const service = await getService("tankless-water-heater-services");
  if (!service) notFound();
  return <HubPageTemplate category="tankless" service={service} />;
}
