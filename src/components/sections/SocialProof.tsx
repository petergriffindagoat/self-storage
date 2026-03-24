"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const testimonials = [
  {
    quote:
      "Pickfords is the UK's largest removal and storage brand — over 400 years in business. When they needed organic local visibility built from scratch, we built it. From zero clicks and impressions to 490,000+. The same system that works for the biggest name in UK storage works for an independent facility in Texas, Ohio, or Florida.",
    name: "Pickfords",
    title: "UK's Largest Removal & Storage Brand",
    location: "0 → 490,000+ clicks & impressions",
    initials: "PF",
    size: "large",
  },
  {
    quote:
      "Whether you have one facility or fifteen, the system scales. One strategy, multiple markets — no starting from zero each time you want to grow to a new city.",
    name: "Multi-Location Ready",
    title: "Scalable Across All Your Markets",
    location: "0 → 12.2k+ organic visits",
    initials: "ML",
    size: "small",
  },
  {
    quote:
      "We only take on clients where we're confident we can deliver — which is exactly why we do the audit first. If you're not in the top 5 Map Pack by month 6, month 7 is on us.",
    name: "The Month 7 Guarantee",
    title: "Skin in the game. Not just a contract.",
    location: "US market focused",
    initials: "G",
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
              We've Done This Before.{" "}
              <span className="text-gradient">At Scale.</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              Real results. Real operators. Built from zero.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured testimonial — full width, raw feel */}
        <ScrollReveal>
          <div
            className="relative mb-8 rounded-2xl p-8 sm:p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(58% 0.2 30 / 0.07) 0%, oklch(40% 0.08 260 / 0.04) 100%)",
              border: "1px solid oklch(58% 0.2 30 / 0.18)",
            }}
          >
            {/* Big quote mark */}
            <span
              className="absolute top-4 left-6 text-8xl leading-none select-none pointer-events-none"
              style={{ color: "oklch(65% 0.2 30 / 0.12)", fontFamily: "Georgia, serif" }}
              aria-hidden="true"
            >
              "
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
                        border: "1px solid oklch(0% 0 0 / 0.08)",
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
                  "{t.quote}"
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
            style={{ backgroundColor: "oklch(0% 0 0 / 0.05)" }}
          >
            {[
              { value: "$100 Audit", label: "Know exactly where you stand before you spend another dollar" },
              { value: "Month 7 Free", label: "If you're not in top 5 Map Pack by month 6, we keep working" },
              { value: "USA-focused", label: "Built specifically for the US self storage market" },
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
