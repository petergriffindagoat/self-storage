"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const steps = [
  {
    number: "1",
    title: "Drop your email",
    description:
      "That&rsquo;s all. No forms, no questionnaires, no pressure. Just your email and we take it from there.",
  },
  {
    number: "2",
    title: "We reach out personally",
    description:
      "Within 24 hours someone from our team will be in touch. We&rsquo;ll take a look at your current situation and talk through what growth actually looks like for your market.",
  },
  {
    number: "3",
    title: "Your facility starts getting found",
    description:
      "We build the kind of local presence that puts your facility in front of people who are ready to rent — and keeps it there, month after month, without the ad budget.",
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
              How it{" "}
              <span className="text-gradient">gets started</span>
            </h2>
            <p
              className="text-lg"
              style={{ color: "var(--color-slate-light)" }}
            >
              Three steps. No commitment until you&rsquo;re ready.
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
