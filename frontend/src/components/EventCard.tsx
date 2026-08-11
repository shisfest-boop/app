import { EventData } from "@/data/events";

interface EventCardProps {
  event: EventData;
  delay?: number;
  onView: (event: EventData) => void;
}

const getSummary = (event: EventData): string => {
  const text =
    event.intro?.[0] ||
    event.sections[0]?.paragraphs?.[0] ||
    event.sections[0]?.bullets?.[0] ||
    event.note ||
    "";
  return text.length > 130 ? `${text.slice(0, 130).trimEnd()}…` : text;
};

export const EventCard = ({ event, delay = 0, onView }: EventCardProps) => (
  <article
    className="event-card"
    style={{ animationDelay: `${delay}s` }}
    data-testid={`event-card-${event.id}`}
  >
    <div className="event-card-top">
      <span className="event-card-tag" data-testid={`event-card-category-${event.id}`}>
        {event.category}
      </span>
      <span className="event-card-grades">Grade {event.eligibleGrades}</span>
    </div>

    <h3 className="event-card-title" data-testid={`event-card-title-${event.id}`}>
      {event.title}
    </h3>
    {event.nativeTitle && (
      <div className="event-card-native" lang="hi">
        {event.nativeTitle}
      </div>
    )}

    <p className="event-card-desc" data-testid={`event-card-desc-${event.id}`}>
      {getSummary(event)}
    </p>

    <div className="event-card-foot">
      <span className="event-card-participants">{event.participants}</span>
      <button
        type="button"
        className="event-card-btn"
        onClick={() => onView(event)}
        data-testid={`view-event-btn-${event.id}`}
      >
        View Event →
      </button>
    </div>
  </article>
);
