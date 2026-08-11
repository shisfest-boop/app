import { Clock, Sparkles, Award } from "lucide-react";
import { site } from "@/config/site";

const timelineSteps = [
  {
    time: site.eventDetails.reportingTime,
    title: "Reporting Time",
    desc: "All participants must report to the venue and complete check-in.",
    icon: Clock,
  },
  {
    time: site.eventDetails.date,
    title: "Competitions",
    desc: site.schedule.competitionsNote,
    icon: Sparkles,
  },
  {
    time: site.eventDetails.date,
    title: "Closing Ceremony",
    desc: site.schedule.closingCeremony,
    icon: Award,
  },
];

export const FestSchedule = () => (
  <section data-testid="fest-schedule">
    <div className="cta-heading">
      <h2>Fest Schedule</h2>
      <div className="line" />
    </div>

    <div className="timeline" data-testid="schedule-timeline">
      {timelineSteps.map((step, i) => (
        <div
          className="timeline-item"
          key={step.title}
          style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          data-testid={`timeline-step-${i}`}
        >
          <div className="timeline-marker">
            <span className="timeline-icon-badge">
              <step.icon size={14} strokeWidth={1.75} />
            </span>
            {i < timelineSteps.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <span className="timeline-time">{step.time}</span>
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-desc">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="dress-code" data-testid="dress-code-callout">
      <div className="dress-code-label">Dress Code</div>
      <ul className="dress-code-list">
        {site.schedule.dressCode.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </div>

    <p className="schedule-note" data-testid="trophy-note">
      {site.schedule.trophyNote}
    </p>
  </section>
);
