import { createSlice } from '@reduxjs/toolkit';
import { getFeedPostAction, getWriterListAction } from './thunk';
import { ListState } from './type';

const initialState: ListState = {
  pageData: null,
  loadSearchPostList: { loading: false, data: null, error: null },
  loadMoreSearchPostList: { loading: false, data: null, error: null },
  getFeedList: { loading: false, data: null, error: null },
  getWriterList: { loading: false, data: null, error: null },
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeedPostAction.pending, state => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = null;
        state.pageData = { post: [], writer: [] };
      })
      .addCase(getFeedPostAction.fulfilled, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = true;
        state.getFeedList.error = null;
        state.pageData.post = payload;
      })
      .addCase(getFeedPostAction.rejected, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = payload;
      })
      .addCase(getWriterListAction.pending, state => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = null;
        state.pageData = { post: [], writer: [] };
      })
      .addCase(getWriterListAction.fulfilled, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = true;
        state.getFeedList.error = null;
        state.pageData.writer = payload;
      })
      .addCase(getWriterListAction.rejected, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = payload;
      });
  },
});

export default listSlice.reducer;
