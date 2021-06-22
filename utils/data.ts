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
  { name: '작성중인 글', link: '/user/drawer/save' },
  { name: '포토 바인더', link: '/user/drawer/binder' },
];

export const SettingNavData: NavDataType = [
  { name: '내 정보', link: '/user/setting/info' },
  { name: '소개', link: '/user/setting/intro' },
  { name: '통계', link: '/user/setting/stats' },
];

export const SearchListOptions = {
  Popular: 'popular',
  Recent: 'recent',
};

export const BlogNavData: NavDataType = [
  { name: '글', link: '/post' },
  { name: '픽스토리', link: '/picstory' },
  { name: '소개', link: '/info' },
];

export const SearchNavData: NavDataType = [
  { name: '글', link: '/search/post' },
  { name: '작가', link: '/search/writer' },
  { name: '픽스토리', link: '/search/picstory' },
];

export const copyRightData = [
  'Copyright © All Rights Reserved',
  'CC BY (저작자표시)',
  'CC BY-SA (저작자표시-동일조건변경허락)',
  'CC BY-ND (저작자표시-변경금지)',
  'CC BY-NC (저작자표시-비영리)',
  'CC BY-NC-SA (저작자표시-비영리-동일조건변경허락)',
  'CC BY-NC-ND (저작자표시-비영리-변경금지)',
];

export const fakePicstoryList = [
  { id: 1, name: '픽스토리1' },
  { id: 2, name: '픽스토리2' },
  { id: 3, name: '픽스토리3' },
  { id: 5, name: '픽스토리4' },
  { id: 6, name: '픽스토리5' },
  { id: 7, name: '픽스토리6' },
  { id: 8, name: '픽스토리7' },
];

export const searchSortOptionData = [
  { name: '인기순', value: 'popular' },
  { name: '최신순', value: 'recent' },
];

export const searchDateOptionData = [
  { name: '모든 기간', value: 'all' },
  { name: '최근 24시간', value: 'day' },
  { name: '최근 1주일', value: 'week' },
  { name: '최근 1개월', value: 'month' },
];

export type UserMenuNavData = {
  title: string;
  content: {
    name: string;
    link: string;
  }[];
};
export const userMenuNavData: UserMenuNavData[] = [
  {
    title: '집필',
    content: [
      { name: '새 글 작성', link: '/edit/content/new' },
      { name: '임시저장 글', link: '/user/drawer/save' },
    ],
  },
  {
    title: '내 서랍',
    content: [
      { name: '포토바인더', link: '/user/drawer/binder' },
      { name: '좋아요 목록', link: '/user/drawer/like' },
      { name: '최근 본 글', link: '/user/drawer/recent' },
    ],
  },
  {
    title: '설정',
    content: [
      { name: '계정정보', link: '/user/setting/info' },
      { name: '소개', link: '/user/setting/intro' },
      { name: '통계', link: '/user/setting/stats' },
    ],
  },
];
