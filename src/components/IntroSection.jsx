import React from 'react';
import { Check, Target } from 'lucide-react';
import './IntroSection.css';

export default function IntroSection() {
  return (
    <section id="about" className="tf-section tf-intro">
      <div className="tf-container">
        <div className="tf-intro-grid">
          {/* Left Column: Asymmetrical Photo Composition & Key Callout */}
          <div className="tf-intro-visual">
            <div className="tf-intro-img-main">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="State-of-the-art power racks and strength training equipment at The Fitness Hub"
                loading="lazy"
              />
            </div>
            <div className="tf-intro-side-col">
              <div className="tf-intro-img-sub">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Functional training turf and sled equipment"
                  loading="lazy"
                />
              </div>

              <div className="tf-intro-img-sub">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                  alt="Gym equipment and training area at The Fitness Hub"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy Explaining the Philosophy */}
          <div className="tf-intro-content">
            <span className="tf-eyebrow">
              <Target size={14} />
              About The Fitness Hub
            </span>

            <h2 className="tf-section-title">
              We cut through the noise of modern fitness culture.
            </h2>

            <p className="tf-intro-lead">
              A gym should be an empowering place where you make tangible progress, not a chaotic room full of broken machines and pushy sales staff.
            </p>

            <p className="tf-intro-body">
              The Fitness Hub was established with a singular focus: create an environment in Kurla East built strictly for progressive resistance training, fat loss, and athletic health. Whether you are stepping into a gym for the first time or aiming for a personal best, our facility provides the equipment, guidance, and community needed to support your journey.
            </p>

            <div className="tf-intro-list">
              <div className="tf-intro-list-item">
                <div className="tf-intro-check">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="tf-intro-item-text">
                  <h4>Intelligent Progression Over Random Workouts</h4>
                  <p>Our programs are periodized to help you build measurable strength and work capacity without joint burnout.</p>
                </div>
              </div>

              <div className="tf-intro-list-item">
                <div className="tf-intro-check">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="tf-intro-item-text">
                  <h4>Coaching Available on Every Floor Shift</h4>
                  <p>Qualified coaches are actively present to check your form, offer cues, and ensure a safe lifting environment.</p>
                </div>
              </div>

              <div className="tf-intro-list-item">
                <div className="tf-intro-check">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div className="tf-intro-item-text">
                  <h4>Capped Memberships for Spacious Training</h4>
                  <p>We actively manage active membership caps so you never spend your workout waiting around for an open rack.</p>
                </div>
              </div>
            </div>

            <div>
              <a href="#why-us" className="tf-btn tf-btn-secondary">
                <span>Learn How We Coach</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
