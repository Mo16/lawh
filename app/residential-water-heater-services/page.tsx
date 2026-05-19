import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["residential-water-heater-services"];

export const metadata: Metadata = {
  title: "Residential Water Heater Services in Los Angeles",
  description: "Residential water heater services in LA. Tank, tankless, all brands. Free estimate. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/residential-water-heater-services" },
  openGraph: {
    title: "Residential Water Heater Services in Los Angeles",
    description: "Residential water heater services in LA. Tank, tankless, all brands. Free estimate. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/residential-water-heater-services",
    type: "website",
  },
};

export default function ResidentialWaterHeaterServicesPage() {
  return <ServicePageTemplate service={service} />;
}
