import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["water-heater-repair"];

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

export default function WaterHeaterRepairPage() {
  return <ServicePageTemplate service={service} />;
}
