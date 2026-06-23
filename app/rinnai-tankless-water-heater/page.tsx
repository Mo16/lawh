import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { getBrand } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function RinnaiTanklessPage() {
  const brand = await getBrand("rinnai-tankless-water-heater");
  if (!brand) notFound();
  return <BrandPageTemplate brand={brand} />;
}
