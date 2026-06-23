import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function WaterHeaterInstallationPage() {
  const service = await getService("water-heater-installation");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
