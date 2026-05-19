import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["tankless-water-heater-maintenance"];

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

export default function TanklessWaterHeaterMaintenancePage() {
  return <ServicePageTemplate service={service} />;
}
