import { BlogPicstory } from '../blog';
import { Subscriber } from '../user';

export type ListState = {
  pageData: null | SearchPageData['post' | 'writer' | 'picstory'];
  loadSearchList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreSearchList: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
  hasMoreSearchs: boolean;
};

export type SearchPageData = {
  post: PostType[];
  writer: PostUser[];
  picstory: BlogPicstory[];
};

export type PostType = {
  id: number;
  title: string;
  summary: string;
  hits: number;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  User?: PostUser;
  likers?: { id: number }[];
};

export type PostUser = {
  id: number;
  nickname: string;
  avatar: string;
  introduce: string;
  last_post?: Date;
  subscribers?: Subscriber[];
  writers?: Subscriber[];
  Posts?: SearchUserPost[];
};

export type SearchUserPost = {
  id: number;
  thumbnail: string;
};

export type LoadSearchListPayload = {
  query: string | string[] | undefined;
  sort?: 'recent' | 'popular';
  type: 'post' | 'writer' | 'picstory';
  offset?: number;
};
