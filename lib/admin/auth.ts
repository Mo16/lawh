// Runtime-agnostic session tokens using Web Crypto (safe for edge middleware).
const enc = new TextEncoder();

function bytesToB64Url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64UrlToBytes(str: string): Uint8Array {
  const s = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s.length % 4 ? "=".repeat(4 - (s.length % 4)) : "";
  const bin = atob(s + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

const DEFAULT_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function createSessionToken(secret: string, ttlMs: number = DEFAULT_TTL): Promise<string> {
  const payload = bytesToB64Url(enc.encode(JSON.stringify({ exp: Date.now() + ttlMs })));
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(payload)));
  return `${payload}.${bytesToB64Url(sig)}`;
}

export async function verifySessionToken(secret: string, token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  let valid = false;
  try {
    valid = await crypto.subtle.verify("HMAC", await hmacKey(secret), b64UrlToBytes(sig), enc.encode(payload));
  } catch {
    return false;
  }
  if (!valid) return false;
  try {
    const { exp } = JSON.parse(new TextDecoder().decode(b64UrlToBytes(payload)));
    return typeof exp === "number" && Date.now() < exp;
  } catch {
    return false;
  }
}

// Length-independent constant-time-ish string compare.
export function safeEqual(a: string, b: string): boolean {
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ab.length ^ bb.length;
  const len = Math.max(ab.length, bb.length);
  for (let i = 0; i < len; i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}
