export type ListState = {
  pageData: Record<string, never> | MainPageDataType;
  loadSearchPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreSearchPostList: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
  getArchiveList: { loading: boolean; data: null | unknown; error: null | unknown };
};

export type PostUser = {
  id: number;
  nickname: string;
  avatar: string;
  introduce: string;
  last_post?: Date;
};

export type PostType = {
  id: number;
  title: string;
  summary: string;
  hits: number;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  User: PostUser;
  likers?: { id: number }[];
};

export type ArchiveDataType = {
  id: number;
  poster: string;
  cost: number;
  title: string;
  startDate: string;
  endDate: string;
  User: {
    id: number;
    email: string;
    name: string;
    avatar: string;
  };
};

export type MainPageDataType = {
  archive: ArchiveDataType[];
  writer: PostUser[];
  post: PostType[];
};
