import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "signal" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  signal: "btn-primary text-white font-display font-semibold",
  outline:
    "border border-border bg-surface text-asphalte shadow-soft hover:border-beton/40 hover:bg-surface-muted font-medium",
  ghost: "bg-transparent text-beton hover:bg-surface-muted hover:text-asphalte font-medium",
};

export function Button({
  variant = "outline",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-5 py-2.5 text-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gyro disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
