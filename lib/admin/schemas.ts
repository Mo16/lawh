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
