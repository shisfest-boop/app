interface PassCardProps {
  num: string;
  label: string;
  sub?: string;
  href: string;
  variant?: "primary" | "secondary";
  delay?: number;
  testId?: string;
}

export const PassCard = ({
  num,
  label,
  sub,
  href,
  variant = "secondary",
  delay = 0.8,
  testId,
}: PassCardProps) => (
  <a
    className={`pass ${variant}`}
    href={href}
    target="_blank"
    rel="noopener"
    style={{ animationDelay: `${delay}s` }}
    data-testid={testId}
  >
    <div className="perf" />
    <div>
      <div className="num">{num}</div>
      <div className="label">{label}</div>
      {sub && <div className="sub">{sub}</div>}
    </div>
    <span className="arrow">→</span>
  </a>
);
