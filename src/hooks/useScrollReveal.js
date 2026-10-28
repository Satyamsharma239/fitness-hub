import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const REVEAL_SELECTORS = [
  ".tf-section-header",
  ".tf-intro-editorial-text",
  ".tf-intro-editorial-visuals",
  ".tf-zone-card",
  ".tf-program-card",
  ".tf-why-card",
  ".tf-why-ribbon",
  ".tf-pricing-card",
  ".tf-visit-guarantee-box",
  ".tf-testimonial-card",
  ".tf-ig-card",
  ".tf-location-card",
  ".tf-map-visual-card",
  ".tf-accordion-item",
  ".tf-final-cta-box",
  ".tf-pillar-card",
  ".tf-about-story-text",
  ".tf-about-story-media",
  ".tf-about-visit-box",
  ".tf-trainer-card",
  ".tf-coaching-guarantee-banner",
  ".tf-schedule-wrapper",
  ".tf-schedule-notice",
  ".tf-gallery-item",
  ".tf-contact-block",
  ".tf-form-card"
].join(", ");

export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (motionPreference.matches || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tf-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(REVEAL_SELECTORS);
    elements.forEach((el) => {
      if (!el.classList.contains("tf-revealed")) {
        el.classList.add("tf-reveal-init");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
