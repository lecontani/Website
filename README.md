# Myltrix — Official Website

Official minimalist website for the independent game studio **Myltrix**, presenting **Moonbound**.

Built with **React 18**, **TypeScript**, and **Vite**, completely isolated inside `Myltrix-Website` with zero dependencies on the Unity project.

---

## Project Structure

```text
Myltrix-Website/
├── .github/workflows/deploy.yml   # Automated GitHub Pages deployment
├── public/
│   └── images/logo/               # Theme-specific Myltrix logos (black & white PNG)
├── src/
│   ├── assets/
│   │   ├── logo/                  # Bundled original black & white Myltrix logos
│   │   └── moonbound/             # Authentic Moonbound cover, art & screen assets
│   ├── components/
│   │   ├── common/                # MyltrixLogo, SEOHead, ScrollToTop, ErrorBoundary
│   │   ├── games/                 # GameCard, ScreenshotLightbox
│   │   └── layout/                # Minimal Header (Navbar) & Footer
│   ├── config/
│   │   ├── siteConfig.ts          # Studio copy & itch.io links
│   │   └── gamesConfig.ts         # Official Moonbound metadata & controls
│   ├── context/
│   │   └── ThemeContext.tsx       # Persistent Light / Dark theme state
│   ├── pages/
│   │   ├── HomePage.tsx           # Minimal landing page
│   │   ├── GamesPage.tsx          # Games section featuring Moonbound
│   │   ├── GameDetailPage.tsx     # Dedicated Moonbound page
│   │   ├── AboutPage.tsx          # About Myltrix
│   │   └── NotFoundPage.tsx       # 404 fallback
│   ├── styles/index.css           # Minimal monochrome Light & Dark design system
│   ├── types/index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Local Development

```powershell
cd "d:\Unity Projects\Moonbound\Myltrix-Website"
npm install
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

---

## Official Links

- **Moonbound on itch.io:** https://myltrix.itch.io/moonbound
- **Myltrix on itch.io:** https://myltrix.itch.io

&copy; 2026 Myltrix. All rights reserved.
