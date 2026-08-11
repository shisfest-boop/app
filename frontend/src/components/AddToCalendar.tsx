import { CalendarPlus } from "lucide-react";
import { googleCalendarUrl, icsDataUrl } from "@/lib/calendar";

export const AddToCalendar = () => (
  <div className="add-calendar" data-testid="add-to-calendar">
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener"
      className="add-calendar-link"
      data-testid="add-calendar-google"
    >
      <CalendarPlus size={13} strokeWidth={1.75} />
      Google Calendar
    </a>
    <a href={icsDataUrl} download="shisfest26.ics" className="add-calendar-link" data-testid="add-calendar-ics">
      <CalendarPlus size={13} strokeWidth={1.75} />
      Apple / Outlook
    </a>
  </div>
);
