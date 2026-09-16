import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Logo } from "@/components/Logo";
import { mainNavItems } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 glass-header border-b border-border-soft shadow-[0_1px_0_rgb(0_0_0/0.03)]">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
        <Logo priority />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-beton transition-colors duration-150 hover:bg-surface-muted hover:text-asphalte"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <CallButton origin="header" className="px-4 py-2.5 text-sm" />
        </div>
      </div>

      <nav aria-label="Navigation mobile" aria-hidden="false" className="border-t border-border-soft lg:hidden">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 scrollbar-none">
          {mainNavItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="flex min-h-11 items-center rounded-full bg-surface-muted px-3.5 py-2 text-xs font-medium text-beton transition-colors hover:bg-signal/10 hover:text-signal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
