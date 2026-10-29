import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";
import GoalFinder from "../components/GoalFinder";
import TrainersSection from "../components/TrainersSection";
import WhyChooseUs from "../components/WhyChooseUs";
import MembershipSection from "../components/MembershipSection";
import InstagramFeed from "../components/InstagramFeed";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { GYM_INFO, TRAINING_ZONES } from "../data/gymData";
import "./HomePage.css";

export default function HomePage({ onOpenTrial }) {
  const navigate = useNavigate();

  const handleZoneTour = (zoneId) => {
    navigate(`/programs/${zoneId}`);
  };

  return (
    <div className="tf-home-page">
      <Hero />

      <MarqueeTicker />

      <section id="about" className="tf-section tf-intro-editorial">
        <div className="tf-container">
          <div className="tf-intro-editorial-grid">
            <div className="tf-intro-editorial-text">
              <span className="tf-eyebrow">
                About The Club
              </span>
              <h2 className="tf-section-title">
                BUILT FOR DISCIPLINE. <br />
                <span className="accent">ENGINEERED FOR RESULTS.</span>
              </h2>

              <p className="tf-intro-lead">
                First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla.
              </p>

              <p className="tf-intro-p">
                We believe your workout environment dictates your consistency. From our heavy free-weight bays and Olympic power racks to our commercial cardio fleet and dedicated Ladies Only training hours, every station is maintained for uninterrupted, focused lifting in a clean, fully air-conditioned space.
              </p>

              <div className="tf-intro-checklist">
                <div className="tf-intro-check-row">
                  <CheckCircle2 size={18} className="tf-check-accent" />
                  <span><strong>18-Hour Daily Flexibility:</strong> Open daily 6:00 AM to 12:00 AM Midnight (Sunday 6:00 PM – 10:00 PM) to accommodate busy schedules.</span>
                </div>
                <div className="tf-intro-check-row">
                  <CheckCircle2 size={18} className="tf-check-accent" />
                  <span><strong>Dedicated Ladies Only Batch:</strong> Daily 2:00 PM – 4:00 PM reserved exclusively for female members with certified female trainer guidance.</span>
                </div>
                <div className="tf-intro-check-row">
                  <CheckCircle2 size={18} className="tf-check-accent" />
                  <span><strong>Alternate-Day 1-on-1 PT:</strong> Structured Gold (₹6k), Diamond (₹8k), and Platinum (₹11k) coaching tiers.</span>
                </div>
              </div>

              <div className="tf-intro-actions">
                <Link
                  to="/about"
                  className="tf-btn tf-btn-primary"
                >
                  <span>Explore About The Club</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={GYM_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="tf-btn tf-btn-secondary"
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="tf-intro-editorial-visuals">
              <div className="tf-visual-main-box">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                  alt="Training floor at The Fitness Hub Kurla"
                  className="tf-visual-main-img"
                  loading="lazy"
                />
                <div className="tf-visual-floating-badge">
                  <ShieldCheck size={18} className="accent" />
                  <div>
                    <strong>100% Air Conditioned Floor</strong>
                    <span>Sanitized equipment, clean washrooms & private lockers</span>
                  </div>
                </div>
              </div>

              <div className="tf-visual-sub-grid">
                <div className="tf-visual-sub-box">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
                    alt="Ladies Only Batch"
                    loading="lazy"
                  />
                  <span>Ladies 2 PM – 4 PM</span>
                </div>
                <div className="tf-visual-sub-box">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                    alt="Free weight strength area"
                    loading="lazy"
                  />
                  <span>Free Weights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="zones" className="tf-section tf-zones-section">
        <div className="tf-container">
          <div className="tf-section-header center">
            <span className="tf-eyebrow">
              Training Floor & Zones
            </span>
            <h2 className="tf-section-title">
              Designed For Every <span className="accent">Fitness Discipline</span>
            </h2>
            <p className="tf-section-subtitle">
              Tour our dedicated training areas before your first session. Fully equipped for hypertrophy, athletic conditioning, cardio health, and female fitness.
            </p>
          </div>

          <div className="tf-zones-grid">
            {TRAINING_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="tf-zone-card"
                onClick={() => handleZoneTour(zone.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleZoneTour(zone.id);
                  }
                }}
              >
                <div className="tf-zone-media">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="tf-zone-img"
                    loading="lazy"
                  />
                  <span className="tf-zone-tag">{zone.tag}</span>
                </div>
                <div className="tf-zone-body">
                  <h3>{zone.title}</h3>
                  <p>{zone.description}</p>
                  <ul className="tf-zone-features">
                    {zone.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/programs/${zone.id}`}
                    className="tf-zone-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Explore This Zone</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link
              to="/programs"
              className="tf-btn tf-btn-secondary tf-btn-lg"
            >
              <span>Explore Complete Zone Breakdown & Equipment</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <GoalFinder onOpenTrial={onOpenTrial} />

      <TrainersSection onOpenTrial={onOpenTrial} />

      <MembershipSection onOpenTrial={onOpenTrial} />

      <WhyChooseUs onOpenTrial={onOpenTrial} />

      <InstagramFeed />

      <TestimonialsSection />

      <FAQSection />

      <ContactSection />

      <section className="tf-section tf-final-cta-section">
        <div className="tf-container">
          <div className="tf-final-cta-box">
            <div className="tf-final-cta-glow" />
            <span className="tf-eyebrow">
              Start Your Transformation
            </span>
            <h2 className="tf-final-cta-title">
              SEE THE FACILITY. <br />
              <span className="accent">START YOUR JOURNEY.</span>
            </h2>
            <p className="tf-final-cta-sub">
              Step onto our air-conditioned training floor in Nehru Nagar, Kurla. Check out our Olympic weights, meet our certified coaches, and discuss the plan that best fits your goals.
            </p>
            <div className="tf-final-cta-actions">
              <button
                type="button"
                className="tf-btn tf-btn-primary tf-btn-lg"
                onClick={onOpenTrial}
              >
                <span>Book Free Facility Visit</span>
                <ArrowRight size={17} />
              </button>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-lg"
              >
                <WhatsAppIcon size={17} />
                <span>WhatsApp Front Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
