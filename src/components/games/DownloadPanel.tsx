import React from 'react';
import {
  Clock,
  Code2,
  Download,
  ExternalLink,
  Gamepad2,
  HardDrive,
  Info,
  Monitor,
  Smartphone,
  Tag,
} from 'lucide-react';
import { GameProject } from '../../types';

interface DownloadPanelProps {
  game: GameProject;
}

export const DownloadPanel: React.FC<DownloadPanelProps> = ({ game }) => {
  const { distribution, platforms, currentVersion, status } = game;
  const { isPublished, windowsDownload, androidDownload, externalPlatforms } = distribution;

  const hasWindows = platforms.includes('Windows');
  const hasAndroid = platforms.includes('Android');

  const windowsReady = isPublished && Boolean(windowsDownload?.url);
  const androidReady = isPublished && Boolean(androidDownload?.url);
  const itchReady = isPublished && Boolean(externalPlatforms.itchIoGameUrl);
  const githubReady = isPublished && Boolean(externalPlatforms.githubRepoUrl);

  return (
    <section className="download-panel" aria-labelledby="download-section-heading">
      <div className="download-panel-header">
        <div>
          <span className="section-eyebrow">Distribution &amp; External Platforms</span>
          <h2 id="download-section-heading" className="download-panel-title">
            Builds &amp; Official Mirrors
          </h2>
        </div>

        <div className="download-version-Cluster">
          <span className="download-meta-pill">
            <Tag size={13} />
            <span>Build: {currentVersion}</span>
          </span>
          <span className="download-meta-pill">
            <Clock size={13} />
            <span>State: {isPublished ? 'Published' : status}</span>
          </span>
        </div>
      </div>

      <p className="download-release-note">{distribution.releaseNote}</p>

      <div className="download-cards-grid">
        {/* 1. Windows Download */}
        <div className={`download-channel-card ${!hasWindows ? 'channel-card-muted' : ''}`}>
          <div className="channel-card-top">
            <div className="channel-icon-box">
              <Monitor size={20} />
            </div>
            <div className="channel-title-group">
              <h3 className="channel-name">Windows Download</h3>
              <span className="channel-sub">
                {windowsDownload.fileFormat || 'Windows x64 Build'}
              </span>
            </div>
          </div>

          <div className="channel-meta-list">
            <div className="channel-meta-row">
              <span>Target Version</span>
              <strong>{windowsDownload.version}</strong>
            </div>
            <div className="channel-meta-row">
              <span>Package Size</span>
              <strong>
                <HardDrive size={12} className="inline-icon" /> {windowsDownload.fileSize}
              </strong>
            </div>
          </div>

          <div className="channel-action">
            {windowsReady && windowsDownload.url ? (
              <a
                href={windowsDownload.url}
                className="btn btn-primary btn-full"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                <span>Download for Windows</span>
              </a>
            ) : (
              <div
                className="coming-soon-slot"
                role="status"
                aria-label="Windows build coming soon"
              >
                <Clock size={15} />
                <span>Coming Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* 2. Android Download */}
        <div className={`download-channel-card ${!hasAndroid ? 'channel-card-muted' : ''}`}>
          <div className="channel-card-top">
            <div className="channel-icon-box">
              <Smartphone size={20} />
            </div>
            <div className="channel-title-group">
              <h3 className="channel-name">Android Download</h3>
              <span className="channel-sub">
                {hasAndroid
                  ? androidDownload?.fileFormat || 'Android APK Package'
                  : 'PC-Focused Concept'}
              </span>
            </div>
          </div>

          <div className="channel-meta-list">
            <div className="channel-meta-row">
              <span>Target Version</span>
              <strong>{hasAndroid ? androidDownload?.version || currentVersion : 'N/A'}</strong>
            </div>
            <div className="channel-meta-row">
              <span>APK Size</span>
              <strong>
                <HardDrive size={12} className="inline-icon" />{' '}
                {hasAndroid ? androidDownload?.fileSize || 'TBD' : 'PC Only'}
              </strong>
            </div>
          </div>

          <div className="channel-action">
            {hasAndroid && androidReady && androidDownload?.url ? (
              <a
                href={androidDownload.url}
                className="btn btn-primary btn-full"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                <span>Download APK</span>
              </a>
            ) : (
              <div
                className="coming-soon-slot"
                role="status"
                aria-label="Android APK coming soon"
              >
                <Clock size={15} />
                <span>{hasAndroid ? 'Coming Soon' : 'Coming Soon / PC Concept'}</span>
              </div>
            )}
          </div>
        </div>

        {/* 3. itch.io */}
        <div className="download-channel-card">
          <div className="channel-card-top">
            <div className="channel-icon-box">
              <Gamepad2 size={20} />
            </div>
            <div className="channel-title-group">
              <h3 className="channel-name">itch.io</h3>
              <span className="channel-sub">Official Storefront &amp; Page</span>
            </div>
          </div>

          <div className="channel-meta-list">
            <div className="channel-meta-row">
              <span>Platform</span>
              <strong>itch.io</strong>
            </div>
            <div className="channel-meta-row">
              <span>Page Status</span>
              <strong>{itchReady ? 'Live Store Page' : 'Coming Soon'}</strong>
            </div>
          </div>

          <div className="channel-action channel-action-split">
            {itchReady && externalPlatforms.itchIoGameUrl ? (
              <a
                href={externalPlatforms.itchIoGameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <span>Open on itch.io</span>
                <ExternalLink size={15} />
              </a>
            ) : (
              <>
                <div className="coming-soon-slot" role="status">
                  <Clock size={15} />
                  <span>Game Page: Coming Soon</span>
                </div>
                <a
                  href={externalPlatforms.itchIoPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-fallback-link"
                >
                  <span>Visit itch.io</span>
                  <ExternalLink size={13} />
                </a>
              </>
            )}
          </div>
        </div>

        {/* 4. GitHub */}
        <div className="download-channel-card">
          <div className="channel-card-top">
            <div className="channel-icon-box">
              <Code2 size={20} />
            </div>
            <div className="channel-title-group">
              <h3 className="channel-name">GitHub</h3>
              <span className="channel-sub">Repository &amp; Releases</span>
            </div>
          </div>

          <div className="channel-meta-list">
            <div className="channel-meta-row">
              <span>Platform</span>
              <strong>github.com</strong>
            </div>
            <div className="channel-meta-row">
              <span>Release Tag</span>
              <strong>{githubReady ? currentVersion : 'Coming Soon'}</strong>
            </div>
          </div>

          <div className="channel-action channel-action-split">
            {githubReady && externalPlatforms.githubRepoUrl ? (
              <a
                href={externalPlatforms.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full"
              >
                <span>View on GitHub</span>
                <ExternalLink size={15} />
              </a>
            ) : (
              <>
                <div className="coming-soon-slot" role="status">
                  <Clock size={15} />
                  <span>Releases: Coming Soon</span>
                </div>
                <a
                  href={externalPlatforms.githubPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-fallback-link"
                >
                  <span>Visit GitHub</span>
                  <ExternalLink size={13} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="download-config-hint">
        <Info size={15} />
        <span>
          <strong>Developer Configuration Note:</strong> All download URLs, version numbers, and file
          sizes for <em>{game.title}</em> are managed in{' '}
          <code>src/config/gamesConfig.ts</code>. Once a build is published, setting{' '}
          <code>isPublished: true</code> and providing the release links automatically activates the
          live download buttons.
        </span>
      </div>
    </section>
  );
};
