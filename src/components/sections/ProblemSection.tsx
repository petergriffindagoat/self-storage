"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const problems = [
  {
    icon: "📵",
    title: "Your phone isn't ringing the way it should",
    description:
      "If you're not in that top 3 Map Pack, those renters aren't comparing you to competitors. They're not finding you at all. National occupancy dropped to 82.2% in 2025 — but the operators bleeding units aren't the ones with bad facilities. They're the ones Google can't see.",
  },
  {
    icon: "💸",
    title: "You're paying for leads that stop when you do",
    description:
      "Google Ads costs $10–$40 per click in the storage space. You run the budget, you get calls. You pause it, silence. Every month you're renting attention instead of owning it. Local SEO flips that. Work done in month 2 is still bringing in calls in month 8.",
  },
  {
    icon: "🔍",
    title: "You're running a great facility nobody can find",
    description:
      "93% of renters check Google before they ever call. If your Maps listing is incomplete, your reviews are stale, or your website doesn't load fast on mobile — Google buries you. Not because your facility isn't good enough. Because it doesn't know you exist.",
  },
  {
    icon: "📉",
    title: "Every empty unit this month is gone forever",
    description:
      "Storage is recurring income. A renter you miss in March doesn't just cost you March — it costs you the 14 months they would have stayed. That's not a small number. Visibility isn't a marketing problem. It's a revenue problem.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="py-24 relative"
      style={{ backgroundColor: "var(--color-navy-light)" }}
    >
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2
              className="heading text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Is Your Facility{" "}
              <span className="text-gradient">Not Full?</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              The real reason your phone isn't ringing.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="card p-6 h-full hover:border-[var(--color-coral)]/20 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    {problem.icon}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--color-off-white)" }}
                    >
                      {problem.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-slate-light)" }}
                      dangerouslySetInnerHTML={{ __html: problem.description }}
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
