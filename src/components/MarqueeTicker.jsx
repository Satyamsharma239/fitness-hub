import React from "react";

const MARQUEE_ITEMS = [
  "DAILY 6:00 AM – 12:00 AM MIDNIGHT",
  "DEDICATED LADIES ONLY BATCH: 2:00 PM – 4:00 PM",
  "PLANS FROM ₹1,000/MONTH (GST INCLUDED)",
  "1-ON-1 PERSONAL TRAINING: GOLD • DIAMOND • PLATINUM",
  "FIRST FLOOR, SERENE SHELTER, NEHRU NAGAR, KURLA",
  "100% AIR CONDITIONED TRAINING ENVIRONMENT",
  "OLYMPIC POWER RACKS & HEAVY FREE WEIGHTS",
  "SUNDAY EVENING SESSIONS: 6:00 PM – 10:00 PM",
  "CALL & WHATSAPP: 81088 84757"
];

export default function MarqueeTicker() {
  return (
    <div className="tf-marquee-wrap" aria-hidden="true">
      <div className="tf-marquee-track">
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
          <div key={idx} className="tf-marquee-item">
            <span className="tf-marquee-star">★</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
