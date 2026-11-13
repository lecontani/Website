import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, ExternalLink, Gamepad2, Globe, Mail } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { MyltrixLogo } from '../common/MyltrixLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Original Myltrix Logo, Name, Description */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Myltrix Home">
              <MyltrixLogo size="lg" showText={true} subtitle="Independent Game Studio" framed={true} />
            </Link>
            <p className="footer-description">{siteConfig.footerDescription}</p>
            <div className="footer-platform-pills">
              <span className="platform-pill">PC (Windows)</span>
              <span className="platform-pill">Android</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/games" className="footer-link">Games</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/news" className="footer-link">News</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: External Platforms (itch.io & GitHub) */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Platforms &amp; Releases</h3>
            <ul className="footer-link-list">
              <li>
                <a
                  href={siteConfig.platforms.studioItchIoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-external-link"
                >
                  <Gamepad2 size={15} />
                  <span>itch.io</span>
                  <ArrowUpRight size={14} className="external-icon" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.platforms.studioGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-external-link"
                >
                  <Code2 size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} className="external-icon" />
                </a>
              </li>
              <li>
                <Link to="/games/nullsector-eclipse" className="footer-link">
                  Nullsector: Eclipse
                </Link>
              </li>
              <li>
                <Link to="/games/monolith-protocol" className="footer-link">
                  Monolith Protocol
                </Link>
              </li>
              <li>
                <Link to="/games/aether-drift-zero" className="footer-link">
                  Aether Drift: Zero
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Networks & Contact */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Connect &amp; Socials</h3>
            <ul className="footer-link-list">
              {siteConfig.socials.map((social) => (
                <li key={social.id}>
                  {social.url ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link footer-external-link"
                    >
                      <Globe size={14} />
                      <span>{social.name}</span>
                      <ExternalLink size={12} className="external-icon" />
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="footer-link footer-configurable-link"
                      title={`${social.name}: Configurable in src/config/siteConfig.ts`}
                    >
                      <Globe size={14} />
                      <span>{social.name}</span>
                      <span className="footer-badge-mini">Configurable</span>
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/contact" className="footer-link footer-external-link">
                  <Mail size={14} />
                  <span>Contact Form</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright" style={{ textTransform: 'none' }}>
            &copy; 2026 Myltrix. All rights reserved.
          </p>
          <div className="footer-bottom-meta">
            <span>Independent Game Development Studio</span>
            <span className="meta-dot">•</span>
            <span>PC &amp; Android</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
