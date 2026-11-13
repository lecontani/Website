import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HashRouter>
          <div className="app-shell">
            <Navbar />
            <main className="app-main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/games/moonbound" element={<GameDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
