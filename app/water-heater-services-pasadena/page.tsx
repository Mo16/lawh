import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { getLocation } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Services in Pasadena, CA",
  description: "Water heater services in Pasadena. Craftsman home specialists, hard water descaling. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-pasadena" },
  openGraph: {
    title: "Water Heater Services in Pasadena, CA",
    description: "Water heater services in Pasadena. Craftsman home specialists, hard water descaling. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-pasadena",
    type: "website",
  },
};

export default async function PasadenaLocationPage() {
  const location = await getLocation("water-heater-services-pasadena");
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
