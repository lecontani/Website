import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MoonboundGameData } from '../../types';

interface GameCardProps {
  game: MoonboundGameData;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <article className="moonbound-card">
      <Link
        to={`/games/${game.slug}`}
        className="moonbound-card-media-link"
        aria-label={`View ${game.title} details`}
      >
        <div className="moonbound-card-media">
          <img
            src={game.coverImage}
            alt={`${game.title} — Official Cover Art`}
            className="moonbound-card-img"
            loading="eager"
          />
        </div>
      </Link>

      <div className="moonbound-card-body">
        <div className="moonbound-card-meta">
          <span className="meta-label">{game.genre}</span>
          <span className="meta-divider">/</span>
          <span className="meta-label">{game.status}</span>
        </div>

        <h2 className="moonbound-card-title">
          <Link to={`/games/${game.slug}`}>{game.title}</Link>
        </h2>

        <p className="moonbound-card-tagline">{game.tagline}</p>

        <p className="moonbound-card-description">{game.shortDescription}</p>

        <div className="moonbound-card-specs">
          <div className="spec-pair">
            <span className="spec-key">Developer</span>
            <span className="spec-val" style={{ textTransform: 'none' }}>
              Myltrix
            </span>
          </div>
          <div className="spec-pair">
            <span className="spec-key">Platforms</span>
            <span className="spec-val">{game.platforms.join(', ')}</span>
          </div>
        </div>

        <div className="moonbound-card-actions">
          <Link to={`/games/${game.slug}`} className="btn btn-primary">
            <span>View Details</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href={game.itchIoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>View on itch.io</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};
