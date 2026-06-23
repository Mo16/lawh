import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { getLocation } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Water Heater Services in Burbank, CA",
  description: "Water heater services in Burbank. Same-day install, family home specialists. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-burbank" },
  openGraph: {
    title: "Water Heater Services in Burbank, CA",
    description: "Water heater services in Burbank. Same-day install, family home specialists. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-burbank",
    type: "website",
  },
};

export default async function BurbankLocationPage() {
  const location = await getLocation("water-heater-services-burbank");
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
