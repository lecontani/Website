import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { MyltrixLogo } from '../components/common/MyltrixLogo';
import { SEOHead } from '../components/common/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About — Myltrix"
        description="About Myltrix, an independent game studio dedicated to creating original games for PC and Android."
      />

      <section className="page-header-section">
        <div className="container">
          <div className="about-mark">
            <MyltrixLogo size="lg" showText={false} />
          </div>
          <span className="section-eyebrow">About</span>
          <h1 className="page-title" style={{ textTransform: 'none' }}>
            Myltrix
          </h1>
          <p className="page-subtitle">{siteConfig.aboutSummary}</p>
        </div>
      </section>

      <section className="section-block section-border-top">
        <div className="container">
          <div className="content-two-col">
            <div>
              <span className="section-eyebrow">Studio Focus</span>
              <h2 className="section-title">Independent Game Creation</h2>
            </div>

            <div className="prose-column">
              {siteConfig.aboutDetails.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="about-actions">
                <Link to="/games/moonbound" className="btn btn-primary">
                  <span>Explore Moonbound</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.moonboundUrl}
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
