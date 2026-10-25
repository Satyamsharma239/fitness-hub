import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Check, Shield, Compass, Award, Users, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { WHY_CHOOSE_US } from '../data/gymData';
import '../components/IntroSection.css';
import '../components/WhyChooseUs.css';

export default function AboutPage() {
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
    <div className="tf-about-page">
      <PageHero
        eyebrow="Who We Are"
        title="Engineering A New Standard in Gym Culture"
        subtitle="The Fitness Hub was established in Kurla East to cut through the confusion of modern fitness marketing. We build measurable strength, body transformations, and lifelong athletic capacity."
        breadcrumb={[{ label: 'About Us', link: null }]}
      />

      {/* Philosophy Deep Dive */}
      <section className="tf-section tf-intro">
        <div className="tf-container">
          <div className="tf-intro-grid">
            <div className="tf-intro-visual tf-reveal-left">
              <div className="tf-intro-img-main">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                  alt="The Fitness Hub Weight Room"
                  loading="lazy"
                />
              </div>
              <div className="tf-intro-side-col">
                <div className="tf-intro-img-sub">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                    alt="Turf and Conditioning Track"
                    loading="lazy"
                  />
                </div>
                <div className="tf-intro-callout-box">
                  <span className="tf-callout-number">100%</span>
                  <span className="tf-callout-label">
                    Evidence-based progression protocols, zero fad routines
                  </span>
                </div>
              </div>
            </div>

            <div className="tf-intro-content tf-reveal-right">
              <span className="tf-eyebrow">
                <Target size={14} />
                Our Foundational Philosophy
              </span>
              <h2 className="tf-section-title">
                Progressive Overload Over Gimmicks
              </h2>
              <p className="tf-intro-lead">
                Fitness isn't about leaving you on the floor gasping for air every single day. It is about steady, calculated adaptations over time.
              </p>
              <p className="tf-intro-body">
                At The Fitness Hub, every barbell, machine, and cardio station was selected with intention. We eliminate the friction common in commercial chain gyms — no waiting endlessly for benches, no broken cables left for months, and no floor trainers aggressively pushing supplements.
              </p>

              <div className="tf-intro-list">
                <div className="tf-intro-list-item">
                  <div className="tf-intro-check">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="tf-intro-item-text">
                    <h4>Periodized Strength & Mobility</h4>
                    <p>Structured blocks focusing on technical precision before increasing load volume.</p>
                  </div>
                </div>

                <div className="tf-intro-list-item">
                  <div className="tf-intro-check">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="tf-intro-item-text">
                    <h4>Experienced Floor Coaches</h4>
                    <p>Accredited strength and conditioning specialists on shift to advise and spot lifters.</p>
                  </div>
                </div>

                <div className="tf-intro-list-item">
                  <div className="tf-intro-check">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="tf-intro-item-text">
                    <h4>Spacious, Capped Capacity</h4>
                    <p>Controlled membership numbers so your training sessions remain focused and efficient.</p>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/programs" className="tf-btn tf-btn-primary">
                  <span>Explore Our Disciplines</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of The Fitness Hub (Editorial Light Palette) */}
      <section className="tf-section tf-why-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow dark">Core Standards</span>
            <h2 className="tf-section-title">
              How We Run Our Facility
            </h2>
            <p className="tf-section-subtitle">
              Four non-negotiable principles that shape the daily experience of every athlete and member.
            </p>
          </div>

          <div className="tf-why-grid tf-stagger">
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

          {/* Bottom CTA on About Page */}
          <div className="tf-why-ribbon tf-reveal-scale">
            <div className="tf-ribbon-text">
              <h3>Come see the equipment and meet the coaching staff.</h3>
              <p>Book a free facility tour and movement assessment with zero obligation.</p>
            </div>
            <Link to="/contact?topic=Free Trial Pass" className="tf-btn tf-btn-primary">
              <span>Book Your Free Trial</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
