import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import './TrialModal.css';

export default function TrialModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Strength & Power');
  const [sessionType, setSessionType] = useState('Open Gym & Movement Assessment');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
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
    if (!phone.trim() || phone.trim().length < 7) {
      errs.phone = 'Please provide a contact number';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="tf-modal-backdrop" onClick={handleModalClose} role="dialog" aria-modal="true">
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
              <span>Complimentary Guest Pass</span>
            </div>

            <h3 className="tf-modal-title">Book Your Free Trial</h3>
            <p className="tf-modal-desc">
              Experience the equipment, meet our coaches, and receive a free movement screen with zero sales pressure.
            </p>

            <div className="tf-modal-perks">
              <span className="tf-modal-perk-tag">&bull; Full Gym Access</span>
              <span className="tf-modal-perk-tag">&bull; 1-on-1 Movement Screen</span>
              <span className="tf-modal-perk-tag">&bull; Zero Commitment</span>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="tf-form-group">
                <label className="tf-form-label">Full Name *</label>
                <input
                  type="text"
                  className={`tf-form-input ${errors.name ? 'error' : ''}`}
                  placeholder="e.g. Jordan Miller"
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
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <span className="tf-form-error-msg">{errors.email}</span>}
                </div>

                <div className="tf-form-group">
                  <label className="tf-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className={`tf-form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <span className="tf-form-error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="tf-form-group">
                <label className="tf-form-label">Primary Training Goal</label>
                <select
                  className="tf-form-select"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="Strength & Power">Strength & Powerlifting</option>
                  <option value="Functional Conditioning">Functional Conditioning & Stamina</option>
                  <option value="Fat Loss & Muscle Building">Fat Loss & Muscle Building</option>
                  <option value="Injury Rehab & Mobility">Injury Rehab & Mobility</option>
                  <option value="General Health">General Athletic Health</option>
                </select>
              </div>

              <div className="tf-form-group">
                <label className="tf-form-label">Preferred Session Type</label>
                <select
                  className="tf-form-select"
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                >
                  <option value="Open Gym & Movement Assessment">Open Gym + Coach Movement Screen</option>
                  <option value="Titan Squad Group Class Trial">Titan Squad Group Class Trial</option>
                  <option value="1-on-1 Coach Consultation">1-on-1 Coach Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="tf-btn tf-btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Send size={16} />
                <span>Confirm Trial Booking</span>
              </button>
            </form>
          </>
        ) : (
          <div className="tf-form-success" style={{ margin: 0 }}>
            <div className="tf-success-icon-wrap">
              <CheckCircle2 size={32} />
            </div>
            <h4>Trial Pass Reserved!</h4>
            <p>
              Your guest trial request for <strong>{name}</strong> ({sessionType}) has been confirmed in the demo system.
            </p>
            <div className="tf-success-summary">
              <div><strong>Email:</strong> {email}</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div><strong>Focus Goal:</strong> {goal}</div>
            </div>
            <button
              type="button"
              className="tf-btn tf-btn-primary"
              style={{ width: '100%' }}
              onClick={handleModalClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
