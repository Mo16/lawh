import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-burbank"];

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

export default function BurbankLocationPage() {
  return <LocationPageTemplate location={location} />;
}
