import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, MapPin, Clock, Flame } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { GYM_INFO } from '../data/gymData';
import logoImg from '../assets/fitnesshub_logo.jpg';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenTrial }) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const istOffset = 5.5 * 60;
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + istOffset * 60000);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const day = istTime.getDay();
      const timeInMinutes = hours * 60 + minutes;

      if (day === 0) {
        setIsOpenNow(timeInMinutes >= 18 * 60 && timeInMinutes < 22 * 60);
      } else {
        setIsOpenNow(timeInMinutes >= 6 * 60 && timeInMinutes < 24 * 60);
      }
    };

    checkOpenStatus();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="tf-footer">
      <div className="tf-container">
        
        <div className="tf-footer-cta-strip">
          <div className="tf-footer-cta-text">
            <span className="tf-badge">Complimentary Guest Pass</span>
            <h3>Ready to experience Kurla’s premier strength & fitness facility?</h3>
            <p>Claim your free club walkthrough & workout session. Meet our certified trainers with zero sales pressure.</p>
          </div>
          <div className="tf-footer-cta-action">
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-lg"
              onClick={onOpenTrial}
            >
              <Flame size={16} />
              <span>Book Free Club Visit</span>
            </button>
          </div>
        </div>

        <div className="tf-footer-grid">
          
          <div className="tf-footer-brand">
            <Link to="/" className="tf-brand-link" aria-label="The Fitness Hub Kurla Home">
              <img src={logoImg} alt="The Fitness Hub Logo" className="tf-brand-logo-img" />
              <div className="tf-brand-text-col">
                <span className="tf-brand-text">
                  THE FITNESS <span className="accent">HUB</span>
                </span>
                <span className="tf-brand-subtext">KURLA &bull; GET FIT. GET STRONG.</span>
              </div>
            </Link>

            <p className="tf-footer-brand-desc">
              First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla. Offering daily 18-hour training (6 AM – 12 AM), dedicated Ladies Only batch (2 PM – 4 PM), Olympic power racks, and certified 1-on-1 personal coaching.
            </p>

            <div className="tf-footer-status-pill">
              <span className={`tf-status-dot ${isOpenNow ? 'open' : 'closed'}`} />
              <span>{isOpenNow ? 'Gym Open Now until 12:00 AM' : 'Gym Opens at 6:00 AM'}</span>
            </div>

            <div className="tf-footer-socials">
              <a
                href={GYM_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="tf-social-icon ig"
                aria-label="The Fitness Hub Instagram @fitnesshubkurla"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-social-icon wa"
                aria-label="The Fitness Hub WhatsApp Desk"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          <div className="tf-footer-col">
            <h4>Club Navigation</h4>
            <ul className="tf-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Fitness Hub</Link></li>
              <li><Link to="/memberships">Membership Plans (GST Included)</Link></li>
              <li><Link to="/memberships">Personal Training (Alternate Days)</Link></li>
              <li><Link to="/trainers">Certified Coaches</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          <div className="tf-footer-col">
            <h4>Plans (GST Included)</h4>
            <ul className="tf-footer-links">
              <li><Link to="/memberships">1 Month – ₹3,500</Link></li>
              <li><Link to="/memberships">3 Months – ₹6,000</Link></li>
              <li><Link to="/memberships">6 Months – ₹8,000</Link></li>
              <li><Link to="/memberships">Annual – ₹12,000 (₹1,000/mo)</Link></li>
              <li><Link to="/memberships">Annual Couples – ₹10,000 / person</Link></li>
              <li><Link to="/memberships">PT Gold / Diamond / Platinum</Link></li>
            </ul>
          </div>

          <div className="tf-footer-col">
            <h4>Kurla Reception Desk</h4>
            <div className="tf-footer-contact-item">
              <MapPin size={16} className="accent" />
              <span>First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla, Mumbai – 400024</span>
            </div>

            <div className="tf-footer-contact-item">
              <Clock size={16} className="accent" />
              <span>Daily: 6:00 AM – 12:00 AM &bull; Ladies: 2–4 PM &bull; Sun: 6–10 PM</span>
            </div>

            <div className="tf-footer-contact-item">
              <Phone size={16} className="accent" />
              <a href={`tel:${GYM_INFO.contact.phoneRaw}`} className="tf-footer-phone-link">
                {GYM_INFO.contact.phone}
              </a>
            </div>

            <div className="tf-footer-actions">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-primary tf-btn-sm"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={GYM_INFO.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-sm"
              >
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="tf-footer-bottom">
          <p>
            &copy; {CURRENT_YEAR} The Fitness Hub — Kurla. All rights reserved. Nehru Nagar, Kurla, Mumbai – 400024.
          </p>

          <button
            type="button"
            className="tf-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
