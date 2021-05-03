export type Hashtag = {
  id: number;
  name: string;
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
};

export type PreSavePayload = {
  title: string;
  tagList: number[];
  content: string;
  UserId: number;
  PostId: null | string;
};
export type SubmitPostPayload = {
  allowComment: number;
  isPublic: number;
  thumbnail: string;
  summary: string;
  license: string;
  PostId: string;
};

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
};
