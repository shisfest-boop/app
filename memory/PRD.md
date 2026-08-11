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

## Implemented (2026-02-11)
- Real event catalog: `src/data/events.ts` — 26 competitions extracted verbatim from the official "2026 INVITE.pdf" (categories: English, Sanskrit, Hindi, Science, Economics, Commerce, Mathematics, Social Science, Foreign Language, Art, Drama, Dance, Music, Psychology). Each event has title/nativeTitle, category, eligibleGrades, participants, language (en/hi), intro, sections[{heading, paragraphs, bullets}], judgingCriteria, totalMarks, teacherInCharge/studentInCharge (names only — phone/email omitted per requirement). 3 Hindi events (Prashnottri, Ekal Abhinay, Samachaar Vachan) preserved in Devanagari, not translated. 2 events (Dress Design, Ad-Lingo) have a `note` field flagging that the source PDF lacked full detail for them — no invented content.
- `EventCard.tsx` — grid card (category tag, grade, title, excerpt, participants, "View Event" button)
- `EventModal.tsx` — built on `@radix-ui/react-dialog` (native Escape + click-outside dismiss), renders full event content with no truncation, scrollable body, judging-criteria table, in-charge footer
- `/events` page: category filter chips + responsive grid (1 col mobile, 2 col desktop) of all 26 events, wired to EventModal (no per-event routes — modal only)
- Home `EventsPreview` rewired to use the same EventCard/EventModal (3 featured: Slam Poetry, Tamasha, BioFlix) + "View all events" link to /events
- Tested via testing_agent_v4: 100% pass — filters, modal open/close (3 dismiss methods), Hindi rendering, multi-round content (Quizzeria/EconQuest), incomplete-data fallback, mobile 375px layout, Home wiring all verified. No bugs found.

## Implemented (2026-02-11, later same day)
- `/contact` page built from the invite's "Get in Touch" + "Event Details" sections: Event Details info-list (date, registration deadline, venue, reporting time), Get in Touch (Email + Instagram PassCards, Teacher In-Charge "Ms. Simran Yadav" shown as plain text — no phone number anywhere), Registration reg-group (School + Individual, reused PassCard style from Home CTASection)
- `site.ts` extended additively (`eventDetails`, `teacherInCharge`, `contactEmail`, `urls.email`) — no existing fields touched
- New `.info-list`/`.info-row` CSS added for label/value rows, mobile-stacking at ≤480px
- Tested via testing_agent_v4: 100% pass — exact content match to source doc, no phone numbers found anywhere on page, correct hrefs/target/rel on all links, mobile 375px no overflow, Home/Events unaffected by shared config change.

