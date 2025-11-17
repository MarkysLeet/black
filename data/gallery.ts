export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  orientation: 'portrait' | 'landscape';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'hall-1',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
    title: 'Главный зал',
    orientation: 'landscape',
  },
  {
    id: 'bar',
    image:
      'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?auto=format&fit=crop&w=900&q=80',
    title: 'Бар с золотом',
    orientation: 'portrait',
  },
  {
    id: 'private',
    image:
      'https://images.unsplash.com/photo-1494398586771-bb3a2aef0cfc?auto=format&fit=crop&w=900&q=80',
    title: 'Приватный кабинет',
    orientation: 'portrait',
  },
  {
    id: 'terrace',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    title: 'Терраса',
    orientation: 'landscape',
  },
  {
    id: 'table',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    title: 'Сервировка',
    orientation: 'landscape',
  },
  {
    id: 'wine',
    image:
      'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=900&q=80',
    title: 'Винный зал',
    orientation: 'portrait',
  },
];
