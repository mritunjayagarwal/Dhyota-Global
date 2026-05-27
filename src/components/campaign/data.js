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
      title: 'Let Him Be HE',
      description: "A men's health movement empowering men to prioritize their health, confidence, and life with expert care, complete privacy, and zero judgement.",
      category: 'awareness',
      date: 'Jan 15, 2025',
      sortDate: '2025-01-15',
      location: 'Pan India',
      enrolled: 52480,
      image: '/assets/img/home/hero-bg.png',
      logo: '/assets/img/campaigns/lethimbehe.jpeg'
    }
  ],
  impact: [
    { id: 1, value: '10,000+', label: 'Lives Impacted', icon: 'fa-solid fa-user-group', accent: '#FF6F00' },
    { id: 2, value: '50+', label: 'Partner Clinics', icon: 'fa-solid fa-hospital', accent: '#FF6F00' },
    { id: 3, value: '4.9/5', label: 'Patient Satisfaction', icon: 'fa-solid fa-star', accent: '#FF6F00' },
    { id: 4, value: '25+', label: 'Countries Reached', icon: 'fa-solid fa-earth-asia', accent: '#FF6F00' }
  ]
};

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/['"’.,]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getCampaignSlug = (campaign) => slugify(campaign.title);

export const getCampaignBySlug = (slug) =>
  campaignData.campaigns.find((campaign) => slugify(campaign.title) === slug);
