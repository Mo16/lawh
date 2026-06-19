import type { Metadata } from "next";
import { HubPageTemplate } from "@/components/templates/hub-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { SITE } from "@/data/site";

const service = SERVICE_BY_SLUG["water-heater-services"];

export const metadata: Metadata = {
  title: "Water Heater Services Los Angeles — Install, Repair & Replace | LA Water Heaters",
  description:
    "Same-day water heater services in Los Angeles. Install, repair, replace, and maintain tank water heaters. All major brands. 4.9★ from 819+ reviews. Call (818) 555-0173 for free estimate.",
  alternates: { canonical: `${SITE.url}/water-heater-services` },
  keywords: [
    "water heater services los angeles",
    "water heater repair los angeles",
    "water heater installation los angeles",
    "water heater replacement los angeles",
    "water heater maintenance los angeles",
    "tank water heater los angeles",
    "emergency water heater los angeles",
    "same day water heater service la",
    "licensed water heater plumber los angeles",
  ],
  openGraph: {
    title: "Water Heater Services Los Angeles — Install, Repair & Replace",
    description:
      "Same-day water heater services across LA. Install, repair, replace, maintain. All major brands. 4.9★ from 819+ reviews. Call (818) 555-0173.",
    url: `${SITE.url}/water-heater-services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Services Los Angeles — Install, Repair & Replace",
    description: "Same-day water heater services across LA. 4.9★ from 819+ reviews.",
  },
};

export default function WaterHeaterServicesHubPage() {
  return <HubPageTemplate category="tank" service={service} />;
}
