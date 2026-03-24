"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PulseGlow, ScrollReveal } from "@/components/ui/motion";
import type { FormState } from "@/actions/types";

interface FinalCTAProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  state: FormState;
}

export function FinalCTA({ formAction, isPending, state }: FinalCTAProps) {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-light)" }}
    >
      {/* Background glow */}
      <div
        className="gradient-orb w-[700px] h-[700px] top-[-200px] left-[50%] translate-x-[-50%]"
        style={{
          background:
            "radial-gradient(circle, oklch(65% 0.2 30 / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-coral)" }}
          >
            Self Storage · USA · Organic Growth
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fill Your Units.
            <br />
            <span className="text-gradient">Without Burning Revenue.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--color-slate-light)" }}
          >
            Drop your email. We'll reach out to get started on the $100 audit. It's the clearest $100 you'll spend on your business this year.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-md mx-auto">
            {state.status === "success" ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-8">
                <p className="text-green-400 font-bold text-xl mb-2">
                  ✓ Got it.
                </p>
                <p
                  className="text-base"
                  style={{ color: "var(--color-slate-light)" }}
                >
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="final-email" className="sr-only">
                  Your email address
                </label>
                <Input
                  id="final-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="flex-1"
                />
                <PulseGlow className="rounded-lg">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    {isPending ? "Sending…" : "Get in Touch →"}
                  </Button>
                </PulseGlow>
              </form>
            )}

            {state.status === "error" && (
              <p className="mt-3 text-sm text-red-400">{state.message}</p>
            )}

            <p
              className="mt-4 text-sm"
              style={{ color: "var(--color-slate)" }}
            >
              $100 audit. Keep the report either way. $100 credited if you move forward.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
