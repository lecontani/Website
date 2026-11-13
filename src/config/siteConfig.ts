import { SiteConfig } from '../types';

/**
 * ============================================================================
 * Myltrix — Global Studio & Website Configuration
 * ============================================================================
 * Edit this file to customize studio contact details, external platform links
 * (itch.io and GitHub), social channels, and hero text.
 *
 * IMPORTANT BRANDING RULE:
 * The company name must always be written strictly as "Myltrix".
 */
export const siteConfig: SiteConfig = {
  studioName: 'Myltrix',
  tagline: 'Precision-Crafted Worlds. Engineered for Immersion.',
  heroTitle: 'Architecting Atmospheric Games for PC & Android.',
  heroSubtitle:
    'Myltrix is an independent game development studio dedicated to responsive mechanics, stark visual clarity, and uncompromising cross-platform engineering.',
  shortAbout:
    'Myltrix designs and develops original video games for Windows PC and Android devices—combining tight gameplay systems, expressive lighting, and clean architectural aesthetics.',
  footerDescription:
    'Independent game development studio creating atmospheric, mechanically focused video games for PC and Android.',
  copyrightYear: 2026,
  logoPath: '/images/logo/myltrix-logo.png',
  logoBadgePath: '/images/logo/myltrix-logo-badge.jpg',
  heroBackgroundPath: '/images/studio/hero-bg.jpg',
  studioVisionImagePath: '/images/studio/studio-vision.jpg',

  platforms: {
    itchIoBaseUrl: 'https://itch.io/',
    githubBaseUrl: 'https://github.com/',
    // Replace with your specific itch.io creator page or GitHub organization URL when ready:
    studioItchIoUrl: 'https://itch.io/',
    studioGithubUrl: 'https://github.com/',
  },

  contact: {
    // Configurable placeholder email — replace with your live studio email address:
    email: 'contact@myltrix.example.com',
    isEmailPlaceholder: true,
    responseWindow: '24–48 hours (Monday – Friday)',
    locationLabel: 'Independent Digital Studio • Worldwide',
    // Optional webhook / Formspree / custom backend endpoint URL for direct form POST:
    formEndpointUrl: null,
  },

  socials: [
    {
      id: 'itchio',
      name: 'itch.io',
      handle: 'itch.io',
      url: 'https://itch.io/',
      description: 'Official game builds, playable concept prototypes, and release notes.',
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'github.com',
      url: 'https://github.com/',
      description: 'Public release repositories, issue trackers, and build changelogs.',
    },
    {
      id: 'discord',
      name: 'Discord Community',
      handle: 'Configure in siteConfig.ts',
      url: null,
      description: 'Community server for playtesting feedback and technical announcements.',
    },
    {
      id: 'x-twitter',
      name: 'X (Twitter)',
      handle: 'Configure in siteConfig.ts',
      url: null,
      description: 'Short-form development dispatches, shader previews, and milestone updates.',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'Configure in siteConfig.ts',
      url: null,
      description: 'Gameplay trailers, mechanical breakdowns, and engine showcase videos.',
    },
  ],
};
