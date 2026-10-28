import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TrialModal from './components/TrialModal';
import WhatsAppIcon from './components/WhatsAppIcon';
import useScrollReveal from './hooks/useScrollReveal';
import { GYM_INFO } from './data/gymData';
import HomePage from './pages/HomePage';

function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('General Facility Walkthrough & Trial');

  useScrollReveal();

  const openTrial = (planName) => {
    if (typeof planName === 'string' && planName.trim().length > 0) {
      setSelectedPlan(planName);
    } else {
      setSelectedPlan('General Facility Walkthrough & Trial');
    }
    setTrialModalOpen(true);
  };

  const closeTrial = () => setTrialModalOpen(false);

  return (
    <div className="tf-app">
      <Navbar onOpenTrial={openTrial} />
      <HashScrollHandler />

      <main id="main-content" className="tf-page-enter">
        <Routes>
          <Route path="/" element={<HomePage onOpenTrial={openTrial} />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/memberships" element={<Navigate to="/#memberships" replace />} />
          <Route path="/pricing" element={<Navigate to="/#memberships" replace />} />
          <Route path="/trainers" element={<Navigate to="/#trainers" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/programs" element={<Navigate to="/#zones" replace />} />
          <Route path="/schedule" element={<Navigate to="/#memberships" replace />} />
          <Route path="/gallery" element={<Navigate to="/#zones" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onOpenTrial={openTrial} />

      <TrialModal
        isOpen={trialModalOpen}
        initialGoal={selectedPlan}
        onClose={closeTrial}
      />

      <a
        href={GYM_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="tf-whatsapp-float"
        aria-label="Chat with The Fitness Hub Kurla on WhatsApp"
      >
        <span className="tf-pulse-dot" />
        <WhatsAppIcon size={22} />
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
