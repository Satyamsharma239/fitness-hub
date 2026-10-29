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
  ExternalLink,
  Navigation
} from 'lucide-react';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/WhatsAppIcon';
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

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
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

  const buildWhatsAppUrl = (data) => {
    const msg = [
      'Hi The Fitness Hub (Kurla), I am inquiring from your website.',
      '',
      `• Name: ${data.name.trim()}`,
      `• Phone: ${data.phone.trim()}`,
      `• Email: ${data.email.trim()}`,
      `• Inquiry / Plan: ${data.topic}`,
      `• Preferred Slot: ${data.timeSlot}`,
      data.message?.trim() ? `• Notes / Goals: ${data.message.trim()}` : null,
      '',
      'Please let me know the available time for a club tour / consultation.'
    ].filter(Boolean).join('\n');
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
    const payload = { ...formData, timestamp: new Date().toLocaleTimeString() };
    setSubmissionPayload(payload);
    try {
      window.open(buildWhatsAppUrl(formData), '_blank');
    } catch {
      void 0;
    }
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
        eyebrow="Location & Reception Desk"
        title="VISIT OR REACH THE FITNESS HUB IN KURLA"
        subtitle="First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla. Just 3–4 minutes walk from Kurla Railway Station (East). Open daily 6:00 AM to 12:00 AM Midnight."
      />

      <div className="tf-container tf-contact-main-container">
        <div className="tf-contact-top-grid">
          <div className="tf-contact-top-card">
            <div className="tf-contact-top-header">
              <div className="tf-contact-card-icon">
                <MapPin size={20} />
              </div>
              <div>
                <span className="tf-contact-card-kicker">Gym Location</span>
                <h3>Club Address</h3>
              </div>
            </div>
            <div className="tf-contact-card-content">
              <p><strong>{GYM_INFO.contact.building}</strong></p>
              <p>{GYM_INFO.contact.landmark}</p>
              <p>{GYM_INFO.contact.city} – {GYM_INFO.contact.pincode}</p>
              <div className="tf-contact-transit-badge">
                📍 3–4 min walk from Kurla Station (E) & Nehru Nagar Depot
              </div>
            </div>
            <div className="tf-contact-card-footer">
              <button
                type="button"
                className="tf-btn tf-btn-secondary tf-btn-sm"
                onClick={() => copyToClipboard(GYM_INFO.contact.fullAddress)}
              >
                {copiedAddress ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
              </button>
              <a
                href={GYM_INFO.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-sm"
              >
                <ExternalLink size={14} />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          <div className="tf-contact-top-card">
            <div className="tf-contact-top-header">
              <div className="tf-contact-card-icon">
                <Clock size={20} />
              </div>
              <div>
                <span className="tf-contact-card-kicker">Operating Hours</span>
                <h3>Training Timings</h3>
              </div>
            </div>
            <div className="tf-contact-card-content">
              <ul className="tf-clean-hours-list">
                <li>
                  <span>Daily General Access:</span>
                  <strong>6:00 AM – 12:00 AM</strong>
                </li>
                <li>
                  <span>Ladies Only Batch:</span>
                  <strong className="accent">2:00 PM – 4:00 PM</strong>
                </li>
                <li>
                  <span>Sunday Evening:</span>
                  <strong>6:00 PM – 10:00 PM</strong>
                </li>
              </ul>
              <div className="tf-contact-transit-badge highlight">
                ⚡ 18 hours daily access for early lifters & night athletes
              </div>
            </div>
          </div>

          <div className="tf-contact-top-card">
            <div className="tf-contact-top-header">
              <div className="tf-contact-card-icon">
                <Phone size={20} />
              </div>
              <div>
                <span className="tf-contact-card-kicker">Direct Desk</span>
                <h3>Phone & WhatsApp</h3>
              </div>
            </div>
            <div className="tf-contact-card-content">
              <p>Calling: <strong>{GYM_INFO.contact.phone}</strong></p>
              <p>WhatsApp: <strong>+91 81088 84757</strong></p>
              <p>Instagram: <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" className="tf-insta-link">{GYM_INFO.socials.instagramHandle}</a></p>
              <p>Email: <span className="tf-contact-email-val">{GYM_INFO.contact.email}</span></p>
            </div>
            <div className="tf-contact-card-footer">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-sm"
              >
                <WhatsAppIcon size={14} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${GYM_INFO.contact.phoneRaw}`}
                className="tf-btn tf-btn-secondary tf-btn-sm"
              >
                <Phone size={14} />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="tf-contact-main-split">
          <div className="tf-contact-map-card">
            <div className="tf-map-card-header">
              <div>
                <span className="tf-eyebrow">Verified Google Location • ★ 4.8 Rating (180+ Reviews)</span>
                <h3>Interactive Facility Map</h3>
                <p>First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla</p>
              </div>
              <a
                href={GYM_INFO.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-secondary tf-btn-sm"
              >
                <ExternalLink size={14} />
                <span>Open in App</span>
              </a>
            </div>

            <div className="tf-contact-map-frame">
              <iframe
                title="The Fitness Hub Kurla Location Map"
                src="https://maps.google.com/maps?q=Serene+Shelter+Mass+Building+B+Wing+Nehru+Nagar+Kurla+Mumbai+400024&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="tf-contact-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="tf-contact-transit-box">
              <div className="tf-transit-point">
                <Navigation size={14} className="accent" />
                <span><strong>Train:</strong> Kurla Railway Station (East) &bull; 3–4 minutes walking distance (Exit East side towards Nehru Nagar).</span>
              </div>
              <div className="tf-transit-point">
                <Navigation size={14} className="accent" />
                <span><strong>Bus:</strong> Nehru Nagar Bus Depot &bull; 250 meters away. Direct auto-rickshaws available from station.</span>
              </div>
            </div>
          </div>

          <div className="tf-form-card">
            {!submitted ? (
              <>
                <div className="tf-form-header">
                  <div className="tf-form-header-badge">
                    <ShieldCheck size={16} />
                    <span>Free Facility Tour & Trial</span>
                  </div>
                  <h3>Book Free Visit or Inquire</h3>
                  <p>
                    Submit your details and our team will confirm your preferred timing slot via WhatsApp.
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
                      <label htmlFor="phone" className="tf-form-label">
                        Contact / WhatsApp *
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
                    className="tf-btn tf-btn-primary tf-btn-block"
                  >
                    <Send size={16} />
                    <span>Submit</span>
                  </button>
                  <p className="tf-form-footnote">
                    🔒 100% Free Facility Walkthrough &bull; Zero Obligation &bull; Instant Confirmation
                  </p>
                </form>
              </>
            ) : (
              <div className="tf-form-success">
                <div className="tf-success-icon-wrap">
                  <CheckCircle2 size={32} />
                </div>
                <h4>Inquiry Prepared!</h4>
                <p>
                  Thank you, <strong>{submissionPayload?.name}</strong>! Your inquiry for <strong>{submissionPayload?.topic}</strong> is ready.
                </p>

                <div className="tf-success-summary">
                  <div><strong>Preferred Slot:</strong> {submissionPayload?.timeSlot}</div>
                  <div><strong>Location:</strong> First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla</div>
                  <div><strong>Timings:</strong> Daily 6:00 AM – 12:00 AM Midnight</div>
                </div>

                <div className="tf-contact-success-actions">
                  <a
                    href={buildWhatsAppUrl(submissionPayload || formData)}
                    target="_blank"
                    rel="noreferrer"
                    className="tf-btn tf-btn-primary tf-btn-block"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Confirm via WhatsApp Desk</span>
                  </a>

                  <button
                    type="button"
                    className="tf-btn tf-btn-secondary tf-btn-block"
                    onClick={handleReset}
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
