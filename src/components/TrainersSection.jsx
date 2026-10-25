import React from 'react';
import { UserCheck, Calendar } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import './TrainersSection.css';

export default function TrainersSection({ onBookConsultation }) {
  return (
    <section id="trainers" className="tf-section tf-trainers-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <UserCheck size={14} />
            Coaching Roster
          </span>
          <h2 className="tf-section-title">
            Coaches Who Lead From Experience
          </h2>
          <p className="tf-section-subtitle">
            Every coach at The Fitness Hub has dedicated years to progressive fitness coaching, form biomechanics, and tangible client transformations.
          </p>
        </div>

        {/* 4-column Trainer Card Grid */}
        <div className="tf-trainers-grid">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="tf-trainer-card">
              <div className="tf-trainer-photo-wrap">
                <img
                  src={trainer.image}
                  alt={`Fitness Hub Coach ${trainer.name}`}
                  className="tf-trainer-img"
                  loading="lazy"
                />
                <div className="tf-trainer-photo-overlay"></div>
                <span className="tf-trainer-exp-badge">{trainer.experience}</span>
              </div>

              <div className="tf-trainer-body">
                <h3 className="tf-trainer-name">{trainer.name}</h3>
                <span className="tf-trainer-role">{trainer.role}</span>

                <div className="tf-trainer-specialty">
                  <strong>Specialty Focus</strong>
                  {trainer.specialty}
                </div>

                <div className="tf-trainer-certs" title="Editable certification placeholder">
                  Credentials: {trainer.certsPlaceholder}
                </div>

                <button
                  type="button"
                  className="tf-trainer-btn"
                  onClick={() => onBookConsultation(trainer.name)}
                >
                  <Calendar size={14} />
                  <span>Request 1-on-1 Consult</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
