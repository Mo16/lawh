export interface BrandData {
  slug: string;
  name: string;
  shortName: string;
  category: "tank" | "tankless";
  tagline: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  logo: string;
  domain: string;
  logoUrl: string;
  models: { name: string; capacity: string; bestFor: string }[];
  whyChoose: string[];
  commonIssues: string[];
  weServices: string[];
  warranty: string;
  origin: string;
  rating: string;
}
