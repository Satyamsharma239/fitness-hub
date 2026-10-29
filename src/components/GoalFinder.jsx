import React, { useState } from "react";
import {
  Flame,
  ArrowRight,
  Dumbbell,
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  Layers
} from "lucide-react";
import "./GoalFinder.css";

const GOALS = [
  {
    id: "hypertrophy",
    label: "Muscle Building",
    icon: <Dumbbell size={16} />,
    title: "Hypertrophy & Lean Muscle Architecture",
    tag: "Progressive Overload Bay",
    lead: "Engineered for compound lifts, strict biomechanical isolation, and accelerated mass gain.",
    schedule: "4–5 Days/Week (Push • Pull • Legs or Upper/Lower Split)",
    keyEquipment: "Olympic Squat Cages, Calibrated Plates, Dual Adjustable Cables, 45° Leg Press",
    coachTip: "Alternate-day floor spotting ensures you hit true technical failure safely.",
    recommendedPlan: "Standard Annual (₹1,000/mo) or PT Diamond (₹8,000/mo)",
    badgeColor: "#ff2a3b"
  },
  {
    id: "fatloss",
    label: "Fat Loss & Toning",
    icon: <Flame size={16} />,
    title: "High-Calorie Burn & Metabolic Conditioning",
    tag: "Cardio & Circuit Bay",
    lead: "Combines shock-cushioned motorized running decks with high-rep cable and dumbbell circuits.",
    schedule: "3–4 Days/Week (35 mins Strength Circuits + 20 mins Cardio Decks)",
    keyEquipment: "Motorized Treadmills, Studio Spin Bikes, Low-Impact Ellipticals, Cable Flyes",
    coachTip: "Maintain elevated heart-rate zones in our clean, fully climate-controlled training floor.",
    recommendedPlan: "Standard 6 Months (₹8,000) or Standard 3 Months (₹6,000)",
    badgeColor: "#ff9800"
  },
  {
    id: "ladies",
    label: "Ladies Only (2–4 PM)",
    icon: <Sparkles size={16} />,
    title: "Private Women’s Strength & Confidence Batch",
    tag: "Daily 2:00 PM – 4:00 PM",
    lead: "A private training window reserved exclusively for female members with dedicated female coaching.",
    schedule: "Daily 2:00 PM – 4:00 PM (Monday to Saturday)",
    keyEquipment: "Full floor access: Olympic Barbell Bays, Functional Cables, Cardio Fleet",
    coachTip: "Certified female coach Ayesha Khan provides personal form guidance and lifting confidence.",
    recommendedPlan: "Standard 6 Months (₹8,000) or Annual Pass (₹12,000) with full batch access",
    badgeColor: "#ec4899"
  },
  {
    id: "strength",
    label: "Raw Powerlifting",
    icon: <Layers size={16} />,
    title: "Barbell Mastery, Squat, Bench & Deadlift",
    tag: "Heavy Strength Platform",
    lead: "Built for serious lifters requiring safety spotter arms, knurled Olympic bars, and dense rubber floor mats.",
    schedule: "3–4 Days/Week (Squat Day, Bench Day, Deadlift Day, Accessory Day)",
    keyEquipment: "Reinforced Power Cages, Competition Plates, Heavy Dumbbells (up to 40kg+)",
    coachTip: "Our coaches assist with bar path, grip mechanics, and safe heavy drops.",
    recommendedPlan: "Standard Annual (₹12,000) + PT Gold (₹6,000/mo) for technical screening",
    badgeColor: "#eab308"
  },
  {
    id: "couples",
    label: "Couple / Duo Pass",
    icon: <Users size={16} />,
    title: "Dual Partner Fitness & Mutual Accountability",
    tag: "Save ₹4,000 Total",
    lead: "Train together with your partner or workout buddy. Includes full 365-day access for both of you.",
    schedule: "Flexible 18-hour daily access (6:00 AM – 12:00 AM Midnight)",
    keyEquipment: "Dual cable crossover stations, synchronized cardio decks, full floor access",
    coachTip: "Partner workouts boost long-term gym consistency by over 60%.",
    recommendedPlan: "Annual Couples Membership (₹10,000 per person, GST Included)",
    badgeColor: "#10b981"
  }
];

