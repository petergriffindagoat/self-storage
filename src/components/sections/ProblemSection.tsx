"use client";

import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ui/motion";

const problems = [
  {
    icon: "📵",
    title: "Your phone isn't ringing the way it should",
    description:
      "When someone nearby searches for a storage unit, they don&rsquo;t scroll past the first few results. If you&rsquo;re not visible there, those calls are going to whoever is — and that&rsquo;s money you never see.",
  },
  {
    icon: "💸",
    title: "Ads create a treadmill, not a business",
    description:
      "Google Ads work while you&rsquo;re paying. The moment the budget stops, so do the leads. You&rsquo;re renting attention instead of owning it — and national chains with deeper pockets will always outspend you.",
  },
  {
    icon: "🏗️",
    title: "National chains aren't better — just better positioned",
    description:
      "Public Storage and Extra Space aren&rsquo;t winning because their facilities are superior. They&rsquo;re winning because they show up first. That positioning can be taken — and independent operators do it every day.",
  },
  {
    icon: "🙈",
    title: "Your reputation doesn't reach people before they call",
    description:
      "You run a great facility. But if Google can&rsquo;t surface you when someone searches, all that goodwill is invisible. The best word-of-mouth today travels through search — not just referrals.",
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
              Why great facilities{" "}
              <span className="text-gradient">stay half-empty</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-slate-light)" }}
            >
              It&rsquo;s rarely the facility. It&rsquo;s almost always the visibility.
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
