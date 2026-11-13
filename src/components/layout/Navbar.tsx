import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { MyltrixLogo } from '../common/MyltrixLogo';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Games', path: '/games' },
  { label: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="header-logo-link" aria-label="Myltrix Home">
          <MyltrixLogo size="sm" showText={true} />
        </Link>

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
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
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
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
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
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
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
