import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { TRAINERS } from '../data/gymData';
import '../components/TrainersSection.css';

export default function TrainersPage() {
  return (
    <div className="tf-trainers-page">
      <PageHero
        eyebrow="Coaching Staff"
        title="Experience, Credentials & Real Coaching"
        subtitle="Our trainers aren't floor attendants. Every coach at The Fitness Hub brings dedicated fitness coaching experience, formal technique credentials, and hands-on dedication to your development."
        breadcrumb={[{ label: 'Trainers', link: null }]}
      />

      <section className="tf-section tf-trainers-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow">
              <UserCheck size={14} />
              Full Roster
            </span>
            <h2 className="tf-section-title">
              Our Senior Coaching Staff
            </h2>
            <p className="tf-section-subtitle">
              Whether you need technical breakdown on your squat, athletic speed conditioning, or personalized nutrition accountability, our team has you covered.
            </p>
          </div>

          <div className="tf-trainers-grid tf-stagger">
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

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {trainer.bio}
                  </p>

                  <div className="tf-trainer-certs" title="Editable certification placeholder">
                    Credentials: {trainer.certsPlaceholder}
                  </div>

                  <Link
                    to={`/contact?topic=Coach Consultation: ${encodeURIComponent(trainer.name)}`}
                    className="tf-trainer-btn"
                  >
                    <Calendar size={14} />
                    <span>Request 1-on-1 Consult</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coaching Standards Banner */}
          <div
            className="tf-reveal-scale"
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-focus)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                <ShieldCheck size={16} />
                <span>Coaching Standards Guarantee</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                Every coach on our floor is certified & active.
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We do not employ commission-driven sales staff masquerading as trainers. You will always receive honest biomechanical feedback, safe progressions, and supportive cues.
              </p>
            </div>
            <Link to="/contact?topic=Coach Consultation" className="tf-btn tf-btn-primary">
              <span>Book Coach Movement Screen</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
