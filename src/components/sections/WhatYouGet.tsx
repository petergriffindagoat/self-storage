"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const outcomes = [
  {
    number: "01",
    title: "Google Maps Profile Overhaul",
    description:
      "Full GBP optimisation across categories, photos, unit descriptions, attributes, Q&A, and weekly posts. This alone can crack the Map Pack and bring more calls from Maps.",
  },
  {
    number: "02",
    title: "Review Generation System",
    description:
      "A repeatable process to get happy tenants leaving Google reviews consistently. Reviews are a direct ranking signal your competitors aren't using. Higher trust, higher rankings.",
  },
  {
    number: "03",
    title: "Location & Unit Pages",
    description:
      "Purpose-built pages targeting \u201Cstorage units in [your city]\u201D and nearby neighborhoods, written for Google and real renters. Built for organic search visibility.",
  },
  {
    number: "04",
    title: "Local Citation Cleanup",
    description:
      "Your name, address, and phone must match across every directory. Inconsistencies are silently dragging down your rankings right now. This fix brings ranking stability.",
  },
  {
    number: "05",
    title: "Technical Site Fixes",
    description:
      "Mobile speed, schema markup, and Core Web Vitals: the foundations Google needs to trust and rank your site above competitors. Better rankings, lower bounce.",
  },
  {
    number: "06",
    title: "Monthly Ranking Reports",
    description:
      "Plain-English reports showing where you rank, how many people found you, and what moved. Occupancy-relevant data only. Full visibility on progress.",
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="heading text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              No SEO Jargon.{" "}
              <span className="text-gradient">We Work for Outcomes.</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              Six things that move occupancy. Nothing that doesn't. $1,500/month.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outcomes.map((outcome) => (
            <StaggerItem key={outcome.number}>
              <div className="card p-6 h-full group hover:border-[var(--color-coral)]/25 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <span
                    className="text-sm font-bold tabular-nums flex-shrink-0 mt-0.5 px-2 py-1 rounded"
                    style={{
                      color: "var(--color-coral)",
                      backgroundColor: "oklch(65% 0.2 30 / 0.1)",
                    }}
                  >
                    {outcome.number}
                  </span>
                  <div>
                    <h3
                      className="font-semibold mb-1.5 leading-snug"
                      style={{ color: "var(--color-off-white)" }}
                    >
                      {outcome.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-slate-light)" }}
                      dangerouslySetInnerHTML={{ __html: outcome.description }}
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
