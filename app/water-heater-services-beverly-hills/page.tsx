import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { getLocation } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Services in Beverly Hills, CA",
  description: "Premium water heater services in Beverly Hills. White-glove installation, smart-home integration. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-beverly-hills" },
  openGraph: {
    title: "Water Heater Services in Beverly Hills, CA",
    description: "Premium water heater services in Beverly Hills. White-glove installation, smart-home integration. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-beverly-hills",
    type: "website",
  },
};

export default async function BeverlyHillsLocationPage() {
  const location = await getLocation("water-heater-services-beverly-hills");
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
