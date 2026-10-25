import React, { useState } from 'react';
import { ArrowRight, Dumbbell } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import './ProgramsSection.css';

export default function ProgramsSection({ onSelectProgram }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strength', 'Coaching', 'Conditioning', 'Community'];

  const filteredPrograms = activeCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="tf-section tf-programs-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <Dumbbell size={14} />
            Training Disciplines
          </span>
          <h2 className="tf-section-title">
            Purpose-Driven Programs for Every Phase
          </h2>
          <p className="tf-section-subtitle">
            Whether your goal is absolute strength, injury resilience, athletic endurance, or personal coaching accountability, each pathway is grounded in scientific training principles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="tf-programs-tabs" role="tablist" aria-label="Program categories">
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

        {/* Program Cards Layout */}
        <div className="tf-programs-grid">
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
                  <button
                    type="button"
                    className="tf-program-link-btn"
                    onClick={() => onSelectProgram(program.title)}
                  >
                    <span>Inquire About This Program</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
