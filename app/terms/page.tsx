import type { Metadata } from "next";
import { getSite, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Terms of Service",
    description: `Terms of service for ${SITE.name}.`,
    alternates: { canonical: `${SITE.url}/terms` },
  };
}

export default async function TermsPage() {
  const terms = await getPage("terms");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-narrow">
        <h1 className="mb-2">{terms.title}</h1>
        <p className="text-sm text-muted-foreground">Last updated: {terms.lastUpdated}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
          {terms.sections.map((section: { heading: string; body: string }, i: number) => (
            <div key={i}>
              <h2 className="mb-3 text-xl">{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
