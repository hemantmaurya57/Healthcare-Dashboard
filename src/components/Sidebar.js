import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, Clock, Calendar, Users, BarChart, 
  FileText, MessageCircle, Phone, Settings 
} from 'lucide-react';
import { navigationLinks } from '../data/mockData';
import '../styles/Sidebar.css';

const iconMap = {
  grid: Grid,
  clock: Clock,
  calendar: Calendar,
  users: Users,
  'bar-chart': BarChart,
  'file-text': FileText,
  'message-circle': MessageCircle,
  phone: Phone,
  settings: Settings
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {navigationLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            return (
              <Link 
                key={index}
                to={`/${link.name.toLowerCase()}`} 
                className={`nav-link ${link.active ? 'active' : ''}`}
              >
                <IconComponent size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
