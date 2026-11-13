import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, FileText, Info, Sparkles } from 'lucide-react';
import { newsArticles } from '../config/newsConfig';
import { SEOHead } from '../components/common/SEOHead';
import { NewsArticle } from '../types';

type CategoryFilter = 'All' | NewsArticle['category'];

export const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Studio',
    'Concept Reveal',
    'Engineering',
    'Platform Update',
  ];

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return newsArticles;
    return newsArticles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="News & Devlogs — Myltrix | Studio Dispatches"
        description="Read the latest development dispatches, concept spotlights, and engineering updates from Myltrix."
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Studio Dispatches</span>
          <h1 className="page-hero-title" style={{ textTransform: 'none' }}>
            Myltrix News &amp; Devlogs
          </h1>
          <p className="page-hero-subtitle">
            Concept breakdowns, cross-platform engineering notes, and official studio announcements.
          </p>

          <div className="catalog-transparency-banner">
            <Sparkles size={16} />
            <p>
              <strong>Demonstration Publications:</strong> Articles marked with{' '}
              <span className="inline-badge">Demo Publication</span> or{' '}
              <span className="inline-badge">Demo Concept Dispatch</span> are sample entries included to
              demonstrate the Myltrix news architecture. Add new posts anytime via{' '}
              <code>src/config/newsConfig.ts</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block pt-0">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="news-filter-bar" role="group" aria-label="Filter news by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'filter-pill-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredNews.length > 0 ? (
            <div className="news-grid-two">
              {filteredNews.map((article) => (
                <article key={article.id} className="news-card news-card-large">
                  <Link
                    to={`/news/${article.slug}`}
                    className="news-card-media-link"
                    aria-label={`Read ${article.title}`}
                  >
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
                          <span className="news-demo-badge">
                            <Sparkles size={11} />
                            <span>{article.demoLabel}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>

                  <div className="news-card-body">
                    <div className="news-card-date">
                      <Calendar size={14} />
                      <time>{article.date}</time>
                      <span>•</span>
                      <Clock size={13} />
                      <span>{article.readingTime}</span>
                    </div>

                    <h2 className="news-card-title">
                      <Link to={`/news/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="news-card-excerpt">{article.excerpt}</p>

                    <div className="news-card-footer">
                      <Link to={`/news/${article.slug}`} className="btn btn-primary btn-sm">
                        <span>Read More</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state-box">
              <FileText size={28} />
              <h3>No publications in this category yet</h3>
              <p>Select another category to browse studio dispatches.</p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="btn btn-secondary"
              >
                Show All Publications
              </button>
            </div>
          )}

          <div className="config-callout-bar">
            <Info size={15} />
            <span>
              <strong>Easy Publishing System:</strong> Add or edit news articles in{' '}
              <code>src/config/newsConfig.ts</code>. Each entry automatically generates both its preview card
              and full article page.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
