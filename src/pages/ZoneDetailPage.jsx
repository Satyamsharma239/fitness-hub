import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  Dumbbell
} from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { TRAINING_ZONES } from "../data/gymData";
import "./ZoneDetailPage.css";

export default function ZoneDetailPage({ onOpenTrial }) {
  const { zoneId } = useParams();
  const zone = TRAINING_ZONES.find((z) => z.id === zoneId);

  if (!zone) {
    return <Navigate to="/programs" replace />;
  }

  const otherZones = TRAINING_ZONES.filter((z) => z.id !== zone.id);

  return (
    <div className="tf-zone-detail-page">
      <section className="tf-zone-detail-hero">
        <div className="tf-container">
          <div className="tf-zone-nav-bar">
            <Link to="/programs" className="tf-zone-back-btn">
              <ArrowLeft size={16} />
              <span>Back to All Training Zones</span>
            </Link>

            <nav className="tf-zone-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="tf-breadcrumb-sep">/</span>
              <Link to="/programs">Training Floor</Link>
              <span className="tf-breadcrumb-sep">/</span>
              <span className="tf-breadcrumb-current">{zone.title}</span>
            </nav>
          </div>

          <div className="tf-zone-hero-content">
            <div className="tf-zone-hero-meta">
              <span className="tf-zone-hero-tag">{zone.tag}</span>
              <span className="tf-zone-hero-badge">{zone.badge}</span>
            </div>

            <h1 className="tf-zone-hero-title">{zone.title}</h1>
            <p className="tf-zone-hero-lead">{zone.lead}</p>

            <div className="tf-zone-chips">
              <div className="tf-zone-chip">
                <MapPin size={14} className="accent" />
                <span>Nehru Nagar, Kurla (E)</span>
              </div>
              <div className="tf-zone-chip">
                <Clock size={14} className="accent" />
                <span>{zone.timings}</span>
              </div>
              <div className="tf-zone-chip">
                <ShieldCheck size={14} className="accent" />
                <span>100% Climate Control Floor</span>
              </div>
              <div className="tf-zone-chip">
                <Sparkles size={14} className="accent" />
                <span>Trainer Guidance Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-zone-showcase-section">
        <div className="tf-container">
          <div className="tf-zone-media-card">
            <img
              src={zone.image}
              alt={zone.title}
              className="tf-zone-media-img"
              loading="eager"
            />
            <div className="tf-zone-media-overlay" />
            <div className="tf-zone-media-caption">
              <strong>{zone.title} &bull; The Fitness Hub Kurla</strong>
              <p>{zone.description}</p>
            </div>
          </div>

          <div className="tf-zone-specs-grid">
            <div className="tf-zone-specs-main">
              <div className="tf-zone-card-block">
                <div className="tf-block-header">
                  <Dumbbell size={20} className="accent" />
                  <h2>Equipment Inventory & Machine Specifications</h2>
                </div>
                <p className="tf-block-intro">
                  Every barbell, cable stack, plate, and bench in this bay is maintained daily to ensure frictionless biomechanics, structural stability, and peak workout output.
                </p>

                <div className="tf-equipment-list">
                  {zone.equipmentDetailed.map((item, idx) => (
                    <div key={idx} className="tf-equipment-row">
                      <div className="tf-equipment-icon">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="tf-equipment-text">
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tf-zone-card-block">
                <div className="tf-block-header">
                  <Sparkles size={20} className="accent" />
                  <h2>Target Training Disciplines</h2>
                </div>
                <div className="tf-disciplines-grid">
                  {zone.targetDisciplines.map((item, idx) => (
                    <div key={idx} className="tf-discipline-pill">
                      <span className="tf-discipline-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="tf-zone-specs-sidebar">
              <div className="tf-zone-sidebar-box highlight">
                <h3>Recommended Routine</h3>
                <div className="tf-sidebar-val">{zone.workoutSplit}</div>
                <p className="tf-sidebar-text">
                  Floor spotters are available across all batches to assist with progressive overload and form screening.
                </p>
              </div>

              <div className="tf-zone-sidebar-box">
                <h3>Coach Guidance & Form Note</h3>
                <blockquote className="tf-sidebar-quote">
                  "{zone.coachGuidance}"
                </blockquote>
              </div>

              <div className="tf-zone-sidebar-box cta-box">
                <h3>Ready to Train in This Zone?</h3>
                <p>
                  Tour our Kurla facility in person. Test the bars, try the cables, and experience the energy with zero pressure.
                </p>

                <div className="tf-sidebar-actions">
                  <button
                    type="button"
                    className="tf-btn tf-btn-primary tf-btn-block"
                    onClick={() => onOpenTrial(`Zone Trial: ${zone.title}`)}
                  >
                    <span>Schedule Free Visit in This Zone</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`https://wa.me/918108884757?text=Hi%20The%20Fitness%20Hub%20Kurla%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(zone.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-secondary tf-btn-block"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Front Desk</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div className="tf-other-zones-section">
            <div className="tf-other-zones-header">
              <span className="tf-eyebrow">Explore The Floor</span>
              <h2>Other Specialized Training Zones</h2>
            </div>

            <div className="tf-other-zones-grid">
              {otherZones.map((item) => (
                <Link
                  key={item.id}
                  to={`/programs/${item.id}`}
                  className="tf-other-zone-card"
                >
                  <div className="tf-other-zone-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="tf-other-zone-tag">{item.tag}</span>
                  </div>
                  <div className="tf-other-zone-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="tf-other-zone-link">
                      <span>View Zone Details</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}