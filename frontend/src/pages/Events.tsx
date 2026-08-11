import { useMemo, useState } from "react";
import { events, eventCategories, EventData } from "@/data/events";
import { site } from "@/config/site";
import { EventCard } from "@/components/EventCard";
import { EventModal } from "@/components/EventModal";
import { DirectoryTable } from "@/components/DirectoryTable";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [view, setView] = useState<"grid" | "directory">("grid");

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

      <div style={{ marginTop: 18 }}>
        <a
          className="mini-btn"
          href={site.urls.rulebookPdf}
          target="_blank"
          rel="noopener"
          download
          data-testid="download-rulebook-link"
        >
          Download Full Rulebook (PDF) →
        </a>
      </div>

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

      <div className="view-toggle" data-testid="view-toggle">
        <button
          type="button"
          className={`event-filter-chip ${view === "grid" ? "active" : ""}`}
          onClick={() => setView("grid")}
          data-testid="view-toggle-grid"
        >
          Grid
        </button>
        <button
          type="button"
          className={`event-filter-chip ${view === "directory" ? "active" : ""}`}
          onClick={() => setView("directory")}
          data-testid="view-toggle-directory"
        >
          Directory
        </button>
      </div>

      {view === "grid" ? (
        <div className="events-grid" data-testid="events-grid">
          {filteredEvents.map((event, i) => (
            <EventCard key={event.id} event={event} delay={0.04 * (i % 8)} onView={setSelectedEvent} />
          ))}
        </div>
      ) : (
        <DirectoryTable events={filteredEvents} />
      )}

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
