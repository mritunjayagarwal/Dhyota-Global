export const campaignData = {
  hero: {
    title: 'Campaigns',
    description: "Explore our initiatives aimed at advancing men's health and building a healthier tomorrow.",
    stats: [
      { id: 'lives', value: '10,000+', label: 'Lives Impacted', icon: 'fa-solid fa-user-group' },
      { id: 'countries', value: '25+', label: 'Countries Reached', icon: 'fa-solid fa-earth-asia' }
    ]
  },
  categories: [
    { id: 'all', name: 'All Campaigns', filter: '*', icon: 'fa-solid fa-table-cells-large' },
    { id: 'awareness', name: 'Awareness', filter: 'awareness', icon: 'fa-solid fa-sun' },
    { id: 'education', name: 'Education', filter: 'education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'community', name: 'Community', filter: 'community', icon: 'fa-solid fa-people-group' },
    { id: 'research', name: 'Research', filter: 'research', icon: 'fa-solid fa-flask' },
    { id: 'lifestyle', name: 'Lifestyle', filter: 'lifestyle', icon: 'fa-solid fa-heart' }
  ],
  badgeColors: {
    awareness: { bg: '#FF6F00', color: '#fff' },
    education: { bg: '#2D7DD2', color: '#fff' },
    community: { bg: '#3FA34D', color: '#fff' },
    research: { bg: '#00A4B8', color: '#fff' },
    lifestyle: { bg: '#F2A007', color: '#fff' }
  },
  sortOptions: [
    { id: 'latest', label: 'Latest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'popular', label: 'Most Enrolled' }
  ],
  campaigns: [
    {
      id: 1,
      title: 'Together for a Healthier Tomorrow',
      description: "A nationwide movement encouraging men to prioritize their health and wellbeing.",
      category: 'awareness',
      date: 'Nov 18, 2023',
      sortDate: '2023-11-18',
      location: 'Nationwide',
      enrolled: 1245,
      image: '/assets/img/home/hero-bg.png'
    },
    {
      id: 2,
      title: 'Know Your Numbers',
      description: 'Educating men about key health parameters and regular check-ups.',
      category: 'education',
      date: 'Aug 12, 2023',
      sortDate: '2023-08-12',
      location: 'Pan India',
      enrolled: 892,
      image: '/assets/img/home/hero-bg-2.jpg'
    },
    {
      id: 3,
      title: 'Redefining Healthcare for Men',
      description: "A campaign to break stereotypes and start open conversations around men's health.",
      category: 'awareness',
      date: 'Sep 5, 2023',
      sortDate: '2023-09-05',
      location: 'Multiple Cities',
      enrolled: 1576,
      image: '/assets/img/home/hero-bg-3.jpeg'
    },
    {
      id: 4,
      title: "Men's Health Awareness Camp",
      description: 'Bringing healthcare to communities through free check-ups and expert consultations.',
      category: 'community',
      date: 'Jan 25, 2024',
      sortDate: '2024-01-25',
      location: 'Pune',
      enrolled: 1032,
      image: '/assets/img/home/hero-bg-1.jpg'
    },
    {
      id: 5,
      title: 'Research for a Better Tomorrow',
      description: 'Investing in innovative research to address men-specific health challenges.',
      category: 'research',
      date: 'Dec 10, 2023',
      sortDate: '2023-12-10',
      location: 'Hyderabad',
      enrolled: 645,
      image: '/assets/img/home/hero-bg-4.jpeg'
    },
    {
      id: 6,
      title: 'Fit Body. Strong Mind.',
      description: 'Promoting fitness, mental well-being, and healthy lifestyle choices.',
      category: 'lifestyle',
      date: 'Jul 22, 2023',
      sortDate: '2023-07-22',
      location: 'Digital Campaign',
      enrolled: 2318,
      image: '/assets/img/home/her-1.jpg'
    },
    {
      id: 7,
      title: 'Silence is Not Strength',
      description: "Breaking the stigma around mental health conversations for men.",
      category: 'awareness',
      date: 'Jun 10, 2024',
      sortDate: '2024-06-10',
      location: 'Pan India',
      enrolled: 1820,
      image: '/assets/img/home/her-3.png'
    },
    {
      id: 8,
      title: 'Healthy Hearts, Healthy Lives',
      description: 'Cardiovascular health screenings and lifestyle education for working professionals.',
      category: 'education',
      date: 'Apr 14, 2024',
      sortDate: '2024-04-14',
      location: 'Bengaluru',
      enrolled: 740,
      image: '/assets/img/home/hero-bg.png'
    },
    {
      id: 9,
      title: 'Rural Outreach Mission',
      description: "Mobile health units bringing screenings and care to underserved villages.",
      category: 'community',
      date: 'Mar 2, 2024',
      sortDate: '2024-03-02',
      location: 'Rajasthan',
      enrolled: 1180,
      image: '/assets/img/home/hero-bg-2.jpg'
    },
    {
      id: 10,
      title: 'Active Every Day',
      description: 'Daily fitness routines and habit-building for sustainable lifestyle change.',
      category: 'lifestyle',
      date: 'Feb 18, 2024',
      sortDate: '2024-02-18',
      location: 'Digital Campaign',
      enrolled: 1640,
      image: '/assets/img/home/her-1.jpg'
    },
    {
      id: 11,
      title: 'Breakthroughs in Urology',
      description: "Funding clinical studies advancing care for men's urological conditions.",
      category: 'research',
      date: 'Dec 28, 2023',
      sortDate: '2023-12-28',
      location: 'Mumbai',
      enrolled: 510,
      image: '/assets/img/home/hero-bg-3.jpeg'
    },
    {
      id: 12,
      title: 'Workplace Wellness Drive',
      description: "Partnering with employers to bring health awareness into the workday.",
      category: 'awareness',
      date: 'Oct 5, 2023',
      sortDate: '2023-10-05',
      location: 'Multiple Cities',
      enrolled: 980,
      image: '/assets/img/home/hero-bg-4.jpeg'
    }
  ],
  impact: [
    { id: 1, value: '10,000+', label: 'Lives Impacted', icon: 'fa-solid fa-user-group', accent: '#FF6F00' },
    { id: 2, value: '50+', label: 'Partner Clinics', icon: 'fa-solid fa-hospital', accent: '#FF6F00' },
    { id: 3, value: '4.9/5', label: 'Patient Satisfaction', icon: 'fa-solid fa-star', accent: '#FF6F00' },
    { id: 4, value: '25+', label: 'Countries Reached', icon: 'fa-solid fa-earth-asia', accent: '#FF6F00' }
  ]
};
