import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { getLocation } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Services in Santa Monica, CA",
  description: "Water heater services in Santa Monica. Coastal corrosion-resistant installs. Same-day. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-santa-monica" },
  openGraph: {
    title: "Water Heater Services in Santa Monica, CA",
    description: "Water heater services in Santa Monica. Coastal corrosion-resistant installs. Same-day. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-santa-monica",
    type: "website",
  },
};

export default async function SantaMonicaLocationPage() {
  const location = await getLocation("water-heater-services-santa-monica");
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
