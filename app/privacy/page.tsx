import type { Metadata } from "next";
import { getSite, getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const SITE = await getSite();
  return {
    title: "Privacy Policy",
    description: `Privacy policy for ${SITE.name}.`,
    alternates: { canonical: `${SITE.url}/privacy` },
  };
}

export default async function PrivacyPage() {
  const privacy = await getPage("privacy");

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-narrow">
        <h1 className="mb-2">{privacy.title}</h1>
        <p className="text-sm text-muted-foreground">Last updated: {privacy.lastUpdated}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
          {privacy.sections.map((section: { heading: string; body: string }, i: number) => (
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
