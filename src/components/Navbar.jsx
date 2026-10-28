import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Phone, Flame } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logoImg from "../assets/fitnesshub_logo.jpg";
import { GYM_INFO } from "../data/gymData";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "About", target: "about" },
  { label: "Training Floor", target: "zones" },
  { label: "Coaches", target: "trainers" },
  { label: "Plans & Pricing", target: "memberships" },
  { label: "Why Us", target: "why-us" },
  { label: "Location & Contact", target: "contact" },
];

const DRAWER_ITEMS = [
  { label: "Home", target: "hero" },
  { label: "About The Hub", target: "about" },
  { label: "Training Floor & Zones", target: "zones" },
  { label: "Certified Coaches", target: "trainers" },
  { label: "Plans & Transparent Rates", target: "memberships" },
  { label: "Why Lifters Choose Us", target: "why-us" },
  { label: "Member Reviews (4.8★)", target: "testimonials" },
  { label: "Kurla Location, Map & Visit", target: "contact" },
];

export default function Navbar({ onOpenTrial }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopStatus, setDesktopStatus] = useState("OPEN NOW UNTIL 12:00 AM MIDNIGHT");
  const [mobileStatus, setMobileStatus] = useState("OPEN • 6 AM – 12 AM");
  const [isOpenNow, setIsOpenNow] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const istOffset = 5.5 * 60;
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + istOffset * 60000);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const day = istTime.getDay();
      const timeInMinutes = hours * 60 + minutes;

      if (day === 0) {
        const sunOpen = 18 * 60;
        const sunClose = 22 * 60;
        const isSunOpen = timeInMinutes >= sunOpen && timeInMinutes < sunClose;
        setIsOpenNow(isSunOpen);
        if (isSunOpen) {
          setDesktopStatus("SUNDAY SESSION OPEN NOW (UNTIL 10 PM)");
          setMobileStatus("SUNDAY (UNTIL 10 PM)");
        } else {
          setDesktopStatus("OPENS SUNDAY AT 6:00 PM • NEHRU NAGAR");
          setMobileStatus("OPENS SUN 6:00 PM");
        }
      } else {
        const openTime = 6 * 60;
        const closeTime = 24 * 60;
        const isDailyOpen = timeInMinutes >= openTime && timeInMinutes < closeTime;
        setIsOpenNow(isDailyOpen);

        const isLadiesBatch = timeInMinutes >= 14 * 60 && timeInMinutes < 16 * 60;

        if (isLadiesBatch) {
          setDesktopStatus("🌸 LADIES ONLY BATCH ACTIVE NOW (2 PM – 4 PM)");
          setMobileStatus("🌸 LADIES BATCH (2-4 PM)");
        } else if (isDailyOpen) {
          setDesktopStatus("OPEN NOW UNTIL 12:00 AM MIDNIGHT");
          setMobileStatus("OPEN • 6 AM – 12 AM");
        } else {
          setDesktopStatus("OPENS AT 6:00 AM • NEHRU NAGAR KURLA");
          setMobileStatus("OPENS 6:00 AM");
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

  const scrollToTarget = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <>
      <div className="tf-topbar">
        <div className="tf-container tf-topbar-inner">
          <div className="tf-topbar-left">
            <span className="tf-topbar-badge">
              <span className={`tf-status-dot ${isOpenNow ? "open" : "closed"}`}></span>
              <span className="tf-status-text-desktop">{desktopStatus}</span>
              <span className="tf-status-text-mobile">{mobileStatus}</span>
            </span>
            <span className="tf-topbar-location">
              📍 First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla
            </span>
          </div>

          <div className="tf-topbar-right">
            <a href={`tel:${GYM_INFO.contact.phoneRaw}`} className="tf-topbar-link tf-topbar-phone">
              <Phone size={12} />
              <span>{GYM_INFO.contact.phone}</span>
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

      <header className={`tf-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="tf-container tf-navbar-inner">
          <a
            href="#hero"
            className="tf-nav-brand"
            aria-label="The Fitness Hub Kurla Home"
            onClick={(e) => scrollToTarget(e, "hero")}
          >
            <div className="tf-nav-logo-box">
              <img src={logoImg} alt="The Fitness Hub Logo" className="tf-nav-logo" />
            </div>
            <div className="tf-nav-brand-text">
              <span className="tf-nav-brand-title">
                THE FITNESS <span className="accent">HUB</span>
              </span>
              <span className="tf-nav-brand-sub tf-nav-brand-sub-desktop">KURLA &bull; GET FIT. GET STRONG.</span>
              <span className="tf-nav-brand-sub tf-nav-brand-sub-mobile">KURLA &bull; NEHRU NAGAR</span>
            </div>
          </a>

          <nav className="tf-nav-menu" aria-label="Main menu">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="tf-nav-link"
                onClick={(e) => scrollToTarget(e, item.target)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="tf-nav-actions">
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-sm tf-nav-cta"
              onClick={onOpenTrial}
            >
              <Flame size={14} />
              <span className="tf-nav-cta-text-desktop">Book Club Visit</span>
              <span className="tf-nav-cta-text-mobile">Book Visit</span>
            </button>

            <button
              type="button"
              className="tf-nav-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`tf-mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="tf-drawer-backdrop" onClick={closeMenu} />
        <div className="tf-drawer-content">
          <div className="tf-drawer-header">
            <div className="tf-nav-brand-text">
              <span className="tf-nav-brand-title">
                THE FITNESS <span className="accent">HUB</span>
              </span>
              <span className="tf-nav-brand-sub">KURLA &bull; NEHRU NAGAR</span>
            </div>
            <button
              type="button"
              className="tf-drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="tf-drawer-status">
            <span className={`tf-status-dot ${isOpenNow ? "open" : "closed"}`}></span>
            <span>{desktopStatus}</span>
          </div>

          <nav className="tf-drawer-nav">
            {DRAWER_ITEMS.map((item, idx) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="tf-drawer-link"
                onClick={(e) => scrollToTarget(e, item.target)}
              >
                <span className="tf-drawer-link-idx">0{idx + 1}</span>
                <span className="tf-drawer-link-text">{item.label}</span>
                <ArrowRight size={15} className="tf-drawer-link-arrow" />
              </a>
            ))}
          </nav>

          <div className="tf-drawer-footer">
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-drawer-btn"
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
              className="tf-btn tf-btn-secondary tf-drawer-wa-btn"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp Reception</span>
            </a>

            <div className="tf-drawer-contact-info">
              <p>First Floor, Serene Shelter, Mass Building, B Wing</p>
              <p>Nehru Nagar, Kurla, Mumbai – 400024</p>
              <p className="tf-drawer-phone">{GYM_INFO.contact.phone}</p>
              <p className="tf-drawer-schedule-note">
                Daily: 6 AM – 12 AM &bull; Ladies: 2 PM – 4 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
