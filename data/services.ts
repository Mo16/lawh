export type SearchIntent = "Transactional" | "Commercial" | "Informational" | "Navigational";

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  badge: string;
  shortDesc: string;
  metaDescription: string;
  primaryKeyword: string;
  intent: SearchIntent;
  category: "tank" | "tankless" | "audience";
  icon: string; // icon name resolved via lib/icons.ts
  hero: { headline: string; subheadline: string; image: string };
  problemSolution: { problems: string[]; solutions: string[] };
  whatsIncluded: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  whyUs: string[];
  pricing?: { label: string; price: string; note: string }[];
  signs?: { title: string; items: string[] };
  comparison?: { title: string; columns: { name: string; items: string[] }[] };
  faqKey: "tank" | "tankless" | "emergency" | "maintenance" | "general";
}
