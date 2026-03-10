"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const outcomes = [
  {
    number: "01",
    title: "Your phone starts ringing from organic search",
    description:
      "People searching for storage near them find your facility first. Not an ad — a real, trusted result. These calls convert at a higher rate because the intent is already there.",
  },
  {
    number: "02",
    title: "Occupancy climbs and stays high",
    description:
      "Organic visibility doesn&rsquo;t turn off during slow seasons. A strong local presence keeps leads coming in year-round, flattening the seasonal dips that kill cash flow.",
  },
  {
    number: "03",
    title: "You outrank national chains in your own market",
    description:
      "Public Storage has the budget. You have the local advantage. When that advantage is properly built out, independent facilities regularly rank above national brands for the searches that matter most.",
  },
  {
    number: "04",
    title: "Growth that doesn't stop when you stop paying",
    description:
      "Unlike ads, organic rankings compound. The work done in month three still pays off in month eighteen. You build an asset — not a dependency.",
  },
  {
    number: "05",
    title: "Qualified leads, not just clicks",
    description:
      "People who find you through local search are looking for a unit right now, in your area, with your access hours. These aren&rsquo;t browsers — they&rsquo;re buyers.",
  },
  {
    number: "06",
    title: "Revenue growth you can actually track",
    description:
      "Every call, every form fill, every unit rental tied back to organic search is measurable. You see exactly what&rsquo;s working and where the growth is coming from.",
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
              What changes when{" "}
              <span className="text-gradient">it actually works</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              Not SEO jargon. Not rankings for their own sake. Here&rsquo;s what the business actually looks like on the other side.
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
