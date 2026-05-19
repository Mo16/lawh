import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { BRAND_BY_SLUG } from "@/data/brands";

const brand = BRAND_BY_SLUG["ao-smith-water-heater"];

export const metadata: Metadata = {
  title: "A.O. Smith Water Heater Installation & Repair in LA",
  description: "A.O. Smith water heater installation and repair in Los Angeles. Authorized installer. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/ao-smith-water-heater" },
  openGraph: {
    title: "A.O. Smith Water Heater Installation & Repair in LA",
    description: "A.O. Smith water heater installation and repair in Los Angeles. Authorized installer. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/ao-smith-water-heater",
    type: "website",
  },
};

export default function AOSmithPage() {
  return <BrandPageTemplate brand={brand} />;
}
