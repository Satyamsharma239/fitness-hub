import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import './MembershipSection.css';

export default function MembershipSection({ onSelectPlan }) {
  return (
    <section id="memberships" className="tf-section tf-membership-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <Zap size={14} />
            Memberships & Passes
          </span>
          <h2 className="tf-section-title">
            Transparent Tiers. Zero Lock-In Traps.
          </h2>
          <p className="tf-section-subtitle">
            Choose the level of access that aligns with your weekly routine. Every membership includes orientation, movement screens, and clean locker amenities.
          </p>
        </div>

        {/* 3 Distinct Tiers */}
        <div className="tf-pricing-grid">
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
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="tf-feature-item">
                    <span className="tf-feature-icon">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="tf-pricing-footer">
                <button
                  type="button"
                  className={`tf-btn ${
                    plan.highlighted ? 'tf-btn-primary' : 'tf-btn-secondary'
                  }`}
                  onClick={() => onSelectPlan(plan.name)}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Transparent Notice */}
        <div className="tf-pricing-note">
          <p>
            * Pricing and promotional rate cards are customized per location. Please submit an enquiry to receive the current schedule of rates and student/corporate arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}
