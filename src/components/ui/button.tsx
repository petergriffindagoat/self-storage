"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
          {
            "bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-dark)] focus-visible:ring-[var(--color-coral)]":
              variant === "primary",
            "border border-[var(--color-coral)] text-[var(--color-coral)] hover:bg-[var(--color-coral)] hover:text-white focus-visible:ring-[var(--color-coral)]":
              variant === "outline",
            "text-[var(--color-slate-light)] hover:text-[var(--color-off-white)] focus-visible:ring-black/30":
              variant === "ghost",
          },
          {
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
