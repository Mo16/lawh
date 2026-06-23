import {
  Flame, Wrench, RefreshCw, ShieldCheck, Zap, Settings, AlertTriangle,
  Droplet, Clock, Phone, Star, CheckCircle2, DollarSign, Award, Users,
  type LucideIcon,
} from "lucide-react";

const REGISTRY: Record<string, LucideIcon> = {
  Flame, Wrench, RefreshCw, ShieldCheck, Zap, Settings, AlertTriangle,
  Droplet, Clock, Phone, Star, CheckCircle2, DollarSign, Award, Users,
};

export const ICON_NAMES = Object.keys(REGISTRY);

export function getIcon(name: string): LucideIcon {
  return REGISTRY[name] ?? Flame;
}
