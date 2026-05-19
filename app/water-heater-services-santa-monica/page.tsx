import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/location-page";
import { LOCATION_BY_SLUG } from "@/data/locations";

const location = LOCATION_BY_SLUG["water-heater-services-santa-monica"];

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

export default function SantaMonicaLocationPage() {
  return <LocationPageTemplate location={location} />;
}
