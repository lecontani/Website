export type ThemeMode = 'dark' | 'light';

export interface GameFeature {
  title: string;
  description: string;
}

export interface GameImageItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'Official Cover Art' | 'Environment Art' | 'In-Game Screen';
}

export interface ControlBinding {
  input: string;
  action: string;
}

export interface MoonboundGameData {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  aboutParagraphs: string[];
  closingCallout: string;
  genre: string;
  tags: string[];
  platforms: string[];
  status: string;
  itchIoUrl: string;
  coverImage: string;
  features: GameFeature[];
  gallery: GameImageItem[];
  pcControls: ControlBinding[];
  androidControlsNote: string;
  installPackages: {
    platform: string;
    fileName: string;
    fileSize: string;
    steps: string[];
  }[];
}

export interface SiteConfig {
  studioName: 'Myltrix';
  slogan: string;
  homeDescription: string;
  aboutSummary: string;
  aboutDetails: string[];
  itchIoProfileUrl: string;
  moonboundUrl: string;
  copyrightYear: number;
}
