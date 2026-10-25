import React, { useState } from 'react';
import { Clock, Info } from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_CLASSES } from '../data/gymData';
import './ScheduleSection.css';

export default function ScheduleSection({ onBookClass }) {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const activeClasses = SCHEDULE_CLASSES[selectedDay] || [];

  return (
    <section id="schedule" className="tf-section tf-schedule-section">
      <div className="tf-container">
        <div className="tf-section-header center">
          <span className="tf-eyebrow">
            <Clock size={14} />
            Timetable Preview
          </span>
          <h2 className="tf-section-title">
            Weekly Class Schedule
          </h2>
          <p className="tf-section-subtitle">
            Capped sessions to guarantee coach attention and equipment access. Select a day to view daily class times, formats, and coaches.
          </p>
        </div>

        {/* Day Selectors */}
        <div className="tf-schedule-day-tabs" role="tablist" aria-label="Schedule days">
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
        <div className="tf-schedule-wrapper">
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
                  <button
                    type="button"
                    className="tf-btn-reserve"
                    onClick={() => onBookClass(`${selectedDay} - ${item.name} (${item.time})`)}
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Disclaimer / Schedule Note */}
        <div className="tf-schedule-notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={16} />
            <span>Sample schedule preview shown. Exact class slots are subject to seasonal schedule updates.</span>
          </div>
          <div>
            <span>Members book up to 7 days in advance via member app</span>
          </div>
        </div>
      </div>
    </section>
  );
}
