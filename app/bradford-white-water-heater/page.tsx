import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { getBrand } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Bradford White Water Heater Services in LA",
  description: "Bradford White water heater installation and repair in Los Angeles. Authorized installer. Call (818) 555-0173.",
  alternates: { canonical: "https://lawaterheaters.com/bradford-white-water-heater" },
  openGraph: {
    title: "Bradford White Water Heater Services in LA",
    description: "Bradford White water heater installation and repair in Los Angeles. Authorized installer. Call (818) 555-0173.",
    url: "https://lawaterheaters.com/bradford-white-water-heater",
    type: "website",
  },
};

export default async function BradfordWhitePage() {
  const brand = await getBrand("bradford-white-water-heater");
  if (!brand) notFound();
  return <BrandPageTemplate brand={brand} />;
}
