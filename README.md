# Lekan Okelola Portfolio

A recruiter-focused portfolio for Lekan Okelola, a Backend & Full-Stack Engineer building APIs, backend systems, web apps, mobile apps, and cloud-ready products with Node.js, NestJS, TypeScript, FastAPI, PostgreSQL, React, AWS, and Docker.

## Highlights

- Backend-first positioning with production-oriented engineering case studies.
- Private/client systems are clearly marked instead of being linked to unrelated public repositories.
- Featured work explains role, architecture, engineering decisions, technology, and practical outcome.
- Skills are grouped by engineering area rather than subjective percentage ratings.
- SEO metadata, canonical URL, sitemap, robots, Open Graph, Twitter card data, and JSON-LD structured data.
- Responsive Next.js 16 App Router UI with Tailwind CSS, GSAP, and Three.js.
- Hardened Resend contact API with server-side validation, length limits, honeypot spam protection, rate limiting, and configurable sender/recipient addresses.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Three.js / React Three Fiber
- GSAP
- Resend contact API
- Vercel Analytics

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file for contact form and public site settings:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=okelolalekan2019@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <portfolio@lekanokelola.com>
NEXT_PUBLIC_SITE_URL=https://lekanokelola.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

`CONTACT_FROM_EMAIL` should use a sender on a domain verified in Resend. If it is not configured, development falls back to Resend's onboarding sender.

## Production Checks

```bash
npm run lint
npm run build
```

Built by [Lekan Okelola](https://github.com/lasmor2).
