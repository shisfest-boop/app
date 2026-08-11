import { Clock, ClipboardCheck, Coffee, Sparkles, Flame, Award, Sunset } from "lucide-react";
import { site } from "@/config/site";

const timelineSteps = [
  {
    time: "8:00 a.m.",
    title: "Arrival",
    desc: "Doors open and the morning begins — arrive on the SHISFEST'26 campus, take in the buzz, and get ready for a day full of stories, ideas and friendly competition.",
    icon: Clock,
  },
  {
    time: "By 8:30 a.m.",
    title: "Registration",
    desc: "Head to the registration desk to check in your team, collect your participant kit, and get pointed toward your first stop of the day.",
    icon: ClipboardCheck,
  },
  {
    title: "Breakfast",
    desc: "A warm breakfast to start things off right — because every great performance deserves a full plate and a moment to settle in before the day begins.",
    icon: Coffee,
  },
  {
    title: "Opening Ceremony",
    desc: "The festival officially comes alive — a welcome from the school, a first look at the day ahead, and the spark that sets the tone for everything that follows.",
    icon: Sparkles,
  },
  {
    title: "Competitions",
    desc: "The heart of SHISFEST'26 — running throughout the day, across languages, sciences, arts and more, as students take the stage to think, create and compete.",
    icon: Flame,
  },
  {
    title: "Prize Distribution",
    desc: "The moment everyone's been working toward — winners are called up, achievements are celebrated, and the day's best efforts finally get their spotlight.",
    icon: Award,
  },
  {
    title: "Fest Concludes",
    desc: "As the applause settles, SHISFEST'26 draws to a close — full of memories, new friendships, and the quiet satisfaction of a day well spent.",
    icon: Sunset,
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
            {step.time && <span className="timeline-time">{step.time}</span>}
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