export default function GoalFinder({ onOpenTrial }) {
  const [activeGoalId, setActiveGoalId] = useState("hypertrophy");
  const activeGoal = GOALS.find((g) => g.id === activeGoalId) || GOALS[0];

  return (
    <section className="tf-section tf-goalfinder-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            Routine Matcher
          </span>
          <h2 className="tf-section-title">
            Find Your Ideal <span className="accent">Training Blueprint</span>
          </h2>
          <p className="tf-section-subtitle">
            Select your primary objective below to preview the recommended weekly schedule, priority training stations, and membership package.
          </p>
        </div>

        <div className="tf-goalfinder-tabs">
          {GOALS.map((goal) => {
            const isSelected = goal.id === activeGoalId;
            return (
              <button
                key={goal.id}
                type="button"
                className={`tf-goalfinder-tab ${isSelected ? "active" : ""}`}
                onClick={() => setActiveGoalId(goal.id)}
              >
                <span className="tf-goalfinder-tab-icon">{goal.icon}</span>
                <span className="tf-goalfinder-tab-label">{goal.label}</span>
              </button>
            );
          })}
        </div>

        <div className="tf-goalfinder-card">
          <div className="tf-goalfinder-header">
            <div className="tf-goalfinder-meta">
              <span
                className="tf-goalfinder-tag"
                style={{ borderColor: activeGoal.badgeColor, color: activeGoal.badgeColor }}
              >
                {activeGoal.tag}
              </span>
              <h3 className="tf-goalfinder-title">{activeGoal.title}</h3>
              <p className="tf-goalfinder-lead">{activeGoal.lead}</p>
            </div>

            <div className="tf-goalfinder-cta-top">
              <button
                type="button"
                className="tf-btn tf-btn-primary tf-btn-md"
                onClick={() => onOpenTrial(`Routine Goal: ${activeGoal.title}`)}
              >
                <span>Book Free Visit For This Goal</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="tf-goalfinder-details-grid">
            <div className="tf-goalfinder-detail-box">
              <div className="tf-detail-icon-wrap">
                <Calendar size={18} />
              </div>
              <div>
                <strong>Suggested Schedule</strong>
                <p>{activeGoal.schedule}</p>
              </div>
            </div>

            <div className="tf-goalfinder-detail-box">
              <div className="tf-detail-icon-wrap">
                <Dumbbell size={18} />
              </div>
              <div>
                <strong>Priority Equipment Bays</strong>
                <p>{activeGoal.keyEquipment}</p>
              </div>
            </div>

            <div className="tf-goalfinder-detail-box">
              <div className="tf-detail-icon-wrap">
                <Sparkles size={18} />
              </div>
              <div>
                <strong>Trainer Form Tip</strong>
                <p>{activeGoal.coachTip}</p>
              </div>
            </div>

            <div className="tf-goalfinder-detail-box tf-detail-highlight">
              <div className="tf-detail-icon-wrap">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <strong>Best-Value Membership Tier</strong>
                <p className="tf-detail-plan-name">{activeGoal.recommendedPlan}</p>
              </div>
            </div>
          </div>

          <div className="tf-goalfinder-footer">
            <span className="tf-goalfinder-footer-note">
              📍 First Floor, Serene Shelter, Mass Building, Nehru Nagar, Kurla. 100% Air-Conditioned Floor.
            </span>
            <button
              type="button"
              className="tf-btn tf-btn-secondary tf-btn-sm"
              onClick={() => onOpenTrial(`Routine Goal: ${activeGoal.title}`)}
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
