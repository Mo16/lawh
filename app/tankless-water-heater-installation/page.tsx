import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tankless Water Heater Installation in Los Angeles",
  description: "Tankless water heater installation in LA. Same-day. All major brands. Up to $1,900 in rebates. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/tankless-water-heater-installation" },
  openGraph: {
    title: "Tankless Water Heater Installation in Los Angeles",
    description: "Tankless water heater installation in LA. Same-day. All major brands. Up to $1,900 in rebates. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/tankless-water-heater-installation",
    type: "website",
  },
};

export default async function TanklessWaterHeaterInstallationPage() {
  const service = await getService("tankless-water-heater-installation");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
