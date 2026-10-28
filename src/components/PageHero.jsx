import React from 'react';
import './PageHero.css';

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="tf-page-hero">
      <div className="tf-container">
        <div className="tf-page-hero-inner">
          {eyebrow && (
            <span className="tf-page-hero-eyebrow">
              {eyebrow}
            </span>
          )}

          <h1 className="tf-page-hero-title">{title}</h1>
          {subtitle && <p className="tf-page-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
