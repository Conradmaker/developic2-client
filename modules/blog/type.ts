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
  summary: string;
  thumbnail: string;
  hits: number;
  likeCount: number;
  updatedAt: Date;
}

export interface BlogPicstoryListData {
  blogPicstories: BlogPicstory[];
}

export interface BlogPicstory {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  updatedAt: Date;
  Posts: Post[] | [];
}

export interface Post {
  id: number;
  title: string;
  thumbnail: string;
  hits: number;
  likers: Liker[];
}

export interface Liker {
  id: number;
}

export type BlogState = {
  loadBlogUser: { loading: boolean; done: boolean; error: null | unknown };
  loadBlogPostList: { loading: boolean; done: boolean; error: null | unknown };
  loadBlogPicstoryList: { loading: boolean; done: boolean; error: null | unknown };
  blogUserData: BlogUserData | null;
  blogPostListData: BlogPostListData['blogPosts'] | [];
  blogPicstoryListData: BlogPicstoryListData['blogPicstories'] | [];
};

export type BlogPayload = {
  userId: number;
};

export type LoadBlogUserResponse = BlogUserData;
export type LoadBlogPostListResponse = BlogPostListData['blogPosts'];
export type LoadBlogPicstoryListResponse = BlogPicstoryListData['blogPicstories'];
