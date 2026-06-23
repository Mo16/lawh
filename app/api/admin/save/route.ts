import { revalidatePath } from "next/cache";
import { isValidKey, writeContent } from "@/lib/admin/store";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.key !== "string" || !("data" in body)) {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }
  if (!isValidKey(body.key)) {
    return Response.json({ error: "Unknown content key" }, { status: 400 });
  }
  await writeContent(body.key, body.data);
  revalidatePath("/", "layout"); // refresh all pages that read content
  return Response.json({ ok: true });
}
