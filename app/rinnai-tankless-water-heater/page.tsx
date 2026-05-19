import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { BRAND_BY_SLUG } from "@/data/brands";

const brand = BRAND_BY_SLUG["rinnai-tankless-water-heater"];

export const metadata: Metadata = {
  title: "Rinnai Tankless Water Heater Services in LA",
  description: "Rinnai tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/rinnai-tankless-water-heater" },
  openGraph: {
    title: "Rinnai Tankless Water Heater Services in LA",
    description: "Rinnai tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/rinnai-tankless-water-heater",
    type: "website",
  },
};

export default function RinnaiTanklessPage() {
  return <BrandPageTemplate brand={brand} />;
}
