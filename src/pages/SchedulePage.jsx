import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Info } from 'lucide-react';
import PageHero from '../components/PageHero';
import { SCHEDULE_DAYS, SCHEDULE_CLASSES } from '../data/gymData';
import '../components/ScheduleSection.css';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const activeClasses = SCHEDULE_CLASSES[selectedDay] || [];

  return (
    <div className="tf-schedule-page">
      <PageHero
        eyebrow="Class Timetable"
        title="Weekly Squad Schedule"
        subtitle="Coach-led team workouts combining strength circuits, sled relays, and metabolic intervals. Capped class sizes ensure you receive personalized coaching attention."
        breadcrumb={[{ label: 'Schedule', link: null }]}
      />

      <section className="tf-section tf-schedule-section">
        <div className="tf-container">
          <div className="tf-section-header center tf-reveal">
            <span className="tf-eyebrow">
              <Clock size={14} />
              Choose Your Training Day
            </span>
            <h2 className="tf-section-title">
              Daily Class Sessions
            </h2>
            <p className="tf-section-subtitle">
              Select a day below to explore daily sessions. Reserve your guest trial spot or book via the member portal.
            </p>
          </div>

          {/* Day Selectors */}
          <div className="tf-schedule-day-tabs tf-reveal" role="tablist" aria-label="Schedule days">
            {SCHEDULE_DAYS.map((day) => (
              <button
                key={day}
                type="button"
                role="tab"
                aria-selected={selectedDay === day}
                className={`tf-day-tab-btn ${selectedDay === day ? 'active' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Timetable Table Wrapper */}
          <div key={selectedDay} className="tf-schedule-wrapper tf-reveal">
            <div className="tf-schedule-table-head">
              <div>Session Time</div>
              <div>Class & Focus</div>
              <div>Coach</div>
              <div>Level</div>
              <div>Capacity</div>
              <div>Action</div>
            </div>

            <div className="tf-schedule-body">
              {activeClasses.map((item, idx) => (
                <div key={idx} className="tf-schedule-row">
                  <div className="tf-col-time">
                    {item.time}
                  </div>

                  <div className="tf-col-class">
                    <h4>{item.name}</h4>
                    <span>{item.category}</span>
                  </div>

                  <div className="tf-col-coach">
                    Coach {item.coach}
                  </div>

                  <div className="tf-col-level">
                    {item.level}
                  </div>

                  <div className="tf-col-spots">
                    {item.spots}
                  </div>

                  <div className="tf-col-action">
                    <Link
                      to={`/contact?topic=Class Reservation: ${encodeURIComponent(`${selectedDay} - ${item.name} (${item.time})`)}`}
                      className="tf-btn-reserve"
                      style={{ textAlign: 'center', display: 'inline-block', textDecoration: 'none' }}
                    >
                      Reserve Spot
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Notice */}
          <div className="tf-schedule-notice tf-reveal-scale">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={16} />
              <span>Sample timetable preview shown. Registered members receive 7-day advance booking window via member portal.</span>
            </div>
            <div>
              <Link to="/contact?topic=Class Reservation" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                Request guest pass for a class &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
