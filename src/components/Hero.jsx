import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="tf-hero">
      <div className="tf-container">
        <div className="tf-hero-grid">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="tf-hero-content">
            <h1 className="tf-hero-title">
              Engineered for <span className="highlight">Strength.</span> Built for Real Results.
            </h1>

            <p className="tf-hero-description">
              The Fitness Hub by AVM Fitness Group is Kurla East's premier strength & conditioning club. Featuring air-conditioned training zones, heavy dumbbell bays up to 45kg, certified personal coaches, and dedicated fat-loss transformations.
            </p>

            <div className="tf-hero-actions">
              <Link
                to="/contact?topic=Free Trial Pass"
                className="tf-btn tf-btn-primary"
              >
                <span>Book a Free Trial</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/programs" className="tf-btn tf-btn-secondary">
                <Compass size={18} />
                <span>Explore Programs</span>
              </Link>
            </div>

            {/* Credible Facility Focus Points */}
            <div className="tf-hero-pillars">
              <div className="tf-hero-pillar-item">
                <span className="tf-pillar-title">6 AM – 11:30 PM</span>
                <span className="tf-pillar-desc">7 days extended timing</span>
              </div>
              <div className="tf-hero-pillar-item">
                <span className="tf-pillar-title">Full AC Facility</span>
                <span className="tf-pillar-desc">Kurla East near station</span>
              </div>
              <div className="tf-hero-pillar-item">
                <span className="tf-pillar-title">Certified Coaches</span>
                <span className="tf-pillar-desc">1-on-1 & floor training</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Gym Photograph */}
          <div className="tf-hero-media">
            <div className="tf-hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
                alt="Athlete preparing on barbell platform at The Fitness Hub"
                className="tf-hero-image"
                loading="eager"
              />
              <div className="tf-hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
