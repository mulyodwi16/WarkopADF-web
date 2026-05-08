# Technology Stack

**Project:** WarkopADF Website
**Researched:** 2026-05-08
**Confidence:** MEDIUM-HIGH

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 15.x (latest stable) | React framework with App Router | Native static export support via `output: 'export'`, built-in image optimization, SEO-friendly |
| React | 19.x (shipped with Next.js 15) | UI library | Integrated with Next.js, component-based architecture |
| TypeScript | 5.x | Type safety | Catches errors early, better DX, required for Next.js 15 |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | 4.x | Utility-first CSS | Mobile-first responsive design, small bundle size, fast iteration |
| @tailwindcss/forms | latest | Form styling | Consistent form inputs with minimal config |

### Static Data

| Technology | Format | Purpose | Why |
|------------|--------|---------|-----|
| TypeScript modules | `.ts` files | Menu data | No database needed, type-safe, imported directly into components |
| JSON | `.json` files | Gallery metadata | Lightweight, easy to manage |

### Image Optimization

| Technology | Purpose | Why |
|------------|---------|-----|
| next/image | Responsive images | Automatic srcset, lazy loading, modern formats (WebP/AVIF) |
| Cloudinary OR unjs/images | Custom loader for static export | Default next/image loader requires server; static export needs external service |

### WhatsApp Integration

| Technology | Format | Why |
|------------|--------|-----|
| wa.me deep links | `https://wa.me/6281515760009?text=<encoded_message>` | No SDK needed, works on all devices with WhatsApp installed |
| Tailwind + React state | Floating CTA button | Mobile-first with tap target sizing |

### Hosting

| Technology | Purpose | Why |
|------------|---------|-----|
| Vercel | Production hosting | Native Next.js support, automatic static export detection, global CDN, free tier sufficient |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 15 | Astro | Astro has better raw static performance but Next.js ecosystem is more familiar; WarkopADF may need server features later (forms, etc.) |
| Styling | Tailwind CSS | CSS Modules | Tailwind's mobile-first utilities align better with responsive design requirements |
| Hosting | Vercel | Netlify | Both work, but Vercel has tighter Next.js integration |
| Image CDN | Cloudinary | ImageKit | Cloudinary has more generous free tier; ImageKit also viable |

## Installation

```bash
# Initialize Next.js with App Router and TypeScript
npx create-next-app@latest warkopadf --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack

# Navigate to project
cd warkopadf

# Install additional dependencies
npm install @tailwindcss/forms clsx tailwind-merge

# Development
npm run dev

# Production build (generates static output)
npm run build
```

## Next.js Configuration for Static Export

```js filename="next.config.ts"
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // Generate static HTML/CSS/JS
  images: {
    unoptimized: true,        // Required for static export OR use custom loader
  },
  trailingSlash: true,         // SEO-friendly URLs
}

export default nextConfig
```

**Note:** With `output: 'export'`, the default `next/image` optimization is disabled. Options:
1. Set `images: { unoptimized: true }` for simplest setup (images served as-is)
2. Use a custom loader with Cloudinary/ImageKit for optimization (more setup, better performance)

For a food/catering site where images are crucial for visual appeal, option 2 is recommended.

## Project Structure

```
warkopadf/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Landing page
│   ├── menu/
│   │   └── page.tsx        # Menu page
│   ├── catering/
│   │   └── page.tsx        # Catering page
│   ├── galeri/
│   │   └── page.tsx        # Gallery page
│   ├── kontak/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Tailwind imports + custom properties
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WhatsAppFloat.tsx   # Floating WhatsApp button
│   ├── MenuCard.tsx
│   ├── CateringPackage.tsx
│   └── GalleryGrid.tsx
├── data/
│   ├── menu.ts             # Static menu data
│   ├── catering.ts         # Catering packages
│   └── gallery.ts          # Gallery items
├── lib/
│   └── whatsapp.ts         # WhatsApp link builder utility
├── public/
│   └── images/             # Food photos, logo
└── next.config.ts
```

## WhatsApp Integration Pattern

```typescript filename="lib/whatsapp.ts"
const WHATSAPP_NUMBER = '6281515760009'

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

// Pre-filled messages in Bahasa Indonesia
export const MESSAGES = {
  inquiry: 'Halo WarkopADF, saya ingin bertanya tentang menu dan catering.',
  menu: 'Halo WarkopADF, saya ingin tanya tentang menu.',
  catering: 'Halo WarkopADF, saya ingin tanya tentang catering.',
  order: 'Halo WarkopADF, saya ingin melakukan pemesanan.',
}
```

## SEO Configuration

```tsx filename="app/layout.tsx"
export const metadata: Metadata = {
  title: 'WarkopADF - Catering & Masakan Nusantara',
  description: 'Menerima pesanan Aneka Masakan & Catering. Ayam, Seafood, Daging, Sayur. Hubungi kami via WhatsApp.',
  keywords: ['catering', 'masakan nusantara', 'nasi box', 'catering jakarta'],
  openGraph: {
    title: 'WarkopADF - Catering & Masakan Nusantara',
    description: 'Menerima pesanan Aneka Masakan & Catering',
    type: 'website',
  },
}
```

## Sources

- [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports) - HIGH confidence
- [Next.js Configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js) - HIGH confidence
- [Tailwind CSS](https://tailwindcss.com/) - Official documentation - HIGH confidence
- [Vercel Next.js Hosting](https://vercel.com/) - Platform documentation - HIGH confidence
