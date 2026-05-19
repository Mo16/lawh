import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["emergency-water-heater-repair"];

export const metadata: Metadata = {
  title: "Emergency Water Heater Repair — 24/7 Service in LA",
  description: "24/7 emergency water heater repair in Los Angeles. 30-minute response. Burst tanks, leaks, no hot water. Call (818) 555-0173 now.",
  alternates: { canonical: "https://lawaterheaters.com/emergency-water-heater-repair" },
  openGraph: {
    title: "Emergency Water Heater Repair — 24/7 Service in LA",
    description: "24/7 emergency water heater repair in Los Angeles. 30-minute response. Burst tanks, leaks, no hot water. Call (818) 555-0173 now.",
    url: "https://lawaterheaters.com/emergency-water-heater-repair",
    type: "website",
  },
};

export default function EmergencyWaterHeaterRepairPage() {
  return <ServicePageTemplate service={service} showEmergencyStrip />;
}
