import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { getLocation } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Services in Glendale, CA",
  description: "Water heater services in Glendale. Hillside specialists, multi-family experts. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-glendale" },
  openGraph: {
    title: "Water Heater Services in Glendale, CA",
    description: "Water heater services in Glendale. Hillside specialists, multi-family experts. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-glendale",
    type: "website",
  },
};

export default async function GlendaleLocationPage() {
  const location = await getLocation("water-heater-services-glendale");
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
