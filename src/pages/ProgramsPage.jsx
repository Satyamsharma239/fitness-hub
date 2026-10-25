import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { PROGRAMS } from '../data/gymData';
import '../components/ProgramsSection.css';

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strength', 'Coaching', 'Conditioning', 'Community'];

  const filteredPrograms = activeCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <div className="tf-programs-page">
      <PageHero
        eyebrow="Disciplines & Training Pathways"
        title="Purpose-Driven Training Programs"
        subtitle="Every program at The Fitness Hub follows progressive overload principles, movement audits, and certified coaching supervision to build sustainable, real-world fitness."
        breadcrumb={[{ label: 'Programs', link: null }]}
      />

      <section className="tf-section tf-programs-section">
        <div className="tf-container">
          {/* Category Filter Pills */}
          <div className="tf-programs-tabs tf-reveal" role="tablist" aria-label="Program categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`tf-program-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' ? 'All Disciplines' : cat}
              </button>
            ))}
          </div>

          {/* Program Cards Grid */}
          <div key={activeCategory} className="tf-programs-grid tf-stagger">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="tf-program-card">
                <div className="tf-program-media">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="tf-program-img"
                    loading="lazy"
                  />
                  <div className="tf-program-media-overlay"></div>
                  <span className="tf-program-badge">{program.badge}</span>
                </div>

                <div className="tf-program-body">
                  <h3 className="tf-program-title">{program.title}</h3>
                  <span className="tf-program-subtitle">{program.subtitle}</span>
                  <p className="tf-program-desc">{program.description}</p>

                  <ul className="tf-program-highlights">
                    {program.highlights.map((item, idx) => (
                      <li key={idx} className="tf-program-highlight-item">
                        <span className="tf-program-check-dot"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tf-program-suitability">
                    <strong>Ideal for:</strong> {program.suitableFor}
                  </div>

                  <div className="tf-program-footer">
                    <Link
                      to={`/contact?topic=Program Inquiry: ${encodeURIComponent(program.title)}`}
                      className="tf-program-link-btn"
                    >
                      <span>Inquire About This Program</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Banner Link */}
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
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.35rem' }}>
                Looking for daily class times and coaching slots?
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>
                Check out our interactive timetable with morning, afternoon, and evening squad sessions.
              </p>
            </div>
            <Link to="/schedule" className="tf-btn tf-btn-secondary">
              <Calendar size={16} />
              <span>View Weekly Class Schedule</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
