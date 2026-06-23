import type { MetadataRoute } from "next";
import { getSite, getServices, getLocations, getBrands } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [SITE, SERVICES, LOCATIONS, BRANDS] = await Promise.all([getSite(), getServices(), getLocations(), getBrands()]);

  const now = new Date().toISOString();
  const w = "weekly" as const;
  const m = "monthly" as const;

  // Core pages
  const core: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: w, priority: 1.0 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: m, priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: m, priority: 0.8 },
    { url: `${SITE.url}/service-areas`, lastModified: now, changeFrequency: m, priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: w, priority: 0.7 },
    { url: `${SITE.url}/financing`, lastModified: now, changeFrequency: m, priority: 0.6 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: m, priority: 0.6 },
  ];

  // Service pages
  const services: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${SITE.url}/${s.slug}`,
    lastModified: now,
    changeFrequency: m,
    priority: s.category === "audience" ? 0.7 : 0.9,
  }));

  // Location pages
  const locations: MetadataRoute.Sitemap = LOCATIONS.map(l => ({
    url: `${SITE.url}/${l.slug}`,
    lastModified: now,
    changeFrequency: m,
    priority: 0.85,
  }));

  // Brand pages
  const brands: MetadataRoute.Sitemap = BRANDS.map(b => ({
    url: `${SITE.url}/${b.slug}`,
    lastModified: now,
    changeFrequency: m,
    priority: 0.75,
  }));

  return [...core, ...services, ...locations, ...brands];
}
