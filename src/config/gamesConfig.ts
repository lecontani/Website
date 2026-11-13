import { GameProject } from '../types';

/**
 * ============================================================================
 * Myltrix — Games Catalog & Distribution Configuration
 * ============================================================================
 * HOW TO ADD OR EDIT A GAME:
 * 1. Place your cover art and screenshots inside `public/images/games/`.
 * 2. Add or edit a `GameProject` entry in the `gamesCatalog` array below.
 * 3. To activate live downloads when a game is published:
 *    - Set `distribution.isPublished = true`
 *    - Provide the direct URL, version, and file size in `windowsDownload` / `androidDownload`
 *    - Provide the specific game page URL in `externalPlatforms.itchIoGameUrl` (on https://itch.io/)
 *    - Provide the repository or Releases URL in `externalPlatforms.githubRepoUrl` (on https://github.com/)
 *
 * When `isPublished` is `false` or a specific link is `null`, the website
 * automatically renders "Coming Soon" instead of a broken download button.
 */
export const gamesCatalog: GameProject[] = [
  {
    id: 'nullsector-eclipse',
    slug: 'nullsector-eclipse',
    title: 'Nullsector: Eclipse',
    subtitle: 'High-Velocity 2D Tactical Action-Platformer Inside a Fractured Orbital Megastructure',
    shortDescription:
      'Traverse a subterranean orbital citadel plunged into perpetual lunar eclipse. Master kinetic dash-strikes, directional energy deflection, and grapple traversal across PC and Android.',
    fullDescription: [
      'Nullsector: Eclipse is an original 2D action-platformer concept by Myltrix set deep within an abandoned orbital ring-citadel locked in permanent eclipse. Players control an autonomous recon unit descending through interconnected industrial vaults, dark reactor shafts, and gravity-sheared catwalks.',
      'Designed around crisp frame-accurate responsiveness, combat pairs directional melee slashes with a regenerative kinetic energy gauge. Every successful parry or dash-through charges the Eclipse Beam—capable of piercing armored sentry formations and illuminating pitch-black sectors.',
      'Built from the ground up with dual-platform parity in mind, Nullsector: Eclipse targets high-refresh keyboard and controller input on Windows alongside a fully customizable, low-latency touch HUD for Android devices.'
    ],
    genre: '2D Action-Platformer / Metroidvania',
    tags: ['Action-Platformer', '2D Sci-Fi', 'Fast-Paced Combat', 'Dynamic 2D Lighting'],
    platforms: ['Windows', 'Android'],
    status: 'Coming Soon',
    currentVersion: 'v0.4.0-concept',
    coverImage: '/images/games/nullsector-cover.jpg',
    heroBanner: '/images/games/nullsector-shot-1.jpg',
    screenshots: [
      {
        id: 'ns-shot-1',
        url: '/images/games/nullsector-shot-1.jpg',
        title: 'Kinetic Dash-Strike & Drone Interception',
        caption:
          'Concept Visual: High-velocity directional dash combat cutting through automated perimeter sentries in Sector 04.',
        visualType: 'Concept Visual',
      },
      {
        id: 'ns-shot-2',
        url: '/images/games/nullsector-shot-2.jpg',
        title: 'Vertical Shaft Grapple & Beacon Illumination',
        caption:
          'Concept Visual: Subterranean vertical traversal combining tether momentum, moving platforms, and real-time 2D volumetric lighting.',
        visualType: 'Concept Visual',
      },
      {
        id: 'ns-shot-3',
        url: '/images/games/nullsector-shot-3.jpg',
        title: 'Eclipse Core Guardian Encounter',
        caption:
          'Pre-Production Art: Multi-phase boss arena inside the central reactor chamber featuring concentric shockwave patterns.',
        visualType: 'Pre-Production Art',
      },
    ],
    features: [
      {
        title: 'Precision Mobility Suite',
        description:
          'Chain double-jumps, wall-clings, directional air-dashes, and magnetic grapple tethers with zero input inertia.',
        iconName: 'Zap',
      },
      {
        title: 'Directional Deflection & Eclipse Beam',
        description:
          'Build kinetic charge through aggressive melee combos and timed parries to unleash a screen-piercing energy discharge.',
        iconName: 'Shield',
      },
      {
        title: 'Volumetric 2D Shadow Architecture',
        description:
          'Navigate pitch-black maintenance chambers where weapon flashes, flares, and reactor cores dynamically cast real-time 2D shadows.',
        iconName: 'Eye',
      },
      {
        title: 'Native PC & Android Control Parity',
        description:
          'Full key-rebinding and gamepad support on Windows paired with an ergonomic, customizable virtual joystick and aim-assist suite on Android.',
        iconName: 'Smartphone',
      },
      {
        title: 'Adaptive Sentinel AI',
        description:
          'Encounter ground patrollers, aerial interceptor swarms, and trigger-activated ambush units that react to light and sound.',
        iconName: 'Cpu',
      },
      {
        title: 'Interconnected Sector Progression',
        description:
          'Unlock shortcuts, recover encrypted crystal nodes, and replay sectors with full time-trial and combat efficiency telemetry.',
        iconName: 'Layers',
      },
    ],
    developmentInfo: {
      developer: 'Myltrix',
      engine: 'Unity 6 (Universal Render Pipeline 2D)',
      renderPipeline: 'URP 2D with Custom Volumetric Shadow & Bloom Passes',
      targetFrameRate: '60–120 FPS (Windows) / 60 FPS (Android)',
      inputSupport: 'Keyboard & Mouse, XInput/DualSense Controllers, Android Multi-Touch HUD',
      statusDetail: 'Coming Soon — Active Concept & Systems Prototyping',
      architectureNotes:
        'All visuals shown on this page are original Myltrix pre-production concept illustrations demonstrating target lighting, silhouette readability, and encounter layout.',
    },
    pcRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i3-8100 or AMD Ryzen 3 2200G',
        memory: '4 GB RAM',
        graphics: 'DirectX 11 compatible GPU with 2 GB VRAM (GeForce GTX 750 Ti / Radeon RX 550)',
        storage: '1.5 GB available space',
      },
      recommended: {
        os: 'Windows 11 (64-bit)',
        processor: 'Intel Core i5-10400 or AMD Ryzen 5 3600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 or newer',
        storage: '1.5 GB available space (SSD recommended)',
      },
    },
    androidRequirements: {
      os: 'Android 10.0 (API Level 29) or higher',
      processor: 'Octa-core 2.0 GHz (Snapdragon 730G / Exynos 9611 or equivalent)',
      memory: '4 GB RAM',
      storage: '650 MB free internal storage',
      controls: 'On-screen customizable touch controls or Bluetooth gamepad',
    },
    changelog: [
      {
        version: 'v0.4.0-concept',
        date: 'November 2026',
        stage: 'Concept Milestone',
        summary: 'Boss Arena Telemetry & Android Touch HUD Layout Architecture',
        changes: [
          'Designed multi-tiered reactor boss encounter patterns and shockwave readability cues.',
          'Defined adaptive on-screen touch button scaling and directional aim zones for Android 16:9 and 20:9 displays.',
          'Refined high-contrast monochrome palette to guarantee projectile visibility during intense combat.',
        ],
      },
      {
        version: 'v0.2.5-concept',
        date: 'October 2026',
        stage: 'Combat & Traversal Spec',
        summary: 'Grapple Momentum Physics & Energy Regeneration Loop',
        changes: [
          'Established core movement metrics for double-jump apex, wall-slide friction, and dash cooldown windows.',
          'Prototyped the kinetic energy bar economy linking melee hits to ranged shots and the ultimate beam attack.',
        ],
      },
      {
        version: 'v0.1.0-concept',
        date: 'September 2026',
        stage: 'Initial Concept',
        summary: 'Project Conception & Visual Direction by Myltrix',
        changes: [
          'Created foundational worldbuilding and architectural art direction for the Nullsector citadel.',
          'Configured cross-platform build profiles for Windows x64 and Android IL2CPP.',
        ],
      },
    ],
    distribution: {
      isPublished: false,
      releaseNote:
        'Nullsector: Eclipse is currently in active concept development at Myltrix. Public builds for Windows and Android will be published via itch.io and GitHub Releases upon milestone completion.',
      windowsDownload: {
        url: null,
        version: 'v0.4.0-concept',
        fileSize: 'TBD (~420 MB Target)',
        fileFormat: 'Windows x64 (.zip / Installer)',
      },
      androidDownload: {
        url: null,
        version: 'v0.4.0-concept',
        fileSize: 'TBD (~280 MB Target)',
        fileFormat: 'Android Package (.apk)',
      },
      externalPlatforms: {
        itchIoGameUrl: null,
        githubRepoUrl: null,
        itchIoPlatformUrl: 'https://itch.io/',
        githubPlatformUrl: 'https://github.com/',
      },
    },
    featured: true,
  },

  {
    id: 'monolith-protocol',
    slug: 'monolith-protocol',
    title: 'Monolith Protocol',
    subtitle: 'Isometric Cyber-Noir Stealth & Acoustic Tactical Puzzle Game',
    shortDescription:
      'Infiltrate shifting brutalist data-fortresses where every footstep emits visible acoustic ripples. Reprogram autonomous sentry grids and manipulate architectural geometry on PC and Android.',
    fullDescription: [
      'Monolith Protocol is an isometric stealth-strategy concept created by Myltrix that strips tactical infiltration down to its purest geometric elements: sightlines, acoustic resonance, and shifting architecture.',
      'Every action inside the Monolith network generates measurable sound rings that propagate across concrete corridors and reflect off brutalist pillars. Players must balance silent positioning with deliberate acoustic decoys—luring autonomous patrol drones into laser barriers or rotating bridge segments.',
      'With deterministic turn-hybrid timing and clean tactile node hacking, Monolith Protocol is engineered to play effortlessly with a mouse and keyboard on Windows or intuitive tap-and-drag vector commands on Android tablets and phones.'
    ],
    genre: 'Isometric Stealth / Tactical Puzzle',
    tags: ['Isometric Stealth', 'Tactical Puzzle', 'Cyber-Noir', 'Minimalist Architecture'],
    platforms: ['Windows', 'Android'],
    status: 'Concept',
    currentVersion: 'v0.2.0-concept',
    coverImage: '/images/games/monolith-cover.jpg',
    heroBanner: '/images/games/monolith-shot-1.jpg',
    screenshots: [
      {
        id: 'mp-shot-1',
        url: '/images/games/monolith-shot-1.jpg',
        title: 'Sightline Cones & Pillar Occlusion',
        caption:
          'Concept Visual: Real-time isometric vision cone slicing and dynamic cover positioning inside Vault Sector B.',
        visualType: 'Concept Visual',
      },
      {
        id: 'mp-shot-2',
        url: '/images/games/monolith-shot-2.jpg',
        title: 'Architectural Bridge Alignment & Node Routing',
        caption:
          'Concept Visual: Rerouting power conduits to rotate suspended concrete walkways and bypass security bulkheads.',
        visualType: 'Concept Visual',
      },
      {
        id: 'mp-shot-3',
        url: '/images/games/monolith-shot-3.jpg',
        title: 'Acoustic Ripple Propagation',
        caption:
          'Pre-Production Art: Visualized sound-wave rings radiating across a rain-slicked courtyard guarded by monolith turrets.',
        visualType: 'Pre-Production Art',
      },
    ],
    features: [
      {
        title: 'Visualized Acoustic Telemetry',
        description:
          'See sound propagation in real time as crisp concentric waveforms that bounce off walls and alert nearby sensors.',
        iconName: 'Radio',
      },
      {
        title: 'Kinetic Architecture Manipulation',
        description:
          'Hack terminal relays to rotate walkways, elevate blast shields, and reshape sightlines mid-infiltration.',
        iconName: 'Box',
      },
      {
        title: 'Deterministic Tactical Planning',
        description:
          'Preview sentry patrol vectors and timeline ticks to execute zero-detection runs without guesswork.',
        iconName: 'Compass',
      },
      {
        title: 'Sub-Network Circuit Puzzles',
        description:
          'Override high-security vaults through fast, logical logic-gate routing integrated directly into the isometric world.',
        iconName: 'Terminal',
      },
    ],
    developmentInfo: {
      developer: 'Myltrix',
      engine: 'Unity 6 (Universal Render Pipeline)',
      renderPipeline: 'Custom Isometric Orthographic Shader & Stencil Vision Pass',
      targetFrameRate: '60 FPS (Windows & Android)',
      inputSupport: 'Mouse & Keyboard, Controller, Android Touch Gesture & Vector Pathing',
      statusDetail: 'Concept Stage — Game Design & Visual Prototyping',
      architectureNotes:
        'Visual materials represent Myltrix concept designs illustrating isometric camera framing, acoustic ring shaders, and level geometry.',
    },
    pcRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Dual-Core 2.4 GHz (Intel Core i3-7100 or equivalent)',
        memory: '4 GB RAM',
        graphics: 'DirectX 11 GPU with 1 GB VRAM (Intel UHD 630 / GeForce GT 1030)',
        storage: '1.2 GB available space',
      },
      recommended: {
        os: 'Windows 11 (64-bit)',
        processor: 'Quad-Core 3.0 GHz (Intel Core i5-9400 / AMD Ryzen 5 2600)',
        memory: '8 GB RAM',
        graphics: 'Dedicated GPU with 2 GB+ VRAM (GeForce GTX 1050 Ti or better)',
        storage: '1.2 GB available space (SSD)',
      },
    },
    androidRequirements: {
      os: 'Android 9.0 (Pie) or higher',
      processor: 'Octa-core 1.8 GHz or higher',
      memory: '3 GB RAM',
      storage: '450 MB free internal storage',
      controls: 'Touch tap-to-move and drag-to-hack interface',
    },
    changelog: [
      {
        version: 'v0.2.0-concept',
        date: 'November 2026',
        stage: 'Concept Milestone',
        summary: 'Acoustic Wave Propagation & Isometric Stencil Visibility Spec',
        changes: [
          'Defined mathematical model for concentric sound ripple attenuation across multi-material floors.',
          'Created isometric concept layouts for rotating bridge puzzles and turret sightline occlusion.',
        ],
      },
      {
        version: 'v0.1.0-concept',
        date: 'September 2026',
        stage: 'Concept Pitch',
        summary: 'Initial Concept Blueprint by Myltrix',
        changes: [
          'Established core cyber-noir monochrome aesthetic and tactile stealth mechanics.',
        ],
      },
    ],
    distribution: {
      isPublished: false,
      releaseNote:
        'Monolith Protocol is an original game concept in design at Myltrix. Download links for Windows and Android will become active once a playable prototype build is released.',
      windowsDownload: {
        url: null,
        version: 'v0.2.0-concept',
        fileSize: 'TBD',
        fileFormat: 'Windows x64 (.zip)',
      },
      androidDownload: {
        url: null,
        version: 'v0.2.0-concept',
        fileSize: 'TBD',
        fileFormat: 'Android Package (.apk)',
      },
      externalPlatforms: {
        itchIoGameUrl: null,
        githubRepoUrl: null,
        itchIoPlatformUrl: 'https://itch.io/',
        githubPlatformUrl: 'https://github.com/',
      },
    },
    featured: true,
  },

  {
    id: 'aether-drift-zero',
    slug: 'aether-drift-zero',
    title: 'Aether Drift: Zero',
    subtitle: 'Atmospheric Low-Gravity Survival & Ringworld Exploration',
    shortDescription:
      'Pilot a modular reconnaissance craft through silent crystalline debris fields of a shattered orbital ring. Harvest kinetic anomalies and chart shifting void corridors on PC.',
    fullDescription: [
      'Aether Drift: Zero is an atmospheric survival and Newtonian flight exploration concept developed by Myltrix for PC. Set in the wake of a cataclysmic ringworld fracture, players command an agile deep-space survey vessel navigating silent fields of monolithic shards and gravitational eddies.',
      'Survival hinges on momentum conservation and modular hull engineering. Every thruster burn consumes precious reaction mass, challenging pilots to sling around micro-singularities, tether to drifting relic stations, and calibrate long-range acoustic scanners to map safe passage through the dark.',
      'Presented in a stark high-contrast visual style that blends crisp vector telemetry overlays with volumetric light shafts, Aether Drift: Zero turns deep-space navigation into a tense, meditative test of skill.'
    ],
    genre: 'Atmospheric Survival / Zero-G Exploration',
    tags: ['Zero-G Flight', 'Survival Exploration', 'Sci-Fi Simulation', 'PC Exclusive Concept'],
    platforms: ['Windows'],
    status: 'Concept',
    currentVersion: 'v0.1.5-concept',
    coverImage: '/images/games/aether-cover.jpg',
    heroBanner: '/images/games/aether-shot-1.jpg',
    screenshots: [
      {
        id: 'ad-shot-1',
        url: '/images/games/aether-shot-1.jpg',
        title: 'Crystalline Ringworld Cavern Navigation',
        caption:
          'Concept Visual: Zero-G thruster vectoring through fractured megastructure shards illuminated by directional survey spotlights.',
        visualType: 'Concept Visual',
      },
      {
        id: 'ad-shot-2',
        url: '/images/games/aether-shot-2.jpg',
        title: 'Orbital Relay Docking & Wave Telemetry',
        caption:
          'Concept Visual: Wireframe and volumetric docking interface scanning gravitational anomalies around a dormant relay.',
        visualType: 'Concept Visual',
      },
      {
        id: 'ad-shot-3',
        url: '/images/games/aether-shot-3.svg',
        title: 'Singularity Horizon & Trajectory Schematic',
        caption:
          'Architecture Schematic: Orbital slingshot vector calculation and accretion ring telemetry HUD layout.',
        visualType: 'Architecture Schematic',
      },
    ],
    features: [
      {
        title: 'Newtonian 6-DOF Momentum Flight',
        description:
          'Toggle coupled stabilization or drift in pure zero-gravity inertia to thread narrow crystalline trenches without burning fuel.',
        iconName: 'Navigation',
      },
      {
        title: 'Modular Hull & Sensor Loadouts',
        description:
          'Swap thruster nozzles, kinetic harvesters, and directional LiDAR arrays at derelict orbital drydocks.',
        iconName: 'Sliders',
      },
      {
        title: 'Gravitational Anomaly Slingshots',
        description:
          'Read real-time gravity-well contours on your monochrome HUD to accelerate across vast sectors or evade collapsing debris.',
        iconName: 'Orbit',
      },
      {
        title: 'Diegetic Wireframe Telemetry',
        description:
          'Minimalist cockpit instrumentation integrated seamlessly into the environment so your focus remains on the void ahead.',
        iconName: 'Activity',
      },
    ],
    developmentInfo: {
      developer: 'Myltrix',
      engine: 'Unity 6 (URP Custom Vector & Volumetric Pipeline)',
      renderPipeline: 'Hybrid Wireframe Telemetry + Volumetric Particle Lighting',
      targetFrameRate: '60–144 FPS (Windows PC)',
      inputSupport: 'Mouse & Keyboard, Dual-Stick Gamepad, HOTAS Axis Mapping',
      statusDetail: 'Concept Stage — Flight Physics & Visual Research',
      architectureNotes:
        'All artwork shown is original Myltrix concept art and telemetry schematics created to establish the atmosphere of Aether Drift: Zero.',
    },
    pcRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570 (4 GB VRAM)',
        storage: '2.5 GB available space',
      },
      recommended: {
        os: 'Windows 11 (64-bit)',
        processor: 'Intel Core i5-12400 or AMD Ryzen 5 5600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600',
        storage: '2.5 GB available space (NVMe SSD)',
      },
    },
    changelog: [
      {
        version: 'v0.1.5-concept',
        date: 'November 2026',
        stage: 'Concept Milestone',
        summary: 'Gravitational Slingshot HUD & Modular Vessel Schematics',
        changes: [
          'Designed diegetic trajectory prediction curves for micro-singularity encounters.',
          'Completed key concept visuals for crystalline ringworld caverns and orbital docking relays.',
        ],
      },
      {
        version: 'v0.1.0-concept',
        date: 'October 2026',
        stage: 'Initial Concept',
        summary: 'Zero-G Exploration Concept Initiated at Myltrix',
        changes: [
          'Outlined Newtonian flight model parameters and resource harvesting loop.',
        ],
      },
    ],
    distribution: {
      isPublished: false,
      releaseNote:
        'Aether Drift: Zero is currently an early-stage PC concept project at Myltrix. Windows builds and repository releases are not yet published.',
      windowsDownload: {
        url: null,
        version: 'v0.1.5-concept',
        fileSize: 'TBD',
        fileFormat: 'Windows x64 (.zip)',
      },
      externalPlatforms: {
        itchIoGameUrl: null,
        githubRepoUrl: null,
        itchIoPlatformUrl: 'https://itch.io/',
        githubPlatformUrl: 'https://github.com/',
      },
    },
    featured: true,
  },
];

export function getGameBySlug(slug: string): GameProject | undefined {
  return gamesCatalog.find((game) => game.slug === slug);
}
