"use client";

import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-[var(--color-off-white)] placeholder:text-[var(--color-slate)] focus:border-[var(--color-coral)] focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)]/30 transition-all duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
