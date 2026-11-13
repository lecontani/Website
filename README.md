# Myltrix — Official Game Studio Website

Official website for **Myltrix**, an independent game development studio creating video games for **PC (Windows)** and **Android**.

Built with **React 18**, **TypeScript**, **Vite**, and **React Router 6**, completely isolated inside the `Myltrix-Website` folder with zero dependencies on Unity.

---

## 1. Project Structure

```text
Myltrix-Website/
├── public/
│   ├── _redirects                      # SPA routing rule for Netlify / Cloudflare Pages
│   └── images/
│       ├── logo/
│       │   ├── myltrix-logo.png        # Original transparent Myltrix logo
│       │   └── myltrix-logo-badge.jpg  # Original framed Myltrix logo badge & favicon
│       ├── studio/                     # Hero background & studio architecture visuals
│       ├── games/                      # Game covers, concept screenshots & schematics
│       └── news/                       # News & devlog illustrations
├── src/
│   ├── components/
│   │   ├── common/                     # MyltrixLogo, SEOHead, ScrollToTop, ErrorBoundary
│   │   ├── games/                      # GameCard, DownloadPanel, ScreenshotLightbox
│   │   └── layout/                     # Navbar (with mobile menu & theme switch), Footer
│   ├── config/
│   │   ├── siteConfig.ts               # Studio links (itch.io, GitHub, email, socials)
│   │   ├── gamesConfig.ts              # Games catalog, downloads, specs & changelogs
│   │   └── newsConfig.ts               # News & devlog articles
│   ├── context/
│   │   └── ThemeContext.tsx            # Persistent Light / Dark theme provider
│   ├── pages/
│   │   ├── HomePage.tsx                # Landing page
│   │   ├── GamesPage.tsx               # Filterable & searchable Games catalog
│   │   ├── GameDetailPage.tsx          # Dedicated game project page
│   │   ├── AboutPage.tsx               # Studio philosophy, goals & methodology
│   │   ├── NewsPage.tsx                # News catalog
│   │   ├── NewsDetailPage.tsx          # Individual article reader
│   │   ├── ContactPage.tsx             # Contact channels & feedback form
│   │   └── NotFoundPage.tsx            # 404 fallback page
│   ├── styles/
│   │   └── index.css                   # Monochrome Dark/Light design system & responsive CSS
│   ├── types/
│   │   └── index.ts                    # TypeScript interfaces
│   ├── App.tsx                         # Application router
│   └── main.tsx                        # Entry point
├── index.html                          # SEO meta tags, Open Graph & JSON-LD schema
├── package.json
├── tsconfig.json
├── vercel.json                         # SPA routing config for Vercel
└── vite.config.ts
```

---

## 2. How to Run Locally

Make sure **Node.js** (v18+ or v20+ LTS recommended) is installed on your computer.

1. Open a terminal and navigate into the website directory:
   ```powershell
   cd "d:\Unity Projects\Moonbound\Myltrix-Website"
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the local development server:
   ```powershell
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```powershell
   npm run build
   ```
   The optimized production bundle will be generated inside `Myltrix-Website/dist/`.

5. Preview the production build locally:
   ```powershell
   npm run preview
   ```

---

## 3. How to Customize Content

### A. Adding or Editing Games (`src/config/gamesConfig.ts`)
Open `src/config/gamesConfig.ts` and add a new object to the `gamesCatalog` array:
- `id` & `slug`: URL identifier (e.g. `'my-new-game'` opens at `/games/my-new-game`).
- `title`, `subtitle`, `shortDescription`, `fullDescription`: Game text content.
- `genre` & `platforms`: `'Windows'`, `'Android'`, or `['Windows', 'Android']`.
- `status`: `'Coming Soon'` or `'Concept'`.
- `currentVersion`: Version string (e.g. `'v1.0.0'`).
- `pcRequirements` & `androidRequirements`: Hardware specifications.
- `changelog`: Array of version update entries.

