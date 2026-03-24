"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PulseGlow, ScrollReveal } from "@/components/ui/motion";
import type { FormState } from "@/actions/types";

interface EmailCaptureProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  state: FormState;
}

export function EmailCapture({ formAction, isPending, state }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (state.status === "success") setShowForm(false);
  }, [state.status]);

  return (
    <section className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-2xl p-10 sm:p-14 text-center"
            style={{
              background:
                "radial-gradient(ellipse at top, oklch(65% 0.2 30 / 0.1) 0%, var(--color-navy-card) 70%)",
              border: "1px solid oklch(65% 0.2 30 / 0.2)",
            }}
          >
            {/* Decorative top border glow */}
            <div
              className="absolute top-0 left-[20%] right-[20%] h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-coral), transparent)",
                opacity: 0.6,
              }}
              aria-hidden="true"
            />

            <h2
              className="heading text-3xl sm:text-4xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to fill your units without burning through ad budget?
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              Drop your email and we'll reach out to talk through what growth looks like for your facility, specifically in your market.
            </p>

            {state.status === "success" && !showForm ? (
              <div
                className="max-w-md mx-auto rounded-xl border border-green-500/30 bg-green-500/10 p-6"
              >
                <p className="text-green-400 font-semibold text-lg">
                  ✓ Email sent!
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--color-slate-light)" }}
                >
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
              <form
                action={formAction}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="mid-email" className="sr-only">
                  Your email address
                </label>
                <Input
                  id="mid-email"
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
                    disabled={isPending}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    {isPending ? "Sending…" : "Get in Touch"}
                  </Button>
                </PulseGlow>
              </form>
            )}

            {state.status === "error" && (
              <p className="mt-3 text-sm text-red-400 text-center">
                {state.message}
              </p>
            )}

            <p
              className="mt-5 text-sm"
              style={{ color: "var(--color-slate)" }}
            >
              Submit your email and we'll send you everything you need to get started.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
