# Build Prompt: selfstorage.help Landing Site

Build a complete, production-ready single-page landing site from scratch. The site is for a self storage SEO consultancy. The domain is selfstorage.help. The goal is to capture email leads from self storage business owners who want to rank higher on Google and get more customers.

---

## BUSINESS CONTEXT

**Service:** SEO and digital marketing consulting exclusively for self storage businesses
**Target audience:** Self storage facility owners and operators who are frustrated that their competitors show up first on Google, their website gets no traffic, and they're losing rentals to bigger brands
**Value prop:** We know the self storage industry — unit types, local intent searches, Google Business Profile optimization, schema markup for storage facilities — and we turn that niche expertise into rankings and leads
**CTA:** Download a free guide — "The Self Storage SEO Playbook: How to Rank #1 in Your Market and Fill Your Units"
**Lead capture:** Email address only — on form submit, send the guide via email using Resend

---

## STACK

- Next.js 16 (App Router)
- React 19
- TypeScript 5 (strict mode)
- Tailwind CSS v4 (config in globals.css, no tailwind.config.*)
- Framer Motion 12 — wrap all animation components in `src/components/ui/motion.tsx`, never import framer-motion directly in section files
- shadcn/ui (new-york style)
- Resend (email delivery)
- React Email (email template)

---

## PROJECT STRUCTURE

Scaffold from scratch with this exact structure:

```
src/
├── app/
│   ├── layout.tsx              # Global font + metadata (OpenGraph, Twitter card, Google Ads compatible)
│   ├── page.tsx                # Page composition only — imports sections, owns useActionState (single call, pass props down)
│   ├── globals.css             # Tailwind v4 @theme tokens, design system, utility classes
│   └── api/
│       └── send/
│           └── route.ts        # POST handler — calls lib/email.ts directly (no fetch loop)
├── actions/
│   └── email.ts                # "use server" — submitEmail Server Action, imports lib/email.ts
├── lib/
│   ├── utils.ts                # cn() helper
│   └── email.ts                # sendGuideEmail() — Resend SDK call + template render
├── components/
│   ├── sections/
│   │   ├── index.ts            # Barrel exports
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── WhatYouGet.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhoIsThisFor.tsx
│   │   ├── SocialProof.tsx
│   │   ├── EmailCapture.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── templates/
│   │   └── email-template.tsx  # React Email template
│   └── ui/
│       ├── motion.tsx          # ScrollReveal, StaggerReveal, StaggerItem, Floating, Parallax, PulseGlow exports
│       ├── button.tsx
│       ├── input.tsx
│       └── badge.tsx
```

---

## ARCHITECTURE RULES

- `page.tsx` owns `useActionState(submitEmail, initialState)` — call it ONCE, pass `state`, `formAction`, `isPending` as props to Hero, EmailCapture, FinalCTA. This means all three forms show success simultaneously when one is submitted. `page.tsx` must have `"use client"` since it owns the hook. Metadata goes in `layout.tsx` so it remains server-rendered.
- All section components: `"use client"` (Framer Motion requires it)
- `actions/email.ts`: `"use server"`
- `api/send/route.ts` calls `lib/email.ts` — never fetch its own route
- `actions/email.ts` calls `lib/email.ts` directly — never fetch its own route
- No dead code. No placeholder files.
- Named exports everywhere — no default exports except `page.tsx` and `layout.tsx`
- Path alias `@/` maps to `src/`
- Use `cn()` from `@/lib/utils` for all conditional class merging

---

## TYPOGRAPHY

Use **Instrument Serif** (Google Fonts) for headings — it has a refined editorial quality with variable weight contrast, feels premium and uncommon, and suits a high-trust consultancy brand. Pair with **Inter** for body text. Import both via `next/font/google` in `layout.tsx`. Apply heading font via a CSS variable (`--font-heading`) and body font via `--font-body`. Use these in `globals.css` as:

```css
font-family: var(--font-body);
```

And apply `font-[family-name:var(--font-heading)]` on headings via Tailwind.

---

## VISUAL DESIGN

**Color palette:** Deep navy (`#0a0f1e`) background, white/light gray text, a vivid coral-orange (`#f97316` or close) as the primary accent, and a muted blue-gray (`#94a3b8`) for secondary text. Creates a premium, modern, trustworthy feel without being generic.

**Design system:** Define all colors as CSS custom properties using `oklch()` in `globals.css` inside a Tailwind v4 `@theme {}` block. Include dark mode tokens.

**Layout:** Full-bleed sections, generous vertical spacing, max-w-5xl or max-w-6xl containers, centered content with clear visual hierarchy.

**Gradient effects:** Subtle radial gradients behind hero text. Glowing orb or soft blur accent shapes in the background (CSS only, no images needed).

**Animations (use components from motion.tsx):**
- ScrollReveal on every content block (fade up, 0.6s ease)
- StaggerReveal + StaggerItem on feature lists and chapter lists
- Floating on the hero badge or icon
- PulseGlow on the CTA button
- Parallax on a background element in the hero
- Smooth section transitions feel connected, not choppy

---

## PAGE SECTIONS (in order)

### 1. Hero
- Badge: "Free Playbook for Self Storage Owners"
- Headline (large, Instrument Serif): Something like — "Your Competitors Are Stealing Your Rentals. Here's How to Take Them Back."
- Subheadline: 2–3 sentences. Human, direct, no jargon. Speak to the pain of watching big operators dominate local search while great independent facilities go unnoticed.
- Email capture form (uses formAction + isPending props)
- Trust line below the form: e.g. "Join 400+ storage operators already using this playbook."
- No fake stats — write copy that is plausible and human

