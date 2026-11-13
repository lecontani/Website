import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import logoBlack from '../../assets/logo/myltrix-logo-black.png';
import logoWhite from '../../assets/logo/myltrix-logo-white.png';

interface MyltrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const HEIGHT_MAP: Record<NonNullable<MyltrixLogoProps['size']>, number> = {
  sm: 28,
  md: 32,
  lg: 44,
  xl: 72,
};

/**
 * Renders the official Myltrix geometric mark without altering proportions,
 * automatically switching between the black PNG (light theme) and white PNG (dark theme).
 */
export const MyltrixLogo: React.FC<MyltrixLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? logoWhite : logoBlack;
  const heightPx = HEIGHT_MAP[size];

  return (
    <span className={`myltrix-brand ${className}`}>
      <img
        src={logoSrc}
        alt="Myltrix logo"
        className="myltrix-logo-img"
        style={{ height: `${heightPx}px`, width: 'auto' }}
        width={Math.round((heightPx * 986) / 1024)}
        height={heightPx}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <span className="myltrix-brand-name" style={{ textTransform: 'none' }}>
          Myltrix
        </span>
      )}
    </span>
  );
};
