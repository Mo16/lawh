import { promises as fs } from "node:fs";
import path from "node:path";

const ALLOWED = new Set(["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif", "image/svg+xml"]);
const MAX_BYTES = 8 * 1024 * 1024;

function safeName(name: string): string {
  const base = name.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(-60);
  const rand = Math.random().toString(36).slice(2, 8);
  const dot = base.lastIndexOf(".");
  const stem = dot > 0 ? base.slice(0, dot) : base;
  const ext = dot > 0 ? base.slice(dot) : "";
  return `${stem || "image"}-${rand}${ext || ".png"}`;
}

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return Response.json({ error: "No file" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return Response.json({ error: "Unsupported image type" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ error: "File too large (max 8MB)" }, { status: 400 });
  }
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });
  const name = safeName(file.name || "image.png");
  const buf = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(dir, name), buf);
  return Response.json({ url: `/uploads/${name}` });
}
