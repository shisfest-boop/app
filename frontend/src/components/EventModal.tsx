import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { EventData } from "@/data/events";

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

export const EventModal = ({ event, onClose }: EventModalProps) => (
  <Dialog.Root open={!!event} onOpenChange={(open) => !open && onClose()}>
    <Dialog.Portal>
      <Dialog.Overlay className="event-modal-overlay" data-testid="event-modal-overlay" />
      <Dialog.Content
        className="event-modal-content"
        data-testid="event-modal"
        lang={event?.language === "hi" ? "hi" : "en"}
        aria-describedby={undefined}
      >
        {event && (
          <>
            <div className="event-modal-head">
              <div>
                <span className="event-modal-tag" data-testid="event-modal-category">
                  {event.category}
                </span>
                <Dialog.Title className="event-modal-title" data-testid="event-modal-title">
                  {event.title}
                </Dialog.Title>
                {event.nativeTitle && (
                  <div className="event-modal-native" lang="hi">
                    {event.nativeTitle}
                  </div>
                )}
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="event-modal-close"
                  aria-label="Close event details"
                  data-testid="event-modal-close-btn"
                >
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            <div className="event-modal-meta" data-testid="event-modal-meta">
              <span>Grade {event.eligibleGrades}</span>
              <span>{event.participants}</span>
              {event.duration && <span>{event.duration}</span>}
              {event.theme && <span>Theme: {event.theme}</span>}
            </div>

            <div className="event-modal-body" data-testid="event-modal-body">
              {event.intro?.map((paragraph, i) => (
                <p key={`intro-${i}`} className="event-modal-paragraph">
                  {paragraph}
                </p>
              ))}

              {event.note && <p className="event-modal-note">{event.note}</p>}

              {event.sections.map((section, si) => (
                <div key={`section-${si}`} className="event-modal-section">
                  <h4 className="event-modal-heading">{section.heading}</h4>
                  {section.paragraphs?.map((paragraph, pi) => (
                    <p key={`p-${si}-${pi}`} className="event-modal-paragraph">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="event-modal-list">
                      {section.bullets.map((bullet, bi) => (
                        <li key={`b-${si}-${bi}`}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {event.judgingCriteria && event.judgingCriteria.length > 0 && (
                <div className="event-modal-section" data-testid="event-modal-judging-criteria">
                  <h4 className="event-modal-heading">Judgement Criteria</h4>
                  <div className="event-modal-criteria">
                    {event.judgingCriteria.map((jc, ji) => (
                      <div className="event-modal-criteria-row" key={`jc-${ji}`}>
                        <span>{jc.criteria}</span>
                        <span className="event-modal-criteria-marks">{jc.marks}</span>
                      </div>
                    ))}
                  </div>
                  {event.totalMarks && <div className="event-modal-total">Total — {event.totalMarks}</div>}
                </div>
              )}
            </div>

            {(event.teacherInCharge.length > 0 || event.studentInCharge.length > 0) && (
              <div className="event-modal-foot" data-testid="event-modal-incharge">
                {event.teacherInCharge.length > 0 && (
                  <div>
                    <span className="event-modal-foot-label">Teacher In-Charge</span>
                    <span>{event.teacherInCharge.join(", ")}</span>
                  </div>
                )}
                {event.studentInCharge.length > 0 && (
                  <div>
                    <span className="event-modal-foot-label">Student In-Charge</span>
                    <span>{event.studentInCharge.join(", ")}</span>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
