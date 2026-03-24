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
              90 seconds. Map Pack stat. Real before & after.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              maxWidth: "360px",
              aspectRatio: "9 / 16",
              border: "1px solid oklch(65% 0.2 30 / 0.2)",
              boxShadow: "0 0 60px oklch(65% 0.2 30 / 0.08)",
            }}
          >
            <video
              src="https://i6fftmyqqekmpqcq.public.blob.vercel-storage.com/kritiiii.mp4"
              controls
              playsInline
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
