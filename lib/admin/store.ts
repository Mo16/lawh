import { promises as fs } from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export const CONTENT_KEYS = [
  "site",
  "services",
  "locations",
  "additional-areas",
  "brands",
  "faqs",
  "reviews",
  "sections",
  "layout",
  "pages/home",
  "pages/about",
  "pages/contact",
  "pages/financing",
  "pages/faq",
  "pages/privacy",
  "pages/terms",
  "pages/service-areas",
  "pages/blog",
  "pages/commercial",
  "pages/residential",
  "pages/tankless-services",
  "pages/water-heater-services",
  "pages/tankless-rebates",
] as const;

export type ContentKey = (typeof CONTENT_KEYS)[number];

const KEY_SET = new Set<string>(CONTENT_KEYS);

export function isValidKey(key: string): key is ContentKey {
  return KEY_SET.has(key);
}

export function contentPath(key: string): string {
  if (!isValidKey(key)) throw new Error(`Invalid content key: ${key}`);
  return path.join(CONTENT_DIR, `${key}.json`);
}

export async function readContent(key: string): Promise<any> {
  const raw = await fs.readFile(contentPath(key), "utf8");
  return JSON.parse(raw);
}

export async function writeContent(key: string, data: unknown): Promise<void> {
  const target = contentPath(key); // throws if key invalid
  await fs.mkdir(path.dirname(target), { recursive: true });
  const tmp = `${target}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmp, target);
}
