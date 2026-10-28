import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Compass,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";
import WhyChooseUs from "../components/WhyChooseUs";
import MembershipSection from "../components/MembershipSection";
import InstagramFeed from "../components/InstagramFeed";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import { GYM_INFO, TRAINING_ZONES } from "../data/gymData";
import "./HomePage.css";

export default function HomePage({ onOpenTrial }) {
  return (
    <div className="tf-home-page">
      {/* 1. Flagship Hero with Typing Animation & Hero Image */}
      <Hero onOpenTrial={onOpenTrial} />

      {/* 2. High-Energy Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. The Club Story / Introduction */}
      <section className="tf-section tf-intro-editorial">
        <div className="tf-container">
          <div className="tf-intro-editorial-grid">
            <div className="tf-intro-editorial-text">
              <span className="tf-eyebrow">
                <Compass size={13} />
                About The Fitness Hub — Kurla
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
                <button
                  type="button"
                  className="tf-btn tf-btn-primary"
                  onClick={onOpenTrial}
                >
                  <span>Schedule Club Visit</span>
                  <ArrowRight size={16} />
                </button>

                <Link to="/about" className="tf-btn tf-btn-secondary">
                  <span>Explore Club Story</span>
                </Link>
              </div>
            </div>

            {/* Visual Collage */}
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

      {/* 4. Training Floor & Zones */}
      <section className="tf-section tf-zones-section">
        <div className="tf-container">
          <div className="tf-section-header center">
            <span className="tf-eyebrow">
              <Sparkles size={13} />
              The Training Floor
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
              <div key={zone.id} className="tf-zone-card">
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
                  <button
                    type="button"
                    className="tf-zone-btn"
                    onClick={onOpenTrial}
                  >
                    <span>Tour this zone</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Train Here - 4 Pillars */}
      <WhyChooseUs onOpenTrial={onOpenTrial} />

      {/* 6. Official Memberships & Personal Training (GST Included) */}
      <MembershipSection onOpenTrial={onOpenTrial} />

      {/* 7. Live Instagram Community Showcase */}
      <InstagramFeed />

      {/* 8. Member Testimonials & Ratings */}
      <TestimonialsSection />

      {/* 9. Location & Transit Directions */}
      <section className="tf-section tf-location-section">
        <div className="tf-container">
          <div className="tf-location-grid">
            <div className="tf-location-card">
              <span className="tf-eyebrow">
                <MapPin size={13} />
                Kurla Location
              </span>
              <h2 className="tf-section-title">
                EASY TO REACH. <br />
                <span className="accent">IMPOSSIBLE TO SKIP.</span>
              </h2>

              <p style={{ fontSize: "16px", color: "var(--text-silver)", marginBottom: "20px" }}>
                Conveniently situated in Nehru Nagar, Kurla, just 3-4 minutes walking distance from Kurla Railway Station.
              </p>

              <div className="tf-location-details-list">
                <div className="tf-loc-item">
                  <div className="tf-loc-icon"><MapPin size={18} /></div>
                  <div>
                    <strong>Full Address</strong>
                    <p>{GYM_INFO.contact.fullAddress}</p>
                  </div>
                </div>

                <div className="tf-loc-item">
                  <div className="tf-loc-icon"><Clock size={18} /></div>
                  <div>
                    <strong>Operating Hours</strong>
                    <p>{GYM_INFO.contact.hoursDaily}</p>
                    <p style={{ color: "var(--accent)", fontWeight: 700 }}>{GYM_INFO.contact.hoursLadiesOnly}</p>
                    <p>{GYM_INFO.contact.hoursSunday}</p>
                  </div>
                </div>

                <div className="tf-loc-item">
                  <div className="tf-loc-icon"><Phone size={18} /></div>
                  <div>
                    <strong>Direct Calling & WhatsApp</strong>
                    <p>
                      <a href={`tel:${GYM_INFO.contact.phoneRaw}`} style={{ color: "#ffffff", fontWeight: 700 }}>
                        {GYM_INFO.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                <a
                  href={GYM_INFO.contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tf-btn tf-btn-primary"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={GYM_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="tf-btn tf-btn-secondary"
                >
                  <span>WhatsApp Reception</span>
                </a>
              </div>
            </div>

            {/* Visual Transit Map Card */}
            <div className="tf-location-map-wrap">
              <div className="tf-map-visual-card">
                <div className="tf-map-header">
                  <div className="tf-map-live-dot" />
                  <span>NEHRU NAGAR • KURLA CLUB</span>
                </div>

                <div className="tf-transit-pointers">
                  <div className="tf-transit-step">
                    <span className="tf-step-badge">1</span>
                    <div>
                      <strong>From Kurla Railway Station (East):</strong>
                      <p>Exit towards Nehru Nagar side. Walk 3-4 minutes along SG Barve Marg directly to Serene Shelter building.</p>
                    </div>
                  </div>

                  <div className="tf-transit-step">
                    <span className="tf-step-badge">2</span>
                    <div>
                      <strong>From Nehru Nagar Bus Depot:</strong>
                      <p>Under 2 minutes walking distance. Head towards Mass Building, B Wing.</p>
                    </div>
                  </div>

                  <div className="tf-transit-step">
                    <span className="tf-step-badge">3</span>
                    <div>
                      <strong>Floor & Entrance:</strong>
                      <p>Take stairs or lift to the 1st Floor. Front desk reception is immediately welcoming at the entrance.</p>
                    </div>
                  </div>
                </div>

                <div className="tf-map-actions">
                  <a
                    href={GYM_INFO.contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>Launch GPS Directions (Google Maps)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Visitor FAQs */}
      <FAQSection />

      {/* 11. Closing In-Person Visit Invitation */}
      <section className="tf-section tf-final-cta-section">
        <div className="tf-container">
          <div className="tf-final-cta-box">
            <div className="tf-final-cta-glow" />
            <span className="tf-eyebrow">
              <ShieldCheck size={13} />
              Join Today. Transform Tomorrow.
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
                <span>WhatsApp Front Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
