import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards.js';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      
      <div className="dashboard-grid">
        <div className="left-section">
          <AnatomySection />
          <ActivityFeed />
        </div>
        
        <div className="middle-section">
          <HealthStatusCards />
          <CalendarView />
        </div>
        
        <div className="right-section">
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;