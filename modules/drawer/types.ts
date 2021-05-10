export type DrawerState = {
  getLikeList: {
    loading: boolean;
    data: null | LikeListItemType[];
    error: null | unknown;
  };
  removeLikeItem: {
    loading: boolean;
    data: null | { postId: number };
    error: null | unknown;
  };
  getTempList: {
    loading: boolean;
    data: null | TempItemType[];
    error: null | unknown;
  };
  removeTempPost: {
    loading: boolean;
    data: null | { postId: number };
    error: null | unknown;
  };
  getRecentList: {
    loading: boolean;
    data: null | RecentViewType[];
    error: null | unknown;
  };
  removeRecentView: {
    loading: boolean;
    data: null | { recentId: number };
    error: null | unknown;
  };
  getBinderList: {
    loading: boolean;
    data: PhotoBinderType[] | null;
    error: null | unknown;
  };
  getBinderDetail: {
    loading: boolean;
    data: PhotoBinderType | null;
    error: null | unknown;
  };
  updateBinderDetail: {
    loading: boolean;
    data: UpdatePhotoBinderPayload | null;
    error: null | unknown;
  };
  removeBinder: {
    loading: boolean;
    data: null | { binderId: number };
    error: null | unknown;
  };
  removeBinderPhoto: {
    loading: boolean;
    data: number[] | null | { id: number; src: string }[];
    error: null | unknown;
  };
};

export type LikeListItemType = {
  id: number;
  title: string;
  summary: string;
  hits: number;
  thumbnail: string;
  updatedAt: Date;
  User: { id: number; nickname: string; avatar: string };
};

export type TempItemType = {
  id: number;
  content: string;
  title: string;
  updatedAt: string;
};
export type RecentViewType = {
  id: number;
  date: Date;
  Post: LikeListItemType;
};
export type PhotoBinderType = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  PostImages: { id: number; src: string }[];
};
export type RemoveLikesPayload = {
  userId: number;
  postId: number;
};
export type UpdatePhotoBinderPayload = {
  title: string;
  description: string;
  BinderId: number;
};
