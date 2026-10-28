import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TrialModal from './components/TrialModal';
import useScrollReveal from './hooks/useScrollReveal';
import { GYM_INFO } from './data/gymData';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrainersPage from './pages/TrainersPage';
import MembershipsPage from './pages/MembershipsPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  // Activate smooth scroll-reveal on route transitions
  useScrollReveal();

  const openTrial = () => setTrialModalOpen(true);
  const closeTrial = () => setTrialModalOpen(false);

  return (
    <div className="tf-app">
      {/* Sticky Premium Navbar with IST Timetable Status */}
      <Navbar onOpenTrial={openTrial} />

      {/* Dynamic Route Pages with Page Transition */}
      <main id="main-content" key={location.pathname} className="tf-page-enter">
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenTrial={openTrial} />} />
          <Route path="/about" element={<AboutPage onOpenTrial={openTrial} />} />
          <Route path="/memberships" element={<MembershipsPage onOpenTrial={openTrial} />} />
          <Route path="/trainers" element={<TrainersPage onOpenTrial={openTrial} />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Aliases for backwards compatibility */}
          <Route path="/programs" element={<Navigate to="/memberships" replace />} />
          <Route path="/schedule" element={<Navigate to="/memberships" replace />} />
          <Route path="/gallery" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer onOpenTrial={openTrial} />

      {/* Global Interactive Free Trial / Visit Modal */}
      <TrialModal isOpen={trialModalOpen} onClose={closeTrial} />

      {/* Floating WhatsApp Live Desk Widget */}
      <a
        href={GYM_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="tf-whatsapp-float"
        aria-label="Chat with The Fitness Hub Kurla on WhatsApp"
      >
        <span className="tf-pulse-dot" />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.46-.72-2.94-1.16-4.8-4.21-4.95-4.41-.14-.2-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.56-.36.75-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.8 1.98.87 2.12.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.45.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.65-.14.26.1 1.66.78 1.94.92.29.15.48.22.55.34.07.13.07.75-.17 1.43z" />
        </svg>
        <span>WhatsApp Reception</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
