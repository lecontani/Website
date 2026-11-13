import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Compass,
  Cpu,
  Eye,
  Gamepad2,
  Layers,
  Monitor,
  ShieldCheck,
  Smartphone,
  Sliders,
  Target,
  Zap,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MyltrixLogo } from '../components/common/MyltrixLogo';
import { SEOHead } from '../components/common/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us — Myltrix | Studio Philosophy & Development Approach"
        description="Learn about Myltrix, an independent game development studio building atmospheric, mechanically precise video games for Windows PC and Android."
      />

      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="about-hero-brand">
            <MyltrixLogo size="lg" showText={true} subtitle="Independent Game Studio" framed={true} />
          </div>
          <span className="section-eyebrow">Studio Profile</span>
          <h1 className="page-hero-title" style={{ textTransform: 'none' }}>
            About Myltrix
          </h1>
          <p className="page-hero-subtitle">
            {siteConfig.tagline} We are an independent digital game studio focused on crafting
            atmospheric, mechanically expressive video games for PC and Android.
          </p>
        </div>
      </section>

      {/* 2. WHAT THE STUDIO DOES & WHAT GAMES WE CREATE */}
      <section className="section-block pt-0">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-card">
              <div className="about-card-icon">
                <Gamepad2 size={22} />
              </div>
              <span className="section-eyebrow">01 // Core Mission</span>
              <h2 className="subsection-title" style={{ textTransform: 'none' }}>
                What Myltrix Does
              </h2>
              <p>
                Myltrix is an independent video game development studio dedicated to the end-to-end
                creation of original interactive projects for <strong>Windows PC</strong> and{' '}
                <strong>Android</strong>. From initial concept architecture and core gameplay
                programming to custom shader pipelines and multi-platform optimization, every layer
                of production is built with deliberate care.
              </p>
              <p>
                Rather than chasing bloated feature checklists, Myltrix focuses on cohesive,
                self-contained experiences where controls feel immediate, visual language is
                unmistakable, and performance remains rock-solid across desktop and mobile hardware.
              </p>
            </div>

            <div className="about-overview-card">
              <div className="about-card-icon">
                <Layers size={22} />
              </div>
              <span className="section-eyebrow">02 // Creative Focus</span>
              <h2 className="subsection-title" style={{ textTransform: 'none' }}>
                The Games We Create
              </h2>
              <p>
                Myltrix develops atmospheric, system-driven games spanning 2D action-platformers,
                tactical isometric stealth-puzzle experiences, and low-gravity survival exploration.
                Across every genre we explore, our projects share a distinct creative signature:
              </p>
              <ul className="about-check-list">
                <li>
                  <strong>Responsive Kinetic Gameplay:</strong> Tight movement physics, crisp
                  collision feedback, and rewarding skill ceilings.
                </li>
                <li>
                  <strong>High-Contrast Visual Atmosphere:</strong> Expressive lighting, strong
                  silhouette readability, and clean minimalist user interfaces.
                </li>
                <li>
                  <strong>Dual-Platform Engineering:</strong> Designed simultaneously for desktop
                  peripherals (keyboard, mouse, controller) and ergonomic Android touch controls.
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Banner */}
          <div className="about-visual-showcase">
            <div className="about-visual-media">
              <img
                src={siteConfig.studioVisionImagePath}
                alt="Myltrix cross-platform game architecture blueprint"
                className="about-visual-img"
                loading="lazy"
              />
            </div>
            <div className="about-visual-content">
              <span className="section-eyebrow">Unified Target Platforms</span>
              <h3 style={{ textTransform: 'none' }}>Built for Desktop Monitors &amp; Mobile Screens</h3>
              <p>
                Every Myltrix project is architected with clean input abstraction and scalable Universal
                Render Pipeline (URP) lighting passes—delivering high-refresh responsiveness on Windows PCs
                and battery-conscious 60 FPS fluidity on Android devices.
              </p>
              <div className="about-platform-badges">
                <span className="platform-chip">
                  <Monitor size={14} /> Windows x64
                </span>
                <span className="platform-chip">
                  <Smartphone size={14} /> Android (ARM64)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT PHILOSOPHY */}
      <section className="section-block section-surface">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow">03 // Guiding Principles</span>
            <h2 className="section-title" style={{ textTransform: 'none' }}>
              Development Philosophy at Myltrix
            </h2>
            <p className="section-subtitle">
              Four foundational principles guide how we design, iterate, and evaluate every project in our studio.
            </p>
          </div>

          <div className="philosophy-grid">
            <article className="philosophy-card">
              <div className="philosophy-num">01</div>
              <div className="philosophy-icon">
                <Zap size={20} />
              </div>
              <h3>Mechanics First, Always</h3>
              <p>
                A game is only as engaging as its moment-to-moment interaction. Before finalizing art or
                expanding level scope, we prototype movement, combat, and core loops in greybox arenas until
                every input feels effortless and precise.
              </p>
            </article>

            <article className="philosophy-card">
              <div className="philosophy-num">02</div>
              <div className="philosophy-icon">
                <Eye size={20} />
              </div>
              <h3>Visual Clarity Over Clutter</h3>
              <p>
                Atmospheric worlds should never compromise gameplay legibility. We use deliberate contrast,
                clean geometric framing, and purposeful lighting so hazards, interactive objects, and enemy
                telegraphs are readable within milliseconds.
              </p>
            </article>

            <article className="philosophy-card">
              <div className="philosophy-num">03</div>
              <div className="philosophy-icon">
                <Sliders size={20} />
              </div>
              <h3>Platform Respect</h3>
              <p>
                PC players expect customizable bindings, crisp frame pacing, and clean ultrawide scaling.
                Android players expect responsive touch zones and intuitive HUD layouts. We treat each
                platform’s ergonomics as a first-class design requirement.
              </p>
            </article>

            <article className="philosophy-card">
              <div className="philosophy-num">04</div>
              <div className="philosophy-icon">
                <ShieldCheck size={20} />
              </div>
              <h3>Honest Communication</h3>
              <p>
                We clearly distinguish between early concepts, active prototypes, and finished builds. We share
                transparent changelogs, real system requirements, and direct distribution links through
                itch.io and GitHub.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. STUDIO GOALS & 5. APPROACH TO CREATING GAME PROJECTS */}
      <section className="section-block">
        <div className="container">
          <div className="goals-and-pipeline-grid">
            {/* Goals */}
            <div className="studio-goals-panel">
              <span className="section-eyebrow">04 // Forward Direction</span>
              <h2 className="subsection-title" style={{ textTransform: 'none' }}>
                Goals of Myltrix
              </h2>
              <p className="panel-intro">
                Our long-term objective is to establish a sustainable, fiercely independent catalog of
                original games that players return to for their atmosphere and mechanical depth.
              </p>

              <div className="goals-list">
                <div className="goal-item">
                  <Target size={18} className="goal-icon" />
                  <div>
                    <h3>Cultivate Original Intellectual Property</h3>
                    <p>
                      Develop distinct, self-contained universes with memorable visual identities and deep
                      systemic gameplay.
                    </p>
                  </div>
                </div>

                <div className="goal-item">
                  <Compass size={18} className="goal-icon" />
                  <div>
                    <h3>Deliver Seamless PC &amp; Mobile Releases</h3>
                    <p>
                      Provide friction-free access to our builds through direct Windows downloads, Android
                      APKs, itch.io pages, and GitHub release repositories.
                    </p>
                  </div>
                </div>

                <div className="goal-item">
                  <Cpu size={18} className="goal-icon" />
                  <div>
                    <h3>Refine Reusable Studio Architecture</h3>
                    <p>
                      Continuously evolve our internal Unity 6 + C# frameworks for input handling, 2D/3D URP
                      lighting, audio management, and scene transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Creation Approach */}
            <div className="studio-pipeline-panel">
              <span className="section-eyebrow">05 // Production Methodology</span>
              <h2 className="subsection-title">Our Approach to Building Games</h2>
              <p className="panel-intro">
                Every project at Myltrix progresses through five structured engineering and design stages:
              </p>

              <ol className="pipeline-steps">
                <li className="pipeline-step">
                  <span className="step-index">Stage 01</span>
                  <div className="step-body">
                    <h3>Concept &amp; Atmospheric Blueprint</h3>
                    <p>
                      Defining the core mechanical hook, visual value hierarchy, and target platform constraints.
                    </p>
                  </div>
                </li>

                <li className="pipeline-step">
                  <span className="step-index">Stage 02</span>
                  <div className="step-body">
                    <h3>Kinetic Greybox Prototyping</h3>
                    <p>
                      Building movement controllers, combat state machines, and camera tracking before committing to final art assets.
                    </p>
                  </div>
                </li>

                <li className="pipeline-step">
                  <span className="step-index">Stage 03</span>
                  <div className="step-body">
                    <h3>Lighting, Shaders &amp; Level Architecture</h3>
                    <p>
                      Constructing interconnected levels with real-time URP lighting, hazard systems, and audio-visual feedback cues.
                    </p>
                  </div>
                </li>

                <li className="pipeline-step">
                  <span className="step-index">Stage 04</span>
                  <div className="step-body">
                    <h3>Cross-Platform Input &amp; Performance Tuning</h3>
                    <p>
                      Profiling CPU/GPU frame times and tailoring desktop bindings alongside Android on-screen touch controls.
                    </p>
                  </div>
                </li>

                <li className="pipeline-step">
                  <span className="step-index">Stage 05</span>
                  <div className="step-body">
                    <h3>Public Packaging &amp; Iteration</h3>
                    <p>
                      Publishing verified Windows and Android builds to itch.io and GitHub with structured version logs.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="about-cta-banner">
            <div>
              <h2 style={{ textTransform: 'none' }}>Explore the Myltrix Catalog</h2>
              <p>
                See how our philosophy shapes our current game concepts or get in touch with the studio.
              </p>
            </div>
            <div className="about-cta-buttons">
              <Link to="/games" className="btn btn-primary">
                <span>Browse Games</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <Code2 size={16} />
                <span>Contact Myltrix</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
