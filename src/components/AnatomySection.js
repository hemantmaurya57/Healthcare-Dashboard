import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="body-illustration">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop" 
            alt="Human Anatomy" 
            className="body-image"
          />
          
          <div className="health-indicators">
            <div className="indicator healthy-heart">
              <Heart size={16} />
              <span>Healthy Heart</span>
            </div>
            
            <div className="indicator healthy-leg">
              <span>Healthy Leg</span>
            </div>
          </div>
        </div>
        
        <div className="zoom-control">
          <button className="zoom-btn">−</button>
          <div className="zoom-slider">
            <div className="zoom-handle"></div>
          </div>
          <button className="zoom-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;