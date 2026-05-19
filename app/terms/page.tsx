import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-narrow">
        <h1 className="mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="prose mt-8 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 text-xl">Service Agreement</h2>
            <p>By engaging {SITE.name} for services, you agree to these terms. All work performed is covered by our written estimate and our 100% satisfaction guarantee.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">Warranty</h2>
            <p>All installation work carries a 5-year labor warranty. Manufacturer warranty terms apply to all parts and equipment. See your specific written estimate for full warranty terms.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">Cancellation</h2>
            <p>Appointments may be rescheduled with 24-hour notice. Same-day cancellations of confirmed appointments may incur a service fee.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">License</h2>
            <p>{SITE.name} is licensed and insured. Lic. #{SITE.license}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
