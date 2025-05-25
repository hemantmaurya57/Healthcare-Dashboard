export const navigationLinks = [
  { name: 'Dashboard', icon: 'grid', active: true },
  { name: 'History', icon: 'clock', active: false },
  { name: 'Calendar', icon: 'calendar', active: false },
  { name: 'Appointments', icon: 'users', active: false },
  { name: 'Statistics', icon: 'bar-chart', active: false },
  { name: 'Tests', icon: 'file-text', active: false },
  { name: 'Chat', icon: 'message-circle', active: false },
  { name: 'Support', icon: 'phone', active: false },
  { name: 'Setting', icon: 'settings', active: false }
];

export const healthData = [
  {
    id: 1,
    name: 'Lungs',
    date: 'Due: 26 Oct 2021',
    status: 'warning',
    progress: 75
  },
  {
    id: 2,
    name: 'Teeth',
    date: 'Due: 26 Oct 2021',
    status: 'good',
    progress: 60
  },
  {
    id: 3,
    name: 'Bone',
    date: 'Due: 26 Oct 2021',
    status: 'critical',
    progress: 40
  }
];

export const calendarData = {
  month: 'October 2021',
  days: [
    { date: 25, day: 'Mon', appointments: ['10:00', '11:00', '12:00'] },
    { date: 26, day: 'Tues', appointments: ['08:00', '09:00', '10:00', '13:00'] },
    { date: 27, day: 'Wed', appointments: ['12:00'] },
    { date: 28, day: 'Thurs', appointments: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', appointments: ['14:00', '16:00'] },
    { date: 30, day: 'Sat', appointments: ['12:00', '14:00', '15:00'] },
    { date: 31, day: 'Sun', appointments: ['09:00', '10:00', '11:00'] }
  ]
};

export const appointmentCards = [
  {
    id: 1,
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    color: '#4F46E5'
  },
  {
    id: 2,
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    color: '#E5E7EB'
  }
];

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'check'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye'
      }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      {
        id: 3,
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart'
      },
      {
        id: 4,
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain'
      }
    ]
  }
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: 'Mon', value: 20 },
    { day: 'Tues', value: 40 },
    { day: 'Wed', value: 15 },
    { day: 'Thurs', value: 60 },
    { day: 'Fri', value: 35 },
    { day: 'Sat', value: 25 },
    { day: 'Sun', value: 45 }
  ]
};