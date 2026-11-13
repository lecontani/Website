import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Box,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Eye,
  GitCommit,
  HardDrive,
  Layers,
  Monitor,
  Navigation,
  Orbit,
  Radio,
  Shield,
  Sliders,
  Smartphone,
  Sparkles,
  Tag,
  Terminal,
  Zap,
} from 'lucide-react';
import { gamesCatalog, getGameBySlug } from '../config/gamesConfig';
import { SEOHead } from '../components/common/SEOHead';
import { DownloadPanel } from '../components/games/DownloadPanel';
import { ScreenshotLightbox } from '../components/games/ScreenshotLightbox';

const FEATURE_ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap size={20} />,
  Shield: <Shield size={20} />,
  Eye: <Eye size={20} />,
  Smartphone: <Smartphone size={20} />,
  Cpu: <Cpu size={20} />,
  Layers: <Layers size={20} />,
  Radio: <Radio size={20} />,
  Box: <Box size={20} />,
  Compass: <Compass size={20} />,
  Terminal: <Terminal size={20} />,
  Navigation: <Navigation size={20} />,
  Sliders: <Sliders size={20} />,
  Orbit: <Orbit size={20} />,
  Activity: <Activity size={20} />,
};

export const GameDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? getGameBySlug(slug) : undefined;

  if (!game) {
    return (
      <section className="section-block">
        <div className="container">
          <div className="empty-state-box">
            <h1>Project Not Found</h1>
            <p>The requested game project does not exist in the Myltrix catalog.</p>
            <Link to="/games" className="btn btn-primary">
              <ArrowLeft size={16} />
              <span>Return to Games Catalog</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const otherGames = gamesCatalog.filter((g) => g.id !== game.id);
  const isComingSoon = game.status === 'Coming Soon';

  return (
    <>
      <SEOHead
        title={`${game.title} — Myltrix | ${game.genre}`}
        description={game.shortDescription}
      />

      {/* 1. LARGE COVER HERO SECTION */}
      <section className="game-hero">
        <div
          className="game-hero-backdrop"
          style={{ backgroundImage: `url(${game.heroBanner || game.coverImage})` }}
          aria-hidden="true"
        />
        <div className="game-hero-gradient" aria-hidden="true" />

        <div className="container game-hero-container">
          <div className="game-breadcrumb-row">
            <Link to="/games" className="breadcrumb-back-link">
              <ArrowLeft size={15} />
              <span>Back to Games Catalog</span>
            </Link>
          </div>

          <div className="game-hero-grid">
            {/* Large Cover Art Frame */}
            <div className="game-cover-showcase">
              <img
                src={game.coverImage}
                alt={`${game.title} — Official Concept Cover Art`}
                className="game-cover-large-img"
              />
              <span className="cover-caption-tag">
                <Sparkles size={12} /> Original Myltrix Concept Key Art
              </span>
            </div>

            {/* Primary Game Overview */}
            <div className="game-hero-info">
              <div className="game-status-cluster">
                <span
                  className={`status-badge ${
                    isComingSoon ? 'status-badge-coming-soon' : 'status-badge-concept'
                  }`}
                >
                  {isComingSoon ? <Clock size={13} /> : <Sparkles size={13} />}
                  <span>{game.status}</span>
                </span>
                <span className="version-badge">
                  <Tag size={12} />
                  <span>{game.currentVersion}</span>
                </span>
                <span className="genre-badge">{game.genre}</span>
              </div>

              <h1 className="game-detail-title">{game.title}</h1>
              <p className="game-detail-subtitle">{game.subtitle}</p>

              {/* Quick Specs Bar */}
              <div className="game-quick-specs">
                <div className="quick-spec-box">
                  <span className="quick-spec-label">Developer</span>
                  <strong className="quick-spec-value" style={{ textTransform: 'none' }}>
                    Myltrix
                  </strong>
                </div>
                <div className="quick-spec-box">
                  <span className="quick-spec-label">Supported Platforms</span>
                  <strong className="quick-spec-value">
                    {game.platforms.map((p) => (p === 'Windows' ? 'PC (Windows)' : 'Android')).join(', ')}
                  </strong>
                </div>
                <div className="quick-spec-box">
                  <span className="quick-spec-label">Current Version</span>
                  <strong className="quick-spec-value">{game.currentVersion}</strong>
                </div>
                <div className="quick-spec-box">
                  <span className="quick-spec-label">Development Status</span>
                  <strong className="quick-spec-value">{game.status}</strong>
                </div>
              </div>

              <div className="game-tag-list">
                {game.tags.map((tag) => (
                  <span key={tag} className="game-tag-item">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: FULL DESCRIPTION, DOWNLOADS, SCREENSHOTS, FEATURES, SPECS, CHANGELOG */}
      <div className="section-block">
        <div className="container game-detail-sections">
          {/* External Downloads & Platforms Panel */}
          <DownloadPanel game={game} />

          {/* About / Full Description & Development Info Split */}
          <section className="game-content-split" aria-labelledby="about-game-heading">
            <div className="game-description-box">
              <span className="section-eyebrow">Project Overview</span>
              <h2 id="about-game-heading" className="subsection-title">
                Full Description
              </h2>
              <div className="prose-paragraphs">
                {game.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="game-dev-info-card" aria-labelledby="dev-info-heading">
              <span className="section-eyebrow">Technical Metadata</span>
              <h3 id="dev-info-heading" className="dev-info-title">
                Development Information
              </h3>

              <dl className="dev-info-list">
                <div className="dev-info-row">
                  <dt>Studio</dt>
                  <dd style={{ textTransform: 'none' }}>{game.developmentInfo.developer}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Genre</dt>
                  <dd>{game.genre}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Target Platforms</dt>
                  <dd>{game.platforms.join(' & ')}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Engine &amp; Tech</dt>
                  <dd>{game.developmentInfo.engine}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Render Pipeline</dt>
                  <dd>{game.developmentInfo.renderPipeline}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Target Frame Rate</dt>
                  <dd>{game.developmentInfo.targetFrameRate}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Input Support</dt>
                  <dd>{game.developmentInfo.inputSupport}</dd>
                </div>
                <div className="dev-info-row">
                  <dt>Status</dt>
                  <dd>{game.developmentInfo.statusDetail}</dd>
                </div>
              </dl>

              <div className="dev-architecture-note">
                <Sparkles size={14} />
                <p>{game.developmentInfo.architectureNotes}</p>
              </div>
            </aside>
          </section>

          {/* Screenshot / Concept Visual Gallery */}
          <section className="game-section-card" aria-labelledby="gallery-heading">
            <div className="section-header-row">
              <div>
                <span className="section-eyebrow">Visual Gallery</span>
                <h2 id="gallery-heading" className="subsection-title">
                  Concept Screenshots &amp; Environmental Studies
                </h2>
                <p className="section-subtitle">
                  Original pre-production visuals illustrating target lighting, camera framing, and gameplay mechanics for {game.title}. Click any image to inspect in fullscreen.
                </p>
              </div>
            </div>

            <ScreenshotLightbox screenshots={game.screenshots} gameTitle={game.title} />
          </section>

          {/* Gameplay Features */}
          <section className="game-section-card" aria-labelledby="features-heading">
            <span className="section-eyebrow">Core Systems</span>
            <h2 id="features-heading" className="subsection-title">
              Gameplay Features
            </h2>

            <div className="features-grid">
              {game.features.map((feature) => (
                <div key={feature.title} className="feature-item-card">
                  <div className="feature-icon-wrap">
                    {FEATURE_ICON_MAP[feature.iconName] || <CheckCircle2 size={20} />}
                  </div>
                  <h3 className="feature-item-title">{feature.title}</h3>
                  <p className="feature-item-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* System Requirements (PC & Android) */}
          {(game.pcRequirements || game.androidRequirements) && (
            <section className="game-section-card" aria-labelledby="sysreq-heading">
              <span className="section-eyebrow">Hardware Target Specifications</span>
              <h2 id="sysreq-heading" className="subsection-title">
                System Requirements
              </h2>

              <div className="sysreq-grid">
                {game.pcRequirements && (
                  <>
                    <div className="sysreq-box">
                      <div className="sysreq-box-header">
                        <Monitor size={18} />
                        <h3>Windows PC — Minimum</h3>
                      </div>
                      <dl className="sysreq-list">
                        <div>
                          <dt>OS</dt>
                          <dd>{game.pcRequirements.minimum.os}</dd>
                        </div>
                        <div>
                          <dt>Processor</dt>
                          <dd>{game.pcRequirements.minimum.processor}</dd>
                        </div>
                        <div>
                          <dt>Memory</dt>
                          <dd>{game.pcRequirements.minimum.memory}</dd>
                        </div>
                        <div>
                          <dt>Graphics</dt>
                          <dd>{game.pcRequirements.minimum.graphics}</dd>
                        </div>
                        <div>
                          <dt>Storage</dt>
                          <dd>
                            <HardDrive size={13} className="inline-icon" />{' '}
                            {game.pcRequirements.minimum.storage}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="sysreq-box sysreq-box-featured">
                      <div className="sysreq-box-header">
                        <Monitor size={18} />
                        <h3>Windows PC — Recommended</h3>
                      </div>
                      <dl className="sysreq-list">
                        <div>
                          <dt>OS</dt>
                          <dd>{game.pcRequirements.recommended.os}</dd>
                        </div>
                        <div>
                          <dt>Processor</dt>
                          <dd>{game.pcRequirements.recommended.processor}</dd>
                        </div>
                        <div>
                          <dt>Memory</dt>
                          <dd>{game.pcRequirements.recommended.memory}</dd>
                        </div>
                        <div>
                          <dt>Graphics</dt>
                          <dd>{game.pcRequirements.recommended.graphics}</dd>
                        </div>
                        <div>
                          <dt>Storage</dt>
                          <dd>
                            <HardDrive size={13} className="inline-icon" />{' '}
                            {game.pcRequirements.recommended.storage}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </>
                )}

                {game.androidRequirements && (
                  <div className="sysreq-box">
                    <div className="sysreq-box-header">
                      <Smartphone size={18} />
                      <h3>Android Target Requirements</h3>
                    </div>
                    <dl className="sysreq-list">
                      <div>
                        <dt>OS Version</dt>
                        <dd>{game.androidRequirements.os}</dd>
                      </div>
                      <div>
                        <dt>Processor</dt>
                        <dd>{game.androidRequirements.processor}</dd>
                      </div>
                      <div>
                        <dt>Memory</dt>
                        <dd>{game.androidRequirements.memory}</dd>
                      </div>
                      <div>
                        <dt>Storage</dt>
                        <dd>{game.androidRequirements.storage}</dd>
                      </div>
                      <div>
                        <dt>Input Controls</dt>
                        <dd>{game.androidRequirements.controls}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Version & Update History (Changelog) */}
          <section className="game-section-card" aria-labelledby="changelog-heading">
            <div className="section-header-row">
              <div>
                <span className="section-eyebrow">Version Log</span>
                <h2 id="changelog-heading" className="subsection-title">
                  Update History &amp; Concept Milestones
                </h2>
              </div>
              <span className="version-pill-large">Current: {game.currentVersion}</span>
            </div>

            <div className="changelog-timeline">
              {game.changelog.map((entry) => (
                <div key={entry.version} className="changelog-item">
                  <div className="changelog-marker">
                    <GitCommit size={16} />
                  </div>
                  <div className="changelog-body">
                    <div className="changelog-header">
                      <span className="changelog-version">{entry.version}</span>
                      <span className="changelog-stage">{entry.stage}</span>
                      <time className="changelog-date">{entry.date}</time>
                    </div>
                    <h3 className="changelog-summary">{entry.summary}</h3>
                    <ul className="changelog-list">
                      {entry.changes.map((change, idx) => (
                        <li key={idx}>{change}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Games in Catalog */}
          {otherGames.length > 0 && (
            <section className="other-games-section">
              <div className="section-header-row">
                <div>
                  <span className="section-eyebrow">More from Myltrix</span>
                  <h2 className="subsection-title">Explore Other Projects</h2>
                </div>
                <Link to="/games" className="btn btn-outline btn-sm">
                  <span>All Games</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="other-games-grid">
                {otherGames.map((other) => (
                  <Link
                    key={other.id}
                    to={`/games/${other.slug}`}
                    className="other-game-mini-card"
                  >
                    <img
                      src={other.coverImage}
                      alt={other.title}
                      className="other-game-mini-img"
                      loading="lazy"
                    />
                    <div className="other-game-mini-info">
                      <span className="other-game-mini-status">{other.status}</span>
                      <h3>{other.title}</h3>
                      <p>{other.genre}</p>
                    </div>
                    <ArrowRight size={18} className="other-game-arrow" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
