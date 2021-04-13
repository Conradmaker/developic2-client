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

export const SearchListOptions = {
  Popular: 'popular',
  Recent: 'recent',
};

export const BlogNavData: NavDataType = [
  { name: '글', link: '/blog/work' },
  { name: '픽스토리', link: '/blog/picstory' },
  { name: '소개', link: '/blog/info' },
];

interface PostItem {
  id: number;
  postImgUrl: string;
  title: string;
  description: string;
  userName?: string;
  avatarImgUrl?: string;
  likeCount?: number;
  viewCount?: number;
  date?: string;
  picstoryTitle?: string;
}
export type PostDataType = PostItem[];

export const PostData: PostDataType = [
  {
    id: 1,
    postImgUrl: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    title: '좋은 제목과 좋은 사진의 상관관계',
    description:
      '황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가 황금시대다. 미묘한 품에 그들에게 귀는 관현악이며, 너의 타오르고 스며들어 듣는다. 것이다.보라, 그들의 풍부하게 끝까지 주는 그리하였는가?',
    userName: '1번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
    date: '2021.04.12',
    picstoryTitle: '사진에 관한 좋은 이론 공부',
  },
  {
    id: 2,
    postImgUrl: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
    title: '좋은 제목과 좋은 사진의 상관관계',
    description:
      '황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가 황금시대다. 미묘한 품에 그들에게 귀는 관현악이며, 너의 타오르고 스며들어 듣는다. 것이다.보라, 그들의 풍부하게 끝까지 주는 그리하였는가?',
    userName: '2번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
    date: '2021.04.12',
    picstoryTitle: '사진에 관한 좋은 이론 공부',
  },
  {
    id: 3,
    postImgUrl:
      'https://images.unsplash.com/photo-1618118850468-71176468ef6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80',
    title: '좋은 제목과 좋은 사진의 상관관계',
    description:
      '황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가 황금시대다. 미묘한 품에 그들에게 귀는 관현악이며, 너의 타오르고 스며들어 듣는다. 것이다.보라, 그들의 풍부하게 끝까지 주는 그리하였는가?',
    userName: '3번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
    date: '2021.04.12',
    picstoryTitle: '사진에 관한 좋은 이론 공부',
  },
  {
    id: 4,
    postImgUrl:
      'https://images.unsplash.com/photo-1610752115639-9f563c566eda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    title: '좋은 제목과 좋은 사진의 상관관계',
    description:
      '황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가 황금시대다. 미묘한 품에 그들에게 귀는 관현악이며, 너의 타오르고 스며들어 듣는다. 것이다.보라, 그들의 풍부하게 끝까지 주는 그리하였는가?',
    userName: '4번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
    date: '2021.04.12',
    picstoryTitle: '사진에 관한 좋은 이론 공부',
  },
  {
    id: 5,
    postImgUrl:
      'data:image/jpeg;base64,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',
    title: '윌리엄 진서가 자전적 글을 쓰는 방법을 말하는 책',
    description: '진서는 "자서전, 회고록, 개인사·가족사 기록 등 형식과 관계없이 스스로의',
    userName: '5번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
  },
  {
    id: 6,
    postImgUrl:
      'data:image/jpeg;base64,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',
    title: '윌리엄 진서가 자전적 글을 쓰는 방법을 말하는 책',
    description: '진서는 "자서전, 회고록, 개인사·가족사 기록 등 형식과 관계없이 스스로의',
    userName: '6번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    likeCount: 133,
    viewCount: 214,
  },
];

export interface UserItem {
  id: number;
  userName: string;
  avatarImgUrl: string;
  userIntro: string;
  followerCount: number;
  postCount: number;
  imgUrl: string[];
}

export type UserDataType = UserItem[];
export const UserInfoData: UserDataType = [
  {
    id: 1,
    userName: '1번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
  {
    id: 2,
    userName: '2번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
  {
    id: 3,
    userName: '3번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
  {
    id: 4,
    userName: '4번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
  {
    id: 5,
    userName: '5번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
  {
    id: 6,
    userName: '6번 작가',
    avatarImgUrl:
      'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    userIntro: 'CEO at ABC Corporation',
    followerCount: 198,
    postCount: 198,
    imgUrl: [
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
      'https://picsum.photos/130/100',
    ],
  },
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
