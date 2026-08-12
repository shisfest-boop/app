import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { events, EventData } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { EventModal } from "@/components/EventModal";

const featuredIds = ["slam-poetry", "tamasha", "bioflix"];

export const EventsPreview = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const featured = featuredIds
    .map((id) => events.find((e) => e.id === id))
    .filter((e): e is EventData => Boolean(e));

  return (
    <section data-testid="events-preview">
      <div className="cta-heading">
        <h2>The line-up</h2>
        <div className="line" />
      </div>

      <div className="events-grid events-grid-preview" data-testid="events-preview-grid">
        {featured.map((event, i) => (
          <EventCard key={event.id} event={event} delay={0.7 + i * 0.08} onView={setSelectedEvent} />
        ))}
        <Link
          to="/events"
          className="event-card view-all-card"
          style={{ animationDelay: `${0.7 + featured.length * 0.08}s` }}
          data-testid="events-preview-view-all"
        >
          <ArrowRight size={22} className="view-all-card-icon" />
          <span className="view-all-card-title">View All {events.length} Events</span>
          <span className="view-all-card-sub">See the full line-up →</span>
        </Link>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};
