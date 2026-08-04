import type { ReactNode } from "react";

export interface ShortAnswerProps {
  children: ReactNode;
}

export function ShortAnswer({ children }: ShortAnswerProps) {
  return (
    <p className="rounded-xl border border-signal/15 bg-gradient-to-br from-signal/5 to-gyro/5 px-5 py-4 text-base leading-relaxed text-asphalte/90">
      {children}
    </p>
  );
}
