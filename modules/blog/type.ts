import { User } from '../user';

export type BlogUserData = {
  id: number;
  email: string;
  name: string;
  nickname: string;
  introduce: string;
  avatar: string;
  introduction?: string;
  website?: string;
  mostlyUseModel?: string;
  suberCount?: number;
  writerCount?: number;
};

export interface BlogPostListData {
  blogPosts: BlogPost[];
}

export interface BlogPost {
  id: number;
  title: string;
  summary?: string;
  thumbnail: string;
  hits: number;
  likeCount?: number;
  likers?: Liker[];
  createdAt: Date;
  UserId?: number;
}

export interface BlogPicstoryListData {
  blogPicstories: BlogPicstory[];
}

export interface BlogPicstory {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  createdAt?: Date;
  Posts: BlogPost[] | [];
}

export type blogPicstoryDetailData = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  createdAt?: Date;
  Posts: BlogPost[] | [];
};

export interface Liker {
  id: number;
}

export type BlogState = {
  loadBlogUser: { loading: boolean; data: null | unknown; error: null | unknown };
  loadBlogPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreBlogPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadBlogPicstoryList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreBlogPicstoryList: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
  loadBlogPicstoryDetail: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
  blogUserData: BlogUserData | null;
  blogPostListData: BlogPostListData['blogPosts'] | [];
  blogPicstoryListData: BlogPicstoryListData['blogPicstories'] | [];
  blogPicstoryDetailData: BlogPicstory | null;
  userData: User | null;
  addBlogFollow: { loading: boolean; data: null | unknown; error: null };
  removeBlogFollow: { loading: boolean; data: null | unknown; error: null };
  hasMoreBlogLists: boolean;
};

export type BlogPayload = {
  userId: number;
};

export type LoadBlogListPayload = {
  userId: string | string[] | undefined;
  offset?: number;
};

export type LoadBlogUserResponse = BlogUserData;
export type LoadBlogPostListResponse = BlogPostListData['blogPosts'];
export type LoadBlogPicstoryListResponse = BlogPicstoryListData['blogPicstories'];
export type LoadBlogPicstoryDetailResponse = blogPicstoryDetailData;