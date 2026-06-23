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
  "pages/home": {
    key: "pages/home",
    title: "Homepage",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "bullets", label: "Bullet points", type: "list" },
      ]},
      { name: "servicesSection", label: "Services Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
        { name: "ctaPrimaryText", label: "Primary CTA text", type: "text" },
        { name: "ctaPrimaryHref", label: "Primary CTA link", type: "text" },
        { name: "ctaSecondaryText", label: "Secondary CTA text", type: "text" },
        { name: "ctaSecondaryHref", label: "Secondary CTA link", type: "text" },
        { name: "featuredSlugs", label: "Featured service slugs", type: "list" },
      ]},
      { name: "problemsSection", label: "Common Issues Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "headingHighlight", label: "Heading highlight", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
        { name: "issues", label: "Issue cards", type: "repeatable", of: [
          { name: "icon", label: "Icon name", type: "text" },
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "textarea" },
        ]},
      ]},
      { name: "brandsSection", label: "Brands Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
      { name: "rebateBanner", label: "Rebate Banner", type: "group", of: [
        { name: "href", label: "Banner link", type: "text" },
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading prefix", type: "text" },
        { name: "headingAmount", label: "Heading amount", type: "text" },
        { name: "headingTail", label: "Heading tail", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
        { name: "ctaPrimaryText", label: "Primary CTA text", type: "text" },
        { name: "bigNumber", label: "Big number", type: "text" },
        { name: "bigNumberLabel", label: "Big number label", type: "text" },
      ]},
      { name: "whyUsItems", label: "Why Us items", type: "list" },
    ],
  },
  "pages/about": {
    key: "pages/about",
    title: "About Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "bullets", label: "Bullet points", type: "list" },
      ]},
      { name: "storySection", label: "Story Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "image", label: "Story image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "paragraph1", label: "Paragraph 1", type: "textarea" },
        { name: "paragraph2", label: "Paragraph 2", type: "textarea" },
        { name: "paragraph3", label: "Paragraph 3", type: "textarea" },
      ]},
      { name: "teamSection", label: "Team Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "paragraph", label: "Intro paragraph", type: "textarea" },
        { name: "founder", label: "Founder", type: "group", of: [
          { name: "image", label: "Founder image", type: "image" },
          { name: "imageAlt", label: "Image alt text", type: "text" },
          { name: "badge", label: "Badge", type: "text" },
          { name: "name", label: "Name", type: "text" },
          { name: "credentialIcon", label: "Credential icon name", type: "text" },
          { name: "credential1", label: "Credential 1", type: "text" },
          { name: "credential2", label: "Credential 2", type: "text" },
          { name: "paragraph1", label: "Paragraph 1", type: "textarea" },
          { name: "paragraph2", label: "Paragraph 2", type: "textarea" },
        ]},
        { name: "crew", label: "Crew cards", type: "repeatable", of: [
          { name: "icon", label: "Icon name", type: "text" },
          { name: "role", label: "Role", type: "text" },
          { name: "bio", label: "Bio", type: "textarea" },
        ]},
      ]},
      { name: "statsSection", label: "Stats Section", type: "group", of: [
        { name: "stat4Value", label: "Stat 4 value", type: "text" },
        { name: "stat4Label", label: "Stat 4 label", type: "text" },
      ]},
      { name: "valuesSection", label: "Values Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "values", label: "Values", type: "repeatable", of: [
          { name: "icon", label: "Icon name", type: "text" },
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "textarea" },
        ]},
      ]},
      { name: "certificationsSection", label: "Certifications Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "cert1Icon", label: "Cert 1 icon name", type: "text" },
        { name: "cert1Title", label: "Cert 1 title", type: "text" },
        { name: "cert1Sub", label: "Cert 1 subtitle", type: "text" },
        { name: "cert2Icon", label: "Cert 2 icon name", type: "text" },
        { name: "cert2Sub", label: "Cert 2 subtitle", type: "text" },
        { name: "cert3Icon", label: "Cert 3 icon name", type: "text" },
      ]},
      { name: "finalCTA", label: "Final CTA", type: "group", of: [
        { name: "headline", label: "Headline", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
      ]},
    ],
  },
  "pages/financing": {
    key: "pages/financing",
    title: "Financing Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "bullets", label: "Bullet points", type: "list" },
      ]},
      { name: "planHighlightsSection", label: "Plan Highlights Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
        { name: "plans", label: "Plan cards", type: "repeatable", of: [
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "textarea" },
        ]},
      ]},
      { name: "howItWorksSection", label: "How It Works Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "steps", label: "Steps", type: "repeatable", of: [
          { name: "step", label: "Step number", type: "text" },
          { name: "title", label: "Title", type: "text" },
          { name: "desc", label: "Description", type: "textarea" },
        ]},
      ]},
      { name: "exampleSection", label: "Example Calculation Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "installTitle", label: "Install title", type: "text" },
        { name: "installDesc", label: "Install description", type: "text" },
        { name: "termLabel", label: "Term label", type: "text" },
        { name: "monthlyAmount", label: "Monthly amount", type: "text" },
        { name: "monthlyNote", label: "Monthly note", type: "text" },
        { name: "ctaText", label: "CTA button text", type: "text" },
        { name: "ctaHref", label: "CTA button link", type: "text" },
        { name: "disclaimer", label: "Disclaimer text", type: "textarea" },
      ]},
      { name: "financeableSection", label: "What You Can Finance Section", type: "group", of: [
        { name: "label", label: "Section label", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "items", label: "Financeable items", type: "list" },
      ]},
      { name: "faqsSection", label: "FAQs Section", type: "group", of: [
        { name: "title", label: "Section title", type: "text" },
        { name: "faqs", label: "FAQs", type: "repeatable", of: [
          { name: "q", label: "Question", type: "text" },
          { name: "a", label: "Answer", type: "textarea" },
        ]},
      ]},
      { name: "finalCTA", label: "Final CTA", type: "group", of: [
        { name: "headline", label: "Headline", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
      ]},
    ],
  },
  "pages/faq": {
    key: "pages/faq",
    title: "FAQ Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
      ]},
      { name: "stillHaveQuestions", label: "Still Have Questions Section", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
    ],
  },
  "pages/privacy": {
    key: "pages/privacy",
    title: "Privacy Page",
    fields: [
      { name: "title", label: "Page title", type: "text" },
      { name: "lastUpdated", label: "Last updated text", type: "text" },
      { name: "sections", label: "Sections", type: "repeatable", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
      ]},
    ],
  },
  "pages/terms": {
    key: "pages/terms",
    title: "Terms Page",
    fields: [
      { name: "title", label: "Page title", type: "text" },
      { name: "lastUpdated", label: "Last updated text", type: "text" },
      { name: "sections", label: "Sections", type: "repeatable", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
      ]},
    ],
  },
  "pages/contact": {
    key: "pages/contact",
    title: "Contact Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headlinePrefix", label: "Headline prefix", type: "text" },
        { name: "headlineHighlight", label: "Headline highlight (coloured)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
      ]},
      { name: "callCard", label: "Call Card", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "subtext", label: "Subtext", type: "text" },
        { name: "callLabel", label: "Call label", type: "text" },
      ]},
      { name: "infoLabels", label: "Info Labels", type: "group", of: [
        { name: "emailLabel", label: "Email label", type: "text" },
        { name: "officeLabel", label: "Office label", type: "text" },
        { name: "hoursLabel", label: "Hours label", type: "text" },
        { name: "hoursNote", label: "Hours note", type: "text" },
      ]},
      { name: "formCard", label: "Form Card", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "introPart1", label: "Intro text (before phone number)", type: "textarea" },
        { name: "fieldNameLabel", label: "Name field label", type: "text" },
        { name: "fieldPhoneLabel", label: "Phone field label", type: "text" },
        { name: "fieldEmailLabel", label: "Email field label", type: "text" },
        { name: "fieldServiceLabel", label: "Service field label", type: "text" },
        { name: "fieldServicePlaceholder", label: "Service placeholder", type: "text" },
        { name: "fieldAddressLabel", label: "Address field label", type: "text" },
        { name: "fieldAddressPlaceholder", label: "Address placeholder", type: "text" },
        { name: "fieldMessageLabel", label: "Message field label", type: "text" },
        { name: "fieldMessagePlaceholder", label: "Message placeholder", type: "text" },
        { name: "submitButtonText", label: "Submit button text", type: "text" },
        { name: "disclaimerPart1", label: "Disclaimer part 1 (before site name)", type: "text" },
        { name: "disclaimerPart2", label: "Disclaimer part 2 (after site name)", type: "text" },
        { name: "serviceOptions", label: "Service options", type: "repeatable", of: [
          { name: "value", label: "Value", type: "text" },
          { name: "label", label: "Label", type: "text" },
        ]},
      ]},
      { name: "successMessage", label: "Success Message", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "subtext", label: "Subtext (before phone number)", type: "text" },
      ]},
    ],
  },
  "pages/blog": {
    key: "pages/blog",
    title: "Blog Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "bullets", label: "Bullet points", type: "list" },
      ]},
      { name: "featuredSection", label: "Featured Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "readArticleLabel", label: "Read article label", type: "text" },
        { name: "readMoreLabel", label: "Read more label", type: "text" },
      ]},
      { name: "posts", label: "Blog Posts", type: "repeatable", of: [
        { name: "slug", label: "Slug (URL)", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "excerpt", label: "Excerpt", type: "textarea" },
        { name: "category", label: "Category", type: "text" },
        { name: "readTime", label: "Read time", type: "text" },
        { name: "date", label: "Date", type: "text" },
        { name: "image", label: "Image", type: "image" },
      ]},
      { name: "newsletterSection", label: "Newsletter Section", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
        { name: "emailPlaceholder", label: "Email placeholder", type: "text" },
        { name: "submitLabel", label: "Submit button label", type: "text" },
      ]},
      { name: "finalCTA", label: "Final CTA", type: "group", of: [
        { name: "headline", label: "Headline", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
      ]},
    ],
  },
  "pages/commercial": {
    key: "pages/commercial",
    title: "Commercial Page",
    fields: [
      { name: "meta", label: "SEO / Meta", type: "group", of: [
        { name: "title", label: "Page title", type: "text" },
        { name: "description", label: "Meta description", type: "textarea" },
        { name: "canonical", label: "Canonical URL", type: "text" },
        { name: "ogTitle", label: "OG title", type: "text" },
        { name: "ogDescription", label: "OG description", type: "textarea" },
        { name: "ogUrl", label: "OG URL", type: "text" },
      ]},
    ],
  },
  "pages/residential": {
    key: "pages/residential",
    title: "Residential Page",
    fields: [
      { name: "meta", label: "SEO / Meta", type: "group", of: [
        { name: "title", label: "Page title", type: "text" },
        { name: "description", label: "Meta description", type: "textarea" },
        { name: "canonical", label: "Canonical URL", type: "text" },
        { name: "ogTitle", label: "OG title", type: "text" },
        { name: "ogDescription", label: "OG description", type: "textarea" },
        { name: "ogUrl", label: "OG URL", type: "text" },
      ]},
    ],
  },
  "pages/service-areas": {
    key: "pages/service-areas",
    title: "Service Areas Page",
    fields: [
      { name: "hero", label: "Hero", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "headline", label: "Headline", type: "text" },
        { name: "highlight", label: "Highlight (coloured word)", type: "text" },
        { name: "subheadline", label: "Subheadline", type: "textarea" },
        { name: "image", label: "Hero image", type: "image" },
        { name: "imageAlt", label: "Image alt text", type: "text" },
        { name: "bullets", label: "Bullet points", type: "list" },
      ]},
      { name: "locationsSection", label: "Locations Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
      { name: "additionalAreasSection", label: "Additional Areas Section", type: "group", of: [
        { name: "badge", label: "Badge", type: "text" },
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
      { name: "notListedSection", label: "Not Listed Section", type: "group", of: [
        { name: "heading", label: "Heading", type: "text" },
        { name: "paragraph", label: "Paragraph", type: "textarea" },
      ]},
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

export const PAGE_KEYS: { key: string; label: string }[] = [
  { key: "home", label: "Homepage" },
  { key: "about", label: "About" },
  { key: "contact", label: "Contact" },
  { key: "financing", label: "Financing" },
  { key: "faq", label: "FAQ page" },
  { key: "privacy", label: "Privacy" },
  { key: "terms", label: "Terms" },
  { key: "service-areas", label: "Service Areas" },
  { key: "blog", label: "Blog" },
  { key: "commercial", label: "Commercial" },
  { key: "residential", label: "Residential" },
  { key: "tankless-services", label: "Tankless Services" },
  { key: "water-heater-services", label: "Water Heater Services" },
  { key: "tankless-rebates", label: "Tankless Rebates" },
];

export const COLLECTIONS: Record<string, { key: string; title: string; fields: Field[]; labelField: string }> = {
  services: { key: "services", title: "Services", fields: SERVICE_FIELDS, labelField: "title" },
  locations: { key: "locations", title: "Locations", fields: LOCATION_FIELDS, labelField: "name" },
  brands: { key: "brands", title: "Brands", fields: BRAND_FIELDS, labelField: "name" },
};
