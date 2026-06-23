import type { Metadata } from "next";
import { BrandPageTemplate } from "@/components/templates/brand-page";
import { getBrand } from "@/lib/content";
import { notFound } from "next/navigation";

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

export default async function RheemPage() {
  const brand = await getBrand("rheem-water-heater");
  if (!brand) notFound();
  return <BrandPageTemplate brand={brand} />;
}
