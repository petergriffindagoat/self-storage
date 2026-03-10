# selfstorage.help

A production-ready single-page landing site for a self storage SEO consultancy. Captures email leads from self storage business owners, sends them a free guide via Resend.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** (config in `globals.css`)
- **Framer Motion 12** (wrapped in `components/ui/motion.tsx`)
- **Resend** (email delivery)
- **React Email** (email template)

---

## Setup

### 1. Clone and install

```bash
git clone <repo>
cd self-storage
npm install --legacy-peer-deps
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `FROM_EMAIL`     | Verified sender address (must be verified in Resend) |

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Global fonts, metadata, JSON-LD schema
│   ├── page.tsx             # Page composition, owns useActionState
│   ├── globals.css          # Tailwind v4 @theme tokens + base styles
│   └── api/send/route.ts   # REST endpoint for email (calls lib/email.ts)
├── actions/
│   └── email.ts             # Server Action: submitEmail
├── lib/
│   ├── utils.ts             # cn() helper
│   └── email.ts             # sendGuideEmail() — Resend SDK
├── components/
│   ├── sections/            # One file per page section
│   │   ├── index.ts         # Barrel exports
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
│       ├── motion.tsx       # Animation primitives (Framer Motion)
│       ├── button.tsx
│       ├── input.tsx
│       └── badge.tsx
```

---

## How to Add a New Section

1. Create `src/components/sections/MySectionName.tsx`
2. Export a named component: `export function MySectionName() { ... }`
3. Add the export to `src/components/sections/index.ts`
4. Import and render it in `src/app/page.tsx`

If the section includes a form, accept `{ formAction, isPending, state }` props and pass them from `page.tsx` — the hook is called once at the page level.

---

## How to Change the Email Template

Edit `src/components/templates/email-template.tsx`. The template receives `{ email: string }` as its only prop. Use React Email components from `@react-email/components`.

To add a new email type (e.g. a welcome sequence):

1. Add a new exported function to `src/lib/email.ts`
2. Add a new template file in `src/components/templates/`
3. Document any new env vars in `.env.local.example`

---

## Design Tokens

All colors, fonts, and spacing are defined as CSS custom properties in `src/app/globals.css` inside the `@theme {}` block. Never hardcode colors in component files — use `var(--color-*)` values.

---

## Adding a New Animation

Add an exported component to `src/components/ui/motion.tsx`. Never import `framer-motion` directly in section files.
