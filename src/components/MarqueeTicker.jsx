import React from "react";

const CLUB_FACTS = [
  {
    title: "18-Hour Daily Schedule",
    subtitle: "6:00 AM – 12:00 AM Midnight"
  },
  {
    title: "Dedicated Ladies Batch",
    subtitle: "2:00 PM – 4:00 PM Daily"
  },
  {
    title: "Transparent Rates",
    subtitle: "From ₹1,000/Mo • GST Included"
  },
  {
    title: "Nehru Nagar, Kurla (E)",
    subtitle: "3 Min from Kurla Station"
  }
];

export default function MarqueeTicker() {
  return (
    <section className="tf-facts-strip" aria-label="Key club facts">
      <div className="tf-container">
        <div className="tf-facts-grid">
          {CLUB_FACTS.map((fact, idx) => (
            <div key={idx} className="tf-fact-item">
              <span className="tf-fact-indicator" />
              <div className="tf-fact-content">
                <span className="tf-fact-headline">{fact.title}</span>
                <span className="tf-fact-sub">{fact.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
