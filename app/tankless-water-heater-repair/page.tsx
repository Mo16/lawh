import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { getService } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function TanklessWaterHeaterRepairPage() {
  const service = await getService("tankless-water-heater-repair");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
