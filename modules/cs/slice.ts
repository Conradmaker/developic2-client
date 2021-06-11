import { createSlice } from '@reduxjs/toolkit';
import { getFaqAction, getNoticeAction } from './thunk';
import { CsState, FaqType, NoticeType } from './type';

const initialState: CsState = {
  getCs: { loading: false, data: null, error: null },
  hasMore: false,
  loadMore: false,
};

const csSlice = createSlice({
  name: 'cs',
  initialState,
  reducers: {
    hasMoreData(state, { payload }) {
      state.hasMore = payload;
    },
    isMoreLoading(state, { payload }) {
      state.loadMore = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNoticeAction.pending, state => {
        state.getCs.loading = true;
        state.getCs.error = null;
      })
      .addCase(getNoticeAction.fulfilled, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.error = null;
        state.getCs.data = state.loadMore
          ? (state.getCs.data as NoticeType[]).concat(payload)
          : payload;
      })
      .addCase(getNoticeAction.rejected, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = null;
        state.getCs.error = payload;
      })
      .addCase(getFaqAction.pending, state => {
        state.getCs.loading = true;
        state.getCs.error = null;
      })
      .addCase(getFaqAction.fulfilled, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.error = null;
        state.getCs.data = state.loadMore
          ? (state.getCs.data as FaqType[]).concat(payload)
          : payload;
      })
      .addCase(getFaqAction.rejected, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = null;
        state.getCs.error = payload;
      });
  },
});

export const { hasMoreData, isMoreLoading } = csSlice.actions;
export default csSlice.reducer;
