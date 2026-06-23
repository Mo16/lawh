import { cookies } from "next/headers";
import { createSessionToken, safeEqual } from "@/lib/admin/auth";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const secret = process.env.SESSION_SECRET ?? "";

  if (!expected || !secret) {
    return Response.json({ error: "Server not configured" }, { status: 500 });
  }
  if (typeof password !== "string" || !safeEqual(password, expected)) {
    return Response.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createSessionToken(secret);
  cookies().set("admin_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return Response.json({ ok: true });
}
