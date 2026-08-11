import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { events, EventData } from "@/data/events";
import { EventIcon } from "@/components/EventIcon";
import { CategoryIcon } from "@/components/CategoryIcon";

// Fixed for every competition — standardised per the official invite,
// not sourced per-event. Venue is deliberately left as "TBA" until the
// school confirms it; do not invent a value here.
const REPORTING_TIME = "8:00 a.m., 10th October 2026";
const VENUE = "TBA";

const getFullDescription = (event: EventData): string => {
  if (event.intro?.length) return event.intro.join(" ");
  if (event.sections[0]?.paragraphs?.length) return event.sections[0].paragraphs.join(" ");
  if (event.sections[0]?.bullets?.length) return event.sections[0].bullets[0];
  return event.note ?? "";
};

export default function Directory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const handleChange = (value: string) => {
    setQuery(value);
    setSearchParams(value ? { q: value } : {}, { replace: true });
  };

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return events;
    return events.filter(
      (e) => e.title.toLowerCase().includes(term) || e.category.toLowerCase().includes(term),
    );
  }, [query]);

  const toggleRow = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="hero" data-testid="directory-page">
      <div className="school-tag">Quick Lookup</div>
      <h1 className="page-title" data-testid="directory-title">
        Competition Directory
      </h1>
      <p className="tagline">Search any of the {events.length} competitions by name or category.</p>

      <div className="directory-search" data-testid="directory-search-wrap">
        <Search size={15} className="directory-search-icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by name or category…"
          aria-label="Search competitions"
          className="directory-search-input"
          data-testid="directory-search-input"
        />
      </div>

      <p className="directory-count" data-testid="directory-results-count">
        Showing {filtered.length} of {events.length} competitions
      </p>

      <div className="accordion" data-testid="directory-accordion">
        {filtered.map((event) => {
          const isOpen = expanded.has(event.id);
          return (
            <div className="accordion-row" key={event.id} data-testid={`accordion-row-${event.id}`}>
              <button
                type="button"
                className="accordion-header"
                onClick={() => toggleRow(event.id)}
                aria-expanded={isOpen}
                data-testid={`accordion-toggle-${event.id}`}
              >
                <span className="accordion-header-label">
                  <EventIcon eventId={event.id} size={16} className="accordion-icon" />
                  {event.title}
                </span>
                <ChevronDown size={16} className={`accordion-chevron ${isOpen ? "open" : ""}`} />
              </button>

              <div className={`accordion-body-wrap ${isOpen ? "open" : ""}`}>
                <div className="accordion-body-inner">
                  <div className="accordion-body" data-testid={`accordion-body-${event.id}`}>
                    <div className="accordion-tags">
                      <span className="event-card-tag">
                        <CategoryIcon category={event.category} size={12} className="event-card-tag-icon" />
                        {event.category}
                      </span>
                      {event.nativeTitle && (
                        <span className="accordion-native" lang="hi">
                          {event.nativeTitle}
                        </span>
                      )}
                    </div>

                    <p className="accordion-desc">{getFullDescription(event)}</p>

                    <div className="info-list" style={{ marginTop: 14 }}>
                      <div className="info-row">
                        <span className="info-label">Participants</span>
                        <span className="info-value">{event.participants}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Venue</span>
                        <span className="info-value">{VENUE}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">Reporting Time</span>
                        <span className="info-value">{REPORTING_TIME}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="accordion-empty" data-testid="directory-empty-state">
            No competitions match "{query}". Try a different name or category.
          </p>
        )}
      </div>
    </section>
  );
}
