import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import './ContactSection.css';

export default function ContactSection({ selectedTopic, onOpenTrial }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: selectedTopic || 'Free Trial Pass',
    timeSlot: 'Morning (06:00 - 10:00)',
    message: ''
  });

  const [prevTopic, setPrevTopic] = useState(selectedTopic);
  if (selectedTopic !== prevTopic) {
    setPrevTopic(selectedTopic);
    setFormData((prev) => ({ ...prev, topic: selectedTopic }));
  }

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
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
    setSubmissionPayload({ ...formData, timestamp: new Date().toLocaleTimeString() });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'Free Trial Pass',
      timeSlot: 'Morning (06:00 - 10:00)',
      message: ''
    });
    setSubmitted(false);
    setSubmissionPayload(null);
  };

  return (
    <section id="contact" className="tf-section tf-contact-section">
      <div className="tf-container">
        {/* Strong Final Membership CTA Banner */}
        <div className="tf-final-cta-banner">
          <div className="tf-cta-banner-content">
            <div className="tf-cta-banner-text">
              <h2>Step onto the Platform. Claim Your Trial.</h2>
              <p>
                Experience the hardware, test the atmosphere, and consult with a coach before deciding on membership. Zero obligation.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="tf-btn tf-btn-primary"
                onClick={onOpenTrial}
              >
                <span>Book Free Trial Now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="tf-section-header">
          <span className="tf-eyebrow">
            <MapPin size={14} />
            Location & Inquiries
          </span>
          <h2 className="tf-section-title">
            Visit the Club or Get in Touch
          </h2>
          <p className="tf-section-subtitle">
            Submit your trial request, enquire about corporate packages, or arrange an on-site facility walkthrough.
          </p>
        </div>

        {/* Contact Grid: Details + Form */}
        <div className="tf-contact-grid">
          {/* Left Column: Editable Placeholders for Details */}
          <div className="tf-contact-info-col">
            {/* Address */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <MapPin size={20} />
                </div>
                <h3>Facility Address</h3>
              </div>
              <div className="tf-contact-details">
                <p><strong>{GYM_INFO.contact.addressPlaceholder}</strong></p>
                <p>{GYM_INFO.contact.cityPlaceholder}</p>
                <span className="tf-contact-note-badge">
                  * Ample dedicated member parking & bike racks on premises
                </span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Clock size={20} />
                </div>
                <h3>Training Hours</h3>
              </div>
              <ul className="tf-hours-list">
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.hoursWeekday}</span>
                </li>
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.hoursSaturday}</span>
                </li>
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.hoursSunday}</span>
                </li>
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.holidays}</span>
                </li>
              </ul>
            </div>

            {/* Direct Channels */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Phone size={20} />
                </div>
                <h3>Front Desk & Enquiries</h3>
              </div>
              <div className="tf-contact-details">
                <p>Telephone: <strong>{GYM_INFO.contact.phonePlaceholder}</strong></p>
                <p>WhatsApp Desk: <strong>{GYM_INFO.contact.whatsappPlaceholder}</strong></p>
                <p>Email: <strong>{GYM_INFO.contact.emailPlaceholder}</strong></p>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="tf-form-card">
            {!submitted ? (
              <>
                <div className="tf-form-header">
                  <h3>Membership & Trial Enquiry</h3>
                  <p>
                    Complete the form below and our team will get in touch to confirm your trial slot or membership consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="tf-form-group">
                    <label htmlFor="name" className="tf-form-label">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`tf-form-input ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-required="true"
                    />
                    {errors.name && (
                      <span className="tf-form-error-msg">{errors.name}</span>
                    )}
                  </div>

                  <div className="tf-form-row-2">
                    <div className="tf-form-group">
                      <label htmlFor="email" className="tf-form-label">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`tf-form-input ${errors.email ? 'error' : ''}`}
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-required="true"
                      />
                      {errors.email && (
                        <span className="tf-form-error-msg">{errors.email}</span>
                      )}
                    </div>

                    <div className="tf-form-group">
                      <label htmlFor="phone" className="tf-form-label">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`tf-form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-required="true"
                      />
                      {errors.phone && (
                        <span className="tf-form-error-msg">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="tf-form-row-2">
                    <div className="tf-form-group">
                      <label htmlFor="topic" className="tf-form-label">
                        Area of Interest
                      </label>
                      <select
                        id="topic"
                        className="tf-form-select"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      >
                        <option value="Free Trial Pass">Free Trial Pass (First Session)</option>
                        <option value="Titan Basic Membership">Titan Basic Membership</option>
                        <option value="Titan All-Access Membership">Titan All-Access Membership</option>
                        <option value="Titan Performance 1-on-1">1-on-1 Personal Coaching</option>
                        <option value="Strength & Powerlifting Program">Strength & Powerlifting Program</option>
                        <option value="Functional Athletic Fitness">Functional Athletic Fitness</option>
                        <option value="Titan Squad Group Classes">Titan Squad Group Classes</option>
                        <option value="General Facility Inquiry">General Facility Inquiry</option>
                      </select>
                    </div>

                    <div className="tf-form-group">
                      <label htmlFor="timeSlot" className="tf-form-label">
                        Preferred Training Slot
                      </label>
                      <select
                        id="timeSlot"
                        className="tf-form-select"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      >
                        <option value="Early Morning (05:30 - 08:30)">Early Morning (05:30 - 08:30)</option>
                        <option value="Morning (08:30 - 12:00)">Morning (08:30 - 12:00)</option>
                        <option value="Lunch Express (12:00 - 14:00)">Lunch Express (12:00 - 14:00)</option>
                        <option value="Late Afternoon (14:00 - 17:30)">Late Afternoon (14:00 - 17:30)</option>
                        <option value="Peak Evening (17:30 - 21:00)">Peak Evening (17:30 - 21:00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="tf-form-group">
                    <label htmlFor="message" className="tf-form-label">
                      Training Background or Questions (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="tf-form-textarea"
                      placeholder="Share your current fitness background or any previous injuries we should keep in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="tf-btn tf-btn-primary"
                    style={{ width: '100%' }}
                  >
                    <Send size={16} />
                    <span>Submit Enquiry & Book Trial</span>
                  </button>

                  <div style={{ marginTop: '0.85rem', textAlign: 'center' }}>
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      Client-ready demo form with live client-side validation.
                    </small>
                  </div>
                </form>
              </>
            ) : (
              <div className="tf-form-success">
                <div className="tf-success-icon-wrap">
                  <CheckCircle2 size={32} />
                </div>
                <h4>Enquiry Successfully Validated</h4>
                <p>
                  Thank you, <strong>{submissionPayload.name}</strong>! Your request has been validated. In production, this data feeds directly into the gym's management CRM or dispatch email.
                </p>

                <div className="tf-success-summary">
                  <div><strong>Selected Program/Plan:</strong> {submissionPayload.topic}</div>
                  <div><strong>Preferred Slot:</strong> {submissionPayload.timeSlot}</div>
                  <div><strong>Contact Email:</strong> {submissionPayload.email}</div>
                  <div><strong>Contact Phone:</strong> {submissionPayload.phone}</div>
                </div>

                <button
                  type="button"
                  className="tf-btn tf-btn-secondary"
                  onClick={handleReset}
                >
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
