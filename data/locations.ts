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
