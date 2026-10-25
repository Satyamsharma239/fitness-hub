import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, ChevronDown, HelpCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { MEMBERSHIP_PLANS, FAQS } from '../data/gymData';
import '../components/MembershipSection.css';
import '../components/FAQSection.css';

export default function MembershipsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="tf-memberships-page">
      <PageHero
        eyebrow="Memberships & Access"
        title="Clear, Flexible Membership Tiers"
        subtitle="No hidden activation fees. No predatory long-term lock-ins. Select the tier that matches your weekly training volume."
        breadcrumb={[{ label: 'Memberships', link: null }]}
      />

      <section className="tf-section tf-membership-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow">
              <Zap size={14} />
              Choose Your Access Level
            </span>
            <h2 className="tf-section-title">
              Designed For Progress & Freedom
            </h2>
            <p className="tf-section-subtitle">
              All plans include complimentary locker access, fresh towel service, and our initial 45-minute movement and equipment orientation.
            </p>
          </div>

          {/* Pricing Grid */}
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

          <div className="tf-pricing-note tf-reveal">
            <p>
              * All rates are customized per facility location. Contact our desk for current seasonal promotions, corporate partner discounts, and student passes.
            </p>
          </div>
        </div>
      </section>

      {/* Membership FAQ Accordion */}
      <section className="tf-section tf-faq-section" style={{ borderTop: 'none' }}>
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow">
              <HelpCircle size={14} />
              Membership FAQs
            </span>
            <h2 className="tf-section-title">
              Common Questions Before Joining
            </h2>
            <p className="tf-section-subtitle">
              Straightforward answers about our trial process, pauses, and cancellation terms.
            </p>
          </div>

          <div className="tf-reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="tf-accordion">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`tf-accordion-item ${isOpen ? 'open' : ''}`}
                  >
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
    </div>
  );
}