## Implemented (2026-02-11, later same day #2)
- Countdown timer (`CountdownTimer.tsx`) on Home Hero — live days/hours/minutes to 10 Oct 2026 08:00 IST, subtle mono/display typography, re-renders every 30s, self-hides after the fest date passes
- Fest Schedule (`FestSchedule.tsx`) added to Contact page — 3-step vertical timeline (Reporting Time → Competitions → Closing Ceremony) + Dress Code callout (3 rules) + trophy note, content sourced verbatim from `site.ts` `schedule` config (invite's Event Details/Awards sections)
- Google Maps iframe embed on Contact page showing the venue address (no API key needed, `output=embed` query)
- Category icons (`CategoryIcon.tsx`) — 14 lucide-react icons mapped 1:1 to each event category, shown inside every EventCard's category tag (Events grid + Home preview)
- Tested via testing_agent_v4: 100% pass on desktop + mobile (375px), no console errors, no invented schedule/venue content. Noted (not fixed, pre-existing/out of scope): minor mobile nav-bar logo/Register-button overlap at 375px, unrelated to this session's changes.

## Backlog / next tasks
- P2: Gallery, sponsors section
- P2 (optional/FYI, not a bug): /directory's category substring search matches "Social Science" when searching "science" — intentional per spec (name/category substring match), flagged by testing as expected behavior

## Implemented (2026-02-11, later same day #7)
- Rewrote Fest Schedule (`FestSchedule.tsx`, on the Contact page) to the exact 7-step day-of sequence: Arrival (8:00 a.m.) → Registration (By 8:30 a.m.) → Breakfast → Opening Ceremony → Competitions → Prize Distribution → Fest Concludes. Removed "Closing Ceremony" entirely (fest simply concludes after Prize Distribution, no ceremony) — confirmed via bundle grep, zero occurrences remain.
- Rewrote each step's copy to be warmer/longer, matching the hero's voice ("Where ideas compete. Where creativity takes the stage.") — no invented factual details, only descriptive tone. Steps without a stated time (Breakfast onward) render without a time chip.
- Removed now-unused `site.schedule.competitionsNote`/`closingCeremony` config fields (copy is now defined inline in the component since it's used in exactly one place); kept `dressCode`/`trophyNote` unchanged.
- Self-tested (small isolated content-only change to one component): compiled cleanly, page loads, correct step order and copy confirmed via screenshot + bundle text verification. No visual/structural redesign — icons, timeline layout, dress-code/trophy sections all unchanged.

## Implemented (2026-02-11, later same day #6)
- Universal Navbar search — visible on every page, desktop inline input + mobile icon that expands to a full-width autofocus input (mutually exclusive with the hamburger menu). Submits to `/directory?q=<term>`.
- New dedicated `/directory` page (`Directory.tsx`) — separate from `/events`, its own on-page search (live filter by name/category, URL-synced via `useSearchParams` with `replace:true`), all 26 events as independently-toggleable accordion rows (CSS-only `grid-template-rows` expand/collapse), collapsed = icon+name+chevron only. Expanded reveals category, full untruncated description (reused from events.ts), participants, and two fields intentionally standardised for every event (not sourced per-event): Venue = "TBA", Reporting Time = "8:00 a.m., 10th October 2026".
- Bug fix: "Explore SHISFEST" (Home CTASection) and "Explore the event →" guidance link previously opened the old external shisfest.com — now navigate internally to `/directory` (`PassCard.tsx` now renders a react-router `Link` for internal hrefs starting with "/", still external `<a target=_blank>` otherwise). Removed unused `site.urls.eventWebsite`.
- Tested via testing_agent_v4: 100% pass — bug fix confirmed, no navbar overlap regression at 320-390px with the new 3rd icon control, Directory search/accordion/hardcoded fields all verified, /events page confirmed unchanged, zero console errors.

## Bug Fixes (2026-02-11, later same day #3)
- Fixed mobile Navbar overlap: brand (logo+"SHISFEST'26" text) was not shrinking on narrow viewports, overflowing into the Register Now button. Made brand `min-w-0 flex-1` with `truncate` safety fallback, reduced logo/text/button sizing on mobile (`sm:` breakpoint restores desktop sizing), gave the Register Now + hamburger control group `flex-shrink-0` so it never gets squeezed, added `whitespace-nowrap` + a `gap-2` safety-net gap.
- Verified via testing_agent_v4 at 320/360/375/390px on Home/Events/Contact: zero overlap, consistent 8px gap, no horizontal overflow, no desktop regression.

## Implemented (2026-02-11, later same day #4)
- Removed the outdated "Competition Details" CTASection card (Home page) that linked to a placeholder Google Sheet — superseded by the real Events page. `urls.competitionDetails` removed from `site.ts`.
- "Competition Directory" added to /events: `DirectoryTable.tsx` — Grid/Directory view toggle (reuses `.event-filter-chip` styling), Directory shows all currently-filtered events as a table (Event Name, Subject/Category, Eligible Grades, Participants) sourced from `events.ts` — collapses to stacked label:value cards on mobile (≤640px) via CSS `attr(data-label)` trick, zero horizontal overflow.
- "Download Full Rulebook (PDF)" link added above the filters, pointing to the actual official invite PDF now hosted as a static asset at `public/assets/shisfest26-rulebook.pdf` (`urls.rulebookPdf`).
- Tested via testing_agent_v4: 100% pass — old CTA card fully gone with no layout gap, toggle+filter interplay correct, spot-checked table rows match events.ts verbatim, PDF resolves with valid %PDF header, mobile stacking confirmed. Post-test polish: removed forced `white-space: nowrap` on table body cells so the 4-column table fits the site's narrow content column on desktop without needing internal horizontal scroll (was flagged as a minor cosmetic note, not a functional bug).

## Implemented (2026-02-11, later same day #5)
- Fest Schedule icons — 3 timeline steps on Contact now show a circular icon badge (Clock/Sparkles/Award) instead of a plain dot
- Add to Calendar — `lib/calendar.ts` builds a static Google Calendar render URL + a downloadable `.ics` data URI (10 Oct 2026 08:00 IST start), rendered as two "one-tap" links under the Home Hero countdown
- Per-event icons — `EventIcon.tsx` maps all 26 individual events (not just their 14 shared categories) to a distinct lucide-react icon, shown next to the title on every EventCard (grid + Home preview) and in the EventModal header — coexists with the existing category-tag icon (two separate icons per card)
- Tested via testing_agent_v4: 100% pass — calendar link hrefs and ICS content verified correct, all 26 per-event icons distinct and non-colliding with category icons, schedule badges aligned correctly on desktop+mobile, zero console errors, no regressions.
