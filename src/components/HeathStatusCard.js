import React from 'react';
import { Zap, Smile, Bone } from 'lucide-react';
import { healthData } from '../data/mockData';
import '../styles/HealthStatusCards.css';

const iconMap = {
  Lungs: Zap,
  Teeth: Smile,
  Bone: Bone
};

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item) => {
        const IconComponent = iconMap[item.name];
        return (
          <div key={item.id} className={`health-card ${item.status}`}>
            <div className="card-header">
              <IconComponent size={24} />
              <h3>{item.name}</h3>
            </div>
            <p className="card-date">{item.date}</p>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;