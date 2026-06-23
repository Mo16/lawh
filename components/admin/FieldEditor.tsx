"use client";
import { ImageField } from "./ImageField";
import type { Field } from "@/lib/admin/schemas";

export function FieldEditor({ field, value, onChange }: { field: Field; value: any; onChange: (v: any) => void }) {
  const label = <label className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>;

  switch (field.type) {
    case "text":
      return (
        <div>{label}
          <input type="text" value={value ?? ""} onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </div>
      );
    case "textarea":
      return (
        <div>{label}
          <textarea value={value ?? ""} onChange={(e) => onChange(e.target.value)} rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </div>
      );
    case "number":
      return (
        <div>{label}
          <input type="number" value={value ?? 0} onChange={(e) => onChange(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </div>
      );
    case "boolean":
      return (
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
          {field.label}
        </label>
      );
    case "select":
      return (
        <div>{label}
          <select value={value ?? ""} onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            {(field.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      );
    case "image":
      return <div>{label}<ImageField value={value ?? ""} onChange={onChange} /></div>;
    case "list": {
      const arr: string[] = Array.isArray(value) ? value : [];
      return (
        <div>{label}
          <div className="space-y-2">
            {arr.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input type="text" value={item}
                  onChange={(e) => { const n = [...arr]; n[i] = e.target.value; onChange(n); }}
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm" />
                <button type="button" onClick={() => onChange(arr.filter((_, j) => j !== i))}
                  className="rounded-lg border px-2 text-sm text-red-600">✕</button>
              </div>
            ))}
            <button type="button" onClick={() => onChange([...arr, ""])}
              className="rounded-lg border px-3 py-1.5 text-sm">+ Add</button>
          </div>
        </div>
      );
    }
    case "group": {
      const obj = value ?? {};
      return (
        <fieldset className="rounded-xl border p-4">
          <legend className="px-1 text-sm font-semibold text-slate-600">{field.label}</legend>
          <div className="space-y-4">
            {(field.of ?? []).map((f) => (
              <FieldEditor key={f.name} field={f} value={obj[f.name]}
                onChange={(v) => onChange({ ...obj, [f.name]: v })} />
            ))}
          </div>
        </fieldset>
      );
    }
    case "repeatable": {
      const arr: any[] = Array.isArray(value) ? value : [];
      const blank = () => Object.fromEntries((field.of ?? []).map((f) => [f.name, f.type === "list" ? [] : f.type === "number" ? 0 : ""]));
      return (
        <fieldset className="rounded-xl border p-4">
          <legend className="px-1 text-sm font-semibold text-slate-600">{field.label}</legend>
          <div className="space-y-4">
            {arr.map((row, i) => (
              <div key={i} className="rounded-lg border bg-slate-50 p-3">
                <div className="mb-2 flex justify-between">
                  <span className="text-xs font-medium text-slate-400">#{i + 1}</span>
                  <button type="button" onClick={() => onChange(arr.filter((_, j) => j !== i))}
                    className="text-xs text-red-600">Remove</button>
                </div>
                <div className="space-y-3">
                  {(field.of ?? []).map((f) => (
                    <FieldEditor key={f.name} field={f} value={row?.[f.name]}
                      onChange={(v) => { const n = [...arr]; n[i] = { ...row, [f.name]: v }; onChange(n); }} />
                  ))}
                </div>
              </div>
            ))}
            <button type="button" onClick={() => onChange([...arr, blank()])}
              className="rounded-lg border px-3 py-1.5 text-sm">+ Add</button>
          </div>
        </fieldset>
      );
    }
    default:
      return null;
  }
}
