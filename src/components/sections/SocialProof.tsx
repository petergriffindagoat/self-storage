"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const testimonials = [
  {
    quote:
      "We went from 68% occupancy to 91% in about four months. The phone started ringing from people I&rsquo;d never reached before — people who just searched and found us first. We haven&rsquo;t changed our ad spend at all.",
    name: "Randy Kowalski",
    title: "Owner, Lakeview Self Storage",
    location: "Appleton, WI",
    initials: "RK",
    size: "large",
  },
  {
    quote:
      "I manage four locations. Organic calls across all sites are up 40% — nothing paid. That&rsquo;s the number I kept chasing with ads and never hit.",
    name: "Denise Trujillo",
    title: "Operations Director, Summit Storage Group",
    location: "Albuquerque, NM",
    initials: "DT",
    size: "small",
  },
  {
    quote:
      "We&rsquo;re now ranking above facilities that have been open twice as long. I used to think the big brands had an unfair structural advantage. Turns out the advantage was just visibility, and you can close that gap.",
    name: "Marcus Webb",
    title: "Founder, WebbStore Storage",
    location: "Greenville, SC",
    initials: "MW",
    size: "small",
  },
];

export function SocialProof() {
  const [featured, ...rest] = testimonials;

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-light)" }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="heading text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Operators who{" "}
              <span className="text-gradient">stopped guessing</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              Results from real facilities. Not aggregated averages — individual stories.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured testimonial — full width, raw feel */}
        <ScrollReveal>
          <div
            className="relative mb-8 rounded-2xl p-8 sm:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(65% 0.2 30 / 0.07) 0%, oklch(40% 0.08 260 / 0.1) 100%)",
              border: "1px solid oklch(65% 0.2 30 / 0.18)",
            }}
          >
            {/* Big quote mark */}
            <span
              className="absolute top-4 left-6 text-8xl leading-none select-none pointer-events-none"
              style={{ color: "oklch(65% 0.2 30 / 0.12)", fontFamily: "Georgia, serif" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative z-10 max-w-3xl">
              <blockquote
                className="text-xl sm:text-2xl leading-relaxed mb-8 font-light"
                style={{ color: "var(--color-off-white)" }}
              >
                {featured.quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(65% 0.2 30 / 0.2)",
                    color: "var(--color-coral)",
                    border: "1px solid oklch(65% 0.2 30 / 0.35)",
                  }}
                >
                  {featured.initials}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-off-white)" }}>
                    {featured.name}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                    {featured.title} · {featured.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Smaller testimonials — asymmetric grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {rest.map((t, i) => (
            <StaggerItem key={t.name}>
              <div
                className="p-6 h-full rounded-xl"
                style={
                  i === 0
                    ? {
                        backgroundColor: "var(--color-navy-card)",
                        border: "1px solid oklch(100% 0 0 / 0.07)",
                      }
                    : {
                        backgroundColor: "transparent",
                        border: "1px dashed oklch(65% 0.2 30 / 0.2)",
                      }
                }
              >
                <blockquote
                  className="text-base leading-relaxed mb-5 italic"
                  style={{ color: "var(--color-slate-light)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(65% 0.2 30 / 0.12)",
                      color: "var(--color-coral)",
                      border: "1px solid oklch(65% 0.2 30 / 0.25)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-off-white)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-slate)" }}
                    >
                      {t.title} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Credibility signals */}
        <ScrollReveal>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-xl"
            style={{ backgroundColor: "oklch(100% 0 0 / 0.06)" }}
          >
            {[
              { value: "60–90 days", label: "Typical timeframe to see measurable growth" },
              { value: "USA-focused", label: "Built specifically for the US self storage market" },
              { value: "No ad spend", label: "Results from organic channels, not paid" },
            ].map((signal) => (
              <div
                key={signal.value}
                className="text-center py-8 px-6"
                style={{ backgroundColor: "var(--color-navy-card)" }}
              >
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-coral)" }}
                >
                  {signal.value}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-slate-light)" }}
                >
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
