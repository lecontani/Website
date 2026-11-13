import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';

interface MyltrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  subtitle?: string;
  framed?: boolean;
  className?: string;
}

const SIZE_MAP = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 84,
};

/**
 * Renders the official Myltrix logo without altering its shape or proportions.
 * Company name is strictly rendered as "Myltrix".
 */
export const MyltrixLogo: React.FC<MyltrixLogoProps> = ({
  size = 'md',
  showText = true,
  subtitle,
  framed = true,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const pixelSize = SIZE_MAP[size];

  return (
    <div className={`myltrix-brand ${className}`}>
      <div
        className={`myltrix-logo-container ${framed ? 'myltrix-logo-framed' : 'myltrix-logo-adaptive'}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        {!imgError ? (
          <img
            src={siteConfig.logoPath}
            alt="Myltrix official logo"
            className="myltrix-logo-image"
            width={pixelSize}
            height={pixelSize}
            loading="eager"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="myltrix-logo-placeholder" aria-label="Myltrix logo slot">
            <span>M</span>
          </div>
        )}
      </div>

      {showText && (
        <div className="myltrix-brand-text">
          <span className="myltrix-brand-name" style={{ textTransform: 'none' }}>
            Myltrix
          </span>
          {subtitle && <span className="myltrix-brand-subtitle">{subtitle}</span>}
        </div>
      )}
    </div>
  );
};
