import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_SAMPLE } from '../data/gymData';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="tf-section tf-testimonials-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <MessageSquare size={14} />
            Member Experience
          </span>
          <h2 className="tf-section-title">
            What Training Here Feels Like
          </h2>
          <p className="tf-section-subtitle">
            Community feedback reflecting our focus on coaching standard, equipment availability, and facility culture.
          </p>
        </div>

        {/* Testimonials Sample Layout */}
        <div className="tf-testimonials-grid">
          {TESTIMONIALS_SAMPLE.map((item) => (
            <div key={item.id} className="tf-testimonial-card">
              <Quote size={28} className="tf-quote-icon" />

              <p className="tf-testimonial-quote">
                "{item.quote}"
              </p>

              <div className="tf-testimonial-meta">
                <span className="tf-member-role">{item.rolePlaceholder}</span>
                <span className="tf-member-tenure">{item.tenurePlaceholder}</span>
                <span className="tf-member-focus-pill">{item.focus}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tf-testimonial-placeholder-tag">
          <strong>Client Notice:</strong> Verified member testimonials and photographic case studies will be inserted here upon client submission.
        </div>
      </div>
    </section>
  );
}
