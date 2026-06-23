import { getSite } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { TrustBar, ServiceAreasGrid, FinalCTA } from "@/components/sections/blocks";

export default async function ContactPage() {
  const site = await getSite();
  return (
    <>
      <ContactForm site={site} />
      <TrustBar />
      <ServiceAreasGrid />
      <FinalCTA />
    </>
  );
}
