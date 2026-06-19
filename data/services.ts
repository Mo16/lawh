import { Flame, Wrench, RefreshCw, ShieldCheck, Zap, Settings, AlertTriangle, type LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
  hero: {
    headline: string;
    subheadline: string;
    image: string;
  };
  problemSolution: {
    problems: string[];
    solutions: string[];
  };
  whatsIncluded: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  whyUs: string[];
  pricing?: { label: string; price: string; note: string }[];
  signs?: { title: string; items: string[] };
  comparison?: { title: string; columns: { name: string; items: string[] }[] };
  faqKey: "tank" | "tankless" | "emergency" | "maintenance" | "general";
}

const stockHero = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&h=1000&fit=crop&q=80";
const tanklessHero = "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&h=1000&fit=crop&q=80";
const repairHero = "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&h=1000&fit=crop&q=80";
const installHero = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop&q=80";

export const SERVICES: ServiceData[] = [
  // ── TANK ──
  {
    slug: "water-heater-services",
    title: "Water Heater Services in Los Angeles",
    h1: "Water Heater Services in Los Angeles",
    badge: "Service Pillar",
    shortDesc: "Complete tank water heater installation, repair, replacement, and maintenance — all major brands, same-day service.",
    metaDescription: "Expert water heater services in Los Angeles. Installation, repair, replacement, and maintenance for all tank water heaters. Same-day service. Call (818) 555-0173.",
    primaryKeyword: "water heater services los angeles ca",
    intent: "Commercial",
    category: "tank",
    icon: Flame,
    hero: {
      headline: "Los Angeles' #1 Rated Water Heater Specialists",
      subheadline: "Same-day installation, repair, and replacement for tank water heaters. All major brands. Licensed, insured, and 24/7 emergency ready.",
      image: stockHero,
    },
    problemSolution: {
      problems: ["No hot water", "Tank leaking", "Pilot light won't stay lit", "Rusty hot water", "High energy bills", "Water heater past 10 years old"],
      solutions: ["Same-day diagnosis and repair", "Full replacement with new energy-efficient unit", "Emergency leak containment", "Anode rod replacement", "Tank flushing and maintenance", "Tankless conversion options"],
    },
    whatsIncluded: [
      { title: "Free Inspection", desc: "Licensed technician diagnoses your water heater on-site at no cost." },
      { title: "Upfront Pricing", desc: "Written quote before any work begins. The price never changes." },
      { title: "Same-Day Service", desc: "Most repairs and installations completed in a single visit." },
      { title: "All Brands Serviced", desc: "Rheem, AO Smith, Bradford White, Navien, Rinnai, Noritz, and more." },
      { title: "Permit & Code Compliance", desc: "We handle all permits and ensure city-code compliance." },
      { title: "Workmanship Warranty", desc: "5-year warranty on all installation labor." },
    ],
    process: [
      { step: "1", title: "Call or Book Online", desc: "Speak with a real person — no phone trees, no runaround." },
      { step: "2", title: "Free On-Site Diagnosis", desc: "Licensed tech arrives within hours and diagnoses on the spot." },
      { step: "3", title: "Upfront Written Quote", desc: "Clear price and scope before any work begins." },
      { step: "4", title: "Same-Day Repair or Install", desc: "Most jobs completed in a single visit, fully warrantied." },
    ],
    whyUs: [
      "20+ years serving Los Angeles",
      "Licensed & insured",
      "30-minute average response time",
      "4.9-star rating, 819+ reviews",
      "Same-day service guaranteed",
      "100% satisfaction or your money back",
    ],
    faqKey: "tank",
  },
  {
    slug: "water-heater-installation",
    title: "Water Heater Installation in Los Angeles",
    h1: "Water Heater Installation in Los Angeles",
    badge: "Installation",
    shortDesc: "Professional new water heater installation. Tank, tankless, gas, and electric. Same-day install, full warranty.",
    metaDescription: "Water heater installation in Los Angeles. New tank water heaters installed same-day. All brands, all sizes. Free estimate. Call (818) 555-0173.",
    primaryKeyword: "water heater installation los angeles",
    intent: "Transactional",
    category: "tank",
    icon: Wrench,
    hero: {
      headline: "Same-Day Water Heater Installation",
      subheadline: "New tank water heater installed today. Free in-home estimate, upfront pricing, fully permitted, and code-compliant.",
      image: installHero,
    },
    problemSolution: {
      problems: ["Building a new home or addition", "Replacing an aging unit before it fails", "Upgrading to a larger capacity tank", "Switching from electric to gas", "Need an Energy Star certified model"],
      solutions: ["New 40, 50, 75, or 100 gallon tank install", "Gas line modification or new run", "Expansion tank installation", "Pan and drain installation", "Permit pulling and inspection coordination", "Old unit removal and disposal"],
    },
    whatsIncluded: [
      { title: "Free In-Home Estimate", desc: "We assess your space, capacity needs, and existing connections." },
      { title: "Premium Brand Selection", desc: "Choose from Rheem, AO Smith, Bradford White, and more." },
      { title: "Permit & Inspection", desc: "We pull permits and coordinate city inspection." },
      { title: "Old Unit Haul-Away", desc: "Your old water heater removed and disposed responsibly." },
      { title: "Earthquake Strapping", desc: "California-code compliant double strapping included." },
      { title: "Full Warranty", desc: "Manufacturer + 5-year labor warranty." },
    ],
    process: [
      { step: "1", title: "Free In-Home Estimate", desc: "Licensed tech assesses sizing, fuel type, and venting needs." },
      { step: "2", title: "Choose Your Unit", desc: "We recommend the right size, brand, and efficiency rating." },
      { step: "3", title: "Same-Day Installation", desc: "Old unit out, new unit in — typically 3-4 hours." },
      { step: "4", title: "Inspection & Walk-Through", desc: "We test everything, walk you through the unit, and pull final permits." },
    ],
    whyUs: [
      "Same-day installation available",
      "Authorized installer for all major brands",
      "Permits pulled, inspections coordinated",
      "Earthquake strapping included",
      "5-year labor warranty on all installs",
      "Financing available — apply in 60 seconds",
    ],
    pricing: [
      { label: "40-Gallon Gas Install", price: "From $1,895", note: "Standard install, replacement of like-for-like" },
      { label: "50-Gallon Gas Install", price: "From $2,195", note: "Most common LA home size" },
      { label: "75-Gallon Gas Install", price: "From $2,795", note: "Larger homes, 4+ bathrooms" },
    ],
    faqKey: "tank",
  },
  {
    slug: "water-heater-repair",
    title: "Water Heater Repair in Los Angeles",
    h1: "Water Heater Repair in Los Angeles",
    badge: "Repair",
    shortDesc: "Same-day water heater repair. Pilot light, thermostat, leaks, no hot water — diagnosed and fixed today.",
    metaDescription: "Water heater repair in Los Angeles. Same-day diagnosis and repair. All brands, all issues. Licensed plumbers. Call (818) 555-0173.",
    primaryKeyword: "water heater repair los angeles",
    intent: "Transactional",
    category: "tank",
    icon: Settings,
    hero: {
      headline: "Same-Day Water Heater Repair",
      subheadline: "No hot water? Tank leaking? Strange noises? Our licensed plumbers diagnose and fix it — usually in a single visit.",
      image: repairHero,
    },
    problemSolution: {
      problems: ["No hot water at all", "Pilot light won't stay lit", "Water is rusty or smells", "Tank making popping noises", "Leaking from the base", "Thermostat not working"],
      solutions: ["Pilot light + thermocouple repair", "Heating element replacement", "Thermostat replacement", "Anode rod replacement", "Tank flush + sediment removal", "Gas valve repair"],
    },
    whatsIncluded: [
      { title: "Free On-Site Diagnosis", desc: "Real diagnosis from a licensed plumber, not a guess." },
      { title: "Same-Day Repair", desc: "Most repairs completed in a single visit." },
      { title: "Repair vs Replace Honesty", desc: "If replacement is cheaper long-term, we'll tell you." },
      { title: "OEM Parts", desc: "Manufacturer-grade parts, not knockoffs." },
      { title: "1-Year Repair Warranty", desc: "Workmanship guaranteed for 12 months." },
      { title: "Upfront Pricing", desc: "Quote before we touch anything. Price never changes." },
    ],
    process: [
      { step: "1", title: "Call Us", desc: "Describe the issue — we'll dispatch the right tech." },
      { step: "2", title: "On-Site Diagnosis", desc: "Tech arrives, diagnoses, and quotes — for free." },
      { step: "3", title: "Same-Day Repair", desc: "Most issues fixed in a single 1-2 hour visit." },
      { step: "4", title: "Tested & Warrantied", desc: "We verify it's working and back the repair for 12 months." },
    ],
    whyUs: [
      "30-minute average response time",
      "Free diagnosis on every service call",
      "Licensed plumbers",
      "All brands, all models repaired",
      "1-year repair warranty included",
      "No overtime or weekend surcharges",
    ],
    signs: {
      title: "Signs You Need Water Heater Repair",
      items: ["No hot water", "Lukewarm water only", "Hot water runs out fast", "Rusty/discolored hot water", "Popping or rumbling sounds", "Water pooling near the base", "Pilot light keeps going out", "Higher gas/electric bill"],
    },
    faqKey: "tank",
  },
  {
    slug: "water-heater-replacement",
    title: "Water Heater Replacement in Los Angeles",
    h1: "Water Heater Replacement in Los Angeles",
    badge: "Replacement",
    shortDesc: "Old water heater past its prime? Same-day replacement with energy-efficient new unit. Old one hauled away.",
    metaDescription: "Water heater replacement in Los Angeles. Same-day swap. Energy-efficient new units. Old unit removed. Call (818) 555-0173.",
    primaryKeyword: "water heater replacement los angeles",
    intent: "Transactional",
    category: "tank",
    icon: RefreshCw,
    hero: {
      headline: "Same-Day Water Heater Replacement",
      subheadline: "Aging unit failing? We swap it for a new energy-efficient model — usually in a single afternoon.",
      image: stockHero,
    },
    problemSolution: {
      problems: ["Water heater is 10+ years old", "Tank is leaking from the bottom", "Repeated repairs adding up", "Rusty hot water from the tap", "Energy bills climbing", "Hot water runs out quickly"],
      solutions: ["Same-day full replacement", "Upgrade to high-efficiency model", "Conversion to tankless option", "Larger capacity if you need more hot water", "Old unit removal and recycling", "Earthquake strapping included"],
    },
    whatsIncluded: [
      { title: "Old Unit Removal", desc: "We disconnect, drain, and haul away your old water heater." },
      { title: "New High-Efficiency Unit", desc: "Energy Star certified options to lower your bills." },
      { title: "Upfront Quote", desc: "Total replacement cost in writing before we start." },
      { title: "All Hardware Included", desc: "New flex lines, T&P valve, drain pan, expansion tank if needed." },
      { title: "Same-Day Completion", desc: "Most replacements done in 3-4 hours start to finish." },
      { title: "Warranty Transfer", desc: "Full manufacturer warranty plus 5-year labor on our install." },
    ],
    process: [
      { step: "1", title: "Free On-Site Quote", desc: "We assess your old unit, sizing needs, and any code upgrades." },
      { step: "2", title: "Choose Your New Unit", desc: "We recommend the right brand, size, and efficiency rating." },
      { step: "3", title: "Same-Day Swap", desc: "Old unit out, new unit in, all connections rebuilt." },
      { step: "4", title: "Test & Walk-Through", desc: "We verify performance and walk you through the new unit." },
    ],
    whyUs: [
      "Same-day replacement guaranteed",
      "Old unit removal included",
      "Energy Star certified options",
      "Full permit handling",
      "Earthquake strapping included",
      "Easy monthly payments from $89/mo",
    ],
    comparison: {
      title: "Repair vs Replace — Honest Guidance",
      columns: [
        { name: "Repair Makes Sense", items: ["Unit is under 8 years old", "Single isolated issue", "No corrosion or leaking", "Repair cost under 50% of new"] },
        { name: "Replace Makes Sense", items: ["Unit is 10+ years old", "Tank is leaking", "Multiple repairs in past 2 years", "Rusty water from hot tap", "Energy bills climbing"] },
      ],
    },
    faqKey: "tank",
  },
  {
    slug: "water-heater-maintenance",
    title: "Water Heater Maintenance & Tune-Up in Los Angeles",
    h1: "Water Heater Maintenance in Los Angeles",
    badge: "Maintenance",
    shortDesc: "Annual flush, anode rod inspection, and full tune-up. Extend your water heater's life by 5+ years.",
    metaDescription: "Water heater maintenance in Los Angeles. Annual flush, anode rod check, full inspection. Extend lifespan by years. Call (818) 555-0173.",
    primaryKeyword: "water heater maintenance los angeles",
    intent: "Commercial",
    category: "tank",
    icon: ShieldCheck,
    hero: {
      headline: "Annual Water Heater Tune-Up",
      subheadline: "Catch problems before they become emergencies. Our annual maintenance extends your water heater's life by 5+ years and saves on energy.",
      image: stockHero,
    },
    problemSolution: {
      problems: ["Sediment building up in tank", "Anode rod fully corroded", "Energy bills climbing slowly", "Hot water taking longer to recover", "Hard water scaling on heating elements", "Tank not flushed in years"],
      solutions: ["Full tank flush and sediment removal", "Anode rod inspection and replacement", "T&P valve testing", "Thermostat calibration", "Gas/electric component check", "Full safety inspection"],
    },
    whatsIncluded: [
      { title: "Complete Tank Flush", desc: "Full sediment removal — restores efficiency and reduces noise." },
      { title: "Anode Rod Inspection", desc: "Replaced if corroded — adds 5+ years to tank life." },
      { title: "T&P Valve Test", desc: "Critical safety valve — tested and replaced if faulty." },
      { title: "Thermostat Calibration", desc: "Set to safe and efficient 120°F." },
      { title: "Burner & Vent Cleaning", desc: "Clean burner assembly and check vent for safety." },
      { title: "Written Inspection Report", desc: "Detailed report on tank condition and any concerns." },
    ],
    process: [
      { step: "1", title: "Schedule Annual Service", desc: "Pick a time that works — we'll send a reminder yearly." },
      { step: "2", title: "Full Inspection", desc: "Tech inspects every component and documents condition." },
      { step: "3", title: "Flush & Service", desc: "Tank flush, anode check, all components serviced." },
      { step: "4", title: "Report & Recommendations", desc: "Written report with photos and any concerns to address." },
    ],
    whyUs: [
      "Maintenance plans starting at $179/year",
      "Detailed photo inspection report",
      "Same-tech yearly visits available",
      "Discount on any needed repairs",
      "Priority emergency service for plan members",
      "Extends warranty validity",
    ],
    faqKey: "maintenance",
  },
  {
    slug: "emergency-water-heater-repair",
    title: "Emergency Water Heater Repair — 24/7 Service in LA",
    h1: "24/7 Emergency Water Heater Repair",
    badge: "24/7 Emergency",
    shortDesc: "Tank leaking? No hot water at midnight? We respond 24/7 with 30-minute average arrival time.",
    metaDescription: "24/7 emergency water heater repair in Los Angeles. 30-minute response. Burst tanks, leaks, no hot water. Call (818) 555-0173 now.",
    primaryKeyword: "emergency water heater repair los angeles",
    intent: "Transactional",
    category: "tank",
    icon: AlertTriangle,
    hero: {
      headline: "Water Heater Emergency? We're On the Way.",
      subheadline: "30-minute average response, 24/7. Burst tanks, no hot water, gas leaks — we handle it all immediately.",
      image: repairHero,
    },
    problemSolution: {
      problems: ["Tank actively leaking water", "No hot water during a cold morning", "Gas smell near the heater", "Pilot light won't stay lit", "Water heater making banging sounds", "Hot water tap producing rust-colored water"],
      solutions: ["Emergency shutoff and containment", "Same-night repair on most issues", "Emergency replacement available", "Gas leak isolation and repair", "Water damage prevention", "Honest repair vs replace decision"],
    },
    whatsIncluded: [
      { title: "30-Minute Average Response", desc: "We dispatch the closest available tech immediately." },
      { title: "24/7 Availability", desc: "Nights, weekends, holidays — same price." },
      { title: "Emergency Containment", desc: "We stop active leaks and prevent water damage." },
      { title: "No Overtime Charges", desc: "Same upfront pricing 2pm or 2am." },
      { title: "Same-Night Repair", desc: "Most issues fixed before we leave." },
      { title: "Emergency Replacement Stock", desc: "We carry common units on the truck for same-day swap." },
    ],
    process: [
      { step: "1", title: "Call Now", desc: "Real person answers, dispatch begins immediately." },
      { step: "2", title: "Tech En Route", desc: "30-minute average arrival across LA." },
      { step: "3", title: "Stabilize & Diagnose", desc: "Stop leaks, isolate hazards, diagnose root cause." },
      { step: "4", title: "Fix or Replace Tonight", desc: "Most jobs completed before we leave." },
    ],
    whyUs: [
      "30-minute average response across LA",
      "Same price 24/7 — no overtime fees",
      "Emergency replacement units in stock",
      "Licensed for gas line emergencies",
      "Direct insurance documentation",
      "Trusted by LA homeowners since 2008",
    ],
    faqKey: "emergency",
  },

  // ── TANKLESS ──
  {
    slug: "tankless-water-heater-services",
    title: "Tankless Water Heater Services in Los Angeles",
    h1: "Tankless Water Heater Services in Los Angeles",
    badge: "Tankless Pillar",
    shortDesc: "Endless hot water, lower bills, smaller footprint. Tankless install, repair, and conversion.",
    metaDescription: "Tankless water heater services in LA. Installation, repair, replacement. Up to $1,900 in rebates. Call (818) 555-0173.",
    primaryKeyword: "tankless water heater services los angeles",
    intent: "Commercial",
    category: "tankless",
    icon: Zap,
    hero: {
      headline: "Endless Hot Water. Half the Bills.",
      subheadline: "Tankless water heater installation, repair, and conversion. Save up to $1,900 in rebates. We handle the paperwork.",
      image: tanklessHero,
    },
    problemSolution: {
      problems: ["Running out of hot water", "High monthly energy bills", "Old tank takes too much space", "Constantly waiting for hot water", "Tank life expired", "Want a more efficient system"],
      solutions: ["Brand new tankless installation", "Tank-to-tankless conversion", "Recirculation pump for instant hot water", "Gas line upsize if needed", "Rebate paperwork handled", "All major brands installed"],
    },
    whatsIncluded: [
      { title: "Free In-Home Assessment", desc: "We size the right unit for your hot water demand and home layout." },
      { title: "Authorized Brand Install", desc: "Navien, Rinnai, Noritz, Takagi — full manufacturer warranty." },
      { title: "Gas Line Upsize", desc: "Most LA homes need a 3/4\" or 1\" line — included if required." },
      { title: "Concentric Venting", desc: "Code-compliant venting through wall or roof." },
      { title: "Rebate Paperwork", desc: "We handle utility + manufacturer rebate forms." },
      { title: "12-Year Warranty Options", desc: "Top units come with 12-15 year heat exchanger warranty." },
    ],
    process: [
      { step: "1", title: "Free Assessment", desc: "We measure flow demand, gas line size, and venting options." },
      { step: "2", title: "Recommend Right Unit", desc: "Sized for your peak demand — typically 11 or 9.8 GPM." },
      { step: "3", title: "Professional Install", desc: "1-day install for most homes. Old tank removed." },
      { step: "4", title: "Rebate Filing", desc: "We file all rebate paperwork on your behalf." },
    ],
    whyUs: [
      "Authorized installer for top brands",
      "Up to $1,900 in rebates handled for you",
      "Same-day install on most homes",
      "Permit + inspection coordination",
      "12-year heat exchanger warranty available",
      "Flexible monthly payments from $89/mo",
    ],
    faqKey: "tankless",
  },
  {
    slug: "tankless-water-heater-installation",
    title: "Tankless Water Heater Installation in Los Angeles",
    h1: "Tankless Water Heater Installation in Los Angeles",
    badge: "Tankless Install",
    shortDesc: "New tankless install or tank-to-tankless conversion. Up to $1,900 in rebates. Same-day completion.",
    metaDescription: "Tankless water heater installation in LA. Same-day. All major brands. Up to $1,900 in rebates. Call (818) 555-0173.",
    primaryKeyword: "tankless water heater installation los angeles",
    intent: "Transactional",
    category: "tankless",
    icon: Zap,
    hero: {
      headline: "Tankless Installation Done Right",
      subheadline: "Endless hot water, 30% lower bills, 20+ year lifespan. Professional installation with full rebate handling.",
      image: tanklessHero,
    },
    problemSolution: {
      problems: ["First-time tankless installation", "Converting from tank to tankless", "Adding a tankless to a new build", "Multi-unit installation for high demand", "Need recirculation for instant hot water", "Existing tankless dead, needs replacement"],
      solutions: ["Standard tankless install (3-5 hours)", "Full tank-to-tankless conversion (1 day)", "Gas line upgrade to 3/4\" or 1\"", "Concentric venting installation", "Recirculation pump add-on", "All permits and inspections handled"],
    },
    whatsIncluded: [
      { title: "Free On-Site Assessment", desc: "We size the right unit for your home's flow demand." },
      { title: "Premium Brand Install", desc: "Navien NPE-A2, Rinnai RU199e, Noritz NRC, Takagi T-H3." },
      { title: "Gas Line Modification", desc: "Most LA homes need an upsize — included in quote." },
      { title: "Stainless Steel Venting", desc: "Through-wall or rooftop venting, code-compliant." },
      { title: "Rebate Filing", desc: "$1,000+ in utility rebates filed for you." },
      { title: "12-15 Year Warranty", desc: "Premium units come with extended heat exchanger warranty." },
    ],
    process: [
      { step: "1", title: "Free In-Home Assessment", desc: "We measure flow demand, gas, venting, electrical." },
      { step: "2", title: "Sizing & Recommendation", desc: "Right unit for your peak demand — 9.8 to 11 GPM typical." },
      { step: "3", title: "Same-Day Install", desc: "3-5 hours for direct swaps, 6-8 for conversions." },
      { step: "4", title: "Rebate + Warranty Setup", desc: "We file all paperwork for rebates and register your warranty." },
    ],
    whyUs: [
      "Factory-authorized for Navien, Rinnai, Noritz",
      "Up to $1,900 in rebates handled",
      "Same-day install on most homes",
      "12-year extended warranty options",
      "Earthquake strap + permit included",
      "Easy monthly payments from $89/mo",
    ],
    pricing: [
      { label: "Like-for-Like Tankless Swap", price: "From $3,495", note: "Replacing existing tankless" },
      { label: "Tank-to-Tankless Conversion", price: "From $4,995", note: "Includes gas line, venting, conversion" },
      { label: "Premium Install w/ Recirculation", price: "From $6,495", note: "Adds instant hot water pump" },
    ],
    faqKey: "tankless",
  },
  {
    slug: "tankless-water-heater-repair",
    title: "Tankless Water Heater Repair in Los Angeles",
    h1: "Tankless Water Heater Repair in Los Angeles",
    badge: "Tankless Repair",
    shortDesc: "Error codes, ignition issues, scale buildup, no hot water — same-day tankless repair for all brands.",
    metaDescription: "Tankless water heater repair in LA. Same-day repair for Navien, Rinnai, Noritz, Takagi. All error codes. Call (818) 555-0173.",
    primaryKeyword: "tankless water heater repair los angeles",
    intent: "Transactional",
    category: "tankless",
    icon: Settings,
    hero: {
      headline: "Same-Day Tankless Repair",
      subheadline: "Error code on the display? No hot water? We repair Navien, Rinnai, Noritz, Takagi, and more — usually in one visit.",
      image: repairHero,
    },
    problemSolution: {
      problems: ["Error code 11, 12, 16, 90, 99 etc.", "Unit ignites then shuts off", "No hot water at all", "Reduced flow rate", "Cold water sandwich effect", "Heat exchanger scaled"],
      solutions: ["Full diagnostic + error code reading", "Heat exchanger flushing/descaling", "Ignition system repair", "Flow sensor replacement", "Gas valve repair", "Control board replacement"],
    },
    whatsIncluded: [
      { title: "Diagnostic Reading", desc: "We read the error history and pinpoint the issue." },
      { title: "Same-Day Repair", desc: "Most repairs completed in a single 1-2 hour visit." },
      { title: "OEM Parts", desc: "Manufacturer parts only — no aftermarket knockoffs." },
      { title: "Descaling Service", desc: "Hard water scale removed from heat exchanger." },
      { title: "Error History Cleared", desc: "We reset and verify the unit runs clean." },
      { title: "1-Year Repair Warranty", desc: "Workmanship warrantied for 12 months." },
    ],
    process: [
      { step: "1", title: "Call With Error Code", desc: "Tell us the brand and code — we'll bring the right parts." },
      { step: "2", title: "On-Site Diagnostic", desc: "Tech reads error history and verifies root cause." },
      { step: "3", title: "Same-Day Fix", desc: "Most repairs done in one visit, parts on the truck." },
      { step: "4", title: "Test & Verify", desc: "We run the unit through full cycles to confirm." },
    ],
    whyUs: [
      "Certified on Navien, Rinnai, Noritz, Takagi",
      "Common parts stocked on every truck",
      "Same-day descaling service available",
      "1-year workmanship warranty",
      "Free diagnostic with repair",
      "30-minute average response",
    ],
    faqKey: "tankless",
  },
  {
    slug: "tankless-water-heater-replacement",
    title: "Tankless Water Heater Replacement in Los Angeles",
    h1: "Tankless Water Heater Replacement in Los Angeles",
    badge: "Tankless Replacement",
    shortDesc: "Old tankless dead or failing? Same-day replacement with new high-efficiency unit. Old unit removed.",
    metaDescription: "Tankless water heater replacement in LA. Same-day swap. New unit installed, old one removed. Call (818) 555-0173.",
    primaryKeyword: "tankless water heater replacement los angeles",
    intent: "Transactional",
    category: "tankless",
    icon: RefreshCw,
    hero: {
      headline: "Same-Day Tankless Replacement",
      subheadline: "When repair stops making sense, we swap your old tankless for a new high-efficiency unit — usually in a single visit.",
      image: tanklessHero,
    },
    problemSolution: {
      problems: ["Tankless 12+ years old", "Heat exchanger failed", "Multiple repairs adding up", "Want a higher GPM unit", "Switching brands", "Existing unit no longer meets code"],
      solutions: ["Same-day full swap", "Upgrade to higher GPM unit", "Brand switch with proper venting", "Recirculation add-on at install", "Old unit removed and recycled", "Full warranty on new unit"],
    },
    whatsIncluded: [
      { title: "Old Unit Removal", desc: "We disconnect, drain, and haul away your old tankless." },
      { title: "New High-Efficiency Unit", desc: "Energy Star certified, all major brands available." },
      { title: "Venting Adjustment", desc: "Re-vent if brand or size requires different routing." },
      { title: "Gas Line Verified", desc: "We confirm gas line size meets new unit requirements." },
      { title: "Same-Day Swap", desc: "Direct replacements done in 3-4 hours." },
      { title: "Warranty Transfer", desc: "Full manufacturer + 5-year labor warranty." },
    ],
    process: [
      { step: "1", title: "Free Quote", desc: "We assess existing setup and recommend right replacement." },
      { step: "2", title: "Choose New Unit", desc: "Same brand, brand switch, or upgrade in capacity." },
      { step: "3", title: "Same-Day Swap", desc: "Old out, new in, all connections verified." },
      { step: "4", title: "Test & Register", desc: "Full performance test plus manufacturer registration." },
    ],
    whyUs: [
      "Same-day replacement available",
      "All major brands stocked",
      "Old unit removal included",
      "Warranty transfer handled",
      "5-year labor warranty",
      "Flexible payment plans available",
    ],
    faqKey: "tankless",
  },
  {
    slug: "tankless-water-heater-maintenance",
    title: "Tankless Water Heater Maintenance & Descaling in LA",
    h1: "Tankless Maintenance & Descaling",
    badge: "Tankless Maintenance",
    shortDesc: "Annual descaling, filter cleaning, and full tune-up. Critical for LA's hard water — keeps your warranty valid.",
    metaDescription: "Tankless water heater maintenance in LA. Annual descaling, filter cleaning. Required for warranty. Call (818) 555-0173.",
    primaryKeyword: "tankless water heater maintenance los angeles",
    intent: "Commercial",
    category: "tankless",
    icon: ShieldCheck,
    hero: {
      headline: "Annual Tankless Descaling Service",
      subheadline: "LA's hard water is hard on tankless units. Our annual descaling service keeps your unit running peak — and keeps your warranty valid.",
      image: tanklessHero,
    },
    problemSolution: {
      problems: ["Hard water scale building up", "Reduced flow rate over time", "Slower hot water recovery", "Warranty requires annual service", "Higher gas bills", "Error codes starting to appear"],
      solutions: ["Full vinegar/citric acid descaling", "Inlet filter cleaning", "Burner inspection", "Vent inspection", "Error log review", "Full safety check"],
    },
    whatsIncluded: [
      { title: "Heat Exchanger Descaling", desc: "Full circulation flush removes hard water scale." },
      { title: "Inlet Filter Cleaning", desc: "Critical filter cleaned to restore flow." },
      { title: "Burner & Igniter Check", desc: "Cleaned and inspected for safety and efficiency." },
      { title: "Vent Inspection", desc: "Checked for blockages, condensate damage, or leaks." },
      { title: "Error Log Review", desc: "We pull and review the unit's error history." },
      { title: "Maintenance Record", desc: "Documented service to maintain manufacturer warranty." },
    ],
    process: [
      { step: "1", title: "Schedule Service", desc: "Annual reminder optional — we'll text you yearly." },
      { step: "2", title: "Descaling Setup", desc: "Tech sets up circulation pump with descaling solution." },
      { step: "3", title: "Full Service", desc: "60-90 min descale + filter clean + full inspection." },
      { step: "4", title: "Verification & Report", desc: "Performance test plus written maintenance record." },
    ],
    whyUs: [
      "Required for manufacturer warranty",
      "Maintenance plans starting $189/year",
      "Same-tech yearly visits",
      "Documented for warranty claims",
      "Discount on any needed parts",
      "Priority emergency service",
    ],
    faqKey: "maintenance",
  },

  // ── AUDIENCE / USE CASE PAGES ──
  {
    slug: "commercial-water-heater-services",
    title: "Commercial Water Heater Services in Los Angeles",
    h1: "Commercial Water Heater Services in Los Angeles",
    badge: "Commercial",
    shortDesc: "Restaurants, hotels, multi-family. Commercial water heater install, repair, and maintenance with minimal downtime.",
    metaDescription: "Commercial water heater services in LA. Restaurants, hotels, multi-family. Same-day. Call (818) 555-0173.",
    primaryKeyword: "commercial water heater service los angeles",
    intent: "Commercial",
    category: "audience",
    icon: Wrench,
    hero: {
      headline: "Commercial Water Heater Specialists",
      subheadline: "Restaurants, hotels, gyms, apartments. We minimize downtime with after-hours service and emergency capacity.",
      image: stockHero,
    },
    problemSolution: {
      problems: ["Restaurant kitchen lost hot water mid-service", "Hotel guests with no hot water", "Apartment building boiler failed", "High-demand commercial unit needs replacement", "Recirculation system issues", "Code compliance for new build-out"],
      solutions: ["After-hours emergency service", "Commercial 100-199 gallon installs", "Multi-unit cascade systems", "Recirculation pump install/repair", "Code-compliant commercial venting", "Rapid replacement for income-critical operations"],
    },
    whatsIncluded: [
      { title: "After-Hours Service", desc: "We work nights to avoid disrupting your business." },
      { title: "Commercial Sizing", desc: "Rinnai/Noritz commercial cascade up to 1,200 GPM." },
      { title: "Backup Unit Loaner", desc: "Temporary unit to keep operations running while we fix yours." },
      { title: "Code-Compliant Install", desc: "Full LADBS permits, health inspector ready." },
      { title: "Service Contracts", desc: "Annual maintenance contracts for property managers." },
      { title: "Multi-Property Discounts", desc: "Volume pricing for property managers and landlords." },
    ],
    process: [
      { step: "1", title: "Site Survey", desc: "We assess demand, fuel, venting, and code requirements." },
      { step: "2", title: "Engineered Quote", desc: "Detailed scope with timing to minimize business impact." },
      { step: "3", title: "After-Hours Install", desc: "We work overnight to avoid disrupting operations." },
      { step: "4", title: "Service Contract", desc: "Optional ongoing maintenance for peak performance." },
    ],
    whyUs: [
      "20+ years on commercial properties",
      "After-hours and weekend installs",
      "Property manager pricing",
      "Multi-location service",
      "Emergency loaner units available",
      "LADBS permit and code experts",
    ],
    faqKey: "general",
  },
  {
    slug: "residential-water-heater-services",
    title: "Residential Water Heater Services in Los Angeles",
    h1: "Residential Water Heater Services in Los Angeles",
    badge: "Residential",
    shortDesc: "Homeowners, condos, townhomes. Tank or tankless install, repair, and replacement. Free in-home estimate.",
    metaDescription: "Residential water heater services in LA. Tank, tankless, all brands. Free estimate. Call (818) 555-0173.",
    primaryKeyword: "residential water heater service los angeles",
    intent: "Commercial",
    category: "audience",
    icon: Flame,
    hero: {
      headline: "Trusted by 819+ LA Homeowners",
      subheadline: "Whether you need a quick repair, full replacement, or upgrade to tankless — we're the team thousands of LA homeowners trust.",
      image: stockHero,
    },
    problemSolution: {
      problems: ["First-time water heater replacement", "Single-family home install", "Condo HOA-compliant install", "Townhome tight-space install", "Garage to closet relocation", "Adding capacity for growing family"],
      solutions: ["Free in-home estimate", "All sizes from 30 to 100 gallons", "HOA-friendly install with documentation", "Tight-space retrofit specialists", "Tankless conversion for space savings", "Same-day completion on most jobs"],
    },
    whatsIncluded: [
      { title: "Free In-Home Estimate", desc: "Real quote, real person, no obligation." },
      { title: "All Major Brands", desc: "Rheem, AO Smith, Bradford White, Navien, Rinnai, Noritz." },
      { title: "Tight-Space Specialists", desc: "Closets, attics, garages, exterior — we install everywhere." },
      { title: "Earthquake Compliance", desc: "Double strapping included on every install." },
      { title: "HOA Documentation", desc: "We provide all docs for HOA approval." },
      { title: "5-Year Labor Warranty", desc: "Backed by our workmanship guarantee." },
    ],
    process: [
      { step: "1", title: "Free Home Visit", desc: "Tech assesses your home's needs and recommends options." },
      { step: "2", title: "Choose Your Unit", desc: "Tank, tankless, brand, capacity — your call with our guidance." },
      { step: "3", title: "Same-Day Install", desc: "Most installs completed in 3-5 hours." },
      { step: "4", title: "Walk-Through & Warranty", desc: "Full system walk-through and warranty registration." },
    ],
    whyUs: [
      "Trusted by 819+ LA homeowners",
      "Free in-home estimates",
      "Same-day install on most jobs",
      "All brands, all sizes, all setups",
      "5-year labor warranty included",
      "Flexible payment plans available",
    ],
    faqKey: "general",
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map(s => [s.slug, s]));
