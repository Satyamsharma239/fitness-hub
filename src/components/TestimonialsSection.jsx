import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';
import './TestimonialsSection.css';

function GoogleGIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="tf-section tf-testimonials-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            Verified Member Stories
          </span>
          <h2 className="tf-section-title">
            Real People. <span className="accent">Real Transformations.</span>
          </h2>
          <p className="tf-section-subtitle">
            Authentic member feedback from our Nehru Nagar, Kurla community. Over 500+ members trained with zero gimmicks.
          </p>

          <div className="tf-rating-banner">
            <GoogleGIcon size={18} />
            <div className="tf-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="tf-rating-text">
              <strong>4.8 / 5.0 Star Rating</strong> based on 180+ Google Reviews
            </span>
          </div>
        </div>

        <div className="tf-testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="tf-testimonial-card">
              <div className="tf-testimonial-top">
                <div className="tf-google-review-badge">
                  <GoogleGIcon size={14} />
                  <span>Google Review</span>
                </div>
                <span className="tf-testimonial-result-tag">{item.result}</span>
              </div>

              <div className="tf-stars" style={{ marginBottom: '12px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="tf-testimonial-quote">
                "{item.quote}"
              </p>

              <div className="tf-testimonial-author">
                <div className="tf-author-info">
                  <h4 className="tf-author-name">
                    <span>{item.name}</span>
                    <span className="tf-verified-check" title="Verified Member">✓</span>
                  </h4>
                  <span className="tf-author-meta">{item.role} &bull; {item.tenure}</span>
                </div>

                <a
                  href={GYM_INFO.contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tf-author-link"
                >
                  <span>Verify on Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
