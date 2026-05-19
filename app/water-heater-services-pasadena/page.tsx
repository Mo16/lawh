import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-pasadena"];

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

export default function PasadenaLocationPage() {
  return <LocationPageTemplate location={location} />;
}
