// Static calendar-event data for the "Add to Calendar" utility.
// Reporting time (8:00 a.m.) is the official start; end time is a
// technical placeholder for the calendar block only and is never
// displayed anywhere on the site as a stated fact.

const EVENT_TITLE = "SHISFEST'26 — Scottish High International School";
const EVENT_START = new Date("2026-10-10T08:00:00+05:30");
const EVENT_END = new Date("2026-10-10T18:00:00+05:30");
const EVENT_LOCATION =
  "Scottish High International School - Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana - 122011";
const EVENT_DESCRIPTION =
  "SHISFEST'26 - the annual inter-school festival at Scottish High International School. Reporting time: 8:00 a.m.";

const toCalendarDate = (date: Date) => date.toISOString().replace(/[-:]|\.\d{3}/g, "");

export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  EVENT_TITLE,
)}&dates=${toCalendarDate(EVENT_START)}/${toCalendarDate(EVENT_END)}&details=${encodeURIComponent(
  EVENT_DESCRIPTION,
)}&location=${encodeURIComponent(EVENT_LOCATION)}`;

const icsContent = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//SHISFEST26//EN",
  "BEGIN:VEVENT",
  `UID:shisfest26-${EVENT_START.getTime()}@shisfest.com`,
  `DTSTAMP:${toCalendarDate(new Date())}`,
  `DTSTART:${toCalendarDate(EVENT_START)}`,
  `DTEND:${toCalendarDate(EVENT_END)}`,
  `SUMMARY:${EVENT_TITLE}`,
  `DESCRIPTION:${EVENT_DESCRIPTION}`,
  `LOCATION:${EVENT_LOCATION}`,
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

export const icsDataUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
