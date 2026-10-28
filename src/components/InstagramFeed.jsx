import { Heart, ArrowUpRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { GYM_INFO, INSTAGRAM_HIGHLIGHTS } from "../data/gymData";
import "./InstagramFeed.css";

export default function InstagramFeed() {
  return (
    <section className="tf-section tf-ig-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <InstagramIcon size={14} />
            Community & Live Energy
          </span>
          <h2 className="tf-section-title">
            Follow <span className="accent">{GYM_INFO.socials.instagramHandle}</span>
          </h2>
          <p className="tf-section-subtitle">
            Catch real-time member PRs, coach technique tutorials, daily gym vibe, and transformational journeys directly from the training floor in Kurla.
          </p>

          <div style={{ marginTop: "16px" }}>
            <a
              href={GYM_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="tf-btn tf-btn-secondary tf-btn-sm"
              style={{ display: "inline-flex" }}
            >
              <InstagramIcon size={15} />
              <span>Follow Us on Instagram</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="tf-ig-grid">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <a
              key={item.id}
              href={GYM_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="tf-ig-card"
              aria-label={`View Instagram post: ${item.caption}`}
            >
              <div className="tf-ig-media">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="tf-ig-img"
                  loading="lazy"
                />
                <div className="tf-ig-overlay">
                  <div className="tf-ig-overlay-content">
                    <InstagramIcon size={26} className="tf-ig-icon" />
                    <div className="tf-ig-likes">
                      <Heart size={16} fill="currentColor" />
                      <span>{item.likes}</span>
                    </div>
                    <span className="tf-ig-tag">{item.tag}</span>
                    <p className="tf-ig-caption">{item.caption}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
