"use client";

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "coral" | "navy" | "outline";
}

export function Badge({ className, variant = "coral", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider",
        {
          "bg-[var(--color-coral)]/15 text-[var(--color-coral)] border border-[var(--color-coral)]/30":
            variant === "coral",
          "bg-[var(--color-navy-light)] text-[var(--color-slate-light)] border border-black/10":
            variant === "navy",
          "border border-black/20 text-[var(--color-slate-light)]":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
