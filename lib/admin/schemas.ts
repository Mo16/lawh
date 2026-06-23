export type FieldType =
  | "text" | "textarea" | "number" | "boolean"
  | "image" | "list" | "select" | "group" | "repeatable";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  of?: Field[];        // for group / repeatable
  options?: string[];  // for select
}

export interface Schema {
  key: string;   // content key, e.g. "site"
  title: string;
  fields: Field[];
}

export const SCHEMAS: Record<string, Schema> = {
  site: {
    key: "site",
    title: "Site Settings",
    fields: [
      { name: "name", label: "Business name", type: "text" },
      { name: "shortName", label: "Short name", type: "text" },
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "url", label: "Site URL", type: "text" },
      { name: "phone", label: "Phone (display in text)", type: "text" },
      { name: "phoneTel", label: "Phone (tel: link)", type: "text" },
      { name: "phoneDisplay", label: "Phone (button label)", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "address", label: "Address", type: "group", of: [
        { name: "street", label: "Street", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "state", label: "State", type: "text" },
        { name: "zip", label: "ZIP", type: "text" },
        { name: "full", label: "Full address", type: "text" },
      ]},
      { name: "founded", label: "Founded year", type: "number" },
      { name: "years", label: "Years in business", type: "number" },
      { name: "rating", label: "Rating", type: "number" },
      { name: "reviewCount", label: "Review count", type: "number" },
      { name: "hours", label: "Hours", type: "text" },
      { name: "social", label: "Social", type: "group", of: [
        { name: "yelp", label: "Yelp URL", type: "text" },
      ]},
      { name: "trustBadges", label: "Trust badges", type: "list" },
      { name: "bbb", label: "BBB line", type: "text" },
    ],
  },
  faqs: {
    key: "faqs",
    title: "FAQs",
    fields: [
      // faqs.json is a record of category -> FAQ[]; edited via a dedicated repeatable per group.
      { name: "general", label: "General", type: "repeatable", of: [
        { name: "q", label: "Question", type: "text" },
        { name: "a", label: "Answer", type: "textarea" },
      ]},
      { name: "tank", label: "Tank", type: "repeatable", of: [
        { name: "q", label: "Question", type: "text" },
        { name: "a", label: "Answer", type: "textarea" },
      ]},
      { name: "tankless", label: "Tankless", type: "repeatable", of: [
        { name: "q", label: "Question", type: "text" },
        { name: "a", label: "Answer", type: "textarea" },
      ]},
      { name: "emergency", label: "Emergency", type: "repeatable", of: [
        { name: "q", label: "Question", type: "text" },
        { name: "a", label: "Answer", type: "textarea" },
      ]},
      { name: "maintenance", label: "Maintenance", type: "repeatable", of: [
        { name: "q", label: "Question", type: "text" },
        { name: "a", label: "Answer", type: "textarea" },
      ]},
    ],
  },
};

export function getSchema(key: string): Schema | undefined {
  return SCHEMAS[key];
}

import { ICON_NAMES } from "@/lib/icons";

export const SERVICE_FIELDS: Field[] = [
  { name: "slug", label: "Slug (URL)", type: "text" },
  { name: "title", label: "Page title", type: "text" },
  { name: "h1", label: "H1 heading", type: "text" },
  { name: "badge", label: "Badge", type: "text" },
  { name: "shortDesc", label: "Short description", type: "textarea" },
  { name: "metaDescription", label: "Meta description", type: "textarea" },
  { name: "primaryKeyword", label: "Primary keyword", type: "text" },
  { name: "intent", label: "Search intent", type: "select", options: ["Transactional", "Commercial", "Informational", "Navigational"] },
  { name: "category", label: "Category", type: "select", options: ["tank", "tankless", "audience"] },
  { name: "icon", label: "Icon", type: "select", options: ICON_NAMES },
  { name: "hero", label: "Hero", type: "group", of: [
    { name: "headline", label: "Headline", type: "text" },
    { name: "subheadline", label: "Subheadline", type: "textarea" },
    { name: "image", label: "Image", type: "image" },
  ]},
  { name: "problemSolution", label: "Problems & solutions", type: "group", of: [
    { name: "problems", label: "Problems", type: "list" },
    { name: "solutions", label: "Solutions", type: "list" },
  ]},
  { name: "whatsIncluded", label: "What's included", type: "repeatable", of: [
    { name: "title", label: "Title", type: "text" },
    { name: "desc", label: "Description", type: "textarea" },
  ]},
  { name: "process", label: "Process steps", type: "repeatable", of: [
    { name: "step", label: "Step #", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "desc", label: "Description", type: "textarea" },
  ]},
  { name: "whyUs", label: "Why us", type: "list" },
  { name: "pricing", label: "Pricing", type: "repeatable", of: [
    { name: "label", label: "Label", type: "text" },
    { name: "price", label: "Price", type: "text" },
    { name: "note", label: "Note", type: "text" },
  ]},
  { name: "faqKey", label: "FAQ group", type: "select", options: ["tank", "tankless", "emergency", "maintenance", "general"] },
];

export const LOCATION_FIELDS: Field[] = [
  { name: "slug", label: "Slug (URL)", type: "text" },
  { name: "name", label: "Name", type: "text" },
  { name: "shortName", label: "Short name", type: "text" },
  { name: "zip", label: "ZIP codes", type: "list" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "localContent", label: "Local content", type: "textarea" },
  { name: "challenges", label: "Challenges", type: "list" },
  { name: "nearby", label: "Nearby areas", type: "list" },
  { name: "population", label: "Population", type: "text" },
  { name: "image", label: "Image", type: "image" },
  { name: "coordinates", label: "Coordinates", type: "group", of: [
    { name: "lat", label: "Latitude", type: "number" },
    { name: "lng", label: "Longitude", type: "number" },
  ]},
];

export const BRAND_FIELDS: Field[] = [
  { name: "slug", label: "Slug (URL)", type: "text" },
  { name: "name", label: "Name", type: "text" },
  { name: "shortName", label: "Short name", type: "text" },
  { name: "category", label: "Category", type: "select", options: ["tank", "tankless"] },
  { name: "tagline", label: "Tagline", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "metaDescription", label: "Meta description", type: "textarea" },
  { name: "primaryKeyword", label: "Primary keyword", type: "text" },
  { name: "logo", label: "Logo text", type: "text" },
  { name: "domain", label: "Domain", type: "text" },
  { name: "logoUrl", label: "Logo image", type: "image" },
  { name: "models", label: "Models", type: "repeatable", of: [
    { name: "name", label: "Name", type: "text" },
    { name: "capacity", label: "Capacity", type: "text" },
    { name: "bestFor", label: "Best for", type: "text" },
  ]},
  { name: "whyChoose", label: "Why choose", type: "list" },
  { name: "commonIssues", label: "Common issues", type: "list" },
  { name: "weServices", label: "We service", type: "list" },
  { name: "warranty", label: "Warranty", type: "text" },
  { name: "origin", label: "Origin", type: "text" },
  { name: "rating", label: "Rating", type: "text" },
];

export const COLLECTIONS: Record<string, { key: string; title: string; fields: Field[]; labelField: string }> = {
  services: { key: "services", title: "Services", fields: SERVICE_FIELDS, labelField: "title" },
  locations: { key: "locations", title: "Locations", fields: LOCATION_FIELDS, labelField: "name" },
  brands: { key: "brands", title: "Brands", fields: BRAND_FIELDS, labelField: "name" },
};
