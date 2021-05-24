export type ListState = {
  pageData: [];
  loadSearchPostList: { loading: boolean; data: null | unknown; error: null | unknown };
  loadMoreSearchPostList: {
    loading: boolean;
    data: null | unknown;
    error: null | unknown;
  };
};
