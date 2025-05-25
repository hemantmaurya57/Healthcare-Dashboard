import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData, appointmentCards } from '../data/mockData';
import '../styles/CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <div className="week-selector">
          <span>This Week</span>
          <ChevronLeft size={16} />
        </div>
        <div className="month-navigation">
          <ChevronLeft size={20} />
          <h3>{calendarData.month}</h3>
          <ChevronRight size={20} />
        </div>
      </div>
      
      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{day.day}</span>
              <span className="day-number">{day.date}</span>
            </div>
            <div className="day-appointments">
              {day.appointments.map((time, timeIndex) => (
                <div key={timeIndex} className="appointment-time">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        {appointmentCards.map((card) => (
          <div 
            key={card.id} 
            className="appointment-card"
            style={{ backgroundColor: card.color }}
          >
            <div className="card-content">
              <h4>{card.type}</h4>
              <p>{card.time}</p>
              <span>{card.doctor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;