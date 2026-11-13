import { NewsArticle } from '../types';

/**
 * ============================================================================
 * Myltrix — Studio News & Devlog Configuration
 * ============================================================================
 * HOW TO ADD A NEW PUBLICATION:
 * 1. Add your article cover image into `public/images/news/`.
 * 2. Prepend a new `NewsArticle` object to the `newsArticles` array below.
 * 3. Set `isDemo: false` for real studio announcements, or keep `isDemo: true`
 *    for sample / concept demonstration entries.
 */
export const newsArticles: NewsArticle[] = [
  {
    id: 'news-01',
    slug: 'introducing-myltrix-studio-architecture',
    title: 'Introducing Myltrix: Our Vision for Precision PC & Android Games',
    date: 'November 13, 2026',
    category: 'Studio',
    readingTime: '3 min read',
    isDemo: true,
    demoLabel: 'Demo Publication',
    image: '/images/news/news-studio-launch.jpg',
    excerpt:
      'An overview of Myltrix, our design philosophy centered on mechanical clarity and stark visual atmosphere, and how we structure cross-platform releases via itch.io and GitHub.',
    content: [
      {
        heading: 'Building Games with Deliberate Focus',
        paragraphs: [
          'Myltrix was founded around a clear creative conviction: video games are at their most compelling when responsive mechanics, clean visual readability, and atmospheric worldbuilding reinforce one another without unnecessary clutter.',
          'As an independent game development studio focused on PC (Windows) and Android, every project we design starts from input feel and silhouette clarity. Whether navigating a dark subterranean shaft in a 2D action-platformer or planning an infiltration route across an isometric grid, players should always understand their capabilities and environment at a glance.'
        ],
      },
      {
        heading: 'Open & Accessible Distribution',
        paragraphs: [
          'Our official website serves as the central hub for all Myltrix concepts, prototypes, and upcoming builds. When a project reaches a public milestone, players will be able to access builds directly through our integrated distribution channels:'
        ],
        bulletPoints: [
          'Direct Windows x64 build archives and installers with verified version numbers and file sizes.',
          'Direct Android APK packages tailored for mobile touchscreens and Bluetooth controllers.',
          'Dedicated project pages hosted on itch.io for community feedback and storefront access.',
          'Structured release tags, changelogs, and issue tracking hosted on GitHub.'
        ],
        callout:
          'Note: This article is a demonstration publication created to showcase the layout and typography of the Myltrix News section.'
      }
    ],
  },
  {
    id: 'news-02',
    slug: 'concept-spotlight-nullsector-eclipse',
    title: 'Concept Spotlight: Designing High-Contrast 2D Combat in Nullsector: Eclipse',
    date: 'November 08, 2026',
    category: 'Concept Reveal',
    readingTime: '4 min read',
    isDemo: true,
    demoLabel: 'Demo Concept Dispatch',
    image: '/images/games/nullsector-shot-1.jpg',
    excerpt:
      'Exploring how real-time 2D volumetric lighting, directional dash-strikes, and kinetic energy regeneration come together in our upcoming action-platformer concept.',
    relatedGameSlug: 'nullsector-eclipse',
    content: [
      {
        heading: 'Readability in the Dark',
        paragraphs: [
          'In fast-paced 2D action-platformers, visual noise is the enemy of precision. While conceptualizing Nullsector: Eclipse at Myltrix, we established a strict monochrome value hierarchy: background architecture occupies deep obsidian and slate tones, interactive geometry carries crisp mid-gray rim lighting, and player attacks, enemy telegraphs, and projectiles shine in pure high-contrast white.',
          'This value separation allows dark rooms lit only by lanterns or reactor beacons to feel genuinely oppressive while keeping every hazard, spike trap, and incoming projectile unmistakably legible.'
        ],
      },
      {
        heading: 'The Kinetic Energy Economy',
        paragraphs: [
          'Rather than separating movement stamina from combat resources, Nullsector: Eclipse links them into a single high-tempo loop:'
        ],
        bulletPoints: [
          'Executing a dash consumes a fraction of kinetic energy with a brief cooldown window.',
          'Landing directional melee strikes and parrying sentry fire rapidly replenishes the energy gauge.',
          'At maximum charge, players can unleash the Eclipse Beam—trading stored energy for a decisive, room-clearing energy burst.'
        ],
        callout:
          'Demo Publication Notice: Nullsector: Eclipse is currently a concept demonstration project in the Myltrix catalog.'
      }
    ],
  },
  {
    id: 'news-03',
    slug: 'cross-platform-input-parity-pc-and-android',
    title: 'Engineering Input Parity Across Windows Desktop and Android Touch',
    date: 'October 29, 2026',
    category: 'Engineering',
    readingTime: '4 min read',
    isDemo: true,
    demoLabel: 'Demo Technical Post',
    image: '/images/news/news-crossplatform.jpg',
    excerpt:
      'How Myltrix architects input abstraction layers so that keyboard-and-mouse precision on PC translates cleanly to responsive on-screen controls on Android.',
    content: [
      {
        heading: 'Why Cross-Platform Architecture Starts on Day One',
        paragraphs: [
          'Porting a PC action game to Android as an afterthought often compromises either the game’s pacing or the player’s comfort. At Myltrix, our technical pipeline treats Windows and Android as co-equal target platforms from the earliest prototype stage.',
          'By decoupling core gameplay actions—movement vectors, jump buffering, directional aiming, and special abilities—from hardware-specific bindings, we can tune input feel independently for desktop peripherals and mobile touchscreens.'
        ],
      },
      {
        heading: 'Key Pillars of Our Dual-Platform Pipeline',
        paragraphs: [
          'Every Myltrix project built on Unity 6 and the Universal Render Pipeline adheres to a shared set of engineering standards:'
        ],
        bulletPoints: [
          'Responsive Input Buffering: Forgiving coyote-time and jump-buffer windows that feel crisp on both mechanical keyboards and capacitive glass.',
          'Adaptive On-Screen Touch HUD: Ergonomic virtual joystick, dedicated action buttons, and directional touch aiming that scale cleanly across ultra-wide mobile aspect ratios.',
          'Scalable URP Lighting & Shaders: Unified 2D/3D lighting passes with configurable quality tiers so mid-range Android devices maintain a locked 60 FPS alongside high-refresh PC monitors.'
        ],
        callout:
          'Demo Publication Notice: This engineering dispatch is a demonstration post illustrating how technical devlogs appear on the Myltrix website.'
      }
    ],
  },
  {
    id: 'news-04',
    slug: 'monolith-protocol-and-aether-drift-concepts',
    title: 'Inside the Concept Vault: Monolith Protocol & Aether Drift: Zero',
    date: 'October 18, 2026',
    category: 'Concept Reveal',
    readingTime: '3 min read',
    isDemo: true,
    demoLabel: 'Demo Concept Dispatch',
    image: '/images/news/news-engine-pipeline.svg',
    excerpt:
      'A closer look at two additional concept studies in the Myltrix catalog—exploring acoustic stealth in isometric space and Newtonian zero-gravity flight.',
    relatedGameSlug: 'monolith-protocol',
    content: [
      {
        heading: 'Exploring Distinct Genres Through a Unified Aesthetic',
        paragraphs: [
          'While our action-platformer concepts focus on reflex-driven traversal and combat, Myltrix also explores systemic stealth and atmospheric simulation. Monolith Protocol and Aether Drift: Zero represent two distinct mechanical studies united by our signature minimalist aesthetic.',
          'In Monolith Protocol, sound is rendered as visible geometry—turning every footstep and hacked terminal into a tactical decision across an isometric grid. Meanwhile, Aether Drift: Zero investigates momentum-driven survival inside a silent, fractured ringworld where gravitational contours guide your flight path.'
        ],
        callout:
          'Explore both concept pages in the Myltrix Games catalog to view their pre-production visuals, feature breakdowns, and target system specifications.'
      }
    ],
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
