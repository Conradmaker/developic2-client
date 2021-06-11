export type BlogState = {
  loadBlogUser: { loading: boolean; data: null | BlogUserData; error: null | unknown };
  loadBlogPostList: {
    loading: boolean;
    data: BlogPost[] | null;
    error: null | unknown;
  };
  loadBlogPicstoryList: {
    loading: boolean;
    data: BlogPicstory[] | null;
    error: null | unknown;
  };
  loadBlogPicstoryDetail: {
    loading: boolean;
    data: BlogPicstory | null;
    error: null | unknown;
  };
  addSubscribe: { loading: boolean; data: null | unknown; error: null };
  removeSubscribe: { loading: boolean; data: null | unknown; error: null };
  loadMore: boolean;
  hasMore: boolean;
};

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

export interface BlogPost {
  id: number;
  title: string;
  summary?: string;
  thumbnail: string;
  hits: number;
  likeCount?: number;
  likers?: { id: number }[];
  createdAt: Date;
  UserId?: number;
}

export interface BlogPicstory {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  createdAt?: Date;
  Posts: BlogPost[];
}

export type BlogPicstoryDetailData = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  createdAt?: Date;
  Posts: BlogPost[];
};

export type LoadBlogListPayload = {
  userId: number;
  limit?: number;
  offset?: number;
};
