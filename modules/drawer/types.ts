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

export type RemoveLikesPayload = {
  userId: number;
  postId: number;
};
