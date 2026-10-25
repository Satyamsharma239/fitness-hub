import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { GALLERY_ITEMS } from '../data/gymData';
import '../components/GallerySection.css';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Strength Zone', 'Dumbbell Area', 'Functional Area', 'Cardio', 'Coaching', 'Facilities'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="tf-gallery-page">
      <PageHero
        eyebrow="Visual Tour"
        title="Inside The Fitness Hub Facility"
        subtitle="Explore our air-conditioned strength floor, heavy dumbbells up to 45kg, cardio decks, and dedicated coaching areas in Nehru Nagar, Kurla East."
        breadcrumb={[{ label: 'Gallery', link: null }]}
      />

      <section className="tf-section tf-gallery-section">
        <div className="tf-container">
          {/* Category Filter Tabs */}
          <div className="tf-programs-tabs tf-reveal" style={{ marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tf-program-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div key={filter} className="tf-gallery-grid tf-stagger">
            {filteredItems.map((item) => (
              <div key={item.id} className="tf-gallery-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="tf-gallery-img"
                  loading="lazy"
                />
                <div className="tf-gallery-overlay">
                  <span className="tf-gallery-category-pill">{item.category}</span>
                  <h4 className="tf-gallery-title">{item.title}</h4>
                  <p className="tf-gallery-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tour CTA */}
          <div
            className="tf-reveal-scale"
            style={{
              marginTop: '4rem',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
              Want to see the training floor in person?
            </h3>
            <p style={{ color: 'var(--text-body)', maxWidth: '580px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
              Book an informal facility walkthrough. We'll show you around the platforms, introduce our coaching staff, and answer any training questions.
            </p>
            <Link to="/contact?topic=Facility Tour Request" className="tf-btn tf-btn-primary">
              <MapPin size={16} />
              <span>Schedule Facility Walkthrough</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
