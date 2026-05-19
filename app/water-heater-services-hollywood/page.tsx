import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-hollywood"];

export const metadata: Metadata = {
  title: "Water Heater Services in Hollywood, CA",
  description: "Water heater services in Hollywood, CA. Same-day install, repair, replacement. 30-min response. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/water-heater-services-hollywood" },
  openGraph: {
    title: "Water Heater Services in Hollywood, CA",
    description: "Water heater services in Hollywood, CA. Same-day install, repair, replacement. 30-min response. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/water-heater-services-hollywood",
    type: "website",
  },
};

export default function HollywoodLocationPage() {
  return <LocationPageTemplate location={location} />;
}
