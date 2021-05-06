import { createSlice } from '@reduxjs/toolkit';
import { PicstoryState } from './index';
import {
  addPicPostAction,
  createPicstoryAction,
  getPicstoryListAction,
  removePicPostAction,
  removePicstoryAction,
} from './thunk';
import { Picstory } from './types';

const initialState: PicstoryState = {
  getPicstoryList: { loading: false, data: null, error: null },
  createPicstory: { loading: false, data: null, error: null },
  removePicstory: { loading: false, data: null, error: null },
  addPost: { loading: false, data: null, error: null },
  removePost: { loading: false, data: null, error: null },
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
      })
      .addCase(removePicstoryAction.pending, state => {
        state.removePicstory.loading = true;
        state.removePicstory.data = null;
        state.removePicstory.error = null;
      })
      .addCase(removePicstoryAction.fulfilled, (state, { payload }) => {
        state.removePicstory.loading = false;
        state.removePicstory.data = payload;
        state.removePicstory.error = null;
        state.getPicstoryList.data = (state.getPicstoryList.data as Picstory[]).filter(
          picstory => picstory.id !== parseInt(payload.id)
        );
      })
      .addCase(removePicstoryAction.rejected, (state, { payload }) => {
        state.removePicstory.loading = false;
        state.removePicstory.data = null;
        state.removePicstory.error = payload;
      })
      .addCase(addPicPostAction.pending, state => {
        state.addPost.loading = true;
        state.addPost.data = null;
        state.addPost.error = null;
      })
      .addCase(addPicPostAction.fulfilled, (state, { payload }) => {
        state.addPost.loading = false;
        state.addPost.data = payload;
        state.addPost.error = null;
      })
      .addCase(addPicPostAction.rejected, (state, { payload }) => {
        state.addPost.loading = false;
        state.addPost.data = null;
        state.addPost.error = payload;
      })
      .addCase(removePicPostAction.pending, state => {
        state.removePost.loading = true;
        state.removePost.data = null;
        state.removePost.error = null;
      })
      .addCase(removePicPostAction.fulfilled, (state, { payload }) => {
        state.removePost.loading = false;
        state.removePost.data = payload;
        state.removePost.error = null;
      })
      .addCase(removePicPostAction.rejected, (state, { payload }) => {
        state.removePost.loading = false;
        state.removePost.data = null;
        state.removePost.error = payload;
      });
  },
});

export default picstorySlice.reducer;
