import { createSlice } from '@reduxjs/toolkit';
import { getArchiveListAction, getArchiveDetailAction } from './thunk';
import { ArchiveState } from './type';

const initialState: ArchiveState = {
  getArchiveList: { loading: false, data: null, error: null },
  getArchiveDetail: { loading: false, data: null, error: null },
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArchiveListAction.pending, state => {
        state.getArchiveList.loading = true;
        state.getArchiveList.data = null;
        state.getArchiveList.error = null;
      })
      .addCase(getArchiveListAction.fulfilled, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = payload;
        state.getArchiveList.error = null;
      })
      .addCase(getArchiveListAction.rejected, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = null;
        state.getArchiveList.error = payload;
      })
      .addCase(getArchiveDetailAction.pending, state => {
        state.getArchiveDetail.loading = true;
        state.getArchiveDetail.data = null;
        state.getArchiveDetail.error = null;
      })
      .addCase(getArchiveDetailAction.fulfilled, (state, { payload }) => {
        state.getArchiveDetail.loading = false;
        state.getArchiveDetail.data = payload;
        state.getArchiveDetail.error = null;
      })
      .addCase(getArchiveDetailAction.rejected, (state, { payload }) => {
        state.getArchiveDetail.loading = false;
        state.getArchiveDetail.data = null;
        state.getArchiveDetail.error = payload;
      });
  },
});

export default archiveSlice.reducer;
