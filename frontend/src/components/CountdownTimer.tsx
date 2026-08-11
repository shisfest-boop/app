import { useEffect, useState } from "react";

const FEST_DATE = new Date("2026-10-10T08:00:00+05:30");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const getTimeLeft = (): TimeLeft => {
  const diff = FEST_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (FEST_DATE.getTime() - Date.now() <= 0) return null;

  return (
    <div className="countdown" data-testid="hero-countdown">
      <div className="countdown-tag">Countdown to SHISFEST'26</div>
      <div className="countdown-units">
        <div className="countdown-unit" data-testid="countdown-days">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-unit" data-testid="countdown-hours">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-unit" data-testid="countdown-minutes">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
      </div>
    </div>
  );
};
