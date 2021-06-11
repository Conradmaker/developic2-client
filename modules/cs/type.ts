export type AdminType = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type NoticeType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  AdminId: number;
  Admin: AdminType;
};

export type FaqType = {
  id: number;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  AdminId: number;
};

export type InqueryPayload = {
  email: string;
  content: string;
  contact: string;
  type: string;
};

export type CsState = {
  getCs: {
    loading: boolean;
    data: null | NoticeType[] | FaqType[];
    error: null | unknown;
  };
  hasMore: boolean;
  loadMore: boolean;
};

export type GetCsPayload = {
  limit?: number;
  offset?: number;
};
