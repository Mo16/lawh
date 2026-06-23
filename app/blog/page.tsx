import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Phone } from "lucide-react";
import { getSite, getPage } from "@/lib/content";
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

export default async function BlogPage() {
  const blog = await getPage("blog");

  const POSTS = blog.posts as Array<{
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
  }>;

  return (
    <>
      <Hero
        badge={blog.hero.badge}
        headline={blog.hero.headline}
        highlight={blog.hero.highlight}
        subheadline={blog.hero.subheadline}
        image={blog.hero.image}
        imageAlt={blog.hero.imageAlt}
        bullets={blog.hero.bullets}
      />

      <TrustBar />

      {/* Featured post */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-tight">
          <Badge variant="accent" className="mb-3">{blog.featuredSection.badge}</Badge>
          <h2 className="mb-8">{blog.featuredSection.heading}</h2>

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
                    {blog.featuredSection.readArticleLabel}
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
                      {blog.featuredSection.readMoreLabel}
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
          <h2>{blog.newsletterSection.heading}</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
            {blog.newsletterSection.paragraph}
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={blog.newsletterSection.emailPlaceholder}
              required
              className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
            <Button type="submit" size="lg">{blog.newsletterSection.submitLabel}</Button>
          </form>
        </div>
      </section>

      <FinalCTA
        headline={blog.finalCTA.headline}
        subheadline={blog.finalCTA.subheadline}
      />
    </>
  );
}
