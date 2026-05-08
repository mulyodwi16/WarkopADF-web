# WarkopADF - Website Documentation

> Dokumentasi ini ditulis dalam Bahasa Inggris untuk keperluan development. Seluruh konten website menggunakan Bahasa Indonesia.

---

## Project Overview

WarkopADF adalah website food & catering service yang dirancang untuk:

- Menampilkan menu makanan
- Memamerkan paket catering
- Mempromosikan layanan custom catering
- Mengalihkan pelanggan ke WhatsApp untuk inquiry dan pesanan

---

## Brand Identity

### Business Name
**WarkopADF**

### Main Services
| Service | Description |
|---------|-------------|
| Katering | Layanan katering lengkap |
| Paket Nasi | Paket nasi box untuk acara |
| Masakan Harian | Menu harian siap pesan |
| Catering Acara | Katering untuk berbagai acara |

---

## Brand Colors

Palette warna berdasarkan banner yang disediakan:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Blue | `#43B2D7` | Main accent, buttons, links |
| Secondary Gold | `#E4C32C` | Highlights, borders, CTAs |
| Dark Navy | `#0F172A` | Text, dark backgrounds |
| White | `#FFFFFF` | Backgrounds, contrast |

### Tailwind Theme Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#43B2D7",
        secondary: "#E4C32C",
        navy: "#0F172A",
      }
    }
  }
}
```

---

## Design Direction

### Visual Style
- **Modern** — Clean, contemporary aesthetic
- **Bersih** — Minimalist and uncluttered
- **Warm** — Inviting, food-focused atmosphere
- **Professional** — Catering catalog quality

### UI Characteristics
- Rounded cards dengan shadow halus
- Food photography besar dan prominent
- Gold accent borders untuk highlights
- Clean typography dengan hierarchy jelas
- WhatsApp-focused CTA buttons
- Mobile-first responsive design

---

## Recommended Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js | React framework |
| React | UI library |
| Tailwind CSS | Styling |

### Hosting
- **Vercel** — Recommended deployment platform

### Data Storage
Tidak diperlukan database untuk versi awal.

```
/data/menu.ts    # atau
/data/menu.json  # Menu data stored as static files
```

---

## Database Strategy

### Why No Database?

| Reason | Explanation |
|--------|-------------|
| No login system | customers直接 WhatsApp |
| No online payment | Payment handled manually |
| No checkout/cart | Orders via WhatsApp only |
| Infrequent updates | Menu rarely changes |

### Benefits
- ✅ Faster performance
- ✅ Lower cost
- ✅ Easier maintenance

---

## Website Pages

### 1. Home Page

**Sections:**
- Hero Banner
- Menu Unggulan
- Layanan Catering
- Kenapa Memilih Kami
- Testimoni
- CTA WhatsApp

### 2. Menu Page

**Categories:**
- Ayam
- Seafood
- Daging & Paru
- Sayur
- Sayur Kuah
- Daging Kuah

**Catatan:** Tidak ada harga yang ditampilkan. Sebagai gantinya:

> *Harga menyesuaikan isi pesanan dan jumlah porsi.*
> *Silakan hubungi WhatsApp untuk informasi lebih lanjut.*

### 3. Catering Page

**Content:**
- Paket custom catering
- Pilihan lauk & sayur
- Catering acara
- Paket nasi box
- Pemesanan partai besar

### 4. Gallery Page

**Content:**
- Foto makanan
- Dokumentasi catering
- Packaging
- Event photos

### 5. Contact Page

**Information:**
- WhatsApp button (prominent)
- Alamat lengkap
- Google Maps embed

**Alamat:**
```
Jl. Kaliasin Pompa No.77
```

**Nomor Telepon:**
```
0815-1576-0009
```

---

## Indonesian UI Text

### Navigation

| English | Indonesian |
|---------|------------|
| Home | Beranda |
| Menu | Menu |
| Catering | Catering |
| Gallery | Galeri |
| Contact | Kontak |

### Hero Section

| Element | Text |
|---------|------|
| Heading | Menerima Pesanan Aneka Masakan & Catering |
| Subheading | Menu harian, nasi box, dan catering untuk berbagai acara. |
| CTA Button | Pesan via WhatsApp |

### CTA Buttons

| Primary | Secondary | Additional |
|---------|-----------|------------|
| Pesan Sekarang | Tanya Harga | Hubungi Kami |

---

## WhatsApp Integration

### Main Link
```
https://wa.me/6281515760009
```

### Pre-filled Message
```
https://wa.me/6281515760009?text=Halo%20WarkopADF,%20saya%20ingin%20bertanya%20tentang%20menu%20dan%20catering.
```

### Format
```txt
Nomor: 62815-1576-0009 (format internasional)
Format: wa.me/<country_code><number_without_leading_zero>
```

---

## Typography

### Recommended Fonts
| Font | Category | Usage |
|------|----------|-------|
| Poppins | Sans-serif | Headings, display text |
| Inter | Sans-serif | Body, UI elements |
| Montserrat | Sans-serif | Alternative headings |

---

## Folder Structure

```
/app                  # Next.js App Router pages
/components           # Reusable React components
  /Navbar.tsx
  /MenuCard.tsx
  /Footer.tsx
  /WhatsAppButton.tsx
/data                 # Static menu data
  /menu.ts
/public
  /images             # Static assets
/styles               # Global styles
```

---

## SEO Recommendations

### Meta Title
```
WarkopADF - Catering & Aneka Masakan
```

### Meta Description
```
Menerima pesanan catering, nasi box, dan Aneka masakan untuk berbagai acara. Hubungi WarkopADF via WhatsApp sekarang.
```

---

## Performance Goals

| Priority | Target |
|----------|--------|
| Speed | Fast loading (< 3s) |
| Responsive | Mobile-first design |
| SEO | Search engine friendly |
| Size | Lightweight bundle |
| Maintenance | Easy to update |

---

## Future Scalability

### Database Integration (Optional)
Database dapat ditambahkan di kemudian hari jika diperlukan.

### Possible Future Features
| Feature | Description |
|---------|-------------|
| Admin Dashboard | Manage menu & orders |
| Online Ordering | Self-service ordering |
| Payment Gateway | Integrated payments |
| Customer Accounts | User registration & history |
| Delivery Tracking | Real-time order status |

### Recommended Future Stack
- **PostgreSQL** — Relational database
- **Prisma ORM** — Database ORM
- **Supabase** — Backend-as-a-service

---

## Quick Start

### Initial Stack Summary

```
Next.js     → React Framework
React       → UI Library
Tailwind CSS → Styling
Static Data → Menu Storage
WhatsApp    → Order Handling
Vercel      → Hosting
```

### Why This Stack?

| Benefit | Explanation |
|---------|-------------|
| Fast | Static generation, edge deployment |
| Affordable | Free hosting on Vercel |
| Easy | No database to manage |
| Professional | Industry-standard tools |
| Scalable | Can grow with business needs |

---

*Last updated: 2026-05-08*