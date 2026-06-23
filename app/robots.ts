import type { MetadataRoute } from "next";
import { getSite } from "@/lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const SITE = await getSite();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
