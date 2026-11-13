import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Sparkles, X } from 'lucide-react';
import { GameScreenshot } from '../../types';

interface ScreenshotLightboxProps {
  screenshots: GameScreenshot[];
  gameTitle: string;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  screenshots,
  gameTitle,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % screenshots.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + screenshots.length) % screenshots.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, screenshots.length]);

  const activeShot = activeIndex !== null ? screenshots[activeIndex] : null;

  return (
    <div className="screenshot-gallery-wrapper">
      <div className="screenshot-grid">
        {screenshots.map((shot, idx) => (
          <figure
            key={shot.id}
            className="screenshot-card"
            onClick={() => setActiveIndex(idx)}
          >
            <div className="screenshot-image-container">
              <img
                src={shot.url}
                alt={`${gameTitle} — ${shot.title} (${shot.visualType})`}
                className="screenshot-image"
                loading="lazy"
              />
              <div className="screenshot-hover-layer">
                <button
                  type="button"
                  className="screenshot-expand-btn"
                  aria-label={`Inspect ${shot.title} in fullscreen`}
                >
                  <Expand size={18} />
                  <span>Inspect Visual</span>
                </button>
              </div>
              <span className="screenshot-type-badge">
                <Sparkles size={11} />
                <span>{shot.visualType}</span>
              </span>
            </div>
            <figcaption className="screenshot-caption-box">
              <strong className="screenshot-title">{shot.title}</strong>
              <p className="screenshot-caption">{shot.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeShot && activeIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${gameTitle} visual gallery viewer`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-topbar">
              <div className="lightbox-meta">
                <span className="lightbox-counter">
                  {activeIndex + 1} / {screenshots.length}
                </span>
                <span className="lightbox-badge">{activeShot.visualType}</span>
                <span className="lightbox-title">{activeShot.title}</span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActiveIndex(null)}
                aria-label="Close gallery viewer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav-btn lightbox-prev"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + screenshots.length) % screenshots.length
                  )
                }
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <img
                src={activeShot.url}
                alt={`${gameTitle} — ${activeShot.title}`}
                className="lightbox-main-image"
              />

              <button
                type="button"
                className="lightbox-nav-btn lightbox-next"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % screenshots.length)
                }
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="lightbox-footer">
              <p>{activeShot.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
