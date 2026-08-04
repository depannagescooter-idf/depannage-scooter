import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/depannage-sur-place/", label: "Dépannage" },
  { href: "/remorquage/", label: "Remorquage" },
  { href: "/tarifs/", label: "Tarifs" },
  { href: "/zones-intervention/", label: "Zones" },
  { href: "/contact/", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 glass-header border-b border-border-soft shadow-[0_1px_0_rgb(0_0_0/0.03)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-beton transition-colors duration-150 hover:bg-surface-muted hover:text-asphalte"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0">
          <CallButton origin="header" className="hidden px-4 py-2.5 text-sm sm:inline-flex" />
          <CallButton
            origin="header"
            showNumber={false}
            className="inline-flex px-3.5 py-2.5 text-sm sm:hidden"
          />
        </div>
      </div>

      <nav aria-label="Navigation mobile" className="border-t border-border-soft md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 scrollbar-none">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="block rounded-full bg-surface-muted px-3.5 py-1.5 text-xs font-medium text-beton transition-colors hover:bg-signal/10 hover:text-signal"
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
