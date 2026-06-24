import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Russo_One } from "next/font/google";
import { getSite, getLayout } from "@/lib/content";
import { Header, StickyMobileCTA } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Wordmark font — matches the chunky, geometric "WATER HEATERS" lettering in the brand logo
const wordmark = Russo_One({
  subsets: ["latin"],
  variable: "--font-wordmark",
  display: "swap",
  weight: ["400"],
});

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} — Same-Day Water Heater Service in Los Angeles`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    keywords: [
      "water heater los angeles",
      "tankless water heater los angeles",
      "water heater installation",
      "water heater repair",
      "emergency water heater",
      "water heater replacement",
    ],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE.url,
      siteName: SITE.name,
      title: `${SITE.name} — Same-Day Water Heater Service in Los Angeles`,
      description: SITE.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} — Same-Day Water Heater Service in Los Angeles`,
      description: SITE.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE.url,
    },
    icons: {
      icon: [
        { url: "/assets/img/logo.png", type: "image/png", sizes: "any" },
        { url: "/assets/img/logo.png", type: "image/png", sizes: "32x32" },
        { url: "/assets/img/logo.png", type: "image/png", sizes: "16x16" },
      ],
      shortcut: "/assets/img/logo.png",
      apple: [
        { url: "/assets/img/logo.png", sizes: "180x180" },
      ],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF6B00",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [site, layout] = await Promise.all([getSite(), getLayout()]);

  // Plumber-level JSON-LD schema for entire site
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": site.url,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.1425,
      longitude: -118.3963,
    },
    areaServed: [
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Hollywood" },
      { "@type": "City", name: "Beverly Hills" },
      { "@type": "City", name: "Santa Monica" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Burbank" },
      { "@type": "City", name: "Glendale" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [site.social.yelp],
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${wordmark.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header site={site} nav={layout.nav} cta={layout.headerCta} />
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA site={site} />
      </body>
    </html>
  );
}
