# WarkopADF Website Requirements

## v1 Requirements

### Landing (LAND-01)
- [ ] **LAND-01**: User can see hero banner with heading "Menerima Pesanan Aneka Masakan & Catering"
- [ ] **LAND-02**: User can see CTA button linking to WhatsApp with pre-filled message
- [ ] **LAND-03**: User can see menu highlights section with featured dishes
- [ ] **LAND-04**: User can see services overview section (catering, nasi box, masakan harian)
- [ ] **LAND-05**: User can see "Kenapa Memilih Kami" section with value propositions
- [ ] **LAND-06**: User can see testimonials section
- [ ] **LAND-07**: User can navigate to all pages via navbar

### Menu (MENU-01)
- [ ] **MENU-01**: User can view menu page with food categories
- [ ] **MENU-02**: User can browse category: Ayam (fried, grilled, balado, etc.)
- [ ] **MENU-03**: User can browse category: Seafood (rimpang, kepala, etc.)
- [ ] **MENU-04**: User can browse category: Daging & Paru
- [ ] **MENU-05**: User can browse category: Sayur
- [ ] **MENU-06**: User can browse category: Sayur Kuah
- [ ] **MENU-07**: User can browse category: Daging Kuah
- [ ] **MENU-08**: User sees "Harga menyesuaikan" message instead of prices
- [ ] **MENU-09**: Menu items displayed as rounded cards with food names

### Catering (CAT-01)
- [ ] **CAT-01**: User can view catering page
- [ ] **CAT-02**: User can see custom catering packages section
- [ ] **CAT-03**: User can see pilihan lauk & sayur options
- [ ] **CAT-04**: User can see nasi box packages
- [ ] **CAT-05**: User can see party/order information for large orders
- [ ] **CAT-06**: User can see CTA to contact via WhatsApp

### Gallery (GAL-01)
- [ ] **GAL-01**: User can view gallery page
- [ ] **GAL-02**: User can see food photos grid
- [ ] **GAL-03**: User can see catering documentation photos
- [ ] **GAL-04**: User can see packaging photos

### Contact (CONT-01)
- [ ] **CONT-01**: User can view contact page
- [ ] **CONT-02**: User can see WhatsApp button (prominent, gold accent)
- [ ] **CONT-03**: User can see address: Jl. Kaliasin Pompa No.77
- [ ] **CONT-04**: User can see embedded Google Maps with location

### Design System (DES-01)
- [ ] **DES-01**: Primary blue `#43B2D7` applied to buttons, links, accents
- [ ] **DES-02**: Secondary gold `#E4C32C` applied to highlights, borders, CTAs
- [ ] **DES-03**: Dark navy `#0F172A` for text and dark backgrounds
- [ ] **DES-04**: White `#FFFFFF` for backgrounds and contrast
- [ ] **DES-05**: Rounded card components with soft shadows
- [ ] **DES-06**: Mobile-first responsive layout
- [ ] **DES-07**: Clean typography with hierarchy (Poppins/Inter/Montserrat)

### Navigation (NAV-01)
- [ ] **NAV-01**: User can see navbar with: Beranda, Menu, Catering, Galeri, Kontak
- [ ] **NAV-02**: Navbar is sticky on scroll
- [ ] **NAV-03**: Navbar collapses to hamburger on mobile
- [ ] **NAV-04**: WhatsApp floating button visible on all pages

### WhatsApp Integration (WA-01)
- [ ] **WA-01**: WhatsApp link uses format: `https://wa.me/6281515760009`
- [ ] **WA-02**: Pre-filled message: "Halo WarkopADF, saya ingin bertanya tentang menu dan catering."
- [ ] **WA-03**: WhatsApp CTA buttons labeled: "Pesan Sekarang", "Tanya Harga", "Hubungi Kami"

## v2 Requirements (Deferred)

- [ ] Admin dashboard for menu management
- [ ] Online ordering system
- [ ] Payment gateway integration
- [ ] Customer accounts
- [ ] Delivery tracking

## Out of Scope

- **Online payment** — Orders handled via WhatsApp, payment cash on delivery or transfer
- **Shopping cart** — No e-commerce functionality
- **User accounts** — No login, no customer profiles
- **Database** — Static menu data stored in `/data/menu.ts`
- **Real-time inventory** — Menu updates are infrequent, handled via code

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| LAND-01 to LAND-07 | 1 | — |
| MENU-01 to MENU-09 | 1 | — |
| CAT-01 to CAT-06 | 1 | — |
| GAL-01 to GAL-04 | 1 | — |
| CONT-01 to CONT-04 | 1 | — |
| DES-01 to DES-07 | 1 | — |
| NAV-01 to NAV-04 | 1 | — |
| WA-01 to WA-03 | 1 | — |