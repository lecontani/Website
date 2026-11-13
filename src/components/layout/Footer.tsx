import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { MyltrixLogo } from '../common/MyltrixLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <Link to="/" className="footer-logo-link" aria-label="Myltrix Home">
            <MyltrixLogo size="sm" showText={true} />
          </Link>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <Link to="/games/moonbound" className="footer-link">
              Moonbound
            </Link>
            <a
              href={siteConfig.moonboundUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-link-external"
            >
              <span>itch.io</span>
              <ArrowUpRight size={14} />
            </a>
            <Link to="/about" className="footer-link">
              About
            </Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright" style={{ textTransform: 'none' }}>
            &copy; {siteConfig.copyrightYear} Myltrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
