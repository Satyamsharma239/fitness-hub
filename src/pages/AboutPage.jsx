import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Compass,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import PageHero from "../components/PageHero";
import { GYM_INFO } from "../data/gymData";
import "./AboutPage.css";

const STANDARDS = [
  {
    icon: <Award size={24} />,
    title: "General Guidance + 1-on-1 PT",
    text: "Every member receives respectful floor spotting and form guidance from certified floor coaches. For intensive physical transformations, we offer structured Gold, Diamond, and Platinum alternate-day personal coaching."
  },
  {
    icon: <Compass size={24} />,
    title: "Olympic Hardware & Cardio Suite",
    text: "Reinforced Olympic power cages, calibrated steel plates, heavy dumbbell bays, dual cable crossover systems, and commercial motorized running decks built for genuine athletic progress."
  },
  {
    icon: <Users size={24} />,
    title: "Dedicated Ladies Only Batch",
    text: "Every day from 2:00 PM to 4:00 PM, the training floor is reserved exclusively for women, offering a comfortable, safe, and supportive space with female certified trainer guidance."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "100% Climate Control & Hygiene",
    text: "Beat Mumbai's heat and humidity. Our training floor is continuously air-conditioned, with sanitized contact surfaces, clean washrooms, filtered drinking water, and private lockers."
  }
];

export default function AboutPage({ onOpenTrial }) {
  return (
    <div className="tf-about-page">
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="KURLA’S HOME FOR SERIOUS STRENGTH & TRANSFORMATION"
        subtitle="Get Fit. Get Strong. Get Results. Established in Nehru Nagar, Kurla, The Fitness Hub was built with a singular mission: to provide Mumbai with a high-energy, clean, and empowering facility dedicated strictly to authentic physical progress."
        breadcrumb={[{ label: "About", link: null }]}
      />

      {/* Main Philosophy Story */}
      <section className="tf-section tf-about-story-section">
        <div className="tf-container">
          <div className="tf-about-story-grid">
            <div className="tf-about-story-text">
              <span className="tf-eyebrow">
                <Sparkles size={13} />
                The Fitness Hub Standard
              </span>
              <h2 className="tf-section-title">
                WE CUT THROUGH THE NOISE OF <span className="accent">COMMERCIAL FITNESS.</span>
              </h2>

              <p className="tf-about-lead">
                A gym shouldn't be an intimidating room of broken machines and pushy sales staff. It should be a transformative space you look forward to entering every day.
              </p>

              <p className="tf-about-p">
                Located at First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla, 
                <strong> The Fitness Hub</strong> was created to deliver an uncompromising training experience. Whether you are stepping into a gym for the first time during our Ladies Only batch (2 PM – 4 PM), or you are a seasoned lifter loading Olympic power racks at 11 PM, our floor provides the hardware, guidance, and camaraderie needed to smash your goals.
              </p>

              <div className="tf-about-stat-strip">
                <div className="tf-about-stat-box">
                  <span className="tf-about-stat-num">18h</span>
                  <span className="tf-about-stat-lbl">Open Daily (6 AM – 12 AM)</span>
                </div>
                <div className="tf-about-stat-box">
                  <span className="tf-about-stat-num">100%</span>
                  <span className="tf-about-stat-lbl">Air Conditioned Floor</span>
                </div>
                <div className="tf-about-stat-box">
                  <span className="tf-about-stat-num">2-4 PM</span>
                  <span className="tf-about-stat-lbl">Ladies Only Batch</span>
                </div>
              </div>
            </div>

            <div className="tf-about-story-media">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
                alt="Strength floor at The Fitness Hub Kurla"
                className="tf-about-story-img"
                loading="lazy"
              />
              <div className="tf-about-badge-card">
                <ShieldCheck size={20} className="accent" />
                <div>
                  <strong>Join Today. Transform Tomorrow.</strong>
                  <span>Certified coaching, sanitized facilities & genuine support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="tf-section tf-about-pillars-section">
        <div className="tf-container">
          <div className="tf-section-header center">
            <span className="tf-eyebrow">
              <Award size={14} />
              Our Core Standards
            </span>
            <h2 className="tf-section-title">
              What Sets The Fitness Hub <span className="accent">Apart</span>
            </h2>
            <p className="tf-section-subtitle">
              Every detail of our club is engineered to remove friction from your workout routine and maximize long-term athletic health.
            </p>
          </div>

          <div className="tf-grid-2">
            {STANDARDS.map((std, idx) => (
              <div key={idx} className="tf-pillar-card">
                <div className="tf-pillar-icon-box">{std.icon}</div>
                <h3 className="tf-pillar-title">{std.title}</h3>
                <p className="tf-pillar-text">{std.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Walkthrough Banner */}
      <section className="tf-section tf-about-visit-section">
        <div className="tf-container">
          <div className="tf-about-visit-box">
            <div className="tf-about-visit-copy">
              <span className="tf-eyebrow">
                <MapPin size={13} />
                Visit The Club in Person
              </span>
              <h2>See the facility. Test the equipment. Then decide.</h2>
              <p>
                We believe in total transparency. Come take an informal walkthrough, check our free-weight racks and cardio decks, and discuss our standard membership or alternate-day personal training plans.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                <button
                  type="button"
                  className="tf-btn tf-btn-primary"
                  onClick={onOpenTrial}
                >
                  <span>Book Free Facility Tour</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={GYM_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="tf-btn tf-btn-secondary"
                >
                  <span>WhatsApp Front Desk</span>
                </a>
              </div>
            </div>

            <div className="tf-about-location-summary">
              <div className="tf-loc-summary-item">
                <MapPin size={18} className="accent" />
                <div>
                  <strong>Location</strong>
                  <span>{GYM_INFO.contact.fullAddress}</span>
                </div>
              </div>
              <div className="tf-loc-summary-item">
                <Clock size={18} className="accent" />
                <div>
                  <strong>Hours</strong>
                  <span>{GYM_INFO.contact.hoursDaily}</span>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>{GYM_INFO.contact.hoursLadiesOnly}</span>
                  <span>{GYM_INFO.contact.hoursSunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
