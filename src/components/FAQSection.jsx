import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Mail } from 'lucide-react';
import { FAQS } from '../data/gymData';
import './FAQSection.css';

export default function FAQSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0); // open first item by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="tf-section tf-faq-section">
      <div className="tf-container">
        <div className="tf-faq-layout">
          {/* Left Column: Title and Support Box */}
          <div className="tf-faq-sidebar">
            <span className="tf-eyebrow">
              <HelpCircle size={14} />
              Common Inquiries
            </span>
            <h2 className="tf-section-title">
              Frequently Asked Questions
            </h2>
            <p className="tf-section-subtitle">
              Everything you need to know about trial sessions, beginner progression, membership terms, and club amenities.
            </p>

            <div className="tf-faq-support-card">
              <h4>Still have questions?</h4>
              <p>Our front desk and coaching team are happy to discuss specific goals or walk you through the club in person.</p>
              <button
                type="button"
                className="tf-btn tf-btn-secondary tf-btn-sm"
                onClick={onOpenContact}
                style={{ width: '100%' }}
              >
                <Mail size={14} />
                <span>Contact Gym Desk</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="tf-accordion" role="region" aria-label="Frequently Asked Questions Accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`tf-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="tf-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleIndex(index)}
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
  );
}
