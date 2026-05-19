import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["water-heater-maintenance"];

export const metadata: Metadata = {
  title: "Water Heater Maintenance & Tune-Up in Los Angeles",
  description: "Water heater maintenance in Los Angeles. Annual flush, anode rod check, full inspection. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-maintenance" },
  openGraph: {
    title: "Water Heater Maintenance & Tune-Up in Los Angeles",
    description: "Water heater maintenance in Los Angeles. Annual flush, anode rod check, full inspection. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-maintenance",
    type: "website",
  },
};

export default function WaterHeaterMaintenancePage() {
  return <ServicePageTemplate service={service} />;
}
