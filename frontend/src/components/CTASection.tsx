import { site } from "@/config/site";
import { PassCard } from "@/components/PassCard";

export const CTASection = () => (
  <section data-testid="cta-section">
    <div className="cta-heading">
      <h2>What are you here for?</h2>
      <div className="line" />
    </div>

    <PassCard
      num="01 — MAIN GATE"
      label="Explore SHISFEST"
      sub="Competitions, rules, schedule & everything else"
      href={site.urls.eventWebsite}
      variant="primary"
      delay={0.9}
      testId="cta-explore"
    />

    <PassCard
      num="—"
      label="Competition Details"
      href={site.urls.competitionDetails}
      delay={0.95}
      testId="cta-competition-details"
    />

    <div className="group-label">Registration</div>
    <div className="reg-group">
      <PassCard
        num="02"
        label="School Registration"
        href={site.urls.groupRegistration}
        delay={1.0}
        testId="cta-school-registration"
      />
      <PassCard
        num="03"
        label="Register Individually"
        href={site.urls.individualRegistration}
        delay={1.1}
        testId="cta-individual-registration"
      />
    </div>

    <div className="group-label">Get in touch</div>
    <PassCard
      num="04"
      label="Contact Us"
      sub="Questions, coordination & enquiries"
      href={site.urls.contact}
      delay={1.2}
      testId="cta-contact"
    />

    <div className="group-label">More</div>
    <PassCard
      num="05"
      label="Follow us on Instagram"
      href={site.urls.instagram}
      delay={1.3}
      testId="cta-instagram"
    />

    <div className="guidance" data-testid="cta-guidance">
      <div className="q">Not sure where to start?</div>
      <p>
        Explore SHISFEST to discover competitions, rules, schedules and everything you need to
        participate.
      </p>
      <a
        className="mini-btn"
        href={site.urls.eventWebsite}
        target="_blank"
        rel="noopener"
        data-testid="cta-guidance-link"
      >
        Explore the event →
      </a>
    </div>
  </section>
);
