import React, { useState } from 'react';
import { Check, ShieldCheck, MapPin, Award, Users } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STANDARD_MEMBERSHIPS, PERSONAL_TRAINING_PLANS, GYM_INFO } from '../data/gymData';
import './MembershipSection.css';

export default function MembershipSection({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('standard'); 

  const individualPlans = STANDARD_MEMBERSHIPS.slice(0, 4);
  const couplePlan = STANDARD_MEMBERSHIPS[4];

  return (
    <section id="memberships" className="tf-section tf-membership-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            Membership & PT Rates
          </span>
          <h2 className="tf-section-title">
            Simple, Transparent Rates. <span className="accent">GST Included.</span>
          </h2>
          <p className="tf-section-subtitle">
            No surprise admission charges or hidden maintenance fees. Standard membership includes 18-hour gym access, Ladies Only batch (2 PM – 4 PM), and general trainer guidance.
          </p>
        </div>

        <div className="tf-plan-tab-switcher">
          <button
            type="button"
            className={`tf-tab-switch-btn ${activeTab === 'standard' ? 'active' : ''}`}
            onClick={() => setActiveTab('standard')}
          >
            <ShieldCheck size={16} />
            <span>Standard Gym Access</span>
          </button>

          <button
            type="button"
            className={`tf-tab-switch-btn ${activeTab === 'pt' ? 'active' : ''}`}
            onClick={() => setActiveTab('pt')}
          >
            <Award size={16} />
            <span>Personal Training (Alternate Days)</span>
          </button>
        </div>

        {activeTab === 'standard' && (
          <div className="tf-standard-plans-wrap">
            <div className="tf-pricing-grid tf-pricing-grid-4col">
              {individualPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`tf-pricing-card ${plan.highlighted ? 'featured' : ''}`}
                >
                  {plan.highlighted && (
                    <div className="tf-featured-badge">
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="tf-pricing-header">
                    {!plan.highlighted && (
                      <span className="tf-plan-badge-inline">{plan.badge}</span>
                    )}
                    <h3 className="tf-plan-name">{plan.duration}</h3>
                    <p className="tf-plan-ideal">{plan.description}</p>
                  </div>

                  <div className="tf-pricing-value-box">
                    <div className="tf-plan-price-row">
                      <span className="tf-plan-price-num">{plan.price}</span>
                      <span className="tf-plan-gst-tag">{plan.taxNote}</span>
                    </div>
                    <div className="tf-price-subtext">{plan.period}</div>
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
                      className="tf-btn tf-btn-secondary"
                      style={{ width: '100%' }}
                      onClick={() => onOpenTrial(`Standard ${plan.duration} (${plan.price})`)}
                    >
                      <MapPin size={15} />
                      <span>{plan.ctaText}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {couplePlan && (
              <div className="tf-couple-package-card">
                <div className="tf-couple-card-left">
                  <div className="tf-couple-badge">
                    <Users size={14} />
                    <span>Duo Special Package</span>
                  </div>
                  <h3>Train Together: Annual Couple Pass</h3>
                  <p>
                    {couplePlan.description} Save ₹4,000 per couple compared to individual annual passes.
                  </p>
                  <div className="tf-couple-perks">
                    <span>✓ ₹10,000 per person (GST Included)</span>
                    <span>✓ Full 365-day floor access for both</span>
                    <span>✓ Free lockers & trainer guidance</span>
                  </div>
                </div>

                <div className="tf-couple-card-right">
                  <div className="tf-couple-price-box">
                    <div className="tf-couple-price-num">{couplePlan.price}</div>
                    <span className="tf-couple-price-lbl">Per Person • Annual Duo</span>
                  </div>

                  <div className="tf-couple-actions">
                    <button
                      type="button"
                      className="tf-btn tf-btn-primary"
                      onClick={() => onOpenTrial('Annual Couples Package (₹10,000/person)')}
                    >
                      <MapPin size={15} />
                      <span>Claim Couple Pass</span>
                    </button>

                    <a
                      href="https://wa.me/918108884757?text=Hi%20The%20Fitness%20Hub%20Kurla%2C%20we%20are%20interested%20in%20the%20Annual%20Couples%20Membership%20Package%20(Rs.%2010%2C000%20per%20person)."
                      target="_blank"
                      rel="noreferrer"
                      className="tf-btn tf-btn-secondary"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'pt' && (
          <div>
            <div className="tf-pt-intro-banner">
              <Award size={18} className="accent" />
              <div>
                <strong>All Personal Trainer Plans are Monthly on Alternate Days (3 Sessions/Week)</strong>
                <span>Direct 1-on-1 certified coaching tailored to your physical capabilities and goals.</span>
              </div>
            </div>

            <div className="tf-pricing-grid tf-pricing-grid-pt">
              {PERSONAL_TRAINING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`tf-pricing-card ${plan.highlighted ? 'featured' : ''}`}
                >
                  {plan.highlighted && (
                    <div className="tf-featured-badge">
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="tf-pricing-header">
                    {!plan.highlighted && (
                      <span className="tf-plan-badge-inline" style={{ color: plan.color }}>
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="tf-plan-name">
                      {plan.tier} <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)' }}>PT</span>
                    </h3>
                    <p className="tf-plan-ideal" style={{ fontWeight: 600, color: '#ffffff' }}>
                      {plan.focus}
                    </p>
                    <p className="tf-plan-ideal">{plan.description}</p>
                  </div>

                  <div className="tf-pricing-value-box">
                    <div className="tf-plan-price-row">
                      <span className="tf-plan-price-num">{plan.price}</span>
                      <span className="tf-plan-gst-tag">Per Month</span>
                    </div>
                    <div className="tf-price-subtext">{plan.period}</div>
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
                      className="tf-btn tf-btn-secondary"
                      style={{ width: '100%' }}
                      onClick={() => onOpenTrial(`Personal Training: ${plan.tier} (${plan.price}/mo)`)}
                    >
                      <Award size={15} />
                      <span>Book {plan.tier} Assessment</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="tf-pricing-note">
          <div className="tf-visit-guarantee-box">
            <div className="tf-visit-guarantee-header">
              <ShieldCheck size={18} className="accent" />
              <strong>Have Questions Before Enrolling?</strong>
            </div>
            <p>
              Located at First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla. Chat directly with our reception desk on WhatsApp for instant guidance on any membership or training plan.
            </p>
            <div className="tf-visit-perk-pills">
              <span>Daily 6:00 AM – 12:00 AM Midnight</span>
              <span>Ladies Only Batch: 2:00 PM – 4:00 PM</span>
              <span>Sunday Session: 6:00 PM – 10:00 PM</span>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#34d399', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <WhatsAppIcon size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
