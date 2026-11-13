import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { MyltrixLogo } from '../common/MyltrixLogo';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Games', path: '/games' },
  { label: 'About Us', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Left: Myltrix Logo & Name */}
        <Link to="/" className="header-logo-link" aria-label="Myltrix Home">
          <MyltrixLogo size="md" showText={true} framed={true} />
        </Link>

        {/* Right: Desktop Navigation & Theme Switcher */}
        <div className="header-right">
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Current theme: ${theme === 'dark' ? 'Dark' : 'Light'}. Click to switch.`}
            >
              <span className="theme-toggle-icon">
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </span>
              <span className="theme-toggle-label">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-dropdown-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-dropdown-menu"
        className={`mobile-dropdown ${mobileMenuOpen ? 'mobile-dropdown-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mobile-dropdown-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-dropdown-footer">
            <div className="mobile-theme-row">
              <span className="mobile-theme-caption">Appearance Mode</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn mobile-theme-switch"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
