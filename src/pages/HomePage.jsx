import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Dumbbell,
  Users,
  Clock,
  Camera,
  Check,
  ShieldCheck,
  Award,
  Shield,
  Compass,
  HelpCircle,
  ChevronDown,
  Quote
} from 'lucide-react';
import Hero from '../components/Hero';
import {
  PROGRAMS,
  TRAINERS,
  MEMBERSHIP_PLANS,
  SCHEDULE_CLASSES,
  GALLERY_ITEMS,
  TESTIMONIALS_SAMPLE,
  FAQS,
  WHY_CHOOSE_US
} from '../data/gymData';
import '../components/IntroSection.css';
import '../components/ProgramsSection.css';
import '../components/WhyChooseUs.css';
import '../components/TrainersSection.css';
import '../components/MembershipSection.css';
import '../components/ScheduleSection.css';
import '../components/GallerySection.css';
import '../components/TestimonialsSection.css';
import '../components/FAQSection.css';
import '../components/ContactSection.css';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const getWhyIcon = (id) => {
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
    <div className="tf-home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short About Teaser */}
      <section className="tf-section tf-intro">
        <div className="tf-container">
          <div className="tf-intro-grid">
            <div className="tf-intro-visual tf-reveal-left">
              <div className="tf-intro-img-main">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                  alt="The Fitness Hub Training Area"
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
                    Evidence-based progression, zero predatory lock-in contracts
                  </span>
                </div>
              </div>
            </div>

            <div className="tf-intro-content tf-reveal-right">
              <span className="tf-eyebrow">
                <Target size={14} />
                About The Fitness Hub
              </span>
              <h2 className="tf-section-title">
                Cutting Through the Confusion of Modern Fitness
              </h2>
              <p className="tf-intro-lead">
                We engineered a space built strictly for progressive strength, functional conditioning, and real member development.
              </p>
              <p className="tf-intro-body">
                No waiting around for benches, no broken cables left for months, and no aggressive supplement sales pitches. Whether you're lifting for the first time or peaking your physique, The Fitness Hub gives you the hardware and coaching to succeed.
              </p>

              <div className="tf-intro-list" style={{ marginBottom: '2rem' }}>
                <div className="tf-intro-list-item">
                  <div className="tf-intro-check">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="tf-intro-item-text">
                    <h4>Periodized Progression Over Random Workouts</h4>
                    <p>Structured lifting cycles designed to build durable strength without burnout.</p>
                  </div>
                </div>

                <div className="tf-intro-list-item">
                  <div className="tf-intro-check">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="tf-intro-item-text">
                    <h4>Experienced Floor Coaches On Every Shift</h4>
                    <p>Qualified trainers ready to check form, cue technique, and ensure safe lifting.</p>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/about" className="tf-btn tf-btn-secondary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Disciplines Preview (3 core programs) */}
      <section className="tf-section tf-programs-section">
        <div className="tf-container">
          <div className="tf-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tf-eyebrow">
                <Dumbbell size={14} />
                Training Disciplines
              </span>
              <h2 className="tf-section-title" style={{ marginBottom: '0.5rem' }}>
                Core Training Pathways
              </h2>
              <p className="tf-section-subtitle">
                Explore our scientifically programmed disciplines designed for sustainable progression.
              </p>
            </div>
            <Link to="/programs" className="tf-btn tf-btn-outline-white tf-btn-sm">
              <span>View All 5 Disciplines</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="tf-grid-3 tf-stagger">
            {PROGRAMS.slice(0, 3).map((program) => (
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
        </div>
      </section>

      {/* 4. Why Choose Us (Editorial Light Contrast) */}
      <section className="tf-section tf-why-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow dark">The Fitness Hub Standard</span>
            <h2 className="tf-section-title">
              Built For Serious Training
            </h2>
            <p className="tf-section-subtitle">
              We removed the clutter, the long queues, and gimmicks to give you a focused training ground.
            </p>
          </div>

          <div className="tf-why-grid tf-stagger">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.id} className="tf-why-card">
                <div className="tf-why-card-top">
                  <div className="tf-why-icon-box">
                    {getWhyIcon(item.id)}
                  </div>
                  <span className="tf-why-tag">{item.tag}</span>
                </div>

                <h3 className="tf-why-title">{item.title}</h3>
                <p className="tf-why-desc">{item.description}</p>

                <ul className="tf-why-points">
                  {item.points.slice(0, 2).map((pt, idx) => (
                    <li key={idx} className="tf-why-point-item">
                      <span className="tf-why-point-bullet"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="tf-why-ribbon tf-reveal-scale">
            <div className="tf-ribbon-text">
              <h3>Experience the facility firsthand with a free guest pass.</h3>
              <p>Tour the platforms, inspect the hardware, and meet our senior coaches.</p>
            </div>
            <Link to="/contact?topic=Free Trial Pass" className="tf-btn tf-btn-primary">
              <span>Book Your Free Trial</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Coach Spotlight Preview (Top 2 Trainers) */}
      <section className="tf-section tf-trainers-section">
        <div className="tf-container">
          <div className="tf-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tf-eyebrow">
                <Users size={14} />
                Coaching Staff
              </span>
              <h2 className="tf-section-title" style={{ marginBottom: '0.5rem' }}>
                Meet Our Lead Coaches
              </h2>
              <p className="tf-section-subtitle">
                Accredited strength & conditioning specialists with proven athletic backgrounds.
              </p>
            </div>
            <Link to="/trainers" className="tf-btn tf-btn-outline-white tf-btn-sm">
              <span>Meet Full Coaching Staff</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="tf-grid-2 tf-stagger">
            {TRAINERS.slice(0, 2).map((trainer) => (
              <div key={trainer.id} className="tf-trainer-card">
                <div className="tf-trainer-photo-wrap" style={{ height: '360px' }}>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
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
                    <strong>Specialty:</strong> {trainer.specialty}
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {trainer.bio}
                  </p>

                  <Link
                    to={`/contact?topic=Coach Consultation: ${encodeURIComponent(trainer.name)}`}
                    className="tf-trainer-btn"
                  >
                    <span>Request Consult with Coach {trainer.name.split(' ')[0]}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Membership Overview */}
      <section className="tf-section tf-membership-section">
        <div className="tf-container">
          <div className="tf-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tf-eyebrow">
                <ShieldCheck size={14} />
                Memberships & Access
              </span>
              <h2 className="tf-section-title" style={{ marginBottom: '0.5rem' }}>
                Flexible Membership Tiers
              </h2>
              <p className="tf-section-subtitle">
                Clear options with no hidden fees or predatory cancellation clauses.
              </p>
            </div>
            <Link to="/memberships" className="tf-btn tf-btn-outline-white tf-btn-sm">
              <span>Compare All 3 Tiers</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="tf-pricing-grid tf-stagger">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`tf-pricing-card ${plan.highlighted ? 'featured' : ''}`}
              >
                {plan.highlighted && (
                  <div className="tf-featured-badge">
                    {plan.badge}
                  </div>
                )}

                <div className="tf-pricing-header">
                  {!plan.highlighted && (
                    <span className="tf-plan-badge-inline">{plan.badge}</span>
                  )}
                  <h3 className="tf-plan-name">{plan.name}</h3>
                  <p className="tf-plan-ideal">{plan.idealFor}</p>
                </div>

                <div className="tf-pricing-value-box">
                  <div className="tf-price-display">{plan.pricePlaceholder}</div>
                  <div className="tf-price-subtext">
                    {plan.pricingNote} &bull; {plan.period}
                  </div>
                </div>

                <ul className="tf-pricing-features">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="tf-feature-item">
                      <span className="tf-feature-icon">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="tf-pricing-footer">
                  <Link
                    to={`/contact?topic=Membership Inquiry: ${encodeURIComponent(plan.name)}`}
                    className={`tf-btn ${
                      plan.highlighted ? 'tf-btn-primary' : 'tf-btn-secondary'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Schedule Teaser */}
      <section className="tf-section tf-schedule-section">
        <div className="tf-container">
          <div className="tf-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tf-eyebrow">
                <Clock size={14} />
                Timetable Preview
              </span>
              <h2 className="tf-section-title" style={{ marginBottom: '0.5rem' }}>
                Today's Highlight Classes
              </h2>
              <p className="tf-section-subtitle">
                Coach-led squad workouts with capped capacity for maximum attention.
              </p>
            </div>
            <Link to="/schedule" className="tf-btn tf-btn-primary tf-btn-sm">
              <span>View Full Weekly Schedule</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="tf-schedule-wrapper tf-reveal">
            <div className="tf-schedule-table-head">
              <div>Session Time</div>
              <div>Class & Focus</div>
              <div>Coach</div>
              <div>Level</div>
              <div>Capacity</div>
              <div>Action</div>
            </div>

            <div className="tf-schedule-body">
              {SCHEDULE_CLASSES.Monday.slice(0, 3).map((item, idx) => (
                <div key={idx} className="tf-schedule-row">
                  <div className="tf-col-time">{item.time}</div>
                  <div className="tf-col-class">
                    <h4>{item.name}</h4>
                    <span>{item.category}</span>
                  </div>
                  <div className="tf-col-coach">Coach {item.coach}</div>
                  <div className="tf-col-level">{item.level}</div>
                  <div className="tf-col-spots">{item.spots}</div>
                  <div className="tf-col-action">
                    <Link
                      to={`/contact?topic=Class Reservation: Monday - ${encodeURIComponent(item.name)}`}
                      className="tf-btn-reserve"
                      style={{ textAlign: 'center', display: 'inline-block' }}
                    >
                      Reserve Spot
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Facility Gallery Preview (3 images) */}
      <section className="tf-section tf-gallery-section">
        <div className="tf-container">
          <div className="tf-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tf-eyebrow">
                <Camera size={14} />
                Club Hardware
              </span>
              <h2 className="tf-section-title" style={{ marginBottom: '0.5rem' }}>
                Inside the Facility
              </h2>
              <p className="tf-section-subtitle">
                Competition barbell platforms, dumbbell bays, and indoor sprint track.
              </p>
            </div>
            <Link to="/gallery" className="tf-btn tf-btn-outline-white tf-btn-sm">
              <span>Explore Full Gallery</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="tf-grid-3 tf-stagger">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div key={item.id} className="tf-gallery-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="tf-gallery-img"
                  loading="lazy"
                />
                <div className="tf-gallery-overlay">
                  <span className="tf-gallery-category-pill">{item.category}</span>
                  <h4 className="tf-gallery-title">{item.title}</h4>
                  <p className="tf-gallery-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Member Testimonials & FAQ Section */}
      <section className="tf-section tf-testimonials-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow">
              <Quote size={14} />
              Community & Culture
            </span>
            <h2 className="tf-section-title">
              What Training Here Feels Like
            </h2>
            <p className="tf-section-subtitle">
              Feedback from members who value focused lifting and real coach feedback.
            </p>
          </div>

          <div className="tf-grid-3 tf-stagger">
            {TESTIMONIALS_SAMPLE.map((item) => (
              <div key={item.id} className="tf-testimonial-card">
                <Quote size={28} className="tf-quote-icon" />
                <p className="tf-testimonial-quote">"{item.quote}"</p>
                <div className="tf-testimonial-meta">
                  <span className="tf-member-role">{item.rolePlaceholder}</span>
                  <span className="tf-member-tenure">{item.tenurePlaceholder}</span>
                  <span className="tf-member-focus-pill">{item.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Accordion */}
          <div className="tf-reveal" style={{ marginTop: '5rem', maxWidth: '820px', marginInline: 'auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="tf-eyebrow">
                <HelpCircle size={14} />
                Quick Answers
              </span>
              <h2 className="tf-section-title" style={{ fontSize: '2rem' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="tf-accordion">
              {FAQS.slice(0, 4).map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`tf-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="tf-accordion-trigger"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.q}</span>
                      <span className="tf-accordion-icon">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="tf-accordion-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Strong Final CTA Banner -> Navigates to /contact */}
      <section className="tf-section" style={{ paddingTop: '2rem' }}>
        <div className="tf-container">
          <div className="tf-final-cta-banner tf-reveal-scale">
            <div className="tf-cta-banner-content">
              <div className="tf-cta-banner-text">
                <h2>Step onto the Platform. Claim Your Trial.</h2>
                <p>
                  Experience the equipment, test the atmosphere, and consult with a coach before deciding on membership. Zero obligation.
                </p>
              </div>
              <div>
                <Link
                  to="/contact?topic=Free Trial Pass"
                  className="tf-btn tf-btn-primary"
                >
                  <span>Book Free Trial Now</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
