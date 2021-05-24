export type ListState = {
  pageData: null | FeedPageDataType;
  loadSearchPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreSearchPostList: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
  getFeedList: { loading: boolean; data: null | unknown; error: null | unknown };
  getWriterList: { loading: boolean; data: null | unknown; error: null | unknown };
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

export type FeedPageDataType = {
  writer: PostUser[];
  post: PostType[];
};
export type GetWriterListPayload = {
  type: 'suber' | 'all';
  limit?: number;
  userId?: number;
};
