import { createSlice } from '@reduxjs/toolkit';
import { PicstoryState } from './index';
import { createPicstoryAction, getPicstoryListAction } from './thunk';
const initialState: PicstoryState = {
  getPicstoryList: { loading: false, data: null, error: null },
  createPicstory: { loading: false, data: null, error: null },
};

const picstorySlice = createSlice({
  name: 'picstory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPicstoryListAction.pending, state => {
        state.getPicstoryList.loading = true;
        state.getPicstoryList.data = null;
        state.getPicstoryList.error = null;
      })
      .addCase(getPicstoryListAction.fulfilled, (state, { payload }) => {
        state.getPicstoryList.loading = false;
        state.getPicstoryList.data = payload;
        state.getPicstoryList.error = null;
      })
      .addCase(getPicstoryListAction.rejected, (state, { payload }) => {
        state.getPicstoryList.loading = false;
        state.getPicstoryList.data = null;
        state.getPicstoryList.error = payload;
      })
      .addCase(createPicstoryAction.pending, state => {
        state.createPicstory.loading = true;
        state.createPicstory.data = null;
        state.createPicstory.error = null;
      })
      .addCase(createPicstoryAction.fulfilled, (state, { payload }) => {
        state.createPicstory.loading = false;
        state.createPicstory.data = payload;
        state.createPicstory.error = null;
      })
      .addCase(createPicstoryAction.rejected, (state, { payload }) => {
        state.createPicstory.loading = false;
        state.createPicstory.data = null;
        state.createPicstory.error = payload;
      });
  },
});

export default picstorySlice.reducer;
