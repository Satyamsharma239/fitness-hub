import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({ eyebrow, title, subtitle, breadcrumb = [] }) {
  return (
    <section className="tf-page-hero">
      <div className="tf-container">
        <div className="tf-page-hero-inner">
          <nav className="tf-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="tf-breadcrumb-sep">/</span>
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  <span className="tf-breadcrumb-current">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

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
