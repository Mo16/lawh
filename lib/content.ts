import "server-only";
import { unstable_noStore as noStore } from "next/cache";
import { readContent } from "@/lib/admin/store";
import type { ServiceData } from "@/data/services";
import type { SiteData } from "@/data/site";
import type { LocationData } from "@/data/locations";
import type { BrandData } from "@/data/brands";
import type { FAQ, Review } from "@/data/faqs";

async function read<T>(key: string): Promise<T> {
  noStore();
  return (await readContent(key)) as T;
}

export const getSite = () => read<SiteData>("site");
export const getServices = () => read<ServiceData[]>("services");
export const getLocations = () => read<LocationData[]>("locations");
export const getAdditionalAreas = () => read<string[]>("additional-areas");
export const getBrands = () => read<BrandData[]>("brands");
export const getFaqs = () => read<Record<string, FAQ[]>>("faqs");
export const getReviews = () => read<Review[]>("reviews");
export const getSections = () => read<any>("sections");
export const getLayout = () => read<any>("layout");
export const getPage = (key: string) => read<any>(`pages/${key}`);

export async function getService(slug: string): Promise<ServiceData | undefined> {
  return (await getServices()).find((s) => s.slug === slug);
}
export async function getLocation(slug: string): Promise<LocationData | undefined> {
  return (await getLocations()).find((l) => l.slug === slug);
}
export async function getBrand(slug: string): Promise<BrandData | undefined> {
  return (await getBrands()).find((b) => b.slug === slug);
}
