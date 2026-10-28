import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X, Phone, Flame } from "lucide-react";
import logoImg from "../assets/fitnesshub_logo.jpg";
import { GYM_INFO } from "../data/gymData";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Plans & Pricing", path: "/memberships" },
  { label: "Trainers", path: "/trainers" },
  { label: "Contact & Location", path: "/contact" },
];

export default function Navbar({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("GYM OPEN NOW • 6:00 AM – 12:00 AM");
  const [isOpenNow, setIsOpenNow] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  // Exact real-time IST schedule calculation
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const istOffset = 5.5 * 60; // UTC+5:30 in minutes
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + istOffset * 60000);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const day = istTime.getDay(); // 0 is Sunday
      const timeInMinutes = hours * 60 + minutes;

      if (day === 0) {
        // Sunday: 6:00 PM (18:00 = 1080) to 10:00 PM (22:00 = 1320)
        const sunOpen = 18 * 60;
        const sunClose = 22 * 60;
        const isSunOpen = timeInMinutes >= sunOpen && timeInMinutes < sunClose;
        setIsOpenNow(isSunOpen);
        if (isSunOpen) {
          setStatusMessage("SUNDAY SESSION OPEN NOW (UNTIL 10 PM)");
        } else {
          setStatusMessage("OPENS SUNDAY AT 6:00 PM • NEHRU NAGAR");
        }
      } else {
        // Mon-Sat: 6:00 AM (360) to 12:00 AM Midnight (1440)
        const openTime = 6 * 60;
        const closeTime = 24 * 60;
        const isDailyOpen = timeInMinutes >= openTime && timeInMinutes < closeTime;
        setIsOpenNow(isDailyOpen);

        // Check for Ladies Only Batch: 2:00 PM (14:00 = 840) to 4:00 PM (16:00 = 960)
        const isLadiesBatch = timeInMinutes >= 14 * 60 && timeInMinutes < 16 * 60;

        if (isLadiesBatch) {
          setStatusMessage("🌸 LADIES ONLY BATCH ACTIVE NOW (2 PM – 4 PM)");
        } else if (isDailyOpen) {
          setStatusMessage("OPEN NOW UNTIL 12:00 AM MIDNIGHT");
        } else {
          setStatusMessage("OPENS AT 6:00 AM • NEHRU NAGAR KURLA");
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="tf-topbar">
        <div className="tf-container tf-topbar-inner">
          <div className="tf-topbar-left">
            <span className="tf-topbar-badge">
              <span className={`tf-status-dot ${isOpenNow ? "open" : "closed"}`}></span>
              {statusMessage}
            </span>
            <span className="tf-topbar-location">
              📍 First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla
            </span>
          </div>

          <div className="tf-topbar-right">
            <a href={`tel:${GYM_INFO.contact.phone}`} className="tf-topbar-link">
              <Phone size={12} />
              <span>{GYM_INFO.contact.phoneDisplay}</span>
            </a>
            <a
              href={GYM_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="tf-topbar-link ig-highlight"
            >
              <span>{GYM_INFO.socials.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`tf-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="tf-container tf-navbar-inner">
          <Link to="/" className="tf-nav-brand" aria-label="The Fitness Hub Kurla Home">
            <div className="tf-nav-logo-box">
              <img src={logoImg} alt="The Fitness Hub Logo" className="tf-nav-logo" />
            </div>
            <div className="tf-nav-brand-text">
              <span className="tf-nav-brand-title">
                THE FITNESS <span className="accent">HUB</span>
              </span>
              <span className="tf-nav-brand-sub">KURLA &bull; GET FIT. GET STRONG.</span>
            </div>
          </Link>

          {/* Desktop Navigation (Streamlined 5 Links) */}
          <nav className="tf-nav-menu" aria-label="Main menu">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `tf-nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="tf-nav-actions">
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-sm tf-nav-cta"
              onClick={onOpenTrial}
            >
              <Flame size={14} />
              <span>Book Club Visit</span>
            </button>

            <button
              type="button"
              className="tf-nav-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`tf-mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="tf-drawer-backdrop" onClick={closeMenu} />
        <div className="tf-drawer-content">
          <div className="tf-drawer-header">
            <div className="tf-nav-brand-text">
              <span className="tf-nav-brand-title">
                THE FITNESS <span className="accent">HUB</span>
              </span>
              <span className="tf-nav-brand-sub">KURLA</span>
            </div>
            <button
              type="button"
              className="tf-drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="tf-drawer-status">
            <span className={`tf-status-dot ${isOpenNow ? "open" : "closed"}`}></span>
            <span>{statusMessage}</span>
          </div>

          <nav className="tf-drawer-nav">
            {NAV_LINKS.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `tf-drawer-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                <span className="tf-drawer-link-idx">0{idx + 1}</span>
                <span className="tf-drawer-link-text">{link.label}</span>
                <ArrowRight size={16} className="tf-drawer-link-arrow" />
              </NavLink>
            ))}
          </nav>

          <div className="tf-drawer-footer">
            <button
              type="button"
              className="tf-btn tf-btn-primary"
              style={{ width: "100%", marginBottom: "12px" }}
              onClick={() => {
                setMenuOpen(false);
                if (onOpenTrial) onOpenTrial();
              }}
            >
              <Flame size={16} />
              <span>Book Free Facility Visit</span>
            </button>

            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="tf-btn tf-btn-secondary"
              style={{ width: "100%" }}
            >
              <span>WhatsApp Reception</span>
            </a>

            <div className="tf-drawer-contact-info">
              <p>First Floor, Serene Shelter, Mass Building, B Wing</p>
              <p>Nehru Nagar, Kurla, Mumbai – 400024</p>
              <p className="tf-drawer-phone">{GYM_INFO.contact.phone}</p>
              <p style={{ marginTop: "6px", color: "var(--accent)", fontSize: "11px", fontWeight: 700 }}>
                Daily: 6 AM – 12 AM &bull; Ladies: 2 PM – 4 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
