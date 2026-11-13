import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Gamepad2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found | Myltrix"
        description="The requested page could not be found on the official Myltrix website."
      />

      <section className="section-block">
        <div className="container">
          <div className="not-found-box">
            <div className="not-found-code">404</div>
            <Compass size={32} className="not-found-icon" />
            <h1 style={{ textTransform: 'none' }}>Sector Coordinates Not Found</h1>
            <p>
              The page you are looking for does not exist or has been relocated within the Myltrix
              website.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <ArrowLeft size={16} />
                <span>Return Home</span>
              </Link>
              <Link to="/games" className="btn btn-secondary">
                <Gamepad2 size={16} />
                <span>Explore Games</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
