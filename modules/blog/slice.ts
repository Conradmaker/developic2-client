import { createSlice } from '@reduxjs/toolkit';
import { subscribeAction, unSubscribeAction } from '../user';
import {
  loadBlogUserAction,
  loadBlogPostListAction,
  loadBlogPicstoryListAction,
  loadBlogPicstoryDetailAction,
} from './thunk';
import { BlogPicstory, BlogPost, BlogState } from './type';

const initialState: BlogState = {
  loadBlogUser: { loading: false, data: null, error: null },
  loadBlogPostList: { loading: false, data: null, error: null },
  loadBlogPicstoryList: { loading: false, data: null, error: null },
  loadBlogPicstoryDetail: { loading: false, data: null, error: null },
  addSubscribe: { loading: false, data: null, error: null },
  removeSubscribe: { loading: false, data: null, error: null },
  loadMore: false,
  hasMore: false,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    isMoreLoading(state, { payload }) {
      state.loadMore = payload;
    },
    hasMoreData(state, { payload }) {
      state.hasMore = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadBlogUserAction.pending, state => {
        state.loadBlogUser.loading = true;
        state.loadBlogUser.data;
        state.loadBlogUser.error = null;
      })
      .addCase(loadBlogUserAction.fulfilled, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.data = payload;
        state.loadBlogUser.error = null;
      })
      .addCase(loadBlogUserAction.rejected, (state, { payload }) => {
        state.loadBlogUser.loading = false;
        state.loadBlogUser.data = null;
        state.loadBlogUser.error = payload;
      })
      .addCase(loadBlogPostListAction.pending, state => {
        state.loadBlogPostList.loading = true;
        state.loadBlogPostList.error = null;
      })
      .addCase(loadBlogPostListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.error = null;
        state.loadBlogPostList.data = state.loadMore
          ? (state.loadBlogPostList.data as BlogPost[]).concat(payload)
          : payload;
      })
      .addCase(loadBlogPostListAction.rejected, (state, { payload }) => {
        state.loadBlogPostList.loading = false;
        state.loadBlogPostList.data = null;
        state.loadBlogPostList.error = payload;
      })
      .addCase(loadBlogPicstoryListAction.pending, state => {
        state.loadBlogPicstoryList.loading = true;
        state.loadBlogPicstoryList.error = null;
      })
      .addCase(loadBlogPicstoryListAction.fulfilled, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.error = null;
        state.loadBlogPicstoryList.data = state.loadMore
          ? (state.loadBlogPicstoryList.data as BlogPicstory[]).concat(payload)
          : payload;
      })
      .addCase(loadBlogPicstoryListAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryList.loading = false;
        state.loadBlogPicstoryList.data = null;
        state.loadBlogPicstoryList.error = payload;
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
      })
      .addCase(loadBlogPicstoryDetailAction.rejected, (state, { payload }) => {
        state.loadBlogPicstoryDetail.loading = false;
        state.loadBlogPicstoryDetail.data = null;
        state.loadBlogPicstoryDetail.error = payload;
      })
      .addCase(subscribeAction.fulfilled, state => {
        state.addSubscribe.loading = false;
        state.addSubscribe.error = null;
        if (state.loadBlogUser.data?.suberCount) {
          state.loadBlogUser.data.suberCount += 1;
        }
      })
      .addCase(unSubscribeAction.fulfilled, state => {
        state.addSubscribe.loading = false;
        state.addSubscribe.error = null;
        if (state.loadBlogUser.data?.suberCount) {
          state.loadBlogUser.data.suberCount -= 1;
        }
      });
  },
});

export const { hasMoreData, isMoreLoading } = blogSlice.actions;
export default blogSlice.reducer;
