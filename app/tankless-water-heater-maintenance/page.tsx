import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tankless Water Heater Maintenance & Descaling in LA",
  description: "Tankless water heater maintenance in LA. Annual descaling, filter cleaning. Required for warranty. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/tankless-water-heater-maintenance" },
  openGraph: {
    title: "Tankless Water Heater Maintenance & Descaling in LA",
    description: "Tankless water heater maintenance in LA. Annual descaling, filter cleaning. Required for warranty. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/tankless-water-heater-maintenance",
    type: "website",
  },
};

export default async function TanklessWaterHeaterMaintenancePage() {
  const service = await getService("tankless-water-heater-maintenance");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
