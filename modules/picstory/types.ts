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

export type PicstoryState = {
  getPicstoryList: { loading: boolean; data: null | Picstory[]; error: null | unknown };
  createPicstory: { loading: boolean; data: null | Picstory; error: null | unknown };
};
