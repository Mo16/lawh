import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-muted/30 py-16">
      <div className="container-narrow text-center">
        <div className="mb-3 font-display text-6xl font-black text-primary-600 sm:text-7xl">404</div>
        <h1>Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          The page you're looking for doesn't exist. But your water heater issue still needs solving — let's get you back on track.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="call">
            <a href={SITE.phoneTel}><Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}</a>
          </Button>
          <Button asChild size="lg" variant="default">
            <Link href="/"><Home className="h-4 w-4" /> Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
