import { createSlice } from '@reduxjs/toolkit';
import { unSubscribeAction } from '../user';
import {
  getFeedPostAction,
  getHashtagListAction,
  getPostListAction,
  getTaggedPostListAction,
  getWriterListAction,
  getArchiveListAction,
} from './thunk';
import {
  DiscoverPageDataType,
  FeedPageDataType,
  ListState,
  MainPageDataType,
} from './type';

const initialState: ListState = {
  pageData: {},
  loadSearchPostList: { loading: false, data: null, error: null },
  loadMoreSearchPostList: { loading: false, data: null, error: null },
  getArchiveList: { loading: false, data: null, error: null },
  getFeedList: { loading: false, data: null, error: null },
  getWriterList: { loading: false, data: null, error: null },
  getHashtagList: { loading: false, data: null, error: null },
  getTaggedPostList: { loading: false, data: null, error: null },
  getPostList: { loading: false, data: null, error: null },
  loadMore: false,
  hasMore: true,
};

const listSlice = createSlice({
  name: 'list',
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
      .addCase(getArchiveListAction.pending, state => {
        state.getArchiveList.loading = true;
        state.getArchiveList.data = null;
        state.getArchiveList.error = null;
      })
      .addCase(getArchiveListAction.fulfilled, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = true;
        state.getArchiveList.error = null;
        (state.pageData as MainPageDataType).archive = payload;
      })
      .addCase(getArchiveListAction.rejected, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = null;
        state.getArchiveList.error = payload;
      })
      .addCase(getFeedPostAction.pending, state => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = null;
      })
      .addCase(getFeedPostAction.fulfilled, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = true;
        state.getFeedList.error = null;
        state.pageData.post = state.loadMore
          ? state.pageData.post.concat(payload)
          : payload;
      })
      .addCase(getFeedPostAction.rejected, (state, { payload }) => {
        state.getFeedList.loading = false;
        state.getFeedList.data = null;
        state.getFeedList.error = payload;
      })
      .addCase(getWriterListAction.pending, state => {
        state.getWriterList.loading = false;
        state.getWriterList.data = null;
        state.getWriterList.error = null;
      })
      .addCase(getWriterListAction.fulfilled, (state, { payload }) => {
        state.getWriterList.loading = false;
        state.getWriterList.data = true;
        state.getWriterList.error = null;
        (state.pageData as FeedPageDataType).writer = payload;
      })
      .addCase(getWriterListAction.rejected, (state, { payload }) => {
        state.getWriterList.loading = false;
        state.getWriterList.data = null;
        state.getWriterList.error = payload;
      })
      .addCase(getHashtagListAction.pending, state => {
        state.getHashtagList.loading = false;
        state.getHashtagList.data = null;
        state.getHashtagList.error = null;
      })
      .addCase(getHashtagListAction.fulfilled, (state, { payload }) => {
        state.getHashtagList.loading = false;
        state.getHashtagList.data = true;
        state.getHashtagList.error = null;
        (state.pageData as DiscoverPageDataType).hashtag = payload;
      })
      .addCase(getHashtagListAction.rejected, (state, { payload }) => {
        state.getHashtagList.loading = false;
        state.getHashtagList.data = null;
        state.getHashtagList.error = payload;
      })
      .addCase(getTaggedPostListAction.pending, state => {
        state.getTaggedPostList.loading = false;
        state.getTaggedPostList.data = null;
        state.getTaggedPostList.error = null;
      })
      .addCase(getTaggedPostListAction.fulfilled, (state, { payload }) => {
        state.getTaggedPostList.loading = false;
        state.getTaggedPostList.data = true;
        state.getTaggedPostList.error = null;
        state.pageData.post = state.loadMore
          ? state.pageData.post.concat(payload)
          : payload;
      })
      .addCase(getTaggedPostListAction.rejected, (state, { payload }) => {
        state.getTaggedPostList.loading = false;
        state.getTaggedPostList.data = null;
        state.getTaggedPostList.error = payload;
      })
      .addCase(getPostListAction.pending, state => {
        state.getPostList.loading = false;
        state.getPostList.data = null;
        state.getPostList.error = null;
      })
      .addCase(getPostListAction.fulfilled, (state, { payload }) => {
        state.getPostList.loading = false;
        state.getPostList.data = true;
        state.getPostList.error = null;
        state.pageData.post = state.loadMore
          ? state.pageData.post.concat(payload)
          : payload;
      })
      .addCase(getPostListAction.rejected, (state, { payload }) => {
        state.getPostList.loading = false;
        state.getPostList.data = null;
        state.getPostList.error = payload;
      })
      .addCase(unSubscribeAction.fulfilled, (state, { payload }) => {
        state.getPostList.loading = false;
        state.getPostList.data = true;
        state.getPostList.error = null;
        if ((state.pageData as FeedPageDataType).writer) {
          (state.pageData as FeedPageDataType).writer = (state.pageData as FeedPageDataType).writer.filter(
            writer => writer.id !== payload.writerId
          );
        }
      });
  },
});

export const { isMoreLoading, hasMoreData } = listSlice.actions;
export default listSlice.reducer;
