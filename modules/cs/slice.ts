import { createSlice } from '@reduxjs/toolkit';
import { getFaqAction, getNoticeAction } from './thunk';
import { CsState } from './type';

const initialState: CsState = {
  // getNotice: { loading: false, data: null, error: null },
  // getFaq: { loading: false, data: null, error: null },
  getCs: { loading: false, data: null, error: null },
};

const csSlice = createSlice({
  name: 'cs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNoticeAction.pending, state => {
        state.getCs.loading = true;
        state.getCs.data = null;
        state.getCs.error = null;
      })
      .addCase(getNoticeAction.fulfilled, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = payload;
        state.getCs.error = null;
      })
      .addCase(getNoticeAction.rejected, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = null;
        state.getCs.error = payload;
      })
      .addCase(getFaqAction.pending, state => {
        state.getCs.loading = true;
        state.getCs.data = null;
        state.getCs.error = null;
      })
      .addCase(getFaqAction.fulfilled, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = payload;
        state.getCs.error = null;
      })
      .addCase(getFaqAction.rejected, (state, { payload }) => {
        state.getCs.loading = false;
        state.getCs.data = null;
        state.getCs.error = payload;
      });
  },
});

export default csSlice.reducer;
