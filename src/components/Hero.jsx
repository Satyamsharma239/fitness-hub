import React from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  PhoneCall,
  Sparkles
} from "lucide-react";
import { GYM_INFO } from "../data/gymData";
import "./Hero.css";

export default function Hero({ onOpenTrial }) {
  return (
    <section className="tf-hero-section">
      <div className="tf-hero-backdrop-glow" aria-hidden="true" />

      <div className="tf-container">
        <div className="tf-hero-editorial-grid">
          {/* Left Column: Bold Headline & CTAs */}
          <div className="tf-hero-text-col">
            <div className="tf-hero-location-pill">
              <span className="tf-status-dot open" />
              <span>Nehru Nagar, Kurla &bull; Daily 6:00 AM – 12:00 AM</span>
            </div>

            <h1 className="tf-hero-title">
              GET FIT. GET STRONG.
              <br />
              <span className="accent">GET REAL RESULTS.</span>
            </h1>

            <p className="tf-hero-subtext">
              Kurla’s premier air-conditioned fitness club at Nehru Nagar. Equipped with heavy Olympic free weights, commercial cardio decks, certified personal coaching, and a dedicated daily <strong>Ladies Only batch (2:00 PM – 4:00 PM)</strong>.
            </p>

            {/* Clear Action Buttons */}
            <div className="tf-hero-cta-group">
              <button
                type="button"
                className="tf-btn tf-btn-primary tf-btn-lg"
                onClick={onOpenTrial}
              >
                <span>Book Free Facility Visit</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-lg"
              >
                <PhoneCall size={16} />
                <span>WhatsApp: 81088 84757</span>
              </a>
            </div>

            {/* Verification Points */}
            <div className="tf-hero-check-points">
              <div className="tf-hero-point">
                <CheckCircle2 size={16} className="accent" />
                <span>Daily 6:00 AM – 12:00 AM Midnight</span>
              </div>
              <div className="tf-hero-point">
                <CheckCircle2 size={16} className="accent" />
                <span>Ladies Only Batch: 2:00 PM – 4:00 PM</span>
              </div>
              <div className="tf-hero-point">
                <CheckCircle2 size={16} className="accent" />
                <span>Standard Plans from ₹1,000/mo (GST Included)</span>
              </div>
              <div className="tf-hero-point">
                <CheckCircle2 size={16} className="accent" />
                <span>Alternate-Day PT: Gold, Diamond & Platinum</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="tf-hero-visual-col">
            <div className="tf-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
                alt="The Fitness Hub Kurla Training Floor"
                className="tf-hero-visual-img"
                loading="eager"
              />
              <div className="tf-hero-visual-overlay" />

              {/* Floating Badge on Image */}
              <div className="tf-hero-floating-card">
                <div className="tf-floating-brand-row">
                  <div className="tf-floating-dot" />
                  <strong>THE FITNESS HUB — KURLA</strong>
                </div>
                <p>First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar</p>
                <div className="tf-floating-footer">
                  <span className="tf-floating-pill">Daily 6 AM – 12 AM</span>
                  <span className="tf-floating-star">Ladies 2 PM – 4 PM</span>
                </div>
              </div>

              {/* Corner Tag */}
              <div className="tf-hero-corner-tag">
                <Sparkles size={13} />
                <span>Join Today. Transform Tomorrow.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Location & Timings Bar */}
        <div className="tf-hero-bottom-bar">
          <div className="tf-bottom-item">
            <MapPin size={18} className="accent" />
            <div>
              <strong>Club Location</strong>
              <span>First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla – 400024</span>
            </div>
          </div>

          <div className="tf-bottom-item">
            <Clock size={18} className="accent" />
            <div>
              <strong>Operating Hours</strong>
              <span>Daily: 6:00 AM – 12:00 AM &bull; Ladies: 2:00 PM – 4:00 PM &bull; Sunday: 6:00 PM – 10:00 PM</span>
            </div>
          </div>

          <div className="tf-bottom-action">
            <a
              href={GYM_INFO.contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="tf-btn tf-btn-secondary tf-btn-sm"
            >
              <MapPin size={14} />
              <span>Open Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
