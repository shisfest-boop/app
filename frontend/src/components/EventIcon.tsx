import {
  Mic2,
  Mic,
  Newspaper,
  HelpCircle,
  Drama as DramaIcon,
  Lightbulb,
  PackageSearch,
  Microscope,
  Clapperboard,
  LineChart,
  Rocket,
  Calculator,
  MessagesSquare,
  Megaphone,
  Mountain,
  Globe,
  Speaker,
  Users,
  Paintbrush,
  Paintbrush2,
  Shirt,
  Flower2,
  Zap,
  Brain,
  type LucideIcon,
} from "lucide-react";

// Distinct icon per individual event (finer-grained than the shared
// category icon) for quicker visual scanning of the events grid.
const eventIconMap: Record<string, LucideIcon> = {
  "slam-poetry": Mic2,
  "news-reading": Newspaper,
  quizzeria: HelpCircle,
  prashnottri: HelpCircle,
  "ekal-abhinay": DramaIcon,
  "samachaar-vachan": Newspaper,
  "innovative-idea": Lightbulb,
  "mystery-box": PackageSearch,
  "lab-detective": Microscope,
  bioflix: Clapperboard,
  econquest: LineChart,
  "vision-to-venture": Rocket,
  "complexity-precision-quiz": Calculator,
  "complexity-precision-symposium": MessagesSquare,
  "talking-titans": Megaphone,
  "tell-a-geo-tale": Mountain,
  "lingua-quest": Globe,
  "ad-lingo": Speaker,
  "vocal-vibes": Mic,
  tamasha: Users,
  "art-attack": Paintbrush,
  "what-a-colour": Paintbrush2,
  "dress-design": Shirt,
  "classical-dance-solo": Flower2,
  "rhythm-revolution": Zap,
  "mind-matters": Brain,
};

interface EventIconProps {
  eventId: string;
  size?: number;
  className?: string;
}

export const EventIcon = ({ eventId, size = 16, className }: EventIconProps) => {
  const Icon = eventIconMap[eventId];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
};
