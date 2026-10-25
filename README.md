# TitanFit — Premium Fitness & Strength Club Website

A production-quality, responsive gym website engineered for **TitanFit** using React and Vite.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

### 5. Run linter
```bash
npm run lint
```

---

## 🎨 Design Direction & Architecture

- **Visual Direction**: Athletic charcoal/deep-black primary palette (`#0A0C10`, `#12151D`), warm white typography (`#F8FAFC`, `#94A3B8`), and controlled high-energy athletic lime accents (`#D4FF00`).
- **Editorial Contrast**: The "Why Choose Us" section features a high-contrast lighter editorial palette (`#F4F5F8`) to enhance reading comfort and avoid visual fatigue.
- **Typography**: Google Fonts [`Syne`](https://fonts.google.com/specimen/Syne) for athletic modern headings and [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for high body readability.
- **Iconography**: Crisp SVG vector icons via [`lucide-react`](https://lucide.dev/).
- **No AI generic clichés**: Custom asymmetrical layouts, zero floating blobs or glassmorphic blur traps, honest copy, and authentic fitness disciplines.

---

## 📂 Multi-Page Architecture & Routes

The website uses `react-router-dom` with dedicated pages and page-hero banners, matching the CareBridge reference UI architecture:

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | [`HomePage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/HomePage.jsx) | Concise homepage with punchy section teasers and direct links to subpages |
| `/about` | [`AboutPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/AboutPage.jsx) | Full brand story, 4 foundational standards, and facility architecture |
| `/programs` | [`ProgramsPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/ProgramsPage.jsx) | All 5 training disciplines with category filter tabs and direct inquiry hooks |
| `/trainers` | [`TrainersPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/TrainersPage.jsx) | Complete coaching staff roster, bios, specialties, and 1-on-1 consult links |
| `/memberships` | [`MembershipsPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/MembershipsPage.jsx) | 3 differentiated membership tiers, transparent pricing note, and FAQs |
| `/schedule` | [`SchedulePage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/SchedulePage.jsx) | Full interactive Monday–Sunday timetable preview and spot reservations |
| `/gallery` | [`GalleryPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/GalleryPage.jsx) | Curated photo gallery with category filters (Strength, Turf, Cardio, Locker) |
| `/contact` | [`ContactPage.jsx`](file:///c:/Users/Sayali/TitanFit/src/pages/ContactPage.jsx) | **Dedicated contact page (NO popup modal)** with address, hours, phone, WhatsApp desk, map placeholder, and fully validated inquiry form |

---
---

## 📝 Client Handover & Customization

All copy, contact details, coach profiles, membership options, and timetable records are isolated in [`src/data/gymData.js`](file:///c:/Users/Sayali/TitanFit/src/data/gymData.js):

- **Gym Details & Contact**: Replace `contact` fields (phone, WhatsApp, address, opening hours).
- **Membership Rates**: When client provides verified pricing, replace `pricePlaceholder`.
- **Trainers**: Update `TRAINERS` array with real photos, bios, and official certifications.
- **Timetable**: Modify `SCHEDULE_CLASSES` per day of the week to reflect actual gym schedule.
- **Form Integration**: Connect [`ContactSection.jsx`](file:///c:/Users/Sayali/TitanFit/src/components/ContactSection.jsx) to the client's email endpoint or CRM webhook (e.g. Formspree, Resend, HubSpot, or custom backend).
