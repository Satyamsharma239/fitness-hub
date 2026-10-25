import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import './GallerySection.css';

export default function GallerySection() {
  return (
    <section id="gallery" className="tf-section tf-gallery-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <Camera size={14} />
            Facility & Hardware
          </span>
          <h2 className="tf-section-title">
            Inside the Training Ground
          </h2>
          <p className="tf-section-subtitle">
            Take a visual tour through our Olympic lifting platforms, dumbbell bay, functional turf track, and recovery spaces.
          </p>
        </div>

        {/* 6 High Quality Distinct Photos Grid */}
        <div className="tf-gallery-grid">
          {GALLERY_ITEMS.map((item) => (
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
      </div>
    </section>
  );
}
