import { EventData } from "@/data/events";

interface DirectoryTableProps {
  events: EventData[];
}

export const DirectoryTable = ({ events }: DirectoryTableProps) => (
  <div className="directory-wrap" data-testid="directory-table-wrap">
    <table className="directory-table" data-testid="directory-table">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Subject / Category</th>
          <th>Eligible Grades</th>
          <th>Participants</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id} data-testid={`directory-row-${event.id}`}>
            <td data-label="Event Name">{event.title}</td>
            <td data-label="Subject / Category">{event.category}</td>
            <td data-label="Eligible Grades">{event.eligibleGrades}</td>
            <td data-label="Participants">{event.participants}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
