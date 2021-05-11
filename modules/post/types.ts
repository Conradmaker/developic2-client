export type PostState = {
  tempPost: { loading: boolean; data: null | PostContent; error: null | unknown };
  preSavePost: {
    loading: boolean;
    data: null | { postId: number };
    error: null | unknown;
  };
  submitPost: { loading: boolean; data: null | unknown; error: null | unknown };
  hashtagSearch: { loading: boolean; data: null | Hashtag[]; error: null | unknown };
  createHashtag: { loading: boolean; data: null | Hashtag; error: null | unknown };
  getPostDetail: { loading: boolean; data: null | PostData; error: null | unknown };
  getPhotoDetail: { loading: boolean; data: null | PostData; error: null | unknown };
};

export type Hashtag = {
  id: number;
  name: string;
};
export type PostUser = {
  id: number;
  nickname: string;
  avatar: string;
  introduce: null;
};
export type PostContent = {
  title: string;
  tagList: Hashtag[];
  content: string;
  allowComment: number;
  isPublic: number;
  thumbnail: string;
  summary: string;
  lisence: string;
  UserId: number;
  PostId: null | string;
  PicStories?: number[];
};
export type PostData = {
  id: number;
  state: number;
  title: string;
  content: string;
  allowComment: number;
  license: string;
  summary: string;
  isPublic: number;
  hits: number;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  User: PostUser;
  likers: { id: number }[];
  HashTags: Hashtag[];
  Comments: Comment[];
};
export interface Comment {
  id: number;
  content: string;
  mentionedUser: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  PostId: number;
  User: PostUser;
}
export type PreSavePayload = {
  title: string;
  tagList: number[];
  content: string;
  UserId: number;
  PostId: null | string;
  imageList: number[];
};
export type SubmitPostPayload = {
  allowComment: number;
  isPublic: number;
  thumbnail: string;
  summary: string;
  license: string;
  PostId: string;
};
