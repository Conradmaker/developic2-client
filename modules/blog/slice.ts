import { createSlice } from '@reduxjs/toolkit';
import { subscribeAction, unSubscribeAction } from '../user';
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
  loadBlogUser: { loading: false, data: null, error: null },
  loadBlogPostList: { loading: false, data: null, error: null },
  loadMoreBlogPostList: { loading: false, data: null, error: null },
  loadBlogPicstoryList: { loading: false, data: null, error: null },
  loadMoreBlogPicstoryList: { loading: false, data: null, error: null },
  loadBlogPicstoryDetail: { loading: false, data: null, error: null },
  userData: null,
  addBlogFollow: { loading: false, data: null, error: null },
  removeBlogFollow: { loading: false, data: null, error: null },
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadBlogUserAction.pending, state => {
        state.loadBlogUser.loading = true;
        state.loadBlogUser.data = null;
        state.loadBlogUser.error = null;
      })
      .addCase(loadBlogUserAction.fulfilled, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.data = payload;
        state.loadBlogUser.error = null;
        state.blogUserData = payload;
      })
      .addCase(loadBlogUserAction.rejected, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.data = null;
        state.loadBlogUser.error = payload;
      })
      .addCase(loadBlogPostListAction.pending, state => {
        state.loadBlogPostList.loading = true;
        state.loadBlogPostList.data = null;
        state.loadBlogPostList.error = null;
      })
      .addCase(loadBlogPostListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.data = payload;
        state.loadBlogPostList.error = null;
        state.blogPostListData = payload;
        state.hasMoreBlogLists = payload.length === 10;
      })
      .addCase(loadBlogPostListAction.rejected, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.data = null;
        state.loadBlogPostList.error = payload;
      }) // 블로그 글 목록 추가 로드
      .addCase(loadMoreBlogPostListAction.pending, state => {
        state.loadMoreBlogPostList.loading = true;
        state.loadMoreBlogPostList.data = null;
        state.loadMoreBlogPostList.error = null;
      })
      .addCase(loadMoreBlogPostListAction.fulfilled, (state, { payload }) => {
        state.loadMoreBlogPostList.loading = false;
        state.loadMoreBlogPostList.data = payload;
        state.loadMoreBlogPostList.error = null;
        state.blogPostListData = (state.blogPostListData as BlogPost[]).concat(payload);
        state.hasMoreBlogLists = payload.length === 10;
      })
      .addCase(loadMoreBlogPostListAction.rejected, (state, { payload }) => {
        state.loadMoreBlogPostList.loading = false;
        state.loadMoreBlogPostList.data = null;
        state.loadMoreBlogPostList.error = payload;
      })
      .addCase(loadBlogPicstoryListAction.pending, state => {
        state.loadBlogPicstoryList.loading = true;
        state.loadBlogPicstoryList.data = null;
        state.loadBlogPicstoryList.error = null;
      })
      .addCase(loadBlogPicstoryListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.data = payload;
        state.loadBlogPicstoryList.error = null;
        state.blogPicstoryListData = payload;
        state.hasMoreBlogLists = payload.length === 10;
      })
      .addCase(loadBlogPicstoryListAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.data = null;
        state.loadBlogPicstoryList.error = payload;
      })
      // 픽스토리 목록 추가 로드
      .addCase(loadMoreBlogPicstoryListAction.pending, state => {
        state.loadMoreBlogPicstoryList.loading = true;
        state.loadMoreBlogPicstoryList.data = null;
        state.loadMoreBlogPicstoryList.error = null;
      })
      .addCase(loadMoreBlogPicstoryListAction.fulfilled, (state, { payload }) => {
        state.loadMoreBlogPicstoryList.loading = false;
        state.loadMoreBlogPicstoryList.data = payload;
        state.loadMoreBlogPicstoryList.error = null;
        state.blogPicstoryListData = (state.blogPicstoryListData as BlogPicstory[]).concat(
          payload
        );
        state.hasMoreBlogLists = payload.length === 10;
      })
      .addCase(loadMoreBlogPicstoryListAction.rejected, (state, { payload }) => {
        state.loadMoreBlogPicstoryList.loading = false;
        state.loadMoreBlogPicstoryList.data = null;
        state.loadMoreBlogPicstoryList.error = payload;
      })
      .addCase(loadBlogPicstoryDetailAction.pending, state => {
        state.loadBlogPicstoryDetail.loading = true;
        state.loadBlogPicstoryDetail.data = null;
        state.loadBlogPicstoryDetail.error = null;
      })
      .addCase(loadBlogPicstoryDetailAction.fulfilled, (state, { payload }) => {
        state.loadBlogPicstoryDetail.loading = false;
        state.loadBlogPicstoryDetail.data = payload;
        state.loadBlogPicstoryDetail.error = null;
        state.blogPicstoryDetailData = payload;
      })
      .addCase(loadBlogPicstoryDetailAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryDetail.loading = false;
        state.loadBlogPicstoryDetail.data = null;
        state.loadBlogPicstoryDetail.error = payload;
      })
      .addCase(subscribeAction.fulfilled, state => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.error = null;
        if (state.blogUserData?.suberCount) {
          state.blogUserData.suberCount += 1;
        }
      })
      .addCase(unSubscribeAction.fulfilled, state => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.error = null;
        if (state.blogUserData?.suberCount) {
          state.blogUserData.suberCount -= 1;
        }
      });
  },
});

export default blogSlice.reducer;
