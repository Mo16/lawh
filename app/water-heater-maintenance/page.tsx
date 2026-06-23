import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function WaterHeaterMaintenancePage() {
  const service = await getService("water-heater-maintenance");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
