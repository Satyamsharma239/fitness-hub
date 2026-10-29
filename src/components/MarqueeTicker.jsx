import React from "react";

const TICKER_ITEMS = [
  { headline: "18-HOUR DAILY SCHEDULE", sub: "6:00 AM – 12:00 AM MIDNIGHT" },
  { headline: "DEDICATED LADIES BATCH", sub: "2:00 PM – 4:00 PM DAILY" },
  { headline: "TRANSPARENT RATES", sub: "FROM ₹1,000/MO (GST INCLUDED)" },
  { headline: "NEHRU NAGAR, KURLA (E)", sub: "3 MINS WALK FROM STATION" },
  { headline: "100% CLIMATE CONTROL", sub: "AIR-CONDITIONED & SANITIZED" },
  { headline: "OLYMPIC POWER RACKS", sub: "CALIBRATED STEEL PLATES" },
  { headline: "CERTIFIED COACHING", sub: "ALTERNATE-DAY 1-ON-1 PT" }
];

export default function MarqueeTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="tf-marquee-wrap" aria-label="Key club highlights">
      <div className="tf-marquee-edge-fade" aria-hidden="true" />
      <div className="tf-marquee-track">
        {repeated.map((item, idx) => (
          <div key={idx} className="tf-marquee-item">
            <span className="tf-marquee-slash" aria-hidden="true">✦</span>
            <span className="tf-marquee-headline">{item.headline}</span>
            <span className="tf-marquee-bullet" aria-hidden="true">&bull;</span>
            <span className="tf-marquee-sub">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
