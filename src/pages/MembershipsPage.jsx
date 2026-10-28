import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import MembershipSection from '../components/MembershipSection';
import { FAQS } from '../data/gymData';
import '../components/FAQSection.css';

export default function MembershipsPage({ onOpenTrial }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="tf-memberships-page">
      <PageHero
        eyebrow="Official Pricing & Plans"
        title="TRANSPARENT MEMBERSHIP & PERSONAL TRAINING RATES"
        subtitle="GST included on all plans. Zero hidden admission fees. Daily access from 6:00 AM to 12:00 AM Midnight, Ladies Only batch (2 PM – 4 PM), and monthly personal training on alternate days."
        breadcrumb={[{ label: 'Plans & Pricing', link: null }]}
      />

      {/* Main Interactive Membership & PT Section */}
      <MembershipSection onOpenTrial={onOpenTrial} />

      {/* Membership FAQ Accordion */}
      <section className="tf-section tf-faq-section" style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div className="tf-container">
          <div className="tf-section-header center">
            <span className="tf-eyebrow">
              <HelpCircle size={14} />
              Membership FAQs
            </span>
            <h2 className="tf-section-title">
              Common Questions Before <span className="accent">Enrolling</span>
            </h2>
            <p className="tf-section-subtitle">
              Straightforward answers about timings, Ladies Only batch, personal training, and payment details.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
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
                        <ChevronDown size={19} />
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
