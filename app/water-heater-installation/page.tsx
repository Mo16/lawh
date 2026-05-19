import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["water-heater-installation"];

export const metadata: Metadata = {
  title: "Water Heater Installation in Los Angeles",
  description: "Water heater installation in Los Angeles. Same-day. All brands, all sizes. Free estimate. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-installation" },
  openGraph: {
    title: "Water Heater Installation in Los Angeles",
    description: "Water heater installation in Los Angeles. Same-day. All brands, all sizes. Free estimate. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-installation",
    type: "website",
  },
};

export default function WaterHeaterInstallationPage() {
  return <ServicePageTemplate service={service} />;
}
