import React from 'react';
import { moonboundGame } from '../config/gamesConfig';
import { GameCard } from '../components/games/GameCard';
import { SEOHead } from '../components/common/SEOHead';

export const GamesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Games — Myltrix | Moonbound"
        description="Moonbound by Myltrix — a dark fantasy 2D action platformer for Windows and Android."
      />

      <section className="page-header-section">
        <div className="container">
          <span className="section-eyebrow">Games</span>
          <h1 className="page-title">Moonbound</h1>
          <p className="page-subtitle">
            Original 2D action platformer developed by Myltrix for Windows and Android.
          </p>
        </div>
      </section>

      <section className="section-block pt-compact">
        <div className="container">
          <GameCard game={moonboundGame} />
        </div>
      </section>
    </>
  );
};
