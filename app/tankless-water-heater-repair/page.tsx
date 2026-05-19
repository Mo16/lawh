import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["tankless-water-heater-repair"];

export const metadata: Metadata = {
  title: "Tankless Water Heater Repair in Los Angeles",
  description: "Tankless water heater repair in LA. Same-day repair for Navien, Rinnai, Noritz, Takagi. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/tankless-water-heater-repair" },
  openGraph: {
    title: "Tankless Water Heater Repair in Los Angeles",
    description: "Tankless water heater repair in LA. Same-day repair for Navien, Rinnai, Noritz, Takagi. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/tankless-water-heater-repair",
    type: "website",
  },
};

export default function TanklessWaterHeaterRepairPage() {
  return <ServicePageTemplate service={service} />;
}
