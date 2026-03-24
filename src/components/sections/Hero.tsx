"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Floating, Parallax, PulseGlow, ScrollReveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import type { FormState } from "@/actions/types";

interface HeroProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  state: FormState;
}

export function Hero({ formAction, isPending, state }: HeroProps) {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (state.status === "success") setShowForm(false);
  }, [state.status]);

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
            "radial-gradient(circle, oklch(40% 0.08 260 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-8">
            <Floating amplitude={6} duration={3.5}>
              <Badge variant="coral">
                <span>📍</span>
                For US Self-Storage Operators
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
            Fill Your Units.
            <br />
            <span className="text-gradient">Own Google.</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.3}>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--color-slate-light)" }}
          >
            Every month, 130,000+ Americans search for storage units in cities just like yours. Right now, someone nearby is typing "storage units near me." A chain is showing up. You're not. Not because they're better. Their Google Maps listing is optimised and yours isn't. That's the whole gap.
          </p>
        </ScrollReveal>

        {/* Email Capture Form */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-md mx-auto">
            {state.status === "success" && !showForm ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6">
                <p className="text-green-400 font-semibold text-lg">
                  ✓ Email sent!
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--color-slate-light)" }}>
                  Check your inbox. We've sent you everything you need.
                </p>
                <p className="text-sm mt-3" style={{ color: "var(--color-slate)" }}>
                  Didn't receive it?{" "}
                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--color-coral)" }}
                  >
                    Resend email
                  </button>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PulseGlow className="rounded-lg">
                  <Button
                    type="submit"
                    size="md"
                    disabled={isPending}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    {isPending ? "Sending…" : "Start With a $100 Audit →"}
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
              $100, credited back toward month 1 if you sign on. You keep the full report regardless.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero stats row */}
        <ScrollReveal delay={0.5}>
          <div
            className={cn(
              "mt-16 flex flex-wrap justify-center gap-8 pt-8",
              "border-t border-black/10"
            )}
          >
            {[
              { value: "44%", label: "of local searches click Map Pack, more than paid ads and organic combined" },
              { value: "126%", label: "more traffic to top-3 listings vs every business ranked 4th and below" },
              { value: "93%", label: "of renters check Google first, before they ever pick up the phone" },
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