### 2. Problem Section
- Heading: Something that mirrors the thought "Why is my facility invisible online?"
- 3–4 pain points, each with a short punchy title and 1–2 sentence description
- Real problems: generic SEO advice doesn't account for storage-specific search intent ("drive-up units near me", "climate controlled storage [city]"), GBP categories matter enormously, schema markup for storage units, local pack vs organic, competitor facilities using paid ads to dominate
- Animations: stagger reveal on each card

### 3. What's Inside the Playbook (WhatYouGet)
- Heading: "What You'll Learn in The Self Storage SEO Playbook"
- 6–8 chapter titles with a one-line description each
- Example chapters: local keyword research for storage, optimizing your GBP for storage unit categories, building citations in storage-specific directories, schema markup for StorageBusiness, review velocity strategy, how to outrank big brands with a local authority strategy, tracking ROI from organic traffic
- Stagger reveal

### 4. How It Works (HowItWorks)
- 3 steps: Enter your email → Get the playbook instantly → Follow the framework
- Simple, clean numbered layout

### 5. Who Is This For (WhoIsThisFor)
- Bullet list of ideal reader types: independent facility owners, multi-location operators, facility managers responsible for occupancy, investors acquiring storage properties
- And a short "This is NOT for you if..." section (good contrast)

### 6. Social Proof (SocialProof)
- 2–3 testimonials — write these as realistic, specific, human quotes from fictional storage operators. Name, location, facility name. No generic praise. Specific outcomes: "went from page 3 to the local pack in 11 weeks", "organic leads up 40% since implementing the GBP section"
- 2–3 stats or credibility signals (illustrative, not fabricated data)

### 7. EmailCapture (mid-page second CTA)
- Repeated form
- Different angle: "Ready to stop losing rentals to competitors?"

### 8. FinalCTA
- Strong closing copy
- Third form instance
- Urgency or scarcity if it feels natural (e.g. "Updated for 2025 Google algorithm changes")

### 9. Footer
- Logo / site name
- Short tagline
- Links: Privacy Policy (placeholder href), Terms (placeholder href)
- Copyright

---

## EMAIL

**Template (`email-template.tsx`):**
- Accept `{ email: string }` prop — do NOT pass email as firstName
- Use a generic but warm greeting: "Hey there," or "Hi, storage pro,"
- Subject line suggestion: "Your Self Storage SEO Playbook is here"
- Body: short, warm, human. Tell them what's in the playbook, link to the PDF (use a placeholder URL for now: `https://selfstorage.help/playbook.pdf`), and close with a next step
- Styled with React Email components, brand colors

**`lib/email.ts`:**
```typescript
export async function sendGuideEmail(email: string): Promise<{ success: boolean; error?: string }>
```
- Uses Resend SDK
- FROM: `process.env.FROM_EMAIL || 'guide@selfstorage.help'`
- On success returns `{ success: true }`
- On failure returns `{ success: false, error: message }`

**`.env.local.example`:**
```
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=guide@selfstorage.help
```
No real API keys — placeholders only.

---

## GOOGLE ADS COMPATIBILITY

- `layout.tsx` must include full OpenGraph and Twitter Card meta tags
- `<title>` and `<meta name="description">` must be keyword-rich and specific: target "self storage SEO" and related terms
- Page must be fast: no heavy external scripts, no render-blocking resources
- Single page = single URL = clean for Google Ads landing page quality score
- No popups or interstitials
- CTA above the fold
- Form must be immediately visible and functional on mobile
- Add `<meta name="robots" content="index, follow">`
- Add structured data (JSON-LD) in `layout.tsx` for `ProfessionalService` schema pointing to selfstorage.help

---

## CODE QUALITY RULES

- Run `npm run lint` and `npm run build` before considering any task done — fix all errors
- TypeScript strict mode — no `any`, no type suppressions
- No unused imports, no dead code, no commented-out blocks
- All async functions must handle errors — never let unhandled promise rejections reach the client
- Form state must be typed — define a `FormState` interface in `actions/email.ts`
- Mobile-first responsive design on every section
- Accessibility: all form inputs have labels (can be visually hidden), buttons have descriptive text, color contrast is WCAG AA minimum

---

## EXTENSIBILITY GUIDELINES

Structure the code so that future additions require minimal changes:

- Each section is a self-contained file — adding a new section means creating one new file, adding one line to `sections/index.ts`, and one line to `page.tsx`
- `globals.css` is the single source of truth for design tokens — no hardcoded colors in component files
- `motion.tsx` is the single source of truth for animation primitives — adding a new animation means adding one export there
- `lib/email.ts` owns all email logic — adding a new email type (e.g. welcome sequence, confirmation) means adding one new exported function there
- Environment variables are documented in `.env.local.example` — any new env var must be added there with a comment
- The section component interface is consistent: sections that take form props accept `{ formAction, isPending, state }` — keep this pattern for any new form sections

---

## DELIVERABLES

1. All source files in the structure above
2. `package.json` with all required dependencies
3. `tsconfig.json` with path aliases configured
4. `.env.local.example` with placeholders only
5. `README.md` with: setup instructions, env var descriptions, how to add a new section, how to change the email template

Scaffold the complete project. Do not use placeholder lorem ipsum — write real, human, industry-specific copy throughout. The site should feel like it was written by someone who genuinely understands the self storage business, not by an AI filling in blanks.
