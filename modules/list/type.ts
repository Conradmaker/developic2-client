import { BlogPicstory } from '../blog';

export type ListState = {
  pageData:
    | Record<string, never>
    | FeedPageDataType
    | DiscoverPageDataType
    | MainPageDataType
    | SearchPageData;
  getSearchList: { loading: boolean; data: null | unknown; error: null | unknown };
  getArchiveList: { loading: boolean; data: null | unknown; error: null | unknown };
  getFeedList: { loading: boolean; data: null | unknown; error: null | unknown };
  getWriterList: { loading: boolean; data: null | unknown; error: null | unknown };
  getHashtagList: { loading: boolean; data: null | unknown; error: null | unknown };
  getTaggedPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  getPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMore: boolean;
  hasMore: boolean;
};
export type PostUser = {
  id: number;
  nickname: string;
  avatar: string;
  introduce: string;
  last_post?: Date;
  subscribers?: { id: number }[];
  Posts?: { id: number; thumbnail: string }[];
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
  HashTags?: { id: number; name: string }[];
};

export type ArchiveDataType = {
  id: number;
  poster: string;
  cost: number;
  title: string;
  author: string;
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

export type SearchPageData = {
  post: PostType[];
  writer: PostUser[];
  picstory: BlogPicstory[];
};

export type HashtagType = {
  id: number;
  name: string;
};
export type FeedPageDataType = {
  writer: PostUser[];
  post: PostType[];
};
export type DiscoverPageDataType = {
  hashtag: HashtagType[];
  post: PostType[];
};
export type GetWriterListPayload = {
  type: 'suber' | 'all';
  limit?: number;
  userId?: number;
};
export type GetHashTagListPayload = {
  sort?: 'recent' | 'popular';
  term?: 'all' | 'year' | 'month' | 'week' | 'day';
  limit?: number;
  offset?: number;
};

export type GetTaggedPostListPayload = {
  sort?: 'recent' | 'popular';
  limit?: number;
  offset?: number;
  HashtagId?: number;
  HashtagName?: string;
};

export type GetPostListPayload = {
  sort?: 'recent' | 'popular';
  term?: 'all' | 'year' | 'month' | 'week' | 'day';
  limit?: number;
  offset?: number;
};
export type SearchUserPost = {
  id: number;
  thumbnail: string;
};

export type getSearchListPayload = {
  query: string;
  sort?: 'recent' | 'popular';
  limit?: number;
  type: 'post' | 'writer' | 'picstory';
  offset?: number;
  term?: 'all' | 'month' | 'week' | 'day';
};

export type GetArchiveListPayload = {
  limit?: number;
  offset?: number;
};
