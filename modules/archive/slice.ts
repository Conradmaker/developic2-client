import { createSlice } from '@reduxjs/toolkit';
import { getArchiveListAction } from './thunk';
import { ArchiveState } from './type';

const initialState: ArchiveState = {
  getArchiveList: { loading: false, data: null, error: null },
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
      });
  },
});

export default archiveSlice.reducer;
