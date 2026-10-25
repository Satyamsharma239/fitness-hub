import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { GYM_INFO } from '../data/gymData';
import '../components/ContactSection.css';
import './ContactPage.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: topicParam || 'Free Trial Pass',
    timeSlot: 'Morning (06:00 - 10:00)',
    message: ''
  });

  const [prevTopic, setPrevTopic] = useState(topicParam);
  if (topicParam !== prevTopic) {
    setPrevTopic(topicParam);
    if (topicParam) {
      setFormData((prev) => ({ ...prev, topic: topicParam }));
    }
  }

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
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
    <div className="tf-contact-page-wrap">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Desk & Location"
        subtitle="Book your complimentary trial, enquire about membership arrangements, or arrange a private facility walkthrough with a senior coach."
        breadcrumb={[{ label: 'Contact', link: null }]}
      />

      <div className="tf-container" style={{ marginTop: '4rem' }}>
        <div className="tf-contact-grid">
          {/* Left Column: Direct Contact & Facility Details */}
          <div className="tf-contact-info-col">
            {/* Address */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <MapPin size={20} />
                </div>
                <h3>Gym Address (Kurla East)</h3>
              </div>
              <div className="tf-contact-details">
                <p><strong>{GYM_INFO.contact.building}</strong></p>
                <p>{GYM_INFO.contact.landmark}</p>
                <p>{GYM_INFO.contact.city} – {GYM_INFO.contact.pincode}</p>
                <span className="tf-contact-note-badge">
                  📍 Just 3–5 minutes walk from Kurla Railway Station (East) & SG Barve Marg.
                </span>
                <div style={{ marginTop: '0.85rem' }}>
                  <a
                    href="https://maps.google.com/?q=Serene+Shelter+Mass+Building+Nehru+Nagar+Kurla+East+Mumbai+400024"
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-secondary tf-btn-sm"
                    style={{ display: 'inline-flex', width: 'auto' }}
                  >
                    <MapPin size={14} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Training Hours */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Clock size={20} />
                </div>
                <h3>Gym Timings (7 Days Open)</h3>
              </div>
              <ul className="tf-hours-list">
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.hoursWeekday}</span>
                </li>
                <li className="tf-hours-item">
                  <span>{GYM_INFO.contact.hoursSunday}</span>
                </li>
              </ul>
              <span className="tf-contact-note-badge" style={{ color: '#FFFFFF', marginTop: '0.65rem' }}>
                ⚡ Extended 17.5 hours open daily for early morning & late night workouts.
              </span>
            </div>

            {/* Direct Channels */}
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Phone size={20} />
                </div>
                <h3>Phone & WhatsApp Desk</h3>
              </div>
              <div className="tf-contact-details">
                <p>
                  Calling: <a href={`tel:${GYM_INFO.contact.phone}`} style={{ color: 'var(--text-white)', fontWeight: 700 }}>{GYM_INFO.contact.phone}</a>
                </p>
                <p>
                  Instagram: <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--text-white)', fontWeight: 700 }}>{GYM_INFO.socials.instagramHandle}</a>
                </p>
                <p>
                  Email: <span style={{ color: 'var(--text-white)' }}>{GYM_INFO.contact.email}</span>
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={GYM_INFO.contact.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-primary tf-btn-sm"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${GYM_INFO.contact.phone}`}
                    className="tf-btn tf-btn-secondary tf-btn-sm"
                  >
                    <Phone size={14} />
                    <span>Call Gym Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Visual Indicator */}
            <div className="tf-map-placeholder">
              <div className="tf-map-inner">
                <div className="tf-map-pin-icon">
                  <MapPin size={22} />
                </div>
                <h4>The Fitness Hub (Kurla East)</h4>
                <p>{GYM_INFO.contact.fullAddress}</p>
                <a
                  href="https://maps.google.com/?q=Serene+Shelter+Mass+Building+Nehru+Nagar+Kurla+East+Mumbai+400024"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FFFFFF', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'underline', marginTop: '0.25rem' }}
                >
                  View Directions on Map &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full Page Validated Form (NO POPUP!) */}
          <div className="tf-form-card">
            {!submitted ? (
              <>
                <div className="tf-form-header">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    <ShieldCheck size={16} />
                    <span>Free Trial & Membership Desk</span>
                  </div>
                  <h3>Send an Inquiry or Book Trial</h3>
                  <p>
                    Please fill out your details below. Our coaching team will reach out to schedule your preferred orientation or answer questions.
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
                      placeholder="e.g. Jordan Smith"
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
                        placeholder="jordan@example.com"
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
                        <option value="Free Trial Pass">Free Trial Pass (First Session Free)</option>
                        <option value="Titan Basic Membership">Titan Basic Membership</option>
                        <option value="Titan All-Access Membership">Titan All-Access Membership</option>
                        <option value="Titan Performance 1-on-1">1-on-1 Personal Coaching</option>
                        <option value="Strength & Powerlifting Program">Strength & Powerlifting</option>
                        <option value="Functional Athletic Fitness">Functional Athletic Fitness</option>
                        <option value="Titan Squad Group Classes">Titan Squad Group Classes</option>
                        <option value="Coach Consultation">Consultation with a Coach</option>
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
                      Training History or Specific Inquiries (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="tf-form-textarea"
                      placeholder="Tell us about your fitness goals or any movement limitations we should know about..."
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
                <h4>Enquiry Successfully Submitted</h4>
                <p>
                  Thank you, <strong>{submissionPayload.name}</strong>! Your request has been recorded. In production, this form routes directly to the gym's management CRM or front desk inbox.
                </p>

                <div className="tf-success-summary">
                  <div><strong>Selected Topic:</strong> {submissionPayload.topic}</div>
                  <div><strong>Preferred Slot:</strong> {submissionPayload.timeSlot}</div>
                  <div><strong>Email:</strong> {submissionPayload.email}</div>
                  <div><strong>Phone:</strong> {submissionPayload.phone}</div>
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
    </div>
  );
}
