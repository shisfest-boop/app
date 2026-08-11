import { Link } from "react-router-dom";

const previewEvents = [
  { num: "01", label: "Music & Dance", sub: "Details coming soon" },
  { num: "02", label: "Literary & Debate", sub: "Details coming soon" },
  { num: "03", label: "Art & Theatre", sub: "Details coming soon" },
];

export const EventsPreview = () => (
  <section data-testid="events-preview">
    <div className="cta-heading">
      <h2>The line-up</h2>
      <div className="line" />
    </div>
    {previewEvents.map((e, i) => (
      <Link
        key={e.num}
        to="/events"
        className="pass secondary"
        style={{ animationDelay: `${0.7 + i * 0.08}s` }}
        data-testid={`event-preview-card-${e.num}`}
      >
        <div className="perf" />
        <div>
          <div className="num">{e.num}</div>
          <div className="label">{e.label}</div>
          <div className="sub">{e.sub}</div>
        </div>
        <span className="arrow">→</span>
      </Link>
    ))}
  </section>
);
