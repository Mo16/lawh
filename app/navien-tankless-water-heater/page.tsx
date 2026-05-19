import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { BRAND_BY_SLUG } from "@/data/brands";

const brand = BRAND_BY_SLUG["navien-tankless-water-heater"];

export const metadata: Metadata = {
  title: "Navien Tankless Water Heater Services in LA",
  description: "Navien tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/navien-tankless-water-heater" },
  openGraph: {
    title: "Navien Tankless Water Heater Services in LA",
    description: "Navien tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/navien-tankless-water-heater",
    type: "website",
  },
};

export default function NavienTanklessPage() {
  return <BrandPageTemplate brand={brand} />;
}
