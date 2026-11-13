import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Sparkles, Clock } from 'lucide-react';
import { GameProject } from '../../types';

interface GameCardProps {
  game: GameProject;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const isComingSoon = game.status === 'Coming Soon';

  return (
    <article className="game-card">
      <Link
        to={`/games/${game.slug}`}
        className="game-card-media-link"
        aria-label={`Open ${game.title} project page`}
      >
        <div className="game-card-media">
          <img
            src={game.coverImage}
            alt={`${game.title} — Concept Cover Art`}
            className="game-card-image"
            loading="lazy"
          />
          <div className="game-card-overlay" />

          {/* Top Status & Version Badges */}
          <div className="game-card-badges">
            <span
              className={`status-badge ${
                isComingSoon ? 'status-badge-coming-soon' : 'status-badge-concept'
              }`}
            >
              {isComingSoon ? <Clock size={12} /> : <Sparkles size={12} />}
              <span>{game.status}</span>
            </span>
            <span className="version-pill">{game.currentVersion}</span>
          </div>

          {/* Bottom Platform Icons inside Cover */}
          <div className="game-card-platforms-overlay">
            {game.platforms.map((platform) => (
              <span key={platform} className="platform-chip">
                {platform === 'Windows' ? <Monitor size={12} /> : <Smartphone size={12} />}
                <span>{platform === 'Windows' ? 'PC (Windows)' : 'Android'}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="game-card-body">
        <div className="game-card-meta-row">
          <span className="game-card-genre">{game.genre}</span>
          <span className="game-card-dev" style={{ textTransform: 'none' }}>
            by Myltrix
          </span>
        </div>

        <h3 className="game-card-title">
          <Link to={`/games/${game.slug}`}>{game.title}</Link>
        </h3>

        <p className="game-card-description">{game.shortDescription}</p>

        <div className="game-card-specs">
          <div className="spec-item">
            <span className="spec-label">Platforms</span>
            <span className="spec-value">{game.platforms.join(' • ')}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Status</span>
            <span className="spec-value">{game.status}</span>
          </div>
        </div>

        <div className="game-card-footer">
          <Link to={`/games/${game.slug}`} className="btn btn-primary btn-full game-card-btn">
            <span>View Game</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};
