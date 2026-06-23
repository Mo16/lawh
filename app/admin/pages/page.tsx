import Link from "next/link";
import { PAGE_KEYS } from "@/lib/admin/schemas";

export default function PagesIndex() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Pages</h1>
      <div className="divide-y rounded-xl border bg-white">
        {PAGE_KEYS.map((p) => (
          <Link key={p.key} href={`/admin/pages/${p.key}`} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50">
            <span>{p.label}</span><span className="text-sm text-slate-400">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
