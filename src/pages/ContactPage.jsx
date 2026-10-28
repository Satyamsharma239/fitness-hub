import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink
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
    topic: topicParam || 'General Club Walkthrough & Trial',
    timeSlot: 'Morning (06:00 - 10:00)',
    message: ''
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 8) {
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
      topic: 'General Club Walkthrough & Trial',
      timeSlot: 'Morning (06:00 - 10:00)',
      message: ''
    });
    setSubmitted(false);
    setSubmissionPayload(null);
  };

  return (
    <div className="tf-contact-page-wrap">
      <PageHero
        eyebrow="Contact Desk & Location"
        title="REACH THE FITNESS HUB IN KURLA"
        subtitle="First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla. Book your complimentary club walkthrough, consult on personal training, or drop in anytime."
        breadcrumb={[{ label: 'Contact', link: null }]}
      />

      <div className="tf-container" style={{ marginTop: '3.5rem' }}>
        <div className="tf-contact-grid">
          
          <div className="tf-contact-info-col">
            
            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <MapPin size={20} />
                </div>
                <h3>Gym Address (Kurla)</h3>
              </div>
              <div className="tf-contact-details">
                <p><strong>{GYM_INFO.contact.building}</strong></p>
                <p>{GYM_INFO.contact.landmark}</p>
                <p>{GYM_INFO.contact.city} – {GYM_INFO.contact.pincode}</p>
                <span className="tf-contact-note-badge">
                  📍 Just 3–4 minutes walk from Kurla Railway Station (East) & Nehru Nagar Bus Depot.
                </span>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href={GYM_INFO.contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-primary tf-btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Open in Google Maps</span>
                  </a>

                  <button
                    type="button"
                    className="tf-btn tf-btn-secondary tf-btn-sm"
                    onClick={() => copyToClipboard(GYM_INFO.contact.fullAddress, 'address')}
                  >
                    {copiedAddress ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Clock size={20} />
                </div>
                <h3>Official Operating Timings</h3>
              </div>
              <ul className="tf-hours-list">
                <li className="tf-hours-item">
                  <span>Daily General Access:</span>
                  <strong style={{ color: '#ffffff' }}>6:00 AM – 12:00 AM (Midnight)</strong>
                </li>
                <li className="tf-hours-item">
                  <span>Ladies Only Batch:</span>
                  <strong style={{ color: 'var(--accent)' }}>2:00 PM – 4:00 PM</strong>
                </li>
                <li className="tf-hours-item">
                  <span>Sunday Evening Session:</span>
                  <strong style={{ color: '#ffffff' }}>6:00 PM – 10:00 PM</strong>
                </li>
              </ul>
              <span className="tf-contact-note-badge" style={{ color: '#34d399', marginTop: '0.65rem' }}>
                ⚡ 18 hours open daily for early bird lifters, shift workers & late-night athletes.
              </span>
            </div>

            <div className="tf-contact-block">
              <div className="tf-contact-block-header">
                <div className="tf-contact-block-icon">
                  <Phone size={20} />
                </div>
                <h3>Reception & WhatsApp Desk</h3>
              </div>
              <div className="tf-contact-details">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Calling: <strong style={{ color: '#ffffff' }}>{GYM_INFO.contact.phone}</strong></span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(GYM_INFO.contact.phoneRaw, 'phone')}
                    style={{ color: 'var(--accent)', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                    {copiedPhone ? 'Copied' : 'Copy'}
                  </button>
                </p>
                <p>
                  WhatsApp: <strong style={{ color: '#ffffff' }}>{GYM_INFO.contact.phone}</strong>
                </p>
                <p>
                  Instagram: <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" style={{ color: '#ff5b62', fontWeight: 700 }}>{GYM_INFO.socials.instagramHandle}</a>
                </p>
                <p>
                  Email: <span style={{ color: '#ffffff' }}>{GYM_INFO.contact.email}</span>
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={GYM_INFO.contact.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-primary tf-btn-sm"
                  >
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <a
                    href={`tel:${GYM_INFO.contact.phoneRaw}`}
                    className="tf-btn tf-btn-secondary tf-btn-sm"
                  >
                    <Phone size={14} />
                    <span>Call 81088 84757</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tf-form-card">
            {!submitted ? (
              <>
                <div className="tf-form-header">
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    <ShieldCheck size={16} />
                    <span>Free Trial & Membership Desk</span>
                  </div>
                  <h3>Book Free Visit or Inquire</h3>
                  <p>
                    Submit your contact details and our team will confirm your preferred timing slot via WhatsApp.
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
                      placeholder="e.g. Rahul Sharma"
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
                        placeholder="rahul@example.com"
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
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`tf-form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 98765 43210"
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
                        Plan or Inquiry Interest
                      </label>
                      <select
                        id="topic"
                        className="tf-form-select"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      >
                        <option value="General Club Walkthrough & Trial">General Club Walkthrough & Trial</option>
                        <option value="Standard 1 Month (₹3,500)">Standard 1 Month (₹3,500)</option>
                        <option value="Standard 3 Months (₹6,000)">Standard 3 Months (₹6,000)</option>
                        <option value="Standard 6 Months (₹8,000)">Standard 6 Months (₹8,000)</option>
                        <option value="Standard Annual (₹12,000)">Standard Annual (₹12,000 - ₹1,000/mo)</option>
                        <option value="Annual Couples Package (₹10,000/person)">Annual Couples Package (₹10,000/person)</option>
                        <option value="Personal Training: Gold (₹6,000/mo)">Personal Training: Gold (₹6,000/mo)</option>
                        <option value="Personal Training: Diamond (₹8,000/mo)">Personal Training: Diamond (₹8,000/mo)</option>
                        <option value="Personal Training: Platinum (₹11,000/mo)">Personal Training: Platinum (₹11,000/mo)</option>
                        <option value="Ladies Only Batch (2:00 PM – 4:00 PM)">Ladies Only Batch (2:00 PM – 4:00 PM)</option>
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
                        <option value="Early Morning (06:00 - 09:00)">Early Morning (06:00 - 09:00)</option>
                        <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                        <option value="Ladies Only Batch (14:00 - 16:00)">Ladies Only Batch (14:00 - 16:00)</option>
                        <option value="Evening (16:00 - 20:00)">Evening (16:00 - 20:00)</option>
                        <option value="Late Night (20:00 - 00:00 Midnight)">Late Night (20:00 - 00:00 Midnight)</option>
                      </select>
                    </div>
                  </div>

                  <div className="tf-form-group">
                    <label htmlFor="message" className="tf-form-label">
                      Fitness Goals or Past Injuries (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="tf-form-textarea"
                      placeholder="Tell us about your fitness target or any specific questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="tf-btn tf-btn-primary"
                    style={{ width: '100%' }}
                  >
                    <Send size={16} />
                    <span>Submit & Book Visit</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="tf-form-success">
                <div className="tf-success-icon-wrap">
                  <CheckCircle2 size={32} />
                </div>
                <h4>Visit Request Confirmed!</h4>
                <p>
                  Thank you, <strong>{submissionPayload.name}</strong>! Your inquiry for <strong>{submissionPayload.topic}</strong> has been logged. Our reception team will reach out via WhatsApp at <strong>{submissionPayload.phone}</strong>.
                </p>

                <div className="tf-success-summary">
                  <div><strong>Preferred Slot:</strong> {submissionPayload.timeSlot}</div>
                  <div><strong>Location:</strong> First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla</div>
                  <div><strong>Timings:</strong> Daily 6:00 AM – 12:00 AM Midnight</div>
                </div>

                <button
                  type="button"
                  className="tf-btn tf-btn-secondary"
                  onClick={handleReset}
                  style={{ width: '100%' }}
                >
                  <span>Submit Another Request</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '3.5rem' }}>
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="tf-eyebrow" style={{ marginBottom: '6px' }}>Verified Location</span>
                <h3 style={{ fontSize: '20px', color: '#ffffff' }}>The Fitness Hub Kurla on Google Maps</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla, Mumbai – 400024</p>
              </div>
              <a
                href={GYM_INFO.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-primary tf-btn-sm"
              >
                <ExternalLink size={14} />
                <span>Open in Google Maps App</span>
              </a>
            </div>

            <div style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid var(--border-dark)'
            }}>
              <iframe
                title="The Fitness Hub Kurla Location Map"
                src="https://maps.google.com/maps?q=Serene+Shelter+Mass+Building+B+Wing+Nehru+Nagar+Kurla+Mumbai+400024&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
