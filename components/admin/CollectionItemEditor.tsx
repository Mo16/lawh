"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldEditor } from "./FieldEditor";
import type { Field } from "@/lib/admin/schemas";

export function CollectionItemEditor({ collectionKey, title, fields, all, index }: {
  collectionKey: string; title: string; fields: Field[]; all: any[]; index: number;
}) {
  const router = useRouter();
  const [item, setItem] = useState<any>(all[index]);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  async function save() {
    setStatus("saving"); setError("");
    const next = [...all];
    next[index] = item;
    const res = await fetch("/api/admin/save", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ key: collectionKey, data: next }),
    });
    if (res.ok) { setStatus("saved"); router.refresh(); setTimeout(() => setStatus("idle"), 2000); }
    else { const j = await res.json().catch(() => ({})); setError(j.error || "Save failed"); setStatus("error"); }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold">{title}</h1>
      <div className="space-y-5">
        {fields.map((f) => (
          <FieldEditor key={f.name} field={f} value={item?.[f.name]}
            onChange={(v) => setItem((d: any) => ({ ...d, [f.name]: v }))} />
        ))}
      </div>
      <div className="sticky bottom-0 mt-8 flex items-center gap-3 border-t bg-slate-50 py-4">
        <button onClick={save} disabled={status === "saving"}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
          {status === "saving" ? "Saving…" : "Save changes"}
        </button>
        {status === "saved" && <span className="text-sm text-green-600">Saved ✓</span>}
        {status === "error" && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </div>
  );
}
