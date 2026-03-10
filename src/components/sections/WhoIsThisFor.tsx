"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const idealFor = [
  {
    icon: "🏢",
    title: "Independent facility owners",
    description:
      "You own one or two properties and compete against national chains on a fraction of their marketing budget. You don&rsquo;t need to outspend them — you need to outrank them locally.",
  },
  {
    icon: "🗺️",
    title: "Multi-location operators",
    description:
      "You have three to fifteen locations and need organic visibility across multiple markets — without rebuilding a strategy from scratch for each one.",
  },
  {
    icon: "📊",
    title: "Managers responsible for occupancy",
    description:
      "Your job is to fill units. You need a reliable, documented source of inbound leads that doesn&rsquo;t fluctuate with ad budgets or algorithm changes.",
  },
  {
    icon: "💼",
    title: "Investors acquiring storage properties",
    description:
      "You want to understand how organic lead generation can reduce reliance on paid channels and improve the long-term revenue profile of what you&rsquo;re buying.",
  },
];

const notFor = [
  "You expect results without any involvement from your side",
  "You want to keep running ads and just layer a little SEO on top",
  "You&rsquo;re brand new with zero web presence and aren&rsquo;t ready to invest in building one",
  "You&rsquo;re already fully booked and have no interest in growing beyond that",
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
              Is this{" "}
              <span className="text-gradient">right for you?</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              We work best with a specific type of operator. See if that&rsquo;s you.
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
                      borderColor: "oklch(100% 0 0 / 0.06)",
                      backgroundColor: "oklch(100% 0 0 / 0.02)",
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
                  If you&rsquo;re serious about growing your occupancy through channels you actually own, we&rsquo;re serious about making that happen. It starts with a conversation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
