import { createSlice } from '@reduxjs/toolkit';
import { addBlogFollowAction, removeBlogFollowAction } from '../user';
import {
  loadBlogUserAction,
  loadBlogPostListAction,
  loadBlogPicstoryListAction,
  loadBlogPicstoryDetailAction,
  loadMoreBlogPostListAction,
  loadMoreBlogPicstoryListAction,
} from './thunk';
import { BlogPicstory, BlogPost, BlogState } from './type';

const initialState: BlogState = {
  blogUserData: null,
  hasMoreBlogLists: true,
  blogPostListData: [],
  blogPicstoryListData: [],
  blogPicstoryDetailData: null,
  loadBlogUser: { loading: false, done: false, error: null },
  loadBlogPostList: { loading: false, done: false, error: null },
  loadMoreBlogPostList: { loading: false, done: false, error: null },
  loadBlogPicstoryList: { loading: false, done: false, error: null },

  loadBlogPicstoryDetail: { loading: false, done: false, error: null },
  userData: null,
  addBlogFollow: { loading: false, done: false, error: null },
  removeBlogFollow: { loading: false, done: false, error: null },
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
        state.hasMoreBlogLists = payload.length === 12;
      })
      .addCase(loadBlogPostListAction.rejected, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.done = false;
        state.loadBlogPostList.error = payload;
      }) // 블로그 글 목록 추가 로드
      .addCase(loadMoreBlogPostListAction.pending, state => {
        state.loadMoreBlogPostList.loading = true;
        state.loadMoreBlogPostList.done = false;
        state.loadMoreBlogPostList.error = null;
      })
      .addCase(loadMoreBlogPostListAction.fulfilled, (state, { payload }) => {
        state.loadMoreBlogPostList.loading = false;
        state.loadMoreBlogPostList.done = true;
        state.loadMoreBlogPostList.error = null;
        state.blogPostListData = (state.blogPostListData as BlogPost[]).concat(payload);
        state.hasMoreBlogLists = payload.length === 12;
      })
      .addCase(loadMoreBlogPostListAction.rejected, (state, { payload }) => {
        state.loadMoreBlogPostList.loading = false;
        state.loadMoreBlogPostList.done = false;
        state.loadMoreBlogPostList.error = payload;
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
      })
      // 픽스토리 목록 추가 로드
      .addCase(loadMoreBlogPicstoryListAction.pending, state => {
        state.loadMoreBlogPicstoryList.loading = true;
        state.loadMoreBlogPicstoryList.done = false;
        state.loadMoreBlogPicstoryList.error = null;
      })
      .addCase(loadMoreBlogPicstoryListAction.fulfilled, (state, { payload }) => {
        state.loadMoreBlogPicstoryList.loading = false;
        state.loadMoreBlogPicstoryList.done = true;
        state.loadMoreBlogPicstoryList.error = null;
        state.blogPicstoryListData = (state.blogPicstoryListData as BlogPicstory[]).concat(
          payload
        );
        state.hasMoreBlogLists = payload.length === 12;
      })
      .addCase(loadMoreBlogPicstoryListAction.rejected, (state, { payload }) => {
        state.loadMoreBlogPicstoryList.loading = false;
        state.loadMoreBlogPicstoryList.done = false;
        state.loadMoreBlogPicstoryList.error = payload;
      })
      .addCase(loadBlogPicstoryDetailAction.pending, state => {
        state.loadBlogPicstoryDetail.loading = true;
        state.loadBlogPicstoryDetail.done = false;
        state.loadBlogPicstoryDetail.error = null;
      })
      .addCase(loadBlogPicstoryDetailAction.fulfilled, (state, { payload }) => {
        state.loadBlogPicstoryDetail.loading = false;
        state.loadBlogPicstoryDetail.done = true;
        state.loadBlogPicstoryDetail.error = null;
        state.blogPicstoryDetailData = payload;
      })
      .addCase(loadBlogPicstoryDetailAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryDetail.loading = false;
        state.loadBlogPicstoryDetail.done = false;
        state.loadBlogPicstoryDetail.error = payload;
      })
      .addCase(addBlogFollowAction.fulfilled, state => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.error = null;
        if (state.blogUserData?.suberCount) {
          state.blogUserData.suberCount += 1;
        }
      })
      .addCase(removeBlogFollowAction.fulfilled, state => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.error = null;
        if (state.blogUserData?.suberCount) {
          state.blogUserData.suberCount -= 1;
        }
      });
  },
});

export default blogSlice.reducer;
