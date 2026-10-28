import React from "react";
import { UserCheck, ShieldCheck, ArrowRight, Award, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero";
import { TRAINERS } from "../data/gymData";
import "../components/TrainersSection.css";

export default function TrainersPage({ onOpenTrial }) {
  return (
    <div className="tf-trainers-page">
      <PageHero
        eyebrow="Certified Coaching Staff"
        title="EXPERIENCE, CREDENTIALS & HANDS-ON COACHING"
        subtitle="Our trainers aren't passive floor attendants. Every coach at The Fitness Hub brings accredited certifications, biomechanical mastery, and genuine dedication to your physical transformation."
        breadcrumb={[{ label: "Trainers", link: null }]}
      />

      <section className="tf-section tf-trainers-section">
        <div className="tf-container">
          <div className="tf-section-header center">
            <span className="tf-eyebrow">
              <UserCheck size={14} />
              Senior Coaching Team
            </span>
            <h2 className="tf-section-title">
              Meet Our Certified <span className="accent">Coaches</span>
            </h2>
            <p className="tf-section-subtitle">
              Offering general floor guidance for all members, as well as dedicated 1-on-1 Personal Training on alternate days: Gold (₹6,000/mo), Diamond (₹8,000/mo), and Platinum (₹11,000/mo).
            </p>
          </div>

          <div className="tf-trainers-grid">
            {TRAINERS.map((trainer) => (
              <div key={trainer.id} className="tf-trainer-card">
                <div className="tf-trainer-photo-wrap">
                  <img
                    src={trainer.image}
                    alt={`The Fitness Hub Kurla Coach ${trainer.name}`}
                    className="tf-trainer-img"
                    loading="lazy"
                  />
                  <div className="tf-trainer-photo-overlay" />
                  <span className="tf-trainer-exp-badge">{trainer.experience}</span>
                </div>

                <div className="tf-trainer-body">
                  <h3 className="tf-trainer-name">{trainer.name}</h3>
                  <span className="tf-trainer-role">{trainer.role}</span>

                  <div className="tf-trainer-specialty">
                    <strong>Specialty Focus</strong>
                    {trainer.specialty}
                  </div>

                  <p className="tf-trainer-bio">
                    {trainer.bio}
                  </p>

                  <blockquote className="tf-trainer-quote">
                    "{trainer.quote}"
                  </blockquote>

                  <div className="tf-trainer-certs">
                    <Award size={14} className="accent" />
                    <span>{trainer.certs}</span>
                  </div>

                  <div className="tf-trainer-footer">
                    <a
                      href={`https://wa.me/918108884757?text=Hi%20The%20Fitness%20Hub%20Kurla%2C%20I%20would%20like%20to%20consult%20with%20Coach%20${encodeURIComponent(trainer.name)}%20regarding%20personal%20training.`}
                      target="_blank"
                      rel="noreferrer"
                      className="tf-btn tf-btn-secondary tf-btn-sm"
                      style={{ width: "100%" }}
                    >
                      <MessageSquare size={14} />
                      <span>Inquire with Coach {trainer.name.split(" ")[0]}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tf-coaching-guarantee-banner">
            <div className="tf-guarantee-copy">
              <div className="tf-guarantee-kicker">
                <ShieldCheck size={18} />
                <span>Alternate-Day Personal Training Guarantee</span>
              </div>
              <h3>Hands-on form correction, milestone tracking & zero sales pressure.</h3>
              <p>
                Whether you select our Gold plan (₹6k) for basic technique mastery, Diamond (₹8k) for tailored body recomposition, or Platinum (₹11k) for high-performance training, every session is delivered with 100% focus on your physical safety and progress.
              </p>
            </div>
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-lg"
              onClick={onOpenTrial}
            >
              <span>Book Coach Movement Screen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
