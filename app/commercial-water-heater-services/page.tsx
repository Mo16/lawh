import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Commercial Water Heater Services in Los Angeles",
  description: "Commercial water heater services in LA. Restaurants, hotels, multi-family. Same-day. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/commercial-water-heater-services" },
  openGraph: {
    title: "Commercial Water Heater Services in Los Angeles",
    description: "Commercial water heater services in LA. Restaurants, hotels, multi-family. Same-day. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/commercial-water-heater-services",
    type: "website",
  },
};

export default async function CommercialWaterHeaterServicesPage() {
  const service = await getService("commercial-water-heater-services");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
