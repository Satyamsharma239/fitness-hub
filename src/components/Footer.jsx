import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import logoImg from '../assets/fitnesshub_logo.jpg';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="tf-footer">
      <div className="tf-container">
        <div className="tf-footer-grid">
          {/* Brand Column */}
          <div className="tf-footer-brand">
            <Link to="/" className="tf-brand-link" aria-label="The Fitness Hub Home" style={{ display: 'inline-flex' }}>
              <img src={logoImg} alt="The Fitness Hub Logo" className="tf-brand-logo-img" />
              <div className="tf-brand-text-col">
                <span className="tf-brand-text">
                  FITNESS<span>HUB</span>
                </span>
                <span className="tf-brand-subtext">BY AVM FITNESS GROUP</span>
              </div>
            </Link>
            <p>
              Nehru Nagar, Kurla East's premier strength training and physical transformation club by AVM Fitness Group. Dedicated to serious fitness, certified coaching, and real athletic results.
            </p>
            <div className="tf-footer-socials">
              <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" className="tf-social-icon" aria-label="The Fitness Hub Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href={GYM_INFO.socials.facebook} target="_blank" rel="noreferrer" className="tf-social-icon" aria-label="The Fitness Hub Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href={GYM_INFO.socials.youtube} target="_blank" rel="noreferrer" className="tf-social-icon" aria-label="The Fitness Hub YouTube">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <polygon points="10 15 15 12 10 9 10 15"></polygon>
                </svg>
              </a>
              <a href={GYM_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="tf-social-icon" aria-label="The Fitness Hub LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="tf-footer-col">
            <h4>Quick Navigation</h4>
            <ul className="tf-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Fitness Hub</Link></li>
              <li><Link to="/programs">Training Disciplines</Link></li>
              <li><Link to="/trainers">Meet the Coaches</Link></li>
              <li><Link to="/memberships">Membership Plans</Link></li>
              <li><Link to="/schedule">Weekly Schedule</Link></li>
              <li><Link to="/gallery">Club Gallery</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Programs Links */}
          <div className="tf-footer-col">
            <h4>Disciplines</h4>
            <ul className="tf-footer-links">
              <li><Link to="/programs">Heavy Strength & Hypertrophy</Link></li>
              <li><Link to="/programs">1-on-1 Personal Coaching</Link></li>
              <li><Link to="/programs">Fat-Loss & Conditioning</Link></li>
              <li><Link to="/programs">Functional Agility & Turf</Link></li>
              <li><Link to="/programs">Group Core Sessions</Link></li>
              <li><Link to="/schedule">Class Timetable</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="tf-footer-col">
            <h4>Kurla East Club Desk</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.35rem', color: 'var(--text-white)' }}>
              {GYM_INFO.contact.building}
            </p>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              {GYM_INFO.contact.landmark}, {GYM_INFO.contact.city} – {GYM_INFO.contact.pincode}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-white)', fontWeight: 700, marginBottom: '0.25rem' }}>
              <a href={`tel:${GYM_INFO.contact.phone}`} style={{ color: 'var(--text-white)' }}>
                {GYM_INFO.contact.phone}
              </a>
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {GYM_INFO.contact.hoursWeekday}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-primary tf-btn-sm"
              >
                <span>WhatsApp</span>
              </a>
              <Link to="/contact" className="tf-btn tf-btn-secondary tf-btn-sm">
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="tf-footer-bottom">
          <p>
            &copy; {CURRENT_YEAR} The Fitness Hub by AVM Fitness Group. All rights reserved. Built with React + Vite.
          </p>

          <button
            type="button"
            className="tf-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
