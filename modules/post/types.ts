export type PostState = {
  tempPost: { loading: boolean; data: null | PostContent; error: null | unknown };
  preSavePost: {
    loading: boolean;
    data: null | { postId: number };
    error: null | unknown;
  };
  submitPost: { loading: boolean; data: null | { id: number }; error: null | unknown };
  removePost: { loading: boolean; data: null | PostData; error: null | unknown };
  hashtagSearch: { loading: boolean; data: null | Hashtag[]; error: null | unknown };
  createHashtag: { loading: boolean; data: null | Hashtag; error: null | unknown };
  getPostDetail: { loading: boolean; data: null | PostData; error: null | unknown };
  getPhotoDetail: { loading: boolean; data: null | PhotoDetail; error: null | unknown };
  createComment: { loading: boolean; data: null | Comment; error: null | unknown };
  updateComment: { loading: boolean; data: null | Comment; error: null | unknown };
  removeComment: { loading: boolean; data: null | Comment; error: null | unknown };
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
  id: number;
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
  mentionedUser: string | null;
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

export type PhotoDetail = {
  id: number;
  src: string;
  updatedAt: Date;
  UserId: number;
  PostId: number;
  User: PostUser;
  MetaDatum: MetaData;
  PhotoBinders: { id: number; UserId: number }[];
};

export type MetaData = {
  id: number;
  manufacturer: string;
  model: string;
  fValue: string;
  resolutionX: number;
  resolutionY: number;
  location: string;
  exposureTime: string;
  size: string;
  shutterSpeed: string;
  ISO: number;
  PostImageId: number;
};

export type SubmitPostPayload = {
  allowComment: number;
  isPublic: number;
  thumbnail: string;
  summary: string;
  license: string;
  PostId: string;
};

export type CreateCommentPayload = {
  UserId: number;
  PostId: number;
  content: string;
  mentionedUser: null | string;
};

export type UpdateCommentPayload = {
  CommentId: number;
  content: string;
  mentionedUser: null | string;
};
