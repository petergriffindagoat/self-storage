"use client";

import { ScrollReveal } from "@/components/ui/motion";

export function VideoSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-coral)" }}
            >
              Watch Before You Decide
            </p>
            <h2
              className="heading text-3xl sm:text-4xl font-normal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              90 seconds. Map Pack stat. Real before &amp; after.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              maxWidth: "800px",
              aspectRatio: "16 / 9",
              border: "1px solid oklch(65% 0.2 30 / 0.2)",
              boxShadow: "0 0 60px oklch(65% 0.2 30 / 0.08)",
            }}
          >
            <iframe
              // src="https://www.youtube.com/embed/nLnp0tpZ0ok"
              src="https://www.youtube.com/embed/Yqy-RZzy4I8"
              title="How we grow self storage businesses with SEO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
