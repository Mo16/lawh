import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Phone } from "lucide-react";
import { getSite } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { TrustBar, FinalCTA } from "@/components/sections/blocks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Water Heater Tips, Guides & Expert Advice",
    description: "Expert water heater advice from LA's #1 specialists. Maintenance tips, brand comparisons, troubleshooting guides, and more.",
    alternates: { canonical: `${SITE.url}/blog` },
  };
}

const POSTS = [
  {
    slug: "tank-vs-tankless",
    title: "Tank vs Tankless: Which Water Heater Is Right for Your LA Home?",
    excerpt: "We break down the real costs, savings, and tradeoffs to help you decide whether a tank or tankless water heater is right for your home and budget.",
    category: "Buying Guide",
    readTime: "8 min read",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=675&fit=crop&q=80",
  },
  {
    slug: "water-heater-maintenance-checklist",
    title: "The Annual Water Heater Maintenance Checklist Every Homeowner Should Know",
    excerpt: "5 simple things you can do (or have us do) every year to extend your water heater's life by 5+ years and save on energy bills.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "March 8, 2026",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=675&fit=crop&q=80",
  },
  {
    slug: "tankless-rebates-la",
    title: "How to Claim Up to $1,900 in Tankless Water Heater Rebates in LA",
    excerpt: "A complete walkthrough of every utility and manufacturer rebate available for tankless installations in Los Angeles — and how we handle the paperwork.",
    category: "Rebates & Savings",
    readTime: "7 min read",
    date: "March 1, 2026",
    image: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?w=1200&h=675&fit=crop&q=80",
  },
  {
    slug: "common-water-heater-error-codes",
    title: "Tankless Water Heater Error Codes: What They Mean and What to Do",
    excerpt: "Decode every common error code from Navien, Rinnai, Noritz, and Takagi tankless units — and learn which you can fix yourself.",
    category: "Troubleshooting",
    readTime: "10 min read",
    date: "February 22, 2026",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=675&fit=crop&q=80",
  },
  {
    slug: "best-water-heater-brands-2026",
    title: "The Best Water Heater Brands in 2026 (Ranked by an LA Plumber)",
    excerpt: "After installing thousands of units, here's our honest ranking of the best water heater brands for LA homes — tank and tankless.",
    category: "Brand Comparison",
    readTime: "12 min read",
    date: "February 15, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop&q=80",
  },
  {
    slug: "signs-water-heater-failing",
    title: "7 Signs Your Water Heater Is About to Fail (Don't Ignore These)",
    excerpt: "Catch failure early and avoid the emergency. Here are the seven warning signs every LA homeowner should know.",
    category: "Maintenance",
    readTime: "6 min read",
    date: "February 8, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=675&fit=crop&q=80",
  },
];

export default async function BlogPage() {
  return (
    <>
      <Hero
        badge="Blog"
        headline="Water Heater"
        highlight="Tips & Guides"
        subheadline="Expert advice from LA's #1 water heater specialists. Maintenance tips, brand comparisons, troubleshooting guides — everything you need to know."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=1000&fit=crop&q=80"
        imageAlt="Water heater knowledge resources"
        bullets={[`${POSTS.length}+ articles`, "Updated weekly", "Expert insights", "Practical guides"]}
      />

      <TrustBar />

      {/* Featured post */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <Badge variant="accent" className="mb-3">Featured</Badge>
          <h2 className="mb-8">Latest from the Blog</h2>

          <Link href={`/blog/${POSTS[0].slug}`} className="group mb-12 block">
            <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden lg:h-auto">
                  <img
                    src={POSTS[0].image}
                    alt={POSTS[0].title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 flex items-center gap-3 text-xs">
                    <Badge variant="default">{POSTS[0].category}</Badge>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {POSTS[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl group-hover:text-primary-700 sm:text-3xl">{POSTS[0].title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{POSTS[0].excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-accent-600">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>

          {/* Other posts grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs">
                      <Badge variant="default">{post.category}</Badge>
                      <span className="text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="line-clamp-2 text-lg font-bold group-hover:text-primary-700">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container-narrow text-center">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-accent-600" />
          <h2>Get water heater tips in your inbox</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
            One email a month. Maintenance tips, rebate alerts, and money-saving guides.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
            <Button type="submit" size="lg">Subscribe</Button>
          </form>
        </div>
      </section>

      <FinalCTA
        headline="Need more than tips? Call us."
        subheadline="Real plumbers, real diagnosis, real fixes. Same-day service across LA."
      />
    </>
  );
}
