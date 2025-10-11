# Maranathus Mission — Starter

This repo is a minimal, production-friendly starter for **Maranathus Mission** (community + shop + payments-ready skeleton).  
It is designed to be **safe to clone on your personal computer** and expand quickly:

- Next.js 14 (App Router) + TypeScript
- Basic foldering for future modules (community, shop, payments)
- Prisma (not used on the landing page; safe to install later)
- Payments interface with provider adapters (Stripe / Toss / etc.) — stubs included
- Healthcheck API (`/api/health`)

## Quick Start

1) Install deps
```bash
npm i
```

2) (Optional) If you plan to use Prisma later, create a database and add `DATABASE_URL` to `.env.local`.
```bash
cp .env.example .env.local
# edit .env.local and fill DATABASE_URL if needed
```

3) Run dev server
```bash
npm run dev
```
Visit http://localhost:3000

## Scripts
- `dev` — run Next.js dev server
- `build` — build
- `start` — start production server

## Notes
- The landing page **does not** require any secret keys to run.
- Payments and database features are **scaffolded but not active** until you wire providers.
- Place future modules under folders like `/app/shop`, `/app/community`, `/services/payments`.

## Deploy Check
- Sat Oct 11 18:13:13 KST 2025
