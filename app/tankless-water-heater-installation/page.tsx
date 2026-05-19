import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["tankless-water-heater-installation"];

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

export default function TanklessWaterHeaterInstallationPage() {
  return <ServicePageTemplate service={service} />;
}
