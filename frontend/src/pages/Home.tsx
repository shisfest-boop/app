import { Hero } from "@/components/Hero";
import { EventsPreview } from "@/components/EventsPreview";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <EventsPreview />
      <CTASection />
    </div>
  );
}
