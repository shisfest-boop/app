import { Link } from "react-router-dom";
import { site } from "@/config/site";

export const Footer = () => (
  <footer data-testid="site-footer">
    <img src={site.logos.school} alt="Scottish High International School Logo" className="foot-logo" />
    <div className="foot-title" data-testid="footer-title">
      {site.name}
    </div>
    <div className="foot-sub">{site.school}</div>
    <div className="foot-links" data-testid="footer-links">
      {site.navLinks.map((l) => (
        <Link key={l.to} to={l.to} data-testid={`footer-nav-${l.label.toLowerCase()}`}>
          {l.label}
        </Link>
      ))}
      <a href={site.urls.instagram} target="_blank" rel="noopener" data-testid="footer-link-instagram">
        Instagram
      </a>
    
    </div>
    <div className="copyright">© 2026 Scottish High International School. All rights reserved.</div>
  </footer>
);
