import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { moonboundGame } from '../config/gamesConfig';
import { MyltrixLogo } from '../components/common/MyltrixLogo';
import { SEOHead } from '../components/common/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Myltrix — Independent Game Studio"
        description="Official website of Myltrix, an independent game studio creating Moonbound for Windows and Android."
      />

      {/* Minimalist Studio Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-mark">
              <MyltrixLogo size="xl" showText={false} />
            </div>

            <h1 className="hero-title" style={{ textTransform: 'none' }}>
              Myltrix
            </h1>

            <p className="hero-slogan">{siteConfig.slogan}</p>

            <p className="hero-description">{siteConfig.homeDescription}</p>

            <div className="hero-actions">
              <Link to="/games/moonbound" className="btn btn-primary btn-lg">
                <span>Explore Moonbound</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Moonbound */}
      <section className="section-block section-border-top">
        <div className="container">
          <div className="section-header-minimal">
            <span className="section-eyebrow">Current Project</span>
            <h2 className="section-title">{moonboundGame.title}</h2>
          </div>

          <div className="featured-game-row">
            <Link
              to={`/games/${moonboundGame.slug}`}
              className="featured-game-media"
              aria-label="Open Moonbound page"
            >
              <img
                src={moonboundGame.coverImage}
                alt="Moonbound cover art"
                className="featured-game-img"
              />
            </Link>

            <div className="featured-game-info">
              <p className="featured-game-meta">
                {moonboundGame.genre} &middot; {moonboundGame.platforms.join(' & ')}
              </p>

              <p className="featured-game-tagline">{moonboundGame.tagline}</p>

              <p className="featured-game-desc">{moonboundGame.shortDescription}</p>

              <div className="featured-game-actions">
                <Link to={`/games/${moonboundGame.slug}`} className="btn btn-primary">
                  <span>Explore Moonbound</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={moonboundGame.itchIoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>View on itch.io</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
