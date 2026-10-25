import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/fitnesshub_logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Memberships', path: '/memberships' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`tf-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="tf-container tf-nav-container">
        {/* Brand / Logo */}
        <Link to="/" className="tf-brand-link" aria-label="The Fitness Hub Home">
          <img src={logoImg} alt="The Fitness Hub Logo" className="tf-brand-logo-img" />
          <div className="tf-brand-text-col">
            <span className="tf-brand-text">
              FITNESS<span>HUB</span>
            </span>
            <span className="tf-brand-subtext">BY AVM FITNESS GROUP</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="tf-nav-desktop" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `tf-nav-link ${isActive ? 'active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA Button -> Navigates to Contact page */}
        <div className="tf-nav-cta">
          <Link
            to="/contact?topic=Free Trial Pass"
            className="tf-btn tf-btn-primary tf-btn-sm"
          >
            <span>Book a Free Trial</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="tf-mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="tf-mobile-drawer" role="dialog" aria-modal="true">
          <div className="tf-mobile-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `tf-mobile-nav-link ${isActive ? 'active' : ''}`
                }
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} />
              </NavLink>
            ))}
          </div>

          <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            <Link
              to="/contact?topic=Free Trial Pass"
              className="tf-btn tf-btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a Free Trial</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="tf-mobile-meta">
            <p><strong>The Fitness Hub</strong> &bull; Kurla East, Mumbai</p>
            <p style={{ marginTop: '0.25rem' }}>Nehru Nagar &bull; Open 6:00 AM – 11:30 PM &bull; +91 81088 84757</p>
          </div>
        </div>
      )}
    </header>
  );
}
