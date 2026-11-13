import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GameImageItem } from '../../types';

interface ScreenshotLightboxProps {
  images: GameImageItem[];
  gameTitle: string;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  images,
  gameTitle,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, images.length]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        {images.map((item, idx) => (
          <figure
            key={item.id}
            className="gallery-card"
            onClick={() => setActiveIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveIndex(idx);
              }
            }}
            aria-label={`Open ${item.title} in viewer`}
          >
            <div className="gallery-media">
              <img
                src={item.src}
                alt={`${gameTitle} — ${item.title}`}
                className="gallery-img"
                loading="lazy"
              />
            </div>
            <figcaption className="gallery-caption">
              <div className="gallery-caption-top">
                <span className="gallery-item-title">{item.title}</span>
                <span className="gallery-item-tag">{item.category}</span>
              </div>
              <p className="gallery-item-desc">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${gameTitle} image viewer`}
          onClick={() => setActiveIndex(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-topbar">
              <div className="lightbox-meta">
                <span className="lightbox-counter">
                  {activeIndex + 1} / {images.length}
                </span>
                <span className="lightbox-title">{activeImage.title}</span>
                <span className="lightbox-category">{activeImage.category}</span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActiveIndex(null)}
                aria-label="Close viewer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav-btn lightbox-prev"
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <img
                src={activeImage.src}
                alt={`${gameTitle} — ${activeImage.title}`}
                className="lightbox-main-image"
              />

              <button
                type="button"
                className="lightbox-nav-btn lightbox-next"
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="lightbox-footer">
              <p>{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
