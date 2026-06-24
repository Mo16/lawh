"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldEditor } from "./FieldEditor";
import type { Field } from "@/lib/admin/schemas";

const REVIEWS_FIELD: Field = {
  name: "reviews", label: "Reviews", type: "repeatable",
  of: [
    { name: "name", label: "Name", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "rating", label: "Rating (1-5)", type: "number" },
    { name: "text", label: "Review text", type: "textarea" },
    { name: "service", label: "Service", type: "text" },
    { name: "date", label: "Date / source", type: "text" },
  ],
};

export function ReviewsEditor({ initial }: { initial: any[] }) {
  const router = useRouter();
  const [data, setData] = useState<any[]>(initial);
  const [status, setStatus] = useState<"idle"|"saving"|"saved"|"error">("idle");
  const [error, setError] = useState("");
  async function save() {
    setStatus("saving"); setError("");
    const res = await fetch("/api/admin/save", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ key: "reviews", data }) });
    if (res.ok) { setStatus("saved"); router.refresh(); setTimeout(() => setStatus("idle"), 2000); }
    else { const j = await res.json().catch(() => ({})); setError(j.error || "Save failed"); setStatus("error"); }
  }
  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold">Reviews / Testimonials</h1>
      <FieldEditor field={REVIEWS_FIELD} value={data} onChange={(v) => setData(v)} />
      <div className="sticky bottom-0 mt-8 flex items-center gap-3 border-t bg-slate-50 py-4">
        <button onClick={save} disabled={status === "saving"} className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">{status === "saving" ? "Saving…" : "Save changes"}</button>
        {status === "saved" && <span className="text-sm text-green-600">Saved ✓</span>}
        {status === "error" && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </div>
  );
}
