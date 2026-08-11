import {
  BookOpen,
  ScrollText,
  Mic,
  FlaskConical,
  TrendingUp,
  Briefcase,
  Sigma,
  Globe,
  Languages,
  Palette,
  Drama as DramaIcon,
  Footprints,
  Music,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { EventCategory } from "@/data/events";

const categoryIconMap: Record<EventCategory, LucideIcon> = {
  English: BookOpen,
  Sanskrit: ScrollText,
  Hindi: Mic,
  Science: FlaskConical,
  Economics: TrendingUp,
  Commerce: Briefcase,
  Mathematics: Sigma,
  "Social Science": Globe,
  "Foreign Language": Languages,
  Art: Palette,
  Drama: DramaIcon,
  Dance: Footprints,
  Music: Music,
  Psychology: Brain,
};

interface CategoryIconProps {
  category: EventCategory;
  size?: number;
  className?: string;
}

export const CategoryIcon = ({ category, size = 13, className }: CategoryIconProps) => {
  const Icon = categoryIconMap[category];
  return <Icon size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
};
