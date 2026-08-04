export interface HazardRuleProps {
  className?: string;
}

export function HazardRule({ className = "" }: HazardRuleProps) {
  return (
    <hr
      className={`hazard-rule my-8 border-0 ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
