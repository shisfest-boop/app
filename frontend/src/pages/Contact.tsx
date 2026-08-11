import { site } from "@/config/site";
import { PassCard } from "@/components/PassCard";

export default function Contact() {
  return (
    <section className="hero" data-testid="contact-page">
      <div className="school-tag">Get in touch</div>
      <h1 className="page-title" data-testid="contact-title">
        Contact
      </h1>
      <p className="tagline">Everything you need to plan your visit and register for SHISFEST'26.</p>

      <div className="cta-heading">
        <h2>Event Details</h2>
        <div className="line" />
      </div>
      <div className="info-list" data-testid="event-details-list">
        <div className="info-row" data-testid="event-detail-date">
          <span className="info-label">Date</span>
          <span className="info-value">{site.eventDetails.date}</span>
        </div>
        <div className="info-row" data-testid="event-detail-deadline">
          <span className="info-label">Registration Deadline</span>
          <span className="info-value">{site.eventDetails.registrationDeadline}</span>
        </div>
        <div className="info-row" data-testid="event-detail-venue">
          <span className="info-label">Venue</span>
          <span className="info-value">{site.eventDetails.venue}</span>
        </div>
        <div className="info-row" data-testid="event-detail-reporting">
          <span className="info-label">Reporting Time</span>
          <span className="info-value">{site.eventDetails.reportingTime}</span>
        </div>
      </div>

      <div className="cta-heading">
        <h2>Get in Touch</h2>
        <div className="line" />
      </div>
      <PassCard
        num="—"
        label="Email Us"
        sub={site.contactEmail}
        href={site.urls.email}
        delay={0.2}
        testId="contact-email"
      />
      <PassCard
        num="—"
        label={`Follow ${site.instagramHandle}`}
        sub="Updates, reminders & behind-the-scenes"
        href={site.urls.instagram}
        delay={0.28}
        testId="contact-instagram"
      />
      <div className="info-list" style={{ marginTop: 14 }} data-testid="teacher-incharge-list">
        <div className="info-row" data-testid="teacher-incharge-row">
          <span className="info-label">Teacher In-Charge</span>
          <span className="info-value">{site.teacherInCharge}</span>
        </div>
      </div>

      <div className="group-label">Registration</div>
      <div className="reg-group">
        <PassCard
          num="01"
          label="School Registration"
          href={site.urls.groupRegistration}
          delay={0.4}
          testId="contact-school-registration"
        />
        <PassCard
          num="02"
          label="Register Individually"
          href={site.urls.individualRegistration}
          delay={0.48}
          testId="contact-individual-registration"
        />
      </div>
    </section>
  );
}
