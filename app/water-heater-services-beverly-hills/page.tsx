import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-beverly-hills"];

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

export default function BeverlyHillsLocationPage() {
  return <LocationPageTemplate location={location} />;
}
