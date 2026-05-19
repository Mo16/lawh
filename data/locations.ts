export interface LocationData {
  slug: string;
  name: string;
  shortName: string;
  zip: string[];
  description: string;
  localContent: string;
  challenges: string[];
  nearby: string[];
  population: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "water-heater-services-hollywood",
    name: "Hollywood",
    shortName: "Hollywood",
    zip: ["90028", "90038", "90068"],
    description: "Water heater services in Hollywood — tank, tankless, repair, and replacement.",
    localContent:
      "Hollywood's mix of historic bungalows, hillside homes, and high-rise condos each face unique water heater challenges. Older Spanish-style homes near Franklin Avenue often have aging galvanized supply lines and tank water heaters past their prime. Hillside homes deal with low pressure issues. We've serviced thousands of Hollywood properties and know exactly what to look for.",
    challenges: [
      "Aging plumbing in pre-1960 homes",
      "Tight closet installs in vintage apartments",
      "HOA approval for condo installs",
      "Hillside low-pressure recirculation needs",
    ],
    nearby: ["West Hollywood", "Studio City", "Burbank", "Beverly Hills"],
    population: "85,000+",
    image: "https://images.unsplash.com/photo-1597067489486-1ed7e0aedd95?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.0928, lng: -118.3287 },
  },
  {
    slug: "water-heater-services-beverly-hills",
    name: "Beverly Hills",
    shortName: "Beverly Hills",
    zip: ["90210", "90211", "90212"],
    description: "Premium water heater services in Beverly Hills — high-capacity, smart-home integration, white-glove install.",
    localContent:
      "Beverly Hills homes demand premium service. Whether it's a 6-bathroom estate that needs a commercial-grade tankless cascade, or a Trousdale Estates property with smart home integration, we deliver white-glove installation. Our techs are background-checked, uniformed, and trained to work in high-end homes with the discretion and care your property deserves.",
    challenges: [
      "High hot water demand for large homes",
      "Smart home integration requirements",
      "Premium aesthetic requirements (no exposed venting)",
      "Strict HOA and architectural requirements",
    ],
    nearby: ["Bel Air", "West Hollywood", "Century City", "Brentwood"],
    population: "32,000+",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.0736, lng: -118.4004 },
  },
  {
    slug: "water-heater-services-santa-monica",
    name: "Santa Monica",
    shortName: "Santa Monica",
    zip: ["90401", "90402", "90403", "90404", "90405"],
    description: "Water heater services in Santa Monica — coastal corrosion-resistant installs and tankless conversions.",
    localContent:
      "Santa Monica's coastal climate accelerates wear on water heaters — salt air corrodes anode rods faster, and coastal humidity affects burner performance. We specialize in corrosion-resistant installs with marine-grade venting, powered anode rods, and stainless steel connections built to last in the coastal environment. Free assessments for Santa Monica homeowners.",
    challenges: [
      "Coastal salt air corrosion",
      "Faster anode rod degradation",
      "Stainless steel venting requirements",
      "Beach-area apartment tight-space installs",
    ],
    nearby: ["Venice", "Pacific Palisades", "Mar Vista", "Brentwood"],
    population: "93,000+",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.0195, lng: -118.4912 },
  },
  {
    slug: "water-heater-services-pasadena",
    name: "Pasadena",
    shortName: "Pasadena",
    zip: ["91101", "91103", "91104", "91105", "91106", "91107"],
    description: "Water heater services in Pasadena — Craftsman home specialists, hard water descaling, tankless conversion.",
    localContent:
      "Pasadena's iconic Craftsman bungalows and Spanish Revival homes often have water heaters in original 1920s closets — tight, vintage spaces that need experienced hands. Pasadena's hard water also accelerates scale buildup, especially on tankless units. Our annual descaling service is a must for every Pasadena tankless owner. We know these homes inside out.",
    challenges: [
      "Vintage 1920s home tight-space installs",
      "Pasadena hard water scale buildup",
      "Historic district code requirements",
      "Older gas supply lines needing upsize",
    ],
    nearby: ["South Pasadena", "Altadena", "San Marino", "Glendale"],
    population: "138,000+",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.1478, lng: -118.1445 },
  },
  {
    slug: "water-heater-services-burbank",
    name: "Burbank",
    shortName: "Burbank",
    zip: ["91501", "91502", "91504", "91505", "91506"],
    description: "Water heater services in Burbank — same-day install, family home specialists, all major brands.",
    localContent:
      "Burbank is family central — ranch homes from the 50s and 60s with growing families that constantly run out of hot water. We're experts at sizing up — whether it's a bigger 75-gallon tank or a tankless conversion that finally lets four people shower without anyone going cold. Same-day installs are our specialty in Burbank.",
    challenges: [
      "Mid-century homes with undersized heaters",
      "Growing family hot water demand",
      "1950s-era gas line upsize needs",
      "Earthquake-strap retrofits for older homes",
    ],
    nearby: ["Glendale", "North Hollywood", "Toluca Lake", "Studio City"],
    population: "107,000+",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.1808, lng: -118.3090 },
  },
  {
    slug: "water-heater-services-glendale",
    name: "Glendale",
    shortName: "Glendale",
    zip: ["91201", "91202", "91203", "91204", "91205", "91206"],
    description: "Water heater services in Glendale — multi-family experts, hillside specialists, tankless conversions.",
    localContent:
      "Glendale's mix of valley single-family homes and hillside condos each need a different approach. Hillside Glendale homes often need recirculation pumps for instant hot water at the master bath. Valley apartment buildings often need cascade tankless systems. Our techs are licensed, background-checked, and have serviced over a thousand Glendale properties.",
    challenges: [
      "Hillside long pipe runs need recirculation",
      "Multi-family central tankless cascade systems",
      "Older Verdugo Hills homes with limited gas line size",
      "HOA approval coordination for condos",
    ],
    nearby: ["Burbank", "Pasadena", "Eagle Rock", "Atwater Village"],
    population: "196,000+",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop&q=80",
    coordinates: { lat: 34.1425, lng: -118.2551 },
  },
];

export const LOCATION_BY_SLUG = Object.fromEntries(LOCATIONS.map(l => [l.slug, l]));

/**
 * Additional LA areas we serve but don't have dedicated pages for yet.
 * Render these as plain text (not links) wherever we list service areas.
 */
export const ADDITIONAL_AREAS: string[] = [
  "Studio City",
  "Sherman Oaks",
  "Encino",
  "Tarzana",
  "Woodland Hills",
  "North Hollywood",
  "Toluca Lake",
  "Van Nuys",
  "West Hollywood",
  "Westwood",
  "Brentwood",
  "Culver City",
  "Marina del Rey",
  "Venice",
  "Mar Vista",
  "Silver Lake",
  "Echo Park",
  "Los Feliz",
  "Downtown LA",
  "Mid-Wilshire",
  "Hancock Park",
  "Koreatown",
  "Atwater Village",
  "Eagle Rock",
  "Highland Park",
  "Reseda",
  "Northridge",
  "Granada Hills",
  "Calabasas",
  "Agoura Hills",
  "Malibu",
  "Pacific Palisades",
  "Manhattan Beach",
  "Hermosa Beach",
  "Redondo Beach",
  "El Segundo",
  "Inglewood",
  "Playa Vista",
  "La Cañada Flintridge",
  "La Crescenta",
  "Tujunga",
  "Montrose",
  "Chatsworth",
  "Porter Ranch",
];
