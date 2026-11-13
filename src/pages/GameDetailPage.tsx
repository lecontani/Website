import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone } from 'lucide-react';
import { moonboundGame } from '../config/gamesConfig';
import { SEOHead } from '../components/common/SEOHead';
import { ScreenshotLightbox } from '../components/games/ScreenshotLightbox';

export const GameDetailPage: React.FC = () => {
  const game = moonboundGame;

  return (
    <>
      <SEOHead
        title={`${game.title} — Myltrix`}
        description={game.shortDescription}
      />

      {/* Top Overview */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumb-row">
            <Link to="/games" className="back-link">
              <ArrowLeft size={15} />
              <span>Back to Games</span>
            </Link>
          </div>

          <div className="game-overview-grid">
            <div className="game-cover-frame">
              <img
                src={game.coverImage}
                alt={`${game.title} — Official Cover Art`}
                className="game-cover-img"
              />
            </div>

            <div className="game-overview-info">
              <div className="game-meta-line">
                <span>{game.genre}</span>
                <span>&middot;</span>
                <span>{game.status}</span>
              </div>

              <h1 className="game-detail-title">{game.title}</h1>
              <p className="game-detail-tagline">{game.tagline}</p>
              <p className="game-detail-lead">{game.shortDescription}</p>

              <dl className="game-specs-grid">
                <div className="game-spec-item">
                  <dt>Developer</dt>
                  <dd style={{ textTransform: 'none' }}>Myltrix</dd>
                </div>
                <div className="game-spec-item">
                  <dt>Genre</dt>
                  <dd>{game.genre}</dd>
                </div>
                <div className="game-spec-item">
                  <dt>Platforms</dt>
                  <dd>{game.platforms.join(', ')}</dd>
                </div>
                <div className="game-spec-item">
                  <dt>Status</dt>
                  <dd>{game.status}</dd>
                </div>
              </dl>

              <div className="game-tags-row">
                {game.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="game-primary-cta">
                <a
                  href={game.itchIoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <span>View on itch.io</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Moonbound */}
      <section className="section-block section-border-top">
        <div className="container">
          <div className="content-two-col">
            <div>
              <span className="section-eyebrow">About the Game</span>
              <h2 className="section-title">A World Beneath a Shattered Moon</h2>
            </div>

            <div className="prose-column">
              {game.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="prose-callout">{game.closingCallout}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Features */}
      <section className="section-block section-border-top">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-eyebrow">Gameplay</span>
            <h2 className="section-title">Features</h2>
          </div>

          <div className="features-grid">
            {game.features.map((feature, index) => (
              <div key={feature.title} className="feature-card">
                <span className="feature-index">0{index + 1}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-block section-border-top">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-eyebrow">Visuals</span>
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">
              Official Moonbound cover artwork, original environment art, and in-game menu screens.
            </p>
          </div>

          <ScreenshotLightbox images={game.gallery} gameTitle={game.title} />
        </div>
      </section>

      {/* Controls & Platforms */}
      <section className="section-block section-border-top">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-eyebrow">Platforms &amp; Controls</span>
            <h2 className="section-title">Playing Moonbound</h2>
          </div>

          <div className="platforms-detail-grid">
            {/* PC Controls */}
            <div className="detail-panel">
              <div className="detail-panel-header">
                <Monitor size={18} />
                <h3>PC Controls</h3>
              </div>

              <dl className="controls-list">
                {game.pcControls.map((binding) => (
                  <div key={binding.input} className="control-row">
                    <dt className="control-key">{binding.input}</dt>
                    <dd className="control-action">{binding.action}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Android & Packages */}
            <div className="detail-panel">
              <div className="detail-panel-header">
                <Smartphone size={18} />
                <h3>Android Controls &amp; Builds</h3>
              </div>

              <p className="detail-panel-text">{game.androidControlsNote}</p>

              <div className="packages-list">
                {game.installPackages.map((pkg) => (
                  <div key={pkg.platform} className="package-item">
                    <div className="package-top">
                      <strong>{pkg.platform}</strong>
                      <span className="package-meta">
                        {pkg.fileName} &middot; {pkg.fileSize}
                      </span>
                    </div>
                    <ol className="package-steps">
                      {pkg.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bottom-itch-cta">
            <div>
              <h3>Download &amp; Follow Development</h3>
              <p>
                Official Windows and Android builds of Moonbound are hosted on itch.io.
              </p>
            </div>
            <a
              href={game.itchIoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <span>View on itch.io</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
