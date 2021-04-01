interface NavItem {
  name: string;
  link: string;
}
export type NavDataType = NavItem[];

export const CSNavData: NavDataType = [
  { name: '공지사항', link: '/cs/notice' },
  { name: '자주묻는 질문', link: '/cs/faq' },
  { name: '약관 및 정책', link: '/cs/term' },
  { name: '문의', link: '/cs/inquery' },
];
export const DrawerNavData: NavDataType = [
  { name: '최근 본 글', link: '/user/drawer/recent' },
  { name: '좋아요 목록', link: '/user/drawer/like' },
  { name: '임시저장 목록', link: '/user/drawer/save' },
  { name: '포토 바인더', link: '/user/drawer/binder' },
];
export const SettingNavData: NavDataType = [
  { name: '내 정보', link: '/user/setting/info' },
  { name: '소개', link: '/user/setting/intro' },
  { name: '통계', link: '/user/setting/stats' },
];
export const SearchNavData: NavDataType = [
  { name: '글', link: '/search/post' },
  { name: '작가', link: '/search/writer' },
  { name: '해시태그', link: '/search/tag' },
];

export const photos = [
  {
    id: 1,
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4,
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4,
  },
  {
    id: 5,
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4,
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 7,
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4,
  },
  {
    id: 8,
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 9,
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 10,
    src: 'https://source.unsplash.com/XiDA78wAZVw/600x799',
    width: 3,
    height: 4,
  },
  {
    id: 11,
    src: 'https://source.unsplash.com/x8xJpClTvR0/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 12,
    src: 'https://source.unsplash.com/u9cG4cuJ6bU/4927x1000',
    width: 4927,
    height: 1000,
  },
  {
    id: 13,
    src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 14,
    src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599',
    width: 4,
    height: 3,
  },
  {
    id: 15,
    src: 'https://source.unsplash.com/pF1ug8ysTtY/600x400',
    width: 4,
    height: 3,
  },
  {
    id: 16,
    src: 'https://source.unsplash.com/A-fubu9QJxE/800x533',
    width: 4,
    height: 3,
  },
  {
    id: 17,
    src: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
    width: 4,
    height: 3,
  },
];
