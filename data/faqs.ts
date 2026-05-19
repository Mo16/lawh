export interface FAQ { q: string; a: string; }

export const FAQS: Record<string, FAQ[]> = {
  general: [
    { q: "How quickly can you get to my home?", a: "Our average response time across Los Angeles is 30 minutes. For non-emergency installs, we offer same-day or next-day appointments based on your preference." },
    { q: "Are you licensed and insured?", a: "Yes. We're fully licensed (Lic. #984574), bonded, and carry full liability and workers' compensation insurance." },
    { q: "Do you offer free estimates?", a: "Yes. Every installation and replacement quote is free, in-home, and in writing — with no obligation." },
    { q: "What's your service area?", a: "We serve all of Los Angeles including Hollywood, Beverly Hills, Santa Monica, Pasadena, Burbank, Glendale, and surrounding communities." },
    { q: "Do you offer financing?", a: "Yes. We offer flexible monthly payment plans from as low as $89/mo on qualifying installations, with terms up to 60 months. Apply in 60 seconds with a soft credit pull — no impact to your score." },
    { q: "What forms of payment do you accept?", a: "We accept all major credit cards, debit, ACH, checks, and financing. Payment due upon job completion unless on a financing plan." },
  ],
  tank: [
    { q: "How long does a tank water heater last?", a: "Most tank water heaters last 8-12 years. With annual maintenance (flushing, anode rod replacement), you can extend that to 15+ years." },
    { q: "How much does a new tank water heater cost installed?", a: "A standard 50-gallon gas water heater installation typically runs $2,195-$2,895 depending on brand, code upgrades needed, and any gas line modifications. We provide a free in-home written quote." },
    { q: "Should I repair or replace my water heater?", a: "If your unit is under 8 years old with a single isolated issue, repair usually makes sense. If it's over 10 years old, leaking, or you've had multiple repairs in the past 2 years, replacement is more cost-effective long-term." },
    { q: "Can you install a water heater the same day I call?", a: "Yes — same-day installation is available on most standard tank water heaters. We carry the most common sizes (40, 50, 75 gallon) on our trucks for immediate install." },
    { q: "What size water heater do I need?", a: "For most LA homes: 1-2 people = 40 gallon, 3-4 people = 50 gallon, 5+ people = 75 gallon. We assess hot water demand patterns during the free in-home estimate." },
  ],
  tankless: [
    { q: "How much does tankless installation cost?", a: "A like-for-like tankless replacement starts at $3,495. A full tank-to-tankless conversion (including gas line upsize and venting) starts at $4,995. We file all rebate paperwork to offset cost." },
    { q: "How much can I save in rebates?", a: "LA homeowners qualify for up to $1,900 in combined utility (SoCalGas, LADWP) and manufacturer rebates. We handle all paperwork on your behalf." },
    { q: "Will tankless really save me money?", a: "Yes. Tankless units are 24-34% more efficient than tank heaters according to the DOE. Most LA homeowners save $80-$200 per year on gas bills, plus tankless lasts 20+ years vs 10-12 for tank." },
    { q: "Why does my tankless need annual descaling?", a: "LA's hard water leaves mineral scale on the heat exchanger, reducing efficiency and eventually causing failure. Annual descaling is required by the manufacturer to maintain warranty validity." },
    { q: "Can I get instant hot water with tankless?", a: "Yes — with a recirculation pump (built into Navien NPE-A2 and Rinnai RUR series, or added externally on others). This eliminates the wait for hot water at faraway fixtures." },
  ],
  emergency: [
    { q: "Are emergency calls more expensive?", a: "No. We charge the same rates 24/7 — no overtime, weekend, or holiday surcharges. Same upfront pricing whether you call at 2pm or 2am." },
    { q: "What's considered an emergency?", a: "Active leaks, no hot water, gas odors near the heater, water damage in progress, complete pilot failure during cold weather. If hot water is essential and your unit is down — call us." },
    { q: "Can you replace my water heater overnight?", a: "Yes, we offer same-night replacement when needed. We carry the most common units on our trucks for immediate install." },
    { q: "Should I shut off my water heater myself?", a: "If you smell gas — leave the home and call us from outside. If actively leaking — shut off the cold inlet valve at the top of the tank and the gas/electric supply. We'll guide you over the phone." },
  ],
  maintenance: [
    { q: "How often should I service my water heater?", a: "Annual flushing for tank heaters is recommended. Tankless units require annual descaling, and many manufacturers require it for warranty validity." },
    { q: "What does a maintenance service include?", a: "Tank: full flush, anode rod inspection/replacement, T&P valve test, thermostat calibration, burner cleaning. Tankless: full descaling, inlet filter cleaning, burner inspection, error log review, performance test." },
    { q: "Do I need maintenance if my unit seems fine?", a: "Yes. Sediment and scale buildup happen gradually, slowly reducing efficiency before causing failure. Annual maintenance prevents 80% of premature water heater failures." },
    { q: "What's a maintenance plan?", a: "Our annual maintenance plans ($179 tank/$189 tankless) include the yearly service plus priority dispatch, 10% off any repairs, and waived diagnostic fees on emergency calls." },
  ],
};

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Sarah K.", location: "Hollywood", rating: 5,
    text: "Called at 7am with a leaking water heater. Tech arrived by 8:15, had a new unit in by noon. Upfront pricing, totally professional, and took the old one away. Best service experience I've had with any contractor in LA.",
    service: "Water Heater Replacement", date: "2 weeks ago",
  },
  {
    name: "Michael R.", location: "Beverly Hills", rating: 5,
    text: "Replaced our old 50-gallon with a Navien tankless. The team handled all the rebate paperwork and we got $1,400 back from SoCalGas. Endless hot water and our gas bill is down $90/month. Worth every penny.",
    service: "Tankless Conversion", date: "1 month ago",
  },
  {
    name: "Jennifer L.", location: "Santa Monica", rating: 5,
    text: "Our tankless threw an error code Sunday night. They came out within an hour, descaled the heat exchanger, and had us back to hot water by 9pm. No emergency surcharge either. These guys are the real deal.",
    service: "Emergency Tankless Repair", date: "3 weeks ago",
  },
  {
    name: "David M.", location: "Pasadena", rating: 5,
    text: "Old Bradford White finally died in our 1924 Craftsman. They navigated the tight closet space like pros, did the gas line upsize, and pulled all the historic district permits. Same-day install. Couldn't be happier.",
    service: "Water Heater Installation", date: "2 months ago",
  },
  {
    name: "Lisa T.", location: "Burbank", rating: 5,
    text: "Family of 5 always running out of hot water. They sized us up to a 75-gallon Rheem and now everyone can shower in the morning without anyone going cold. Same-day install, no mess left behind.",
    service: "Water Heater Replacement", date: "5 weeks ago",
  },
  {
    name: "Robert C.", location: "Glendale", rating: 5,
    text: "Hillside home in Glendale needed a recirculation pump — endless waiting for hot water at the master bath. They installed a Navien NPE-A2 with built-in recirc. Instant hot water now. The tech explained everything clearly. 10/10.",
    service: "Tankless Installation", date: "6 weeks ago",
  },
  {
    name: "Amanda P.", location: "West Hollywood", rating: 5,
    text: "My gas water heater pilot kept going out. Two other plumbers told me I needed a new unit. LA Water Heaters diagnosed it as a $40 thermocouple, replaced it in 20 minutes. Honest people are hard to find. Customer for life.",
    service: "Water Heater Repair", date: "3 months ago",
  },
  {
    name: "James W.", location: "Studio City", rating: 5,
    text: "Annual maintenance on our 4-year-old tankless. Tech showed me photos of the scale buildup before/after descaling. Now it heats noticeably faster. Worth the $189 — definitely doing this every year.",
    service: "Tankless Maintenance", date: "2 weeks ago",
  },
];
