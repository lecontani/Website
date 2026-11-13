import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Code2,
  Cpu,
  Gamepad2,
  Layers,
  Monitor,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { gamesCatalog } from '../config/gamesConfig';
import { newsArticles } from '../config/newsConfig';
import { MyltrixLogo } from '../components/common/MyltrixLogo';
import { SEOHead } from '../components/common/SEOHead';
import { GameCard } from '../components/games/GameCard';

export const HomePage: React.FC = () => {
  const featuredGames = gamesCatalog.filter((g) => g.featured);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Myltrix — Independent Game Development Studio | PC & Android"
        description="Official website of Myltrix. Independent game studio crafting atmospheric, mechanically precise video games for Windows PC and Android."
      />

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div
          className="hero-bg-media"
          style={{ backgroundImage: `url(${siteConfig.heroBackgroundPath})` }}
          aria-hidden="true"
        />
        <div className="hero-bg-gradient" aria-hidden="true" />
        <div className="hero-grid-overlay" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-content">
            {/* Myltrix Original Logo + Brand Identity Pill */}
            <div className="hero-brand-Identity">
              <MyltrixLogo size="lg" showText={true} subtitle="Independent Game Studio" framed={true} />
              <span className="hero-platform-tag">PC (Windows) &amp; Android</span>
            </div>

            {/* English Slogan */}
            <div className="hero-slogan-pill">
              <Sparkles size={14} />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Large Headline */}
            <h1 className="hero-headline" style={{ textTransform: 'none' }}>
              Crafting Atmospheric Worlds Where <span className="text-gradient">Myltrix</span> Precision Meets Immersion.
            </h1>

            {/* Brief Studio Information */}
            <p className="hero-lead">{siteConfig.shortAbout}</p>

            {/* Primary CTA Buttons: Explore Games & About Us */}
            <div className="hero-cta-group">
              <Link to="/games" className="btn btn-primary btn-lg">
                <span>Explore Games</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                <span>About Us</span>
              </Link>
            </div>

            {/* Subtle Platform & Architecture Highlights */}
            <div className="hero-highlights-bar">
              <div className="hero-highlight-item">
                <Monitor size={16} />
                <div>
                  <strong>Windows PC</strong>
                  <span>Native x64 Builds</span>
                </div>
              </div>
              <div className="hero-highlight-divider" />
              <div className="hero-highlight-item">
                <Smartphone size={16} />
                <div>
                  <strong>Android</strong>
                  <span>Touch &amp; Gamepad Parity</span>
                </div>
              </div>
              <div className="hero-highlight-divider" />
              <div className="hero-highlight-item">
                <Gamepad2 size={16} />
                <div>
                  <strong>itch.io &amp; GitHub</strong>
                  <span>Direct Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED GAMES SECTION */}
      <section className="section-block">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Project Catalog</span>
              <h2 className="section-title">Concepts &amp; Upcoming Titles</h2>
              <p className="section-subtitle">
                Explore original game concepts and prototypes in pre-production at Myltrix for PC and Android.
              </p>
            </div>
            <Link to="/games" className="btn btn-outline">
              <span>View Full Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="games-grid">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDIO PILLARS & ARCHITECTURE PREVIEW */}
      <section className="section-block section-surface">
        <div className="container">
          <div className="studio-split-feature">
            <div className="studio-split-text">
              <span className="section-eyebrow">Inside Myltrix</span>
              <h2 className="section-title" style={{ textTransform: 'none' }}>
                Designed for Clarity. Engineered by Myltrix.
              </h2>
              <p className="studio-split-description">
                At Myltrix, we believe every frame, input window, and lighting pass should serve gameplay.
                We build focused, atmospheric experiences where responsive controls and high-contrast visual
                architecture work in unison across desktop and mobile hardware.
              </p>

              <div className="pillars-mini-grid">
                <div className="pillar-mini-card">
                  <Cpu size={20} />
                  <div>
                    <h3>Mechanical Precision</h3>
                    <p>Tight movement physics, deterministic combat timing, and zero-clutter HUD telemetry.</p>
                  </div>
                </div>
                <div className="pillar-mini-card">
                  <Layers size={20} />
                  <div>
                    <h3>Cross-Platform Parity</h3>
                    <p>Co-engineered from day one for Windows keyboard/controller and Android touchscreen play.</p>
                  </div>
                </div>
              </div>

              <div className="studio-split-actions">
                <Link to="/about" className="btn btn-primary">
                  <span>Read Our Philosophy</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.platforms.studioGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Code2 size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={siteConfig.platforms.studioItchIoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Gamepad2 size={16} />
                  <span>itch.io</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="studio-split-visual">
              <div className="visual-frame">
                <img
                  src={siteConfig.studioVisionImagePath}
                  alt="Myltrix cross-platform game architecture concept illustration"
                  className="visual-frame-img"
                  loading="lazy"
                />
                <div className="visual-frame-caption">
                  <span>Architecture Study // Dual-Platform PC &amp; Android Pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST NEWS & DEVLOGS PREVIEW */}
      <section className="section-block">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Studio Dispatches</span>
              <h2 className="section-title">Latest News &amp; Concept Notes</h2>
              <p className="section-subtitle">
                Development updates, technical breakdowns, and concept reveals from Myltrix.
              </p>
            </div>
            <Link to="/news" className="btn btn-outline">
              <span>All Publications</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="news-grid-three">
            {latestNews.map((article) => (
              <article key={article.id} className="news-card">
                <Link to={`/news/${article.slug}`} className="news-card-media-link">
                  <div className="news-card-media">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="news-card-img"
                      loading="lazy"
                    />
                    <div className="news-card-badges">
                      <span className="news-category-badge">{article.category}</span>
                      {article.isDemo && (
                        <span className="news-demo-badge">{article.demoLabel}</span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="news-card-body">
                  <div className="news-card-date">
                    <Calendar size={13} />
                    <time>{article.date}</time>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <h3 className="news-card-title">
                    <Link to={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="news-card-excerpt">{article.excerpt}</p>

                  <div className="news-card-footer">
                    <Link to={`/news/${article.slug}`} className="btn btn-secondary btn-sm">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
