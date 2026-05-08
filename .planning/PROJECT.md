# WarkopADF Website

## What This Is

A food and catering service website for WarkopADF — an Indonesian catering business. The site showcases food menus, displays catering packages, promotes custom catering services, and redirects customers to WhatsApp for inquiries and orders. All content in Bahasa Indonesia.

## Core Value

Get potential customers to contact WarkopADF via WhatsApp with minimal friction.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Landing page with hero, menu highlights, services overview
- [ ] Menu page displaying food categories (Ayam, Seafood, Daging, Sayur)
- [ ] Catering page showcasing packages and custom catering
- [ ] Gallery page with food photos and event documentation
- [ ] Contact page with WhatsApp integration and location
- [ ] Mobile-first responsive design with warm food-focused aesthetic
- [ ] WhatsApp redirect with pre-filled message for inquiries

### Out of Scope

- Online payment gateway
- Shopping cart / checkout
- User accounts / login system
- Admin dashboard
- Database — static menu data stored in code

## Context

- Brand colors: Primary Blue `#43B2D7`, Secondary Gold `#E4C32C`, Dark Navy `#0F172A`
- Address: Jl. Kaliasin Pompa No.77
- WhatsApp: 0815-1576-0009 (6281515760009 in international format)
- Tech stack: Next.js, React, Tailwind CSS, Vercel hosting

## Constraints

- **No Database**: Static menu data in `/data/menu.ts` or `.json`
- **WhatsApp-First**: All ordering handled via WhatsApp links
- **No Pricing Display**: "Harga menyesuaikan" — contact for pricing
- **Indonesian UI**: All customer-facing text in Bahasa Indonesia

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + Tailwind + Vercel | Fast, affordable, easy maintenance | — Pending |
| No database | Simple static site, infrequent updates | — Pending |
| WhatsApp for orders | Familiar, low-friction for Indonesian customers | — Pending |
| No pricing on site | Custom quotes per order | — Pending |

---

*Last updated: 2026-05-08 after initialization*