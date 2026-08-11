# SHISFEST'26 — PRD

## Original problem statement
Componentize the working reference landing page (shisfest26.html) for SHISFEST'26 — Scottish High International School's annual inter-school festival — into a React + TypeScript + Tailwind app, extracting its exact design system (colors, fonts, grain/beam effects, animations, ticket-pass CTAs) without redesigning. Build app shell with routing (Home, Events, Contact), sticky navbar with mobile hamburger + always-visible "Register Now", footer with page nav links, and a Home page: hero → events preview (placeholder cards) → CTA banner.

## Architecture
- Frontend: React 19 + TypeScript + Tailwind (craco/CRA), react-router-dom v7
- Backend: FastAPI template (untouched — no backend features needed yet)
- Design tokens live in `src/index.css` as CSS vars (--ink, --paper, --gold #8B1E2F, --gold-dim, --crimson, --line, --line-strong) + Tailwind theme extension (colors, fontFamily display/body/mono)
- Content config: `src/config/site.ts` (all URLs, dates, taglines, logos)
- Logos extracted from reference file into `public/assets/`

## User personas
- Visiting students/schools looking to register (individual or school/group)
- Attendees looking for competition details, schedule, contact
- Social visitors via Instagram @shisfest26

## Core requirements (static)
- Faithful port of reference aesthetic — no redesign
- Mobile-first, no overflow/broken layouts
- Real content: tagline, 10th October 2026 date, registration form links, Instagram, contact link

## Implemented (2026-08-11)
- Design system extracted: CSS variables, Bricolage Grotesque/Inter/Space Mono, grain overlay, drifting light beams, riseIn/sweep animations, reduced-motion handling
- Reusable components: Background, Navbar (sticky, desktop links, mobile hamburger, Register Now), Footer, Hero, PassCard (ticket-pass CTA), EventsPreview, CTASection
- Routing: Home (/), Events (/events stub), Contact (/contact stub)
- Home page: hero (logo, tagline, meta) → "The line-up" placeholder event cards → full CTA section (Explore SHISFEST primary, Competition Details, School/Individual registration group, Contact, Instagram, guidance box)
- Real registration links wired: individual (forms.gle/aLS6KmsHPV5ghwZ79), group (forms.gle/byc7abfP7BYjVKiL6), competition details sheet, shisfest.com, Instagram
- data-testids on all interactive elements
- Verified: desktop + mobile screenshots, hamburger nav flow, no horizontal overflow

## Backlog / next tasks
- P0: Build out Events page with real competition list
- P1: Build out Contact page (details/form)
- P1: Countdown timer to 10th October 2026
- P2: Schedule page, gallery, sponsors section
