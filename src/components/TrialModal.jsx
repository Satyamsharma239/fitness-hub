import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './TrialModal.css';

const DEFAULT_GOALS = [
  'General Facility Walkthrough & Trial',
  'Standard 1 Month (₹3,500)',
  'Standard 3 Months (₹6,000)',
  'Standard 6 Months (₹8,000)',
  'Standard Annual (₹12,000)',
  'Annual Couples Package (₹10,000/person)',
  'Personal Training: Gold (₹6,000/mo)',
  'Personal Training: Diamond (₹8,000/mo)',
  'Personal Training: Platinum (₹11,000/mo)',
  'Ladies Only Batch (2:00 PM – 4:00 PM)'
];

export default function TrialModal({ isOpen, onClose, initialGoal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(initialGoal || DEFAULT_GOALS[0]);
  const [sessionType, setSessionType] = useState('Facility Walkthrough & Trial');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [prevInitialGoal, setPrevInitialGoal] = useState(initialGoal);

  if (initialGoal !== prevInitialGoal) {
    setPrevInitialGoal(initialGoal);
    setGoal(initialGoal);
  }

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleModalClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!phone.trim() || phone.trim().length < 8) {
      errs.phone = 'Please provide your WhatsApp or phone number';
    }
    return errs;
  };

  const buildWhatsAppUrl = () => {
    const msg = [
      'Hi The Fitness Hub (Kurla), I would like to schedule a facility visit / trial.',
      '',
      `• Name: ${name.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Email: ${email.trim()}`,
      `• Interested Plan: ${goal}`,
      `• Visit Type: ${sessionType}`,
      '',
      'Please confirm my preferred timing slot.'
    ].join('\n');
    return `https://wa.me/918108884757?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const waUrl = buildWhatsAppUrl();
    try {
      window.open(waUrl, '_blank');
    } catch {
      void 0;
    }
    setSubmitted(true);
  };

  const goalOptions = DEFAULT_GOALS.includes(goal)
    ? DEFAULT_GOALS
    : [goal, ...DEFAULT_GOALS];

  return (
    <div
      className="tf-modal-backdrop"
      onClick={handleModalClose}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="tf-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="tf-modal-close-btn"
          onClick={handleModalClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="tf-modal-badge">
              <ShieldCheck size={14} />
              <span>The Fitness Hub • Nehru Nagar, Kurla</span>
            </div>

            <h3 className="tf-modal-title">Schedule Club Visit & Trial</h3>
            <p className="tf-modal-desc">
              Tour our air-conditioned facility in Nehru Nagar, Kurla. Check out our Olympic weights, meet our certified coaches, and discuss the membership or personal training plan that fits your goals.
            </p>

            <div className="tf-modal-perks">
              <span className="tf-modal-perk-tag">&bull; 100% Free Facility Tour</span>
              <span className="tf-modal-perk-tag">&bull; 1-on-1 Fitness Guidance</span>
              <span className="tf-modal-perk-tag">&bull; Zero Sales Pressure</span>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="tf-form-group">
                <label className="tf-form-label">Full Name *</label>
                <input
                  type="text"
                  className={`tf-form-input ${errors.name ? 'error' : ''}`}
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="tf-form-error-msg">{errors.name}</span>}
              </div>

              <div className="tf-form-row-2">
                <div className="tf-form-group">
                  <label className="tf-form-label">Email Address *</label>
                  <input
                    type="email"
                    className={`tf-form-input ${errors.email ? 'error' : ''}`}
                    placeholder="rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <span className="tf-form-error-msg">{errors.email}</span>}
                </div>

                <div className="tf-form-group">
                  <label className="tf-form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    className={`tf-form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <span className="tf-form-error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="tf-form-group">
                <label className="tf-form-label">Plan or Service Interest</label>
                <select
                  className="tf-form-select"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  {goalOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="tf-form-group">
                <label className="tf-form-label">Visit Type</label>
                <select
                  className="tf-form-select"
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                >
                  <option value="Facility Walkthrough & Trial">Facility Walkthrough & Trial</option>
                  <option value="Complimentary 1-Day Workout Pass">Complimentary 1-Day Workout Pass</option>
                  <option value="Personal Trainer Consultation">Personal Trainer Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="tf-btn tf-btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Send size={16} />
                <span>Confirm Visit on WhatsApp</span>
              </button>
            </form>
          </>
        ) : (
          <div className="tf-form-success" style={{ margin: 0 }}>
            <div className="tf-success-icon-wrap">
              <CheckCircle2 size={32} />
            </div>
            <h4>Visit Request Ready!</h4>
            <p>
              Thank you, <strong>{name}</strong>! Your visit request for <strong>{sessionType}</strong> has been prepared.
            </p>
            <div className="tf-success-summary">
              <div><strong>Location:</strong> First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla</div>
              <div><strong>Timings:</strong> Daily 6:00 AM – 12:00 AM &bull; Ladies 2:00 PM – 4:00 PM</div>
              <div><strong>Selected Interest:</strong> {goal}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-btn tf-btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} />
                <span>Send Details via WhatsApp Desk</span>
              </a>

              <button
                type="button"
                className="tf-btn tf-btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
