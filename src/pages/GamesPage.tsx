import React, { useMemo, useState } from 'react';
import {
  Code2,
  Filter,
  Gamepad2,
  Info,
  Monitor,
  Search,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { gamesCatalog } from '../config/gamesConfig';
import { siteConfig } from '../config/siteConfig';
import { GameCard } from '../components/games/GameCard';
import { SEOHead } from '../components/common/SEOHead';
import { GameStatus, PlatformType } from '../types';

export const GamesPage: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | PlatformType>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | GameStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return gamesCatalog.filter((game) => {
      const matchesPlatform =
        selectedPlatform === 'All' || game.platforms.includes(selectedPlatform);
      const matchesStatus =
        selectedStatus === 'All' || game.status === selectedStatus;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        game.title.toLowerCase().includes(query) ||
        game.genre.toLowerCase().includes(query) ||
        game.shortDescription.toLowerCase().includes(query) ||
        game.tags.some((t) => t.toLowerCase().includes(query));

      return matchesPlatform && matchesStatus && matchesSearch;
    });
  }, [selectedPlatform, selectedStatus, searchQuery]);

  const resetFilters = () => {
    setSelectedPlatform('All');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  return (
    <>
      <SEOHead
        title="Games Catalog — Myltrix | PC & Android Projects"
        description="Browse original video game concepts and upcoming titles developed by Myltrix for Windows PC and Android."
      />

      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Official Catalog</span>
          <h1 className="page-hero-title" style={{ textTransform: 'none' }}>
            Games by Myltrix
          </h1>
          <p className="page-hero-subtitle">
            Explore our portfolio of original concepts and upcoming projects engineered for Windows PC and Android.
          </p>

          {/* Concept Transparency Notice */}
          <div className="catalog-transparency-banner">
            <Sparkles size={16} />
            <p>
              <strong>Catalog Transparency Notice:</strong> Projects listed below carry{' '}
              <span className="inline-badge">Coming Soon</span> or{' '}
              <span className="inline-badge">Concept</span> status tags. Visual materials are original
              pre-production concept illustrations created for Myltrix to demonstrate atmosphere, lighting,
              and mechanical direction prior to public build release.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="section-block pt-0">
        <div className="container">
          <div className="catalog-toolbar">
            <div className="toolbar-search">
              <Search size={16} className="search-icon" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, genre, or mechanic..."
                className="search-input"
                aria-label="Search games catalog"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="toolbar-filters">
              <div className="filter-group" role="group" aria-label="Filter by platform">
                <span className="filter-label">
                  <Filter size={13} /> Platform:
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform('All')}
                  className={`filter-pill ${selectedPlatform === 'All' ? 'filter-pill-active' : ''}`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform('Windows')}
                  className={`filter-pill ${
                    selectedPlatform === 'Windows' ? 'filter-pill-active' : ''
                  }`}
                >
                  <Monitor size={13} /> PC (Windows)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform('Android')}
                  className={`filter-pill ${
                    selectedPlatform === 'Android' ? 'filter-pill-active' : ''
                  }`}
                >
                  <Smartphone size={13} /> Android
                </button>
              </div>

              <div className="filter-group" role="group" aria-label="Filter by development status">
                <span className="filter-label">Status:</span>
                <button
                  type="button"
                  onClick={() => setSelectedStatus('All')}
                  className={`filter-pill ${selectedStatus === 'All' ? 'filter-pill-active' : ''}`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStatus('Coming Soon')}
                  className={`filter-pill ${
                    selectedStatus === 'Coming Soon' ? 'filter-pill-active' : ''
                  }`}
                >
                  Coming Soon
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStatus('Concept')}
                  className={`filter-pill ${
                    selectedStatus === 'Concept' ? 'filter-pill-active' : ''
                  }`}
                >
                  Concept
                </button>
              </div>
            </div>
          </div>

          {/* Games Grid */}
          {filteredGames.length > 0 ? (
            <div className="games-grid">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <h3>No matching games found</h3>
              <p>Try adjusting your platform or status filter criteria.</p>
              <button type="button" onClick={resetFilters} className="btn btn-secondary">
                Reset All Filters
              </button>
            </div>
          )}

          {/* External Distribution Architecture Block */}
          <div className="distribution-overview-card">
            <div className="distribution-overview-text">
              <span className="section-eyebrow">Release Infrastructure</span>
              <h2 className="distribution-overview-title" style={{ textTransform: 'none' }}>
                How Myltrix Publishes Builds
              </h2>
              <p>
                Every game in the Myltrix catalog is structured for transparent distribution across
                Windows x64 archives, Android APK packages, official storefront pages on{' '}
                <a
                  href={siteConfig.platforms.itchIoBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  itch.io
                </a>
                , and versioned release repositories on{' '}
                <a
                  href={siteConfig.platforms.githubBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                . Until a project is publicly released, its download slots display{' '}
                <strong>Coming Soon</strong>.
              </p>
            </div>
            <div className="distribution-overview-actions">
              <a
                href={siteConfig.platforms.studioItchIoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Gamepad2 size={16} />
                <span>itch.io Platform</span>
              </a>
              <a
                href={siteConfig.platforms.studioGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Code2 size={16} />
                <span>GitHub Platform</span>
              </a>
            </div>
          </div>

          <div className="config-callout-bar">
            <Info size={15} />
            <span>
              To add a new game, cover image, screenshot gallery, or download link, edit{' '}
              <code>src/config/gamesConfig.ts</code>.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
