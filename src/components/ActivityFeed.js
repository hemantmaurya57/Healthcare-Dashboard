import React from 'react';
import { activityData } from '../data/mockData';
import '../styles/ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <p className="activity-subtitle">
        {activityData.weeklyAppointments} appointments on this week
      </p>
      
      <div className="activity-chart">
        {activityData.chartData.map((data, index) => (
          <div key={index} className="chart-bar">
            <div 
              className="bar" 
              style={{ height: `${data.value}%` }}
            ></div>
            <span className="bar-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;