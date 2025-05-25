import React from 'react';
import { Check, Eye, Heart, Brain } from 'lucide-react';
import { upcomingSchedule } from '../data/mockData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

const iconMap = {
  check: Check,
  eye: Eye,
  heart: Heart,
  brain: Brain
};

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h4 className="day-title">{daySchedule.day}</h4>
          <div className="appointments-grid">
            {daySchedule.appointments.map((appointment) => (
              <SimpleAppointmentCard 
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={iconMap[appointment.icon]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;