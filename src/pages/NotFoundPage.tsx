import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found — Myltrix"
        description="The requested page could not be found on the Myltrix website."
      />

      <section className="section-block">
        <div className="container">
          <div className="not-found-box">
            <span className="section-eyebrow">404</span>
            <h1 className="page-title">Page Not Found</h1>
            <p className="page-subtitle">
              The page you requested does not exist on the Myltrix website.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <ArrowLeft size={16} />
                <span>Home</span>
              </Link>
              <Link to="/games/moonbound" className="btn btn-secondary">
                <span>Explore Moonbound</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
