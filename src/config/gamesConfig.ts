import { MoonboundGameData } from '../types';
import moonboundCover from '../assets/moonbound/moonbound-cover.png';
import moonboundRuins from '../assets/moonbound/moonbound-ruins.png';
import moonboundMoonlight from '../assets/moonbound/moonbound-moonlight.png';
import moonboundMenu from '../assets/moonbound/moonbound-menu.png';
import moonboundLevels from '../assets/moonbound/moonbound-levels.png';

/**
 * Official Moonbound Project Data
 * Sourced faithfully from https://myltrix.itch.io/moonbound and project assets.
 */
export const moonboundGame: MoonboundGameData = {
  slug: 'moonbound',
  title: 'Moonbound',
  tagline: 'When the Moon shattered, the darkness awakened.',
  shortDescription:
    'A dark fantasy 2D action platformer of lost crystals, forgotten ruins, and mysterious powers.',
  aboutParagraphs: [
    'A forgotten world lies beneath the remains of a shattered Moon. Ancient ruins drift through the void, forgotten civilizations have vanished, and mysterious lunar crystals preserve fragments of a power that should never have been awakened.',
    'Step into the role of a mysterious warrior and embark on a journey through a world consumed by darkness. Fight hostile creatures, master powerful combat abilities, overcome deadly obstacles, and explore mysterious environments filled with the remnants of a forgotten past.',
    'Every shard holds a fragment of the truth. Every journey brings you closer to discovering what really happened to the Moon.',
    'Moonbound is an indie 2D action platformer developed under the Myltrix name, blending fast-paced combat, exploration, and a mysterious dark fantasy setting.',
  ],
  closingCallout: 'Enter the darkness. Collect the fragments. Uncover the forgotten truth.',
  genre: '2D Action Platformer • Dark Fantasy',
  tags: ['2D', 'Action', 'Platformer', 'Fantasy', 'Pixel Art'],
  platforms: ['Windows', 'Android'],
  status: 'In development',
  itchIoUrl: 'https://myltrix.itch.io/moonbound',
  coverImage: moonboundCover,

  features: [
    {
      title: 'Dynamic Combat',
      description:
        'Combine melee attacks and ranged abilities to defeat dangerous enemies. Master your abilities and adapt to different encounters.',
    },
    {
      title: 'Shadow Dash',
      description:
        'Use your dash ability to navigate dangerous environments, evade threats, and overcome challenging obstacles.',
    },
    {
      title: 'Lunar Crystals',
      description:
        'Discover mysterious crystals scattered throughout the world. Collect fragments of ancient power hidden among forgotten ruins.',
    },
    {
      title: 'Dangerous Environments',
      description:
        'Navigate deadly traps, unstable platforms, mysterious structures, and hostile creatures lurking in the darkness.',
    },
    {
      title: 'Dark Fantasy Atmosphere',
      description:
        'Explore a mysterious world shaped by forgotten civilizations, floating ruins, deep shadows, and the cold glow of moonlight.',
    },
  ],

  gallery: [
    {
      id: 'moonbound-cover',
      src: moonboundCover,
      title: 'Official Game Cover',
      caption: 'Key cover art for Moonbound published on itch.io.',
      category: 'Official Cover Art',
    },
    {
      id: 'moonbound-ruins',
      src: moonboundRuins,
      title: 'Floating Ruins & Lunar Crystals',
      caption: 'Original environment art depicting ancient shattered ruins beneath the moonlight.',
      category: 'Environment Art',
    },
    {
      id: 'moonbound-moonlight',
      src: moonboundMoonlight,
      title: 'Moonlit Sky & Citadel Horizon',
      caption: 'Original backdrop artwork featuring drifting ruins and the shattered night sky.',
      category: 'Environment Art',
    },
    {
      id: 'moonbound-menu',
      src: moonboundMenu,
      title: 'Title & Main Menu',
      caption: 'Original in-game main menu screen from Moonbound.',
      category: 'In-Game Screen',
    },
    {
      id: 'moonbound-levels',
      src: moonboundLevels,
      title: 'Level Selection Screen',
      caption: 'Original in-game level select menu showing Levels 1 through 6.',
      category: 'In-Game Screen',
    },
  ],

  pcControls: [
    { input: 'A / D', action: 'Move' },
    { input: 'Space', action: 'Jump' },
    { input: 'E', action: 'Interact / Open' },
    { input: 'Shift', action: 'Dash' },
    { input: 'Left Mouse Button', action: 'Melee Attack' },
    { input: 'Right Mouse Button', action: 'Shoot' },
    { input: 'Q', action: 'Mega Attack' },
  ],

  androidControlsNote:
    'Use the on-screen touch controls adapted for touchscreen gameplay to move, jump, dash, interact, shoot, and perform melee and mega attacks.',

  installPackages: [
    {
      platform: 'Windows PC',
      fileName: 'Moonbound.zip',
      fileSize: '50 MB',
      steps: [
        'Download the Windows version of Moonbound from itch.io.',
        'Extract the downloaded ZIP archive.',
        'Open the extracted folder and launch Moonbound.exe.',
      ],
    },
    {
      platform: 'Android',
      fileName: 'Moonbound.apk',
      fileSize: '50 MB',
      steps: [
        'Download the Android version of Moonbound (.apk) from itch.io.',
        'Open the downloaded APK file on your Android device.',
        'Follow the installation prompts and launch Moonbound.',
      ],
    },
  ],
};
