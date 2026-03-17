"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const steps = [
  {
    number: "1",
    title: "Pay $100. Get the Audit.",
    description:
      "Fill in the form. We do a full review of your Google Maps presence — listing health, website, citations, reviews, and exactly where your competitors are beating you. You receive a clear, plain-English report. You keep it regardless of what you decide next.",
  },
  {
    number: "2",
    title: "Review the Roadmap.",
    description:
      "The audit tells you exactly what&rsquo;s holding you back and gives you a realistic timeline for your specific market. You&rsquo;ll know what top-3 looks like for your city before you spend another dollar. $100 credited toward month 1 if you move forward.",
  },
  {
    number: "3",
    title: "Sign On. We Do the Work.",
    description:
      "$1,500/month. We build the local presence that puts your facility in front of people ready to rent — and keeps it there, month after month, without ad spend. If you&rsquo;re not in the top 5 Map Pack by month 6, month 7 is on us.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-light)" }}
    >
      {/* Background decoration */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-[-200px] right-[-200px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, oklch(65% 0.2 30 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="heading text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Three Steps.{" "}
              <span className="text-gradient">No Complexity.</span>
            </h2>
            <p
              className="text-lg"
              style={{ color: "var(--color-slate-light)" }}
            >
              Start with a $100 audit. No commitment until you&rsquo;re ready.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center">
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-px"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-coral), transparent)",
                      opacity: 0.3,
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number circle */}
                <div className="flex justify-center mb-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-2"
                    style={{
                      color: "var(--color-coral)",
                      borderColor: "oklch(65% 0.2 30 / 0.4)",
                      backgroundColor: "oklch(65% 0.2 30 / 0.08)",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-off-white)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-slate-light)" }}
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
