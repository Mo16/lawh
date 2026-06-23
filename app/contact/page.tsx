import { getSite, getPage } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { TrustBar, ServiceAreasGrid, FinalCTA } from "@/components/sections/blocks";

export default async function ContactPage() {
  const [site, contact] = await Promise.all([getSite(), getPage("contact")]);
  return (
    <>
      <ContactForm site={site} content={contact} />
      <TrustBar />
      <ServiceAreasGrid />
      <FinalCTA />
    </>
  );
}
