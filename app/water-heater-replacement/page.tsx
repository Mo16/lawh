import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["water-heater-replacement"];

export const metadata: Metadata = {
  title: "Water Heater Replacement in Los Angeles",
  description: "Water heater replacement in Los Angeles. Same-day swap. Energy-efficient new units. Old unit removed. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-replacement" },
  openGraph: {
    title: "Water Heater Replacement in Los Angeles",
    description: "Water heater replacement in Los Angeles. Same-day swap. Energy-efficient new units. Old unit removed. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-replacement",
    type: "website",
  },
};

export default function WaterHeaterReplacementPage() {
  return <ServicePageTemplate service={service} />;
}
