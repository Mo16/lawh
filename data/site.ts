export interface SiteData {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneTel: string;
  phoneDisplay: string;
  email: string;
  address: { street: string; city: string; state: string; zip: string; full: string };
  founded: number;
  years: number;
  rating: number;
  reviewCount: number;
  hours: string;
  social: { yelp: string };
  trustBadges: string[];
  bbb: string;
}
