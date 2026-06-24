import Link from "next/link";

const CARDS = [
  { href: "/admin/site", title: "Site Settings", desc: "Phone, address, hours, ratings, badges" },
  { href: "/admin/pages/home", title: "Homepage", desc: "Hero, sections, and homepage copy" },
  { href: "/admin/pages", title: "Pages", desc: "About, contact, financing, legal, and more" },
  { href: "/admin/services", title: "Services", desc: "All service pages" },
  { href: "/admin/locations", title: "Locations", desc: "All service-area pages" },
  { href: "/admin/brands", title: "Brands", desc: "All brand pages" },
  { href: "/admin/faqs", title: "FAQs", desc: "Frequently asked questions" },
  { href: "/admin/reviews", title: "Reviews", desc: "Customer testimonials" },
  { href: "/admin/sections", title: "Shared Sections", desc: "Trust bar, process, reviews, CTAs" },
  { href: "/admin/layout-content", title: "Header & Footer", desc: "Navigation and footer content" },
];

export default function AdminHome() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">What would you like to edit?</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <Link key={c.href} href={c.href} className="rounded-xl border bg-white p-5 hover:border-blue-400 hover:shadow-sm">
            <div className="font-semibold text-slate-900">{c.title}</div>
            <div className="mt-1 text-sm text-slate-500">{c.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
