import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import PageHero from "../components/PageHero";
import WhatsAppIcon from "../components/WhatsAppIcon";
import "./ProgramsPage.css";

const DETAILED_ZONES = [
  {
    id: "free-weights",
    title: "Heavy Free Weights & Barbell Platforms",
    badge: "Strength Bay",
    lead: "Engineered for progressive overload, powerlifting, and compound hypertrophy lifting.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    description: "Our strength section is anchored by reinforced Olympic squat cages, competition-grade barbells, and heavy dumbbells with textured non-slip knurling. Whether your program calls for 100kg deadlifts or controlled dumbbell benching, the floor provides shock-absorbing rubber mats for safe drops.",
    equipmentList: [
      "Heavy commercial dumbbells with non-slip grips",
      "Reinforced Olympic squat cages & safety spotter arms",
      "Flat, incline, and decline utility bench stations",
      "Calibrated cast-iron & rubber bumper weight plates",
      "Olympic EZ-curl bars & standard straight barbells"
    ]
  },
  {
    id: "machines",
    title: "Dual Cable Crossovers & Hypertrophy Machines",
    badge: "Hypertrophy Suite",
    lead: "Smooth biomechanical cable paths designed for continuous muscle tension and isolated growth.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85",
    description: "Every resistance machine is maintained daily to ensure frictionless motion and safe joint mechanics. Target your chest, back, shoulders, and legs with pinpoint accuracy before finishing your workout with high-angle cable crossovers.",
    equipmentList: [
      "Dual adjustable pulley (DAP) cable crossover stations",
      "Wide-grip lat pulldowns & low seated cable rows",
      "Pin-loaded chest press, shoulder press & pec-dec fly",
      "45-degree angled leg press & heavy hack squat unit",
      "Seated leg extension and prone hamstring curl stations"
    ]
  },
  {
    id: "cardio",
    title: "Commercial Motorized Cardio Fleet",
    badge: "Conditioning Deck",
    lead: "Elevate your stamina, accelerate metabolic fat burn, and protect joint health.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    description: "Beat Mumbai's outdoor smog and humidity in our clean, climate-controlled cardio bay. Our fleet features shock-absorbing motorized running decks, variable-resistance elliptical cross-trainers, and high-cadence spin bicycles.",
    equipmentList: [
      "Commercial motorized treadmills with responsive shock cushioning",
      "Low-impact elliptical trainers for joint-friendly stamina",
      "Heavy-flywheel studio spin bikes for high-intensity intervals",
      "Real-time heart rate, pace, and calorie display consoles"
    ]
  },
  {
    id: "ladies",
    title: "Dedicated Ladies Only Batch (Daily 2 PM – 4 PM)",
    badge: "2:00 PM – 4:00 PM Daily",
    lead: "An empowering, private training window reserved exclusively for female lifters.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
    description: "Every single day between 2:00 PM and 4:00 PM, our Nehru Nagar training floor is closed to general members and opened exclusively for women. Guided by certified female trainer Coach Ayesha Khan, members learn barbell lifting, tone safely, and train without distraction.",
    equipmentList: [
      "Private 2-hour daily batch exclusively for female members",
      "Hands-on posture and lifting technique coaching",
      "Full access to strength, resistance machines, and cardio decks",
      "Comfortable, supportive, and 100% respectful atmosphere"
    ]
  }
];

export default function ProgramsPage({ onOpenTrial }) {
  return (
    <div className="tf-programs-page">
      <PageHero
        eyebrow="Training Floor & Equipment Suites"
        title="TRAINING FLOOR & SPECIALIZED ZONES"
        subtitle="Tour our air-conditioned facility in Nehru Nagar, Kurla. Equipped with heavy Olympic free weights, commercial cardio decks, multi-cable stations, and a dedicated Ladies Only batch."
      />

      <section className="tf-section">
        <div className="tf-container">
          <div className="tf-programs-list">
            {DETAILED_ZONES.map((zone, idx) => (
              <div
                key={zone.id}
                className={`tf-zone-detailed-card ${idx % 2 === 1 ? "reversed" : ""}`}
              >
                <div className="tf-zone-detailed-media">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="tf-zone-detailed-img"
                    loading="lazy"
                  />
                  <div className="tf-zone-detailed-overlay" />
                  <span className="tf-zone-detailed-badge">
                    {zone.badge}
                  </span>
                </div>

                <div className="tf-zone-detailed-body">
                  <span className="tf-zone-detailed-num">
                    Zone 0{idx + 1}
                  </span>
                  <h3 className="tf-zone-detailed-title">
                    {zone.title}
                  </h3>
                  <p className="tf-zone-detailed-lead">
                    {zone.lead}
                  </p>
                  <p className="tf-zone-detailed-desc">
                    {zone.description}
                  </p>

                  <ul className="tf-zone-detailed-list">
                    {zone.equipmentList.map((item, itemIdx) => (
                      <li key={itemIdx} className="tf-zone-detailed-item">
                        <CheckCircle2
                          size={15}
                          className="tf-zone-detailed-check"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tf-zone-detailed-actions">
                    <button
                      type="button"
                      className="tf-btn tf-btn-primary tf-btn-sm"
                      onClick={onOpenTrial}
                    >
                      <span>Tour This Zone</span>
                      <ArrowRight size={14} />
                    </button>
                    <a
                      href={`https://wa.me/918108884757?text=Hi%20The%20Fitness%20Hub%20Kurla%2C%20I%20am%20interested%20in%20touring%20the%20${encodeURIComponent(zone.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="tf-btn tf-btn-secondary tf-btn-sm"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tf-programs-cta-card">
            <div className="tf-programs-cta-copy">
              <div className="tf-programs-cta-kicker">
                <ShieldCheck size={16} />
                <span>100% Air Conditioned Floor</span>
              </div>
              <h3 className="tf-programs-cta-title">
                Experience our training floor in person before deciding.
              </h3>
              <p className="tf-programs-cta-text">
                Located at First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla. 
                Just 3–4 minutes walk from Kurla Railway Station (East). Open daily 6:00 AM – 12:00 AM Midnight.
              </p>
            </div>
            <button
              type="button"
              className="tf-btn tf-btn-primary tf-btn-lg"
              onClick={onOpenTrial}
            >
              <span>Schedule Free Visit</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
