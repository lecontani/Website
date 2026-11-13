import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Gamepad2, Sparkles } from 'lucide-react';
import { getNewsBySlug, newsArticles } from '../config/newsConfig';
import { getGameBySlug } from '../config/gamesConfig';
import { SEOHead } from '../components/common/SEOHead';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsBySlug(slug) : undefined;

  if (!article) {
    return (
      <section className="section-block">
        <div className="container">
          <div className="empty-state-box">
            <h1>Article Not Found</h1>
            <p>The requested publication could not be found.</p>
            <Link to="/news" className="btn btn-primary">
              <ArrowLeft size={16} />
              <span>Back to News</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedGame = article.relatedGameSlug
    ? getGameBySlug(article.relatedGameSlug)
    : undefined;
  const otherArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <SEOHead title={`${article.title} — Myltrix News`} description={article.excerpt} />

      <article className="section-block">
        <div className="container article-container">
          <div className="article-top-nav">
            <Link to="/news" className="breadcrumb-back-link">
              <ArrowLeft size={15} />
              <span>Back to All News</span>
            </Link>
          </div>

          <header className="article-header">
            <div className="article-badges-row">
              <span className="news-category-badge">{article.category}</span>
              {article.isDemo && (
                <span className="news-demo-badge">
                  <Sparkles size={12} />
                  <span>{article.demoLabel}</span>
                </span>
              )}
            </div>

            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta-row">
              <span>
                <Calendar size={14} className="inline-icon" /> {article.date}
              </span>
              <span>•</span>
              <span>
                <Clock size={14} className="inline-icon" /> {article.readingTime}
              </span>
              <span>•</span>
              <span style={{ textTransform: 'none' }}>Published by Myltrix</span>
            </div>
          </header>

          <div className="article-hero-image-wrap">
            <img src={article.image} alt={article.title} className="article-hero-image" />
          </div>

          <div className="article-body">
            {article.content.map((section, idx) => (
              <section key={idx} className="article-section">
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {section.bulletPoints && (
                  <ul className="article-bullet-list">
                    {section.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <div className="article-callout-box">
                    <Sparkles size={16} />
                    <p>{section.callout}</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {relatedGame && (
            <div className="article-related-game-box">
              <div className="related-game-info">
                <span className="section-eyebrow">Related Concept Project</span>
                <h3>{relatedGame.title}</h3>
                <p>{relatedGame.shortDescription}</p>
              </div>
              <Link to={`/games/${relatedGame.slug}`} className="btn btn-primary">
                <Gamepad2 size={16} />
                <span>View Game Page</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          )}

          {otherArticles.length > 0 && (
            <section className="article-more-section">
              <h2 className="subsection-title">More Dispatches from Myltrix</h2>
              <div className="news-grid-two">
                {otherArticles.map((other) => (
                  <article key={other.id} className="news-card">
                    <div className="news-card-body">
                      <div className="news-card-date">
                        <Calendar size={13} />
                        <time>{other.date}</time>
                      </div>
                      <h3 className="news-card-title">
                        <Link to={`/news/${other.slug}`}>{other.title}</Link>
                      </h3>
                      <p className="news-card-excerpt">{other.excerpt}</p>
                      <div className="news-card-footer">
                        <Link to={`/news/${other.slug}`} className="btn btn-secondary btn-sm">
                          <span>Read More</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
};
