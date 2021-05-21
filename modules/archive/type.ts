export interface Archive {
  id: number;
  cost: number;
  webPage: string;
  contact: string;
  email: string;
  title: string;
  author: string;
  address: string;
  description: string;
  isAllow: boolean;
  startDate: string;
  endDate: string;
  poster: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  User: {
    id: number;
    email: string;
    name: string;
    avatar: string;
  };
}

export type ArchiveState = {
  getArchiveList: { loading: boolean; data: null | Archive[]; error: null | unknown };
  getArchiveDetail: { loading: boolean; data: null | Archive; error: null | unknown };
  addArchive: { loading: boolean; data: null | Archive; error: null | unknown };
};

export type AddArchivePayload = {
  cost: number;
  webPage: string;
  contact: string;
  email: string;
  title: string;
  author: string;
  address: string;
  description: string;
  startDate: string;
  endDate: string;
  poster: string;
  UserId: number;
  imageList: number[];
};
