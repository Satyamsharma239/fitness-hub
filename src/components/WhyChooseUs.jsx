import React from 'react';
import { Compass, Shield, Award, Users, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';
import './WhyChooseUs.css';

export default function WhyChooseUs({ onOpenTrial }) {
  const getIcon = (id) => {
    switch (id) {
      case 'coaching':
        return <Award size={24} />;
      case 'environment':
        return <Shield size={24} />;
      case 'equipment':
        return <Compass size={24} />;
      case 'beginners':
        return <Users size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  return (
    <section id="why-us" className="tf-section tf-why-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow dark">
            The Fitness Hub Standard
          </span>
          <h2 className="tf-section-title">
            Why Lifters & Fitness Seekers Choose The Fitness Hub
          </h2>
          <p className="tf-section-subtitle">
            Conveniently situated in Nehru Nagar, Kurla East with extended 17.5-hour operational timings, certified trainers, and an empowering air-conditioned facility.
          </p>
        </div>

        {/* 2x2 Distinct Editorial Matrix */}
        <div className="tf-why-grid">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.id} className="tf-why-card">
              <div className="tf-why-card-top">
                <div className="tf-why-icon-box">
                  {getIcon(item.id)}
                </div>
                <span className="tf-why-tag">{item.tag}</span>
              </div>

              <h3 className="tf-why-title">{item.title}</h3>
              <p className="tf-why-desc">{item.description}</p>

              <ul className="tf-why-points">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="tf-why-point-item">
                    <span className="tf-why-point-bullet"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlight Ribbon */}
        <div className="tf-why-ribbon">
          <div className="tf-ribbon-text">
            <h3>Experience the difference firsthand with zero commitment.</h3>
            <p>Tour our barbell platforms, turf tracks, and meet the coaching staff.</p>
          </div>
          <button
            type="button"
            className="tf-btn tf-btn-primary"
            onClick={onOpenTrial}
          >
            <span>Book Your Free Trial</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
