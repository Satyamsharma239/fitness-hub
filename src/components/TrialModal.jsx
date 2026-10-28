import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import './TrialModal.css';

export default function TrialModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('General Facility Walkthrough & Trial');
  const [sessionType, setSessionType] = useState('Facility Walkthrough & Movement Screen');
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
    if (!phone.trim() || phone.trim().length < 8) {
      errs.phone = 'Please provide your WhatsApp or phone number';
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
              <span>The Fitness Hub • Kurla</span>
            </div>

            <h3 className="tf-modal-title">Schedule Club Visit & Trial</h3>
            <p className="tf-modal-desc">
              Tour our air-conditioned facility in Nehru Nagar, Kurla. Check out our Olympic weights, meet our certified coaches, and discuss the membership or personal training plan that fits your goals.
            </p>

            <div className="tf-modal-perks">
              <span className="tf-modal-perk-tag">&bull; 100% Free Facility Tour</span>
              <span className="tf-modal-perk-tag">&bull; 1-on-1 Movement Screen</span>
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
                  <option value="General Facility Walkthrough & Trial">General Facility Walkthrough & Trial</option>
                  <option value="Standard 1 Month (₹3,500)">Standard 1 Month (₹3,500)</option>
                  <option value="Standard 3 Months (₹6,000)">Standard 3 Months (₹6,000)</option>
                  <option value="Standard 6 Months (₹8,000)">Standard 6 Months (₹8,000)</option>
                  <option value="Standard Annual (₹12,000)">Standard Annual (₹12,000)</option>
                  <option value="Annual Couples Package (₹10,000/person)">Annual Couples Package (₹10,000/person)</option>
                  <option value="Personal Training: Gold (₹6,000/mo)">Personal Training: Gold (₹6,000/mo)</option>
                  <option value="Personal Training: Diamond (₹8,000/mo)">Personal Training: Diamond (₹8,000/mo)</option>
                  <option value="Personal Training: Platinum (₹11,000/mo)">Personal Training: Platinum (₹11,000/mo)</option>
                  <option value="Ladies Only Batch (2:00 PM – 4:00 PM)">Ladies Only Batch (2:00 PM – 4:00 PM)</option>
                </select>
              </div>

              <div className="tf-form-group">
                <label className="tf-form-label">Visit Type</label>
                <select
                  className="tf-form-select"
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                >
                  <option value="Facility Walkthrough & Movement Screen">Facility Walkthrough & Movement Screen</option>
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
                <span>Confirm Visit Request</span>
              </button>
            </form>
          </>
        ) : (
          <div className="tf-form-success" style={{ margin: 0 }}>
            <div className="tf-success-icon-wrap">
              <CheckCircle2 size={32} />
            </div>
            <h4>Visit Request Received!</h4>
            <p>
              Thank you, <strong>{name}</strong>! Your request for <strong>{sessionType}</strong> at our Nehru Nagar, Kurla facility has been logged. Our reception desk will message you on WhatsApp (<strong>{phone}</strong>) to confirm your visit.
            </p>
            <div className="tf-success-summary">
              <div><strong>Location:</strong> First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla</div>
              <div><strong>Timings:</strong> Daily 6:00 AM – 12:00 AM &bull; Ladies 2:00 PM – 4:00 PM</div>
              <div><strong>Selected Interest:</strong> {goal}</div>
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
