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
          <div className="health-card" key={item.name}>
            <div className="icon">
              <IconComponent />
            </div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="date">{item.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
