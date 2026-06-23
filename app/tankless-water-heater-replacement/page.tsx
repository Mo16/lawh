import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tankless Water Heater Replacement in Los Angeles",
  description: "Tankless water heater replacement in LA. Same-day swap. New unit installed, old one removed. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/tankless-water-heater-replacement" },
  openGraph: {
    title: "Tankless Water Heater Replacement in Los Angeles",
    description: "Tankless water heater replacement in LA. Same-day swap. New unit installed, old one removed. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/tankless-water-heater-replacement",
    type: "website",
  },
};

export default async function TanklessWaterHeaterReplacementPage() {
  const service = await getService("tankless-water-heater-replacement");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
