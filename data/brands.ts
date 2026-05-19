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

export const BRANDS: BrandData[] = [
  {
    slug: "rheem-water-heater",
    name: "Rheem",
    shortName: "Rheem",
    category: "tank",
    tagline: "America's #1 selling water heater brand",
    description:
      "Rheem has been heating American homes since 1925. Today they're the largest water heater manufacturer in the country, known for the Performance Plus and Marathon lines that LA homeowners trust for daily reliability and Energy Star efficiency.",
    metaDescription: "Rheem water heater installation and repair in Los Angeles. Authorized installer. Same-day service. Call (818) 555-0173.",
    primaryKeyword: "rheem water heater los angeles",
    logo: "Rheem",
    domain: "rheem.com",
    logoUrl: "/assets/img/brands/rheem.png",
    models: [
      { name: "Performance Plus 40-gal", capacity: "40 gallons", bestFor: "Small to medium homes, 2-3 people" },
      { name: "Performance Platinum 50-gal", capacity: "50 gallons", bestFor: "Standard LA homes, 3-4 people" },
      { name: "Marathon 75-gal", capacity: "75 gallons", bestFor: "Large homes, 5+ people" },
      { name: "Professional Prestige Hybrid", capacity: "50-80 gallons", bestFor: "Energy Star homes" },
    ],
    whyChoose: [
      "America's #1 selling water heater brand",
      "Energy Star certified models available",
      "12-year tank warranty on Marathon line",
      "Wide availability of replacement parts",
      "Strong recovery rate vs competitors",
      "Excellent for hard water with Marathon non-metallic tank",
    ],
    commonIssues: [
      "Pilot light failure (thermocouple)",
      "Sediment buildup needing flush",
      "Anode rod corrosion at year 5-7",
      "Thermostat calibration drift",
      "Electric heating element failure (electric models)",
    ],
    weServices: [
      "Performance Plus full line",
      "Performance Platinum",
      "Marathon high-efficiency",
      "Professional Prestige hybrid",
      "Tankless RTGH and RTG series",
      "Commercial GHE series",
    ],
    warranty: "6-12 year tank warranty depending on model. Marathon line carries lifetime tank warranty.",
    origin: "Atlanta, Georgia (since 1925)",
    rating: "4.5/5 from 12,000+ reviews",
  },
  {
    slug: "ao-smith-water-heater",
    name: "A.O. Smith",
    shortName: "A.O. Smith",
    category: "tank",
    tagline: "100+ years of water heating innovation",
    description:
      "A.O. Smith has been engineering reliable water heaters since 1874. Their Signature Series and ProLine Master models are top picks for LA homes that need long-term durability. Known for some of the strongest tank warranties in the industry.",
    metaDescription: "A.O. Smith water heater installation and repair in Los Angeles. Authorized installer. Same-day service. Call (818) 555-0173.",
    primaryKeyword: "ao smith water heater los angeles",
    logo: "A.O. Smith",
    domain: "aosmith.com",
    logoUrl: "/assets/img/brands/aosmith.png",
    models: [
      { name: "Signature 40-gal", capacity: "40 gallons", bestFor: "Apartments, condos" },
      { name: "Signature Premier 50-gal", capacity: "50 gallons", bestFor: "Most LA single-family homes" },
      { name: "ProLine Master 75-gal", capacity: "75 gallons", bestFor: "Large homes, 4+ bathrooms" },
      { name: "Voltex Hybrid Heat Pump", capacity: "50-80 gallons", bestFor: "Maximum efficiency homes" },
    ],
    whyChoose: [
      "100+ years of manufacturing heritage",
      "Up to 10-year tank warranty on premium lines",
      "Industry-leading Voltex hybrid efficiency",
      "Stainless steel option available",
      "Energy Star certified across most lines",
      "Strong commercial line for restaurants and hotels",
    ],
    commonIssues: [
      "Sensor errors on premium electronic models",
      "Hybrid heat pump fan motor wear",
      "Anode rod degradation at year 6-8",
      "Pilot ignition issues on older units",
    ],
    weServices: [
      "Signature Series tank water heaters",
      "ProLine Master commercial-grade",
      "Voltex Hybrid Heat Pump",
      "Cyclone XHE high-efficiency",
      "Commercial Cyclone series",
    ],
    warranty: "6-10 year tank warranty depending on model. Voltex hybrid carries 10-year tank.",
    origin: "Milwaukee, Wisconsin (since 1874)",
    rating: "4.4/5 from 8,000+ reviews",
  },
  {
    slug: "bradford-white-water-heater",
    name: "Bradford White",
    shortName: "Bradford White",
    category: "tank",
    tagline: "Built to last, sold only through trade pros",
    description:
      "Bradford White is the contractor's choice — these units are sold only through licensed plumbing professionals, never big-box stores. Their Defender Safety System® and HydroJet® sediment reduction make them a favorite for LA homes that get a lot of hard water.",
    metaDescription: "Bradford White water heater installation and repair in Los Angeles. Authorized installer. Call (818) 555-0173.",
    primaryKeyword: "bradford white water heater los angeles",
    logo: "Bradford White",
    domain: "bradfordwhite.com",
    logoUrl: "/assets/img/brands/bradfordwhite.webp",
    models: [
      { name: "Defender Safety System 40-gal", capacity: "40 gallons", bestFor: "Standard install with FVIR safety" },
      { name: "RG250T6N 50-gal", capacity: "50 gallons", bestFor: "Most residential LA homes" },
      { name: "ICON HydroJet 75-gal", capacity: "75 gallons", bestFor: "Larger homes, hard water areas" },
      { name: "AeroTherm Hybrid", capacity: "50-80 gallons", bestFor: "Energy-conscious homeowners" },
    ],
    whyChoose: [
      "Sold only through licensed pros — no DIY units",
      "Defender Safety System® on every model",
      "HydroJet® reduces sediment buildup",
      "ICON System® intelligent control",
      "Made in the USA",
      "Trade-favorite reliability",
    ],
    commonIssues: [
      "FVIR flame arrester clogging (lint buildup)",
      "ICON board electronic failures",
      "Sediment despite HydroJet (hard water areas)",
      "Anode rod replacement at year 6-8",
    ],
    weServices: [
      "Defender Safety System full line",
      "ICON HydroJet series",
      "AeroTherm Hybrid Heat Pump",
      "RE Series electric",
      "Commercial Atmospheric/Power Vent",
    ],
    warranty: "6-10 year tank warranty. AeroTherm hybrid carries 10-year tank.",
    origin: "Ambler, Pennsylvania (since 1881)",
    rating: "4.6/5 from 6,000+ reviews",
  },
  {
    slug: "navien-tankless-water-heater",
    name: "Navien",
    shortName: "Navien",
    category: "tankless",
    tagline: "The #1 condensing tankless brand in North America",
    description:
      "Navien revolutionized tankless with the world's first condensing tankless water heater. Their NPE-A2 and NPE-S2 models are the most popular tankless installations in LA — known for high efficiency, quiet operation, and long lifespan.",
    metaDescription: "Navien tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
    primaryKeyword: "navien tankless water heater los angeles",
    logo: "Navien",
    domain: "navieninc.com",
    logoUrl: "/assets/img/brands/navien.png",
    models: [
      { name: "NPE-150A2", capacity: "5.6 GPM", bestFor: "Small homes, 1-2 bathrooms" },
      { name: "NPE-180A2", capacity: "8 GPM", bestFor: "Medium homes, 2-3 bathrooms" },
      { name: "NPE-210A2", capacity: "9.8 GPM", bestFor: "Most LA homes, 3 bathrooms" },
      { name: "NPE-240A2", capacity: "11.2 GPM", bestFor: "Large homes, 4+ bathrooms" },
    ],
    whyChoose: [
      "#1 condensing tankless brand in North America",
      "Built-in recirculation pump option (A2 series)",
      "ComfortFlow® technology eliminates cold water sandwich",
      "Up to 0.97 UEF — exceptional efficiency",
      "15-year heat exchanger warranty",
      "Whisper-quiet operation",
    ],
    commonIssues: [
      "Error code 16 (overheat) — usually scale buildup",
      "Error code 11 — ignition failure",
      "Error code 38 — flow sensor",
      "Error code 90/99 — flame loss",
      "Annual descaling required for warranty",
    ],
    weServices: [
      "NPE-A2 series (with recirculation)",
      "NPE-S2 series (without recirculation)",
      "NCB-H combi boilers",
      "NHB high-efficiency boilers",
      "Annual descaling service",
    ],
    warranty: "15-year heat exchanger, 5-year parts warranty",
    origin: "South Korea (US HQ in Irvine, CA)",
    rating: "4.7/5 from 9,000+ reviews",
  },
  {
    slug: "rinnai-tankless-water-heater",
    name: "Rinnai",
    shortName: "Rinnai",
    category: "tankless",
    tagline: "America's #1 selling tankless water heater brand",
    description:
      "Rinnai has sold more tankless water heaters in America than any other brand. Their RU and RUR series are workhorse units known for durability, quick recovery, and easy serviceability. The choice for LA homeowners who want a tankless that just works.",
    metaDescription: "Rinnai tankless water heater installation and repair in LA. Authorized installer. Up to $1,900 in rebates. Call (818) 555-0173.",
    primaryKeyword: "rinnai tankless water heater los angeles",
    logo: "Rinnai",
    domain: "rinnai.us",
    logoUrl: "/assets/img/brands/rinnai.png",
    models: [
      { name: "V53DeP", capacity: "5.3 GPM", bestFor: "Small homes, condos" },
      { name: "V75iN", capacity: "7.5 GPM", bestFor: "Medium homes, 2 bathrooms" },
      { name: "RU160iN", capacity: "9 GPM", bestFor: "Most LA homes" },
      { name: "RU199iN", capacity: "11 GPM", bestFor: "Large homes, 4+ bathrooms" },
      { name: "RUR199iN", capacity: "11 GPM (with recirc)", bestFor: "Premium installs with instant hot water" },
    ],
    whyChoose: [
      "America's #1 selling tankless brand",
      "Available with built-in recirculation (RUR)",
      "Easy serviceability — favored by techs",
      "Wi-Fi control with Control-R app",
      "Quiet operation",
      "Reliable parts availability",
    ],
    commonIssues: [
      "Error 11 — no ignition (gas supply or igniter)",
      "Error 12 — flame failure during operation",
      "Error 14 — overheat protection",
      "Error 90 — combustion abnormal",
      "Annual descaling required",
    ],
    weServices: [
      "V Series (entry-level)",
      "RU Series (mid-tier)",
      "RUR Series with recirculation",
      "RX Series commercial",
      "Annual descaling service",
    ],
    warranty: "12-year heat exchanger, 5-year parts warranty",
    origin: "Nagoya, Japan (US HQ in Peachtree City, GA)",
    rating: "4.6/5 from 11,000+ reviews",
  },
];

export const BRAND_BY_SLUG = Object.fromEntries(BRANDS.map(b => [b.slug, b]));
