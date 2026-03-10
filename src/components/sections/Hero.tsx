"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Floating, Parallax, PulseGlow, ScrollReveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import type { FormState } from "@/actions/email";

interface HeroProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  state: FormState;
}

export function Hero({ formAction, isPending, state }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24">
      {/* Background gradient orbs */}
      <Parallax
        className="absolute inset-0 pointer-events-none"
        speed={0.15}
      >
        <div
          className="gradient-orb w-[600px] h-[600px] top-[-100px] left-[50%] translate-x-[-50%]"
          style={{
            background:
              "radial-gradient(circle, oklch(65% 0.2 30 / 0.12) 0%, transparent 70%)",
          }}
        />
      </Parallax>

      <div
        className="gradient-orb w-[400px] h-[400px] bottom-[-100px] right-[-100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(40% 0.08 260 / 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-8">
            <Floating amplitude={6} duration={3.5}>
              <Badge variant="coral">
                <span>📈</span>
                Organic Growth for Self Storage Businesses
              </Badge>
            </Floating>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2}>
          <h1
            className="heading text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More Calls. Fuller Units.
            <br />
            <span className="text-gradient">Zero Ad Spend.</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.3}>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--color-slate-light)" }}
          >
            We help self storage businesses across the US rank above their competitors organically — so your phone rings, your units fill, and the growth keeps coming without spending on ads every month.
          </p>
        </ScrollReveal>

        {/* Email Capture Form */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-md mx-auto">
            {state.status === "success" ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ {state.message}
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--color-slate-light)" }}>
                  We&rsquo;ll reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="hero-email" className="sr-only">
                  Your email address
                </label>
                <Input
                  id="hero-email"
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
                    size="md"
                    disabled={isPending}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    {isPending ? "Sending…" : "Let's Talk →"}
                  </Button>
                </PulseGlow>
              </form>
            )}

            {state.status === "error" && (
              <p className="mt-3 text-sm text-red-400">{state.message}</p>
            )}

            {/* Trust line */}
            <p
              className="mt-4 text-sm"
              style={{ color: "var(--color-slate)" }}
            >
              We&rsquo;ll reach out within 24 hours. No pitch decks. Just a real conversation.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero stats row */}
        <ScrollReveal delay={0.5}>
          <div
            className={cn(
              "mt-16 flex flex-wrap justify-center gap-8 pt-8",
              "border-t border-white/10"
            )}
          >
            {[
              { value: "More Calls", label: "Inbound from organic search" },
              { value: "Higher Occupancy", label: "Without seasonal drop-offs" },
              { value: "No Ad Spend", label: "Growth that compounds over time" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-coral)" }}
                >
                  {value}
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-slate)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
