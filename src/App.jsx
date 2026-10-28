import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TrialModal from './components/TrialModal';
import WhatsAppIcon from './components/WhatsAppIcon';
import useScrollReveal from './hooks/useScrollReveal';
import { GYM_INFO } from './data/gymData';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import TrainersPage from './pages/TrainersPage';
import MembershipsPage from './pages/MembershipsPage';
import ContactPage from './pages/ContactPage';

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

      <main id="main-content" className="tf-page-enter">
        <Routes>
          <Route path="/" element={<HomePage onOpenTrial={openTrial} />} />
          <Route path="/about" element={<AboutPage onOpenTrial={openTrial} />} />
          <Route path="/programs" element={<ProgramsPage onOpenTrial={openTrial} />} />
          <Route path="/trainers" element={<TrainersPage onOpenTrial={openTrial} />} />
          <Route path="/memberships" element={<MembershipsPage onOpenTrial={openTrial} />} />
          <Route path="/pricing" element={<Navigate to="/memberships" replace />} />
          <Route path="/schedule" element={<Navigate to="/memberships" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Navigate to="/programs" replace />} />
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
