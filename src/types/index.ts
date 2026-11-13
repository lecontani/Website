export type ThemeMode = 'dark' | 'light';

export type PlatformType = 'Windows' | 'Android';

export type GameStatus = 'Coming Soon' | 'Concept';

export interface GameScreenshot {
  id: string;
  url: string;
  title: string;
  caption: string;
  visualType: 'Concept Visual' | 'Pre-Production Art' | 'Architecture Schematic';
}

export interface GameFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface SystemRequirementSpec {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  additionalNotes?: string;
}

export interface PCSystemRequirements {
  minimum: SystemRequirementSpec;
  recommended: SystemRequirementSpec;
}

export interface AndroidSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  storage: string;
  controls: string;
}

export interface GameChangelogEntry {
  version: string;
  date: string;
  stage: string;
  summary: string;
  changes: string[];
}

export interface DirectDownloadConfig {
  /**
   * Direct link to the downloadable build file (e.g. .zip / .exe for Windows, .apk for Android).
   * Leave as null when the build is not yet published — the UI will automatically show "Coming Soon".
   */
  url: string | null;
  version: string;
  fileSize: string;
  fileFormat: string;
  sha256?: string;
}

export interface ExternalPlatformLinks {
  /**
   * Specific game page on itch.io (e.g. "https://your-studio.itch.io/game-slug").
   * Set to null if the game page is not live yet; the UI will show "Coming Soon" alongside the platform reference.
   */
  itchIoGameUrl: string | null;
  /**
   * Specific repository or Releases page on GitHub (e.g. "https://github.com/your-org/game-repo/releases").
   * Set to null if the repository is not public yet; the UI will show "Coming Soon" alongside the platform reference.
   */
  githubRepoUrl: string | null;
  /**
   * Base platform URLs required by specification.
   */
  itchIoPlatformUrl: string;
  githubPlatformUrl: string;
}

export interface GameDistribution {
  /**
   * Set to true only when the game is officially published and ready for public download.
   * When false, download buttons automatically display "Coming Soon" instead of active download links.
   */
  isPublished: boolean;
  releaseNote: string;
  windowsDownload: DirectDownloadConfig;
  androidDownload?: DirectDownloadConfig;
  externalPlatforms: ExternalPlatformLinks;
}

export interface GameDevelopmentInfo {
  developer: 'Myltrix';
  engine: string;
  renderPipeline: string;
  targetFrameRate: string;
  inputSupport: string;
  statusDetail: string;
  architectureNotes: string;
}

export interface GameProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  genre: string;
  tags: string[];
  platforms: PlatformType[];
  status: GameStatus;
  currentVersion: string;
  coverImage: string;
  heroBanner: string;
  screenshots: GameScreenshot[];
  features: GameFeature[];
  developmentInfo: GameDevelopmentInfo;
  pcRequirements?: PCSystemRequirements;
  androidRequirements?: AndroidSystemRequirements;
  changelog: GameChangelogEntry[];
  distribution: GameDistribution;
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Studio' | 'Concept Reveal' | 'Engineering' | 'Platform Update';
  readingTime: string;
  isDemo: boolean;
  demoLabel: string;
  image: string;
  excerpt: string;
  content: {
    heading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: string;
  }[];
  relatedGameSlug?: string;
}

export interface SocialLinkConfig {
  id: string;
  name: string;
  handle: string;
  /**
   * Set to your official profile URL when active, or leave as null to show as "Configurable / Coming Soon".
   */
  url: string | null;
  description: string;
}

export interface SiteConfig {
  studioName: 'Myltrix';
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  shortAbout: string;
  footerDescription: string;
  copyrightYear: number;
  logoPath: string;
  logoBadgePath: string;
  heroBackgroundPath: string;
  studioVisionImagePath: string;
  platforms: {
    itchIoBaseUrl: string;
    githubBaseUrl: string;
    studioItchIoUrl: string;
    studioGithubUrl: string;
  };
  contact: {
    /**
     * Configurable studio contact email. Replace in src/config/siteConfig.ts when ready.
     */
    email: string;
    isEmailPlaceholder: boolean;
    responseWindow: string;
    locationLabel: string;
    formEndpointUrl: string | null;
  };
  socials: SocialLinkConfig[];
}
