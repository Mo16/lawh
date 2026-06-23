import Link from "next/link";
import { getBrands } from "@/lib/content";
import { COLLECTIONS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function BrandsList() {
  const items = await getBrands();
  const col = COLLECTIONS.brands;
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">{col.title}</h1>
      <div className="divide-y rounded-xl border bg-white">
        {items.map((it: any) => (
          <Link key={it.slug} href={`/admin/brands/${it.slug}`}
            className="flex items-center justify-between px-4 py-3 hover:bg-slate-50">
            <span>{it[col.labelField]}</span>
            <span className="text-sm text-slate-400">/{it.slug} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
