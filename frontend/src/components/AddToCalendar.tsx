import { CalendarPlus } from "lucide-react";
import { googleCalendarUrl } from "@/lib/calendar";

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
      Add to Google Calendar
    </a>
  </div>
);
