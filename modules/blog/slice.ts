import { createSlice } from '@reduxjs/toolkit';
import {
  loadBlogUserAction,
  loadBlogPostListAction,
  loadBlogPicstoryListAction,
} from './thunk';
import { BlogState } from './type';

const initialState: BlogState = {
  blogUserData: null,
  blogPostListData: [],
  blogPicstoryListData: [],
  loadBlogUser: { loading: false, done: false, error: null },
  loadBlogPostList: { loading: false, done: false, error: null },
  loadBlogPicstoryList: { loading: false, done: false, error: null },
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadBlogUserAction.pending, state => {
        state.loadBlogUser.loading = true;
        state.loadBlogUser.done = false;
        state.loadBlogUser.error = null;
      })
      .addCase(loadBlogUserAction.fulfilled, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.done = true;
        state.loadBlogUser.error = null;
        state.blogUserData = payload;
      })
      .addCase(loadBlogUserAction.rejected, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.done = false;
        state.loadBlogUser.error = payload;
      })
      .addCase(loadBlogPostListAction.pending, state => {
        state.loadBlogPostList.loading = true;
        state.loadBlogPostList.done = false;
        state.loadBlogPostList.error = null;
      })
      .addCase(loadBlogPostListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.done = true;
        state.loadBlogPostList.error = null;
        state.blogPostListData = payload;
      })
      .addCase(loadBlogPostListAction.rejected, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.done = false;
        state.loadBlogPostList.error = payload;
      })
      .addCase(loadBlogPicstoryListAction.pending, state => {
        state.loadBlogPicstoryList.loading = true;
        state.loadBlogPicstoryList.done = false;
        state.loadBlogPicstoryList.error = null;
      })
      .addCase(loadBlogPicstoryListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.done = true;
        state.loadBlogPicstoryList.error = null;
        state.blogPicstoryListData = payload;
      })
      .addCase(loadBlogPicstoryListAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.done = false;
        state.loadBlogPicstoryList.error = payload;
      });
  },
});

export default blogSlice.reducer;
