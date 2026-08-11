import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { site } from "@/config/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const goToDirectory = () => {
    const trimmed = query.trim();
    navigate(trimmed ? `/directory?q=${encodeURIComponent(trimmed)}` : "/directory");
    setSearchOpen(false);
    setQuery("");
  };

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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToDirectory();
          }}
          className="hidden items-center gap-2 border border-[var(--line-strong)] px-3 py-1.5 transition-colors focus-within:border-gold md:flex"
          data-testid="nav-search-desktop"
        >
          <Search size={13} className="flex-shrink-0 text-[rgba(22,18,19,0.4)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search competitions…"
            aria-label="Search competitions"
            className="w-28 bg-transparent font-mono text-[11px] text-paper placeholder:text-[rgba(22,18,19,0.4)] focus:outline-none lg:w-40"
            data-testid="nav-search-input"
          />
        </form>

        <div className="flex flex-shrink-0 items-center gap-1 sm:gap-2">
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
            onClick={() => {
              setSearchOpen((v) => !v);
              setOpen(false);
            }}
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            data-testid="nav-search-toggle"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <button
            type="button"
            className="p-2 text-paper md:hidden"
            onClick={() => {
              setOpen((v) => !v);
              setSearchOpen(false);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-[var(--line)] bg-white md:hidden" data-testid="nav-search-mobile-wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              goToDirectory();
            }}
            className="wrap flex items-center gap-2 py-3"
          >
            <Search size={15} className="flex-shrink-0 text-[rgba(22,18,19,0.4)]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search competitions…"
              aria-label="Search competitions"
              className="w-full bg-transparent font-mono text-[13px] text-paper placeholder:text-[rgba(22,18,19,0.4)] focus:outline-none"
              data-testid="nav-search-input-mobile"
            />
          </form>
        </div>
      )}

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
