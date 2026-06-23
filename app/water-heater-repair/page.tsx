import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Repair in Los Angeles",
  description: "Water heater repair in Los Angeles. Same-day diagnosis and repair. All brands, all issues. Licensed plumbers. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-repair" },
  openGraph: {
    title: "Water Heater Repair in Los Angeles",
    description: "Water heater repair in Los Angeles. Same-day diagnosis and repair. All brands, all issues. Licensed plumbers. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-repair",
    type: "website",
  },
};

export default async function WaterHeaterRepairPage() {
  const service = await getService("water-heater-repair");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
