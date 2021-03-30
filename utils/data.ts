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
