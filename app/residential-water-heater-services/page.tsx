import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function ResidentialWaterHeaterServicesPage() {
  const service = await getService("residential-water-heater-services");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
