import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-glendale"];

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

export default function GlendaleLocationPage() {
  return <LocationPageTemplate location={location} />;
}
