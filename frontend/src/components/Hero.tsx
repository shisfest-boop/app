import { site } from "@/config/site";

export const Hero = () => (
  <section className="hero" data-testid="home-hero">
    <img src={site.logos.fest} alt="SHISFEST Logo" className="hero-logo" data-testid="hero-logo" />
    <div className="school-tag">{site.heroTag}</div>
    <h1 className="title" data-testid="hero-title">
      SHISFEST<span className="yr">'26</span>
    </h1>
    <p className="tagline" data-testid="hero-tagline">
      {site.tagline}
    </p>
    <div className="meta-row" data-testid="hero-meta">
      <span className="item">{site.school}</span>
      <span className="item">{site.dates}</span>
    </div>
  </section>
);
