import { createSlice } from '@reduxjs/toolkit';
import { getArchiveListAction, getArchiveDetailAction, addArchiveAction } from './thunk';
import { Archive, ArchiveState } from './type';

const initialState: ArchiveState = {
  getArchiveList: { loading: false, data: null, error: null },
  getArchiveDetail: { loading: false, data: null, error: null },
  addArchive: { loading: false, data: null, error: null },
  hasMore: false,
  loadMore: false,
};

const archiveSlice = createSlice({
  name: 'archive',
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
      .addCase(getArchiveListAction.pending, state => {
        state.getArchiveList.loading = true;
        state.getArchiveList.error = null;
      })
      .addCase(getArchiveListAction.fulfilled, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.error = null;
        state.getArchiveList.data = state.loadMore
          ? (state.getArchiveList.data as Archive[]).concat(payload)
          : payload;
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
      })
      .addCase(addArchiveAction.pending, state => {
        state.addArchive.loading = true;
        state.addArchive.data = null;
        state.addArchive.error = null;
      })
      .addCase(addArchiveAction.fulfilled, (state, { payload }) => {
        state.addArchive.loading = false;
        state.addArchive.data = payload;
        state.addArchive.error = null;
      })
      .addCase(addArchiveAction.rejected, (state, { payload }) => {
        state.addArchive.loading = false;
        state.addArchive.data = null;
        state.addArchive.error = payload;
      });
  },
});

export const { hasMoreData, isMoreLoading } = archiveSlice.actions;
export default archiveSlice.reducer;
