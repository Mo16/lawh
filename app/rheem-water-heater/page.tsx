import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { BRAND_BY_SLUG } from "@/data/brands";

const brand = BRAND_BY_SLUG["rheem-water-heater"];

export const metadata: Metadata = {
  title: "Rheem Water Heater Installation & Repair in LA",
  description: "Rheem water heater installation and repair in Los Angeles. Authorized installer. Same-day service. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/rheem-water-heater" },
  openGraph: {
    title: "Rheem Water Heater Installation & Repair in LA",
    description: "Rheem water heater installation and repair in Los Angeles. Authorized installer. Same-day service. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/rheem-water-heater",
    type: "website",
  },
};

export default function RheemPage() {
  return <BrandPageTemplate brand={brand} />;
}
