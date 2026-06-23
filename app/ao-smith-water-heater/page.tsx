import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { getBrand } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function AOSmithPage() {
  const brand = await getBrand("ao-smith-water-heater");
  if (!brand) notFound();
  return <BrandPageTemplate brand={brand} />;
}
