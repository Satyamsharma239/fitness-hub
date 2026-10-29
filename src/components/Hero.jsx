import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  Sparkles
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { GYM_INFO } from "../data/gymData";
import "./Hero.css";

const LINE1_TARGET = "GET FIT. GET STRONG.";
const LINE2_TARGET = "BUILD LEAN MUSCLE.";

export default function Hero() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const [isTypingLine2, setIsTypingLine2] = useState(false);

  useEffect(() => {
    let charIdx1 = 0;
    let charIdx2 = 0;
    let timer1 = null;
    let timer2 = null;
    let gapTimer = null;

    timer1 = setInterval(() => {
      charIdx1++;
      setLine1(LINE1_TARGET.slice(0, charIdx1));
      if (charIdx1 >= LINE1_TARGET.length) {
        clearInterval(timer1);
        setIsTypingLine1(false);
        gapTimer = setTimeout(() => {
          setIsTypingLine2(true);
          timer2 = setInterval(() => {
            charIdx2++;
            setLine2(LINE2_TARGET.slice(0, charIdx2));
            if (charIdx2 >= LINE2_TARGET.length) {
              clearInterval(timer2);
              setIsTypingLine2(false);
            }
          }, 50);
        }, 160);
      }
    }, 50);

    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
      if (gapTimer) clearTimeout(gapTimer);
    };
  }, []);

  return (
    <section id="hero" className="tf-hero-section">
      <div className="tf-hero-backdrop-glow" aria-hidden="true" />

      <div className="tf-container">
        <div className="tf-hero-editorial-grid">
          
          <div className="tf-hero-text-col">
            <div className="tf-hero-location-pill">
              <span className="tf-status-dot open" />
              <span>Nehru Nagar, Kurla (E) &bull; Open Daily 6:00 AM – 12:00 AM</span>
            </div>

            <h1 className="tf-hero-title">
              <span>{line1}</span>
              {isTypingLine1 && <span className="tf-typewriter-cursor white" aria-hidden="true" />}
              <br />
              <span className="accent">{line2}</span>
              {isTypingLine2 && <span className="tf-typewriter-cursor" aria-hidden="true" />}
            </h1>

            <p className="tf-hero-subtext">
              Kurla’s premier air-conditioned fitness club at Nehru Nagar. Equipped with heavy Olympic free weights, dual cable crossovers, commercial cardio decks, certified coaches, and a dedicated daily <strong>Ladies Only batch (2:00 PM – 4:00 PM)</strong>.
            </p>

            <div className="tf-hero-cta-group">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="tf-btn tf-btn-primary tf-btn-lg"
              >
                <WhatsAppIcon size={19} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="tf-hero-visual-col">
            <div className="tf-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
                alt="The Fitness Hub Kurla Training Floor"
                className="tf-hero-visual-img"
                loading="eager"
              />
              <div className="tf-hero-visual-overlay" />

              <div className="tf-hero-corner-tag">
                <MapPin size={13} />
                <span>Nehru Nagar, Kurla (E) &bull; 3 Min from Station</span>
              </div>

              <div className="tf-hero-float-card">
                <Sparkles size={18} className="accent" />
                <div>
                  <strong>100% Air Conditioned Floor</strong>
                  <span>Sanitized Hardware & Private Lockers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
