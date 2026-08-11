import { site } from "@/config/site";

export default function Contact() {
  return (
    <section className="hero" data-testid="contact-page">
      <div className="school-tag">Get in touch</div>
      <h1 className="page-title" data-testid="contact-title">
        Contact
      </h1>
      <p className="tagline">Questions, coordination & enquiries — details coming soon.</p>
      <div style={{ marginTop: 24 }}>
        <a
          className="mini-btn"
          href={site.urls.instagram}
          target="_blank"
          rel="noopener"
          data-testid="contact-instagram-link"
        >
          Follow {site.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
