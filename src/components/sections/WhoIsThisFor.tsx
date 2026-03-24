"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const idealFor = [
  {
    icon: "📈",
    title: "You want your business to compound",
    description:
      "You're willing to invest 6 months to own your local market instead of renting visibility month to month. You think in years. You want a business that scales without constantly feeding it cash.",
  },
  {
    icon: "🏢",
    title: "You own facilities with headroom to grow",
    description:
      "You have one or more locations and occupancy isn't where it should be. You want inbound calls from Google finding you — not a budget you reset every month.",
  },
  {
    icon: "💸",
    title: "You're tired of ad spend that disappears",
    description:
      "The moment you pause your ads, the leads stop. You're done renting attention. You want something that keeps working after the work is done.",
  },
  {
    icon: "🤝",
    title: "You're willing to be involved",
    description:
      "You're prepared to respond to reviews and share access — the small things that make local SEO work. You don't need to do the heavy lifting, but you're not completely hands-off either.",
  },
];

const notFor = [
  "You're still deciding whether local search actually matters for your business",
  "You want results in 30 days and won't wait for anything longer",
  "You think SEO just happens without any input or access from your side",
  "You're more invested in running ads than building a business that's self-sufficient",
];

export function WhoIsThisFor() {
  return (
    <section className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="heading text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Work With{" "}
              <span className="text-gradient">One Type of Operator.</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              We'd rather be honest upfront than take on a client we can't serve well.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* This IS for you */}
          <div>
            <ScrollReveal>
              <h3
                className="text-2xl font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--color-off-white)" }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(65% 0.2 30 / 0.15)",
                    color: "var(--color-coral)",
                    border: "1px solid oklch(65% 0.2 30 / 0.3)",
                  }}
                >
                  ✓
                </span>
                This is for you if…
              </h3>
            </ScrollReveal>

            <StaggerReveal className="space-y-4">
              {idealFor.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card p-5 flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p
                        className="font-semibold mb-1"
                        style={{ color: "var(--color-off-white)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-slate-light)" }}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          {/* This is NOT for you */}
          <div>
            <ScrollReveal>
              <h3
                className="text-2xl font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--color-off-white)" }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(60% 0.15 20 / 0.1)",
                    color: "oklch(65% 0.15 20)",
                    border: "1px solid oklch(60% 0.15 20 / 0.3)",
                  }}
                >
                  ✕
                </span>
                This is NOT for you if…
              </h3>
            </ScrollReveal>

            <StaggerReveal className="space-y-3">
              {notFor.map((item, index) => (
                <StaggerItem key={index}>
                  <div
                    className="flex items-start gap-3 p-4 rounded-lg border"
                    style={{
                      borderColor: "oklch(0% 0 0 / 0.08)",
                      backgroundColor: "oklch(0% 0 0 / 0.02)",
                    }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 text-sm"
                      style={{ color: "oklch(65% 0.15 20)" }}
                      aria-hidden="true"
                    >
                      ✕
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-slate-light)" }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <ScrollReveal delay={0.3}>
              <div
                className="mt-6 p-5 rounded-xl border-l-4"
                style={{
                  borderColor: "var(--color-coral)",
                  backgroundColor: "oklch(65% 0.2 30 / 0.06)",
                }}
              >
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: "var(--color-slate-light)" }}
                >
                  If you're serious about owning your local market, we're serious about getting you there. It starts with a $100 audit — and you keep the report either way.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
