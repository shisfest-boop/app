import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,255,255,0.88)] backdrop-blur-md"
    >
      <div className="wrap flex h-16 items-center justify-between gap-2">
        <Link
          to="/"
          data-testid="nav-brand"
          className="flex min-w-0 flex-1 items-center gap-2 sm:flex-initial sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={site.logos.fest}
            alt="SHISFEST'26 logo"
            className="h-8 w-8 flex-shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <span className="truncate font-display text-base font-extrabold tracking-tight sm:text-lg">
            SHISFEST<span className="text-gold">'26</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" data-testid="nav-links-desktop">
          {site.navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-gold" : "text-[rgba(22,18,19,0.55)] hover:text-paper"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={site.urls.groupRegistration}
            target="_blank"
            rel="noopener"
            data-testid="nav-register-btn"
            className="whitespace-nowrap bg-gold px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#711824] sm:px-4 sm:text-[11px] sm:tracking-[0.12em]"
          >
            Register Now
          </a>
          <button
            type="button"
            className="p-2 text-paper md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-white md:hidden" data-testid="nav-links-mobile">
          <div className="wrap flex flex-col py-3">
            {site.navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `border-b border-[var(--line)] py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] last:border-b-0 ${
                    isActive ? "text-gold" : "text-[rgba(22,18,19,0.6)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
