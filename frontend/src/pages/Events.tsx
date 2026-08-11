import { useMemo, useState } from "react";
import { events, eventCategories, EventData } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { EventModal } from "@/components/EventModal";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const filteredEvents = useMemo(
    () => (activeCategory === "All" ? events : events.filter((e) => e.category === activeCategory)),
    [activeCategory],
  );

  return (
    <section className="hero" data-testid="events-page">
      <div className="school-tag">Competitions</div>
      <h1 className="page-title" data-testid="events-title">
        Events
      </h1>
      <p className="tagline">
        {events.length} competitions across languages, sciences, arts & more — pick one to see the
        full rules.
      </p>

      <div className="event-filters" data-testid="event-category-filters">
        <button
          type="button"
          className={`event-filter-chip ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => setActiveCategory("All")}
          data-testid="event-filter-all"
        >
          All
        </button>
        {eventCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`event-filter-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
            data-testid={`event-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="events-grid" data-testid="events-grid">
        {filteredEvents.map((event, i) => (
          <EventCard key={event.id} event={event} delay={0.04 * (i % 8)} onView={setSelectedEvent} />
        ))}
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
