import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="tf-section tf-testimonials-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <MessageSquare size={14} />
            Member Success Stories
          </span>
          <h2 className="tf-section-title">
            Real People. <span className="accent">Real Transformations.</span>
          </h2>
          <p className="tf-section-subtitle">
            Read authentic reviews from our dedicated lifting community in Nehru Nagar, Kurla. Over 500+ successful transformations guided by our certified coaching team.
          </p>

          <div className="tf-rating-banner">
            <div className="tf-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="tf-rating-text">
              <strong>4.8 / 5.0 Rating</strong> based on 180+ Google Reviews & Kurla Member Feedbacks
            </span>
          </div>
        </div>

        <div className="tf-testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="tf-testimonial-card">
              <div className="tf-testimonial-top">
                <div className="tf-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="tf-testimonial-result-tag">{item.result}</span>
              </div>

              <p className="tf-testimonial-quote">
                "{item.quote}"
              </p>

              <div className="tf-testimonial-author">
                <div className="tf-author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="tf-author-name">{item.name}</h4>
                  <span className="tf-author-meta">{item.role} &bull; {item.tenure}</span>
                </div>
                <span className="tf-author-focus">{item.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
