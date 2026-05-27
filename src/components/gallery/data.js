const EVENT = {
  title: 'Dhyota Annual Meet 2026',
  date: 'March 15, 2026',
  location: 'Pattaya, Thailand',
  category: 'annual-meet-2026',
  icon: 'fa-solid fa-video'
};

const photos = [
  'IMG_0001.jpg',
  'IMG_0100.jpg',
  'IMG_0102.jpg',
  'IMG_0105.jpg',
  'IMG_0113.jpg',
  'IMG_0117.jpg',
  'IMG_0118.jpg',
  'IMG_0122.jpg',
  'IMG_0128.jpg',
  'IMG_0131.jpg',
  'IMG_0137.jpg',
  'IMG_0139.jpg',
  'IMG_0141.jpg',
  'IMG_0143.jpg',
  'IMG_0147.jpg',
  'IMG_0151.jpg',
  'IMG_0158.jpg',
  'IMG_0160.jpg',
  'IMG_0166.jpg'
];

export const galleryData = {
  categories: [
    { id: 'all', name: 'All', filter: '*', icon: 'fa-solid fa-table-cells-large' },
    { id: 'annual-meet-2026', name: 'Annual Meet 2026', filter: 'annual-meet-2026', icon: 'fa-regular fa-calendar' }
  ],
  items: photos.map((file, i) => ({
    id: i + 1,
    title: EVENT.title,
    date: EVENT.date,
    location: EVENT.location,
    category: EVENT.category,
    icon: EVENT.icon,
    image: `/assets/img/gallery/${file}`
  }))
};