### B. Adding Covers & Screenshots (`public/images/games/`)
1. Copy your image files (`.jpg`, `.png`, `.webp`, or `.svg`) into:
   `Myltrix-Website/public/images/games/`
2. Reference them in `src/config/gamesConfig.ts` using paths starting with `/images/games/`:
   ```ts
   coverImage: '/images/games/my-game-cover.jpg',
   heroBanner: '/images/games/my-game-banner.jpg',
   screenshots: [
     {
       id: 'shot-1',
       url: '/images/games/my-game-shot-1.jpg',
       title: 'Level 1 — Lunar Citadel',
       caption: 'Description of the scene.',
       visualType: 'Concept Visual',
     },
   ],
   ```

### C. Configuring Download Links, itch.io & GitHub (`src/config/gamesConfig.ts` & `src/config/siteConfig.ts`)
1. **Studio-wide itch.io & GitHub URLs**:
   Open `src/config/siteConfig.ts` and edit `platforms`:
   ```ts
   platforms: {
     itchIoBaseUrl: 'https://itch.io/',
     githubBaseUrl: 'https://github.com/',
     studioItchIoUrl: 'https://your-studio.itch.io/',
     studioGithubUrl: 'https://github.com/your-studio',
   }
   ```
2. **Per-Game Downloads (Windows, Android APK, itch.io Page, GitHub Releases)**:
   Open `src/config/gamesConfig.ts` and update the `distribution` block of your game:
   ```ts
   distribution: {
     isPublished: true, // Set to true when ready to enable live download buttons
     releaseNote: 'Official v1.0.0 release for Windows and Android.',
     windowsDownload: {
       url: 'https://github.com/your-studio/game/releases/download/v1.0.0/Game-Win64.zip',
       version: 'v1.0.0',
       fileSize: '412 MB',
       fileFormat: 'Windows x64 (.zip)',
     },
     androidDownload: {
       url: 'https://github.com/your-studio/game/releases/download/v1.0.0/Game-Android.apk',
       version: 'v1.0.0',
       fileSize: '265 MB',
       fileFormat: 'Android Package (.apk)',
     },
     externalPlatforms: {
       itchIoGameUrl: 'https://your-studio.itch.io/game-slug',
       githubRepoUrl: 'https://github.com/your-studio/game/releases',
       itchIoPlatformUrl: 'https://itch.io/',
       githubPlatformUrl: 'https://github.com/',
     },
   }
   ```
   *Note:* Whenever `isPublished` is `false` or a specific `url` is `null`, the website automatically displays **Coming Soon** instead of a broken link.

### D. Adding News Articles (`src/config/newsConfig.ts`)
Place your article image in `public/images/news/` and add an entry to `newsArticles` in `src/config/newsConfig.ts`. Set `isDemo: false` for official studio announcements.

### E. Updating Contact Email, Socials & Form Webhook (`src/config/siteConfig.ts`)
Open `src/config/siteConfig.ts` and edit the `contact` and `socials` blocks:
- Set `contact.email` to your real studio email and `contact.isEmailPlaceholder: false`.
- To receive feedback form submissions directly via a serverless webhook (such as **Formspree** or **Web3Forms**), set `contact.formEndpointUrl: 'https://formspree.io/f/your-id'`.

---

## 4. Publishing the Website to the Internet

Because `Myltrix-Website` compiles to a static bundle (`dist/`), you can host it for free on any modern static hosting platform:

### Option 1: Vercel (Recommended)
1. Push the `Myltrix-Website` folder to a GitHub repository.
2. Import the repository on **Vercel**.
3. Set **Framework Preset** to `Vite`, **Build Command** to `npm run build`, and **Output Directory** to `dist`.
4. `vercel.json` is already included to handle client-side routes automatically.

### Option 2: Netlify / Cloudflare Pages
1. Connect your repository or drag-and-drop the generated `dist/` folder after running `npm run build`.
2. `public/_redirects` is already included so all routes (`/games`, `/about`, `/news`, `/contact`) resolve cleanly.

---

&copy; 2026 Myltrix. All rights reserved.
