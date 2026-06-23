import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function WaterHeaterReplacementPage() {
  const service = await getService("water-heater-replacement");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
