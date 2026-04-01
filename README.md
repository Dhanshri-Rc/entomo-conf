# 🦋 ICISZ 2026 — International Conference on Insect Science & Zoology

A fully responsive, modern academic conference website built with **React.js**, **React Router DOM**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

Visit `http://localhost:5173` after running `npm run dev`.

---

## 📁 Project Structure

```
entomology-conference-2026/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Router & page transitions
    ├── index.css             # Global styles + Tailwind
    ├── assets/
    │   └── data.js           # All dummy data (speakers, schedule, topics…)
    ├── components/
    │   ├── Navbar.jsx        # Sticky responsive navbar with hamburger
    │   ├── Footer.jsx        # Full footer with links and contact info
    │   ├── HeroSection.jsx   # Animated hero banner
    │   ├── SpeakerCard.jsx   # Flip-card speaker component
    │   ├── ScheduleCard.jsx  # Colour-coded session card
    │   └── SectionReveal.jsx # Scroll-triggered fade-up animation wrapper
    └── pages/
        ├── Home.jsx          # Landing page (hero + 5 sections)
        ├── About.jsx         # Mission, history timeline, committee
        ├── Topics.jsx        # 8 research tracks + submission guidelines
        ├── Speakers.jsx      # Filterable speaker grid
        ├── Schedule.jsx      # Day-by-day programme with type filter
        ├── Registration.jsx  # Pricing tiers + registration form
        └── Contact.jsx       # Contact form + venue info
```

---

## 🎨 Design System

| Token         | Value      | Usage                     |
|---------------|------------|---------------------------|
| `forest-900`  | `#2E7D32`  | Primary green              |
| `cream-100`   | `#FFF9C4`  | Light yellow accents       |
| White         | `#FFFFFF`  | Page backgrounds           |
| Serif font    | Playfair Display | Headings             |
| Sans font     | DM Sans    | Body text & UI             |

---

## 📦 Tech Stack

- **React 18** — functional components + hooks
- **React Router DOM v6** — client-side routing with `<AnimatePresence>`
- **Framer Motion** — page transitions + scroll animations + floating elements
- **Tailwind CSS v3** — utility-first styling with custom theme extension
- **Vite** — fast development server and build tool

---

## ✨ Key Features

- ✅ 7 fully functional pages
- ✅ Smooth page transitions (Framer Motion `AnimatePresence`)
- ✅ Scroll-triggered section reveals
- ✅ Sticky responsive navbar (collapses to hamburger on mobile)
- ✅ Interactive speaker cards (click to flip and read bio)
- ✅ Day/type filterable schedule
- ✅ Fully validated registration form with success state
- ✅ Contact form with success state
- ✅ Registration pricing tiers with interactive selection
- ✅ Floating animated insect decorations on hero
- ✅ Conference history timeline
- ✅ Call for Papers section
- ✅ Important dates section
- ✅ Mobile-first responsive design

---

## 📄 Dummy Data

All content is defined in `src/assets/data.js` and easily editable:

- `speakers` — 6 keynote/invited speakers with name, photo, bio, tags
- `schedule` — 3-day programme with session types, times, locations
- `importantDates` — 6 conference deadlines
- `topics` — 8 research tracks with subtopics
- `registrationTiers` — 3 pricing tiers (Student / Academic / Industry)

---

## 🌍 Deployment

```bash
npm run build
# Outputs to /dist — deploy to Netlify, Vercel, or any static host
```

---

*Built for the International Entomological Society · ICISZ 2026 · Vienna, Austria*
