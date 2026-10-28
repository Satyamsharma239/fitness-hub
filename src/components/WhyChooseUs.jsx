import React from 'react';
import { Clock, ShieldCheck, Award, Dumbbell, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';
import './WhyChooseUs.css';

export default function WhyChooseUs({ onOpenTrial }) {
  const getIcon = (id) => {
    switch (id) {
      case 'hours':
        return <Clock size={24} />;
      case 'coaching':
        return <Award size={24} />;
      case 'hardware':
        return <Dumbbell size={24} />;
      case 'value':
        return <ShieldCheck size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  return (
    <section id="why-us" className="tf-section tf-why-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            The Fitness Hub Standard
          </span>
          <h2 className="tf-section-title">
            Why Lifters Choose The Fitness Hub
          </h2>
          <p className="tf-section-subtitle">
            Conveniently situated in Nehru Nagar, Kurla with extended 18-hour operational timings, dedicated Ladies Only hours (2 PM – 4 PM), certified trainers, and an empowering air-conditioned facility.
          </p>
        </div>

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

        <div className="tf-why-ribbon">
          <div className="tf-ribbon-text">
            <h3>Experience the difference firsthand with zero commitment.</h3>
            <p>Tour our barbell platforms, inspect our equipment, and meet our certified trainers.</p>
          </div>
          <button
            type="button"
            className="tf-btn tf-btn-primary"
            onClick={onOpenTrial}
          >
            <span>Book Free Facility Visit</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
