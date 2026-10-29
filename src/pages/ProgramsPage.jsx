import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Filter
} from "lucide-react";
import PageHero from "../components/PageHero";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { TRAINING_ZONES } from "../data/gymData";
import "./ProgramsPage.css";

const ZONE_PILLS = [
  { id: "all", label: "All Training Zones" },
  { id: "free-weights", label: "01 Olympic Strength" },
  { id: "machines", label: "02 Hypertrophy Cables" },
  { id: "cardio", label: "03 Cardio Fleet" },
  { id: "ladies", label: "04 Ladies Only (2–4 PM)" }
];

export default function ProgramsPage({ onOpenTrial }) {
  const location = useLocation();
  const [selectedPill, setSelectedPill] = useState(null);
  const activePill = selectedPill || (location.hash ? location.hash.replace("#", "") : "all");

  const handleSelectPill = (id) => {
    setSelectedPill(id);
  };

  const displayedZones = activePill === "all"
    ? TRAINING_ZONES
    : TRAINING_ZONES.filter((zone) => zone.id === activePill);

  return (
    <div className="tf-programs-page">
      <PageHero
        eyebrow="Training Floor & Equipment Suites"
        title="TRAINING FLOOR & SPECIALIZED ZONES"
        subtitle="Tour our air-conditioned facility in Nehru Nagar, Kurla. Equipped with heavy Olympic free weights, commercial cardio decks, multi-cable stations, and a dedicated Ladies Only batch."
      />

      <section className="tf-section">
        <div className="tf-container">
          <div className="tf-programs-filter-bar">
            <span className="tf-filter-kicker">
              <Filter size={14} />
              <span>Quick Zone Filter:</span>
            </span>
            <div className="tf-filter-pills">
              {ZONE_PILLS.map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  className={`tf-filter-pill ${activePill === pill.id ? "active" : ""}`}
                  onClick={() => handleSelectPill(pill.id)}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {activePill !== "all" && (
            <div className="tf-filter-status-row">
              <span>Filtered to <strong>{ZONE_PILLS.find((p) => p.id === activePill)?.label}</strong></span>
              <button
                type="button"
                className="tf-filter-reset-btn"
                onClick={() => handleSelectPill("all")}
              >
                Reset & View All 4 Zones &rarr;
              </button>
            </div>
          )}

          <div className="tf-programs-list">
            {displayedZones.map((zone) => {
              const zoneIndex = TRAINING_ZONES.findIndex((z) => z.id === zone.id) + 1;
              return (
                <div
                  key={zone.id}
                  id={zone.id}
                  className="tf-zone-detailed-card"
                >
                  <div className="tf-zone-detailed-media">
                    <img
                      src={zone.image}
                      alt={zone.title}
                      className="tf-zone-detailed-img"
                      loading="lazy"
                    />
                    <div className="tf-zone-detailed-overlay" />
                    <span className="tf-zone-detailed-badge">
                      {zone.badge}
                    </span>
                  </div>

                  <div className="tf-zone-detailed-body">
                    <span className="tf-zone-detailed-num">
                      Zone 0{zoneIndex}
                    </span>
                    <h3 className="tf-zone-detailed-title">
                      {zone.title}
                    </h3>
                    <p className="tf-zone-detailed-lead">
                      {zone.lead}
                    </p>
                    <p className="tf-zone-detailed-desc">
                      {zone.description}
                    </p>

                    <ul className="tf-zone-detailed-list">
                      {zone.features.map((item, itemIdx) => (
                        <li key={itemIdx} className="tf-zone-detailed-item">
                          <CheckCircle2
                            size={15}
                            className="tf-zone-detailed-check"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tf-zone-detailed-actions">
                      <Link
                        to={`/programs/${zone.id}`}
                        className="tf-btn tf-btn-primary tf-btn-sm"
                      >
                        <span>View Zone Details & Specs</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={`https://wa.me/918108884757?text=Hi%20The%20Fitness%20Hub%20Kurla%2C%20I%20am%20interested%20in%20trying%20the%20${encodeURIComponent(zone.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="tf-btn tf-btn-secondary tf-btn-sm"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="tf-programs-cta-card">
            <div className="tf-programs-cta-copy">
              <div className="tf-programs-cta-kicker">
                <ShieldCheck size={16} />
                <span>100% Air Conditioned Floor</span>
              </div>
              <h3 className="tf-programs-cta-title">
                Experience our training floor in person before deciding.
              </h3>
              <p className="tf-programs-cta-text">
                Located at First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla. 
                Just 3–4 minutes walk from Kurla Railway Station (East). Open daily 6:00 AM – 12:00 AM Midnight.
              </p>
            </div>
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-lg"
              onClick={onOpenTrial}
            >
              <span>Schedule Free Visit</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
