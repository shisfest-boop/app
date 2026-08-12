import { useState } from "react";
import { Link } from "react-router-dom";
import { events, EventData } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { EventModal } from "@/components/EventModal";

const featuredIds = ["slam-poetry", "tamasha", "bioflix", "rhythm-revolution"];

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
      </div>

      <Link to="/events" className="mini-btn" data-testid="events-preview-view-all">
        View all {events.length} events →
      </Link>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};
