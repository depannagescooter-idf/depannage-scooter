import type { Faq } from "@/data/types";

export interface FaqAccordionProps {
  items: Faq[];
  id?: string;
}

export function FaqAccordion({ items, id = "faq" }: FaqAccordionProps) {
  return (
    <div className="space-y-2" role="group" aria-label="Liste de questions fréquentes">
      {items.map((item) => (
        <details
          key={item.question}
          className="group card overflow-hidden transition-shadow duration-150 open:shadow-card"
          name={id}
        >
          <summary className="cursor-pointer list-none px-5 py-4 font-display text-sm font-semibold text-asphalte transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gyro [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-muted text-gyro motion-safe:transition-all motion-safe:duration-200 group-open:rotate-45 group-open:bg-signal/10 group-open:text-signal"
              >
                +
              </span>
            </span>
          </summary>
          <div className="border-t border-border-soft px-5 pb-4 pt-3 text-sm leading-relaxed text-beton">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
