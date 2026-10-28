import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, GYM_INFO } from '../data/gymData';
import './FAQSection.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="tf-section tf-faq-section" id="faqs">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <HelpCircle size={14} />
            Got Questions?
          </span>
          <h2 className="tf-section-title">
            Frequently Asked <span className="accent">Questions</span>
          </h2>
          <p className="tf-section-subtitle">
            Everything you need to know about membership access, trial workouts, locker facilities, and training hours at our Kurla facility.
          </p>
        </div>

        <div className="tf-faq-wrapper">
          <div className="tf-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`tf-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="tf-accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggle(idx)}
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

          <div className="tf-faq-help-box">
            <MessageSquare size={22} className="accent" />
            <div>
              <h4>Have another question not answered here?</h4>
              <p>Chat directly with our front desk on WhatsApp for instant confirmation.</p>
            </div>
            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="tf-btn tf-btn-secondary tf-btn-sm"
            >
              <span>Message Reception</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
