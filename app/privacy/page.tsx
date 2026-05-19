import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-narrow">
        <h1 className="mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="prose mt-8 max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 text-xl">Information We Collect</h2>
            <p>{SITE.name} collects personal information you voluntarily provide when requesting estimates, scheduling service, or contacting us — including your name, phone, email, and service address.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">How We Use Your Information</h2>
            <p>We use your information to provide water heater services, schedule appointments, send service confirmations, process payments, and improve our services. We never sell your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">Your Rights (CCPA)</h2>
            <p>California residents have the right to request access to, deletion of, and opt-out of the sale of their personal information under the CCPA. Contact us at {SITE.email} to exercise these rights.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl">Contact Us</h2>
            <p>Questions about this policy? Contact us at {SITE.email} or call {SITE.phone}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
