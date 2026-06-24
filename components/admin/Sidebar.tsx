import Link from "next/link";

const LINKS: { href: string; label: string }[] = [
  { href: "/admin/site", label: "Site Settings" },
  { href: "/admin/pages/home", label: "Homepage" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/locations", label: "Locations" },
  { href: "/admin/brands", label: "Brands" },
  { href: "/admin/faqs", label: "FAQs" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/sections", label: "Shared Sections" },
  { href: "/admin/layout-content", label: "Header & Footer" },
];

export function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 p-4">
      {LINKS.map((l) => (
        <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
