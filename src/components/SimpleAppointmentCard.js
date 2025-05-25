import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon: IconComponent }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-icon">
        <IconComponent size={20} />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;