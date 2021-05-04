export type Picstory = {
  id: number;
  title: string;
};

export type CreatePicstoryPayload = {
  title: string;
  thumbnail: string;
  description: string;
  UserId: number;
};

export type TogglePicPostPayload = { PostId: number; PicstoryId: number };

export type PicstoryState = {
  getPicstoryList: { loading: boolean; data: null | Picstory[]; error: null | unknown };
  createPicstory: { loading: boolean; data: null | Picstory; error: null | unknown };
  removePicstory: {
    loading: boolean;
    data: null | { id: string };
    error: null | unknown;
  };
  addPost: { loading: boolean; data: null | { id: number }; error: null | unknown };
  removePost: {
    loading: boolean;
    data: null | { id: number };
    error: null | unknown;
  };
};
