import { createSlice } from '@reduxjs/toolkit';
import { PostState } from './index';
import { getTempPostAction, postPreSaveAction, submitPostAction } from './thunk';

const initialState: PostState = {
  tempPost: { loading: false, data: null, error: null },
  preSavePost: { loading: false, data: null, error: null },
  submitPost: { loading: false, data: null, error: null },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTempPostAction.pending, state => {
        state.tempPost.loading = true;
        state.tempPost.data = null;
        state.tempPost.error = null;
      })
      .addCase(getTempPostAction.fulfilled, (state, { payload }) => {
        state.tempPost.loading = false;
        state.tempPost.data = payload;
        state.tempPost.error = null;
      })
      .addCase(getTempPostAction.rejected, (state, { payload }) => {
        state.tempPost.loading = false;
        state.tempPost.data = null;
        state.tempPost.error = payload;
      })
      .addCase(postPreSaveAction.pending, state => {
        state.preSavePost.loading = true;
        state.preSavePost.data = null;
        state.preSavePost.error = null;
      })
      .addCase(postPreSaveAction.fulfilled, (state, { payload }) => {
        state.preSavePost.loading = false;
        state.preSavePost.data = payload;
        state.preSavePost.error = null;
      })
      .addCase(postPreSaveAction.rejected, (state, { payload }) => {
        state.preSavePost.loading = false;
        state.preSavePost.data = null;
        state.preSavePost.error = payload;
      })
      .addCase(submitPostAction.pending, state => {
        state.submitPost.loading = true;
        state.submitPost.data = null;
        state.submitPost.error = null;
      })
      .addCase(submitPostAction.fulfilled, (state, { payload }) => {
        state.submitPost.loading = false;
        state.submitPost.data = payload;
        state.submitPost.error = null;
      })
      .addCase(submitPostAction.rejected, (state, { payload }) => {
        state.submitPost.loading = false;
        state.submitPost.data = null;
        state.submitPost.error = payload;
      });
  },
});

export default postSlice.reducer;
