import { createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './';
import {
  getLikeListAction,
  getPhotoBinderDetailAction,
  getPhotoBinderListAction,
  getRecentViewsAction,
  getTempListAction,
  removeBinderPhotoAction,
  removeLikePostAction,
  removeRecentViewAction,
  removeTempPostAction,
  updatePhotoBinderDetailAction,
} from './thunk';
import { LikeListItemType, PhotoBinderType, RecentViewType, TempItemType } from './types';

const initialState: DrawerState = {
  getLikeList: { loading: false, data: null, error: null },
  removeLikeItem: { loading: false, data: null, error: null },
  getTempList: { loading: false, data: null, error: null },
  removeTempPost: { loading: false, data: null, error: null },
  getRecentList: { loading: false, data: null, error: null },
  removeRecentView: { loading: false, data: null, error: null },
  getBinderList: { loading: false, data: null, error: null },
  getBinderDetail: { loading: false, data: null, error: null },
  updateBinderDetail: { loading: false, data: null, error: null },
  removeBinderPhoto: { loading: false, data: null, error: null },
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLikeListAction.pending, state => {
        state.getLikeList.loading = true;
        state.getLikeList.data = null;
        state.getLikeList.error = null;
      })
      .addCase(getLikeListAction.fulfilled, (state, { payload }) => {
        state.getLikeList.loading = false;
        state.getLikeList.data = payload;
        state.getLikeList.error = null;
      })
      .addCase(getLikeListAction.rejected, (state, { payload }) => {
        state.getLikeList.loading = false;
        state.getLikeList.data = null;
        state.getLikeList.error = payload;
      })
      .addCase(removeLikePostAction.pending, state => {
        state.removeLikeItem.loading = true;
        state.removeLikeItem.data = null;
        state.removeLikeItem.error = null;
      })
      .addCase(removeLikePostAction.fulfilled, (state, { payload }) => {
        state.removeLikeItem.loading = false;
        state.removeLikeItem.data = payload;
        state.removeLikeItem.error = null;
        state.getLikeList.data = (state.getLikeList.data as LikeListItemType[]).filter(
          post => post.id !== payload.postId
        );
      })
      .addCase(removeLikePostAction.rejected, (state, { payload }) => {
        state.removeLikeItem.loading = false;
        state.removeLikeItem.data = null;
        state.removeLikeItem.error = payload;
      })
      .addCase(getTempListAction.pending, state => {
        state.getTempList.loading = true;
        state.getTempList.data = null;
        state.getTempList.error = null;
      })
      .addCase(getTempListAction.fulfilled, (state, { payload }) => {
        state.getTempList.loading = false;
        state.getTempList.data = payload;
        state.getTempList.error = null;
      })
      .addCase(getTempListAction.rejected, (state, { payload }) => {
        state.getTempList.loading = false;
        state.getTempList.data = null;
        state.getTempList.error = payload;
      })
      .addCase(removeTempPostAction.pending, state => {
        state.removeTempPost.loading = true;
        state.removeTempPost.data = null;
        state.removeTempPost.error = null;
      })
      .addCase(removeTempPostAction.fulfilled, (state, { payload }) => {
        state.removeTempPost.loading = false;
        state.removeTempPost.data = payload;
        state.removeTempPost.error = null;
        state.getTempList.data = (state.getTempList.data as TempItemType[]).filter(
          tempPost => tempPost.id !== payload.postId
        );
      })
      .addCase(removeTempPostAction.rejected, (state, { payload }) => {
        state.removeTempPost.loading = false;
        state.removeTempPost.data = null;
        state.removeTempPost.error = payload;
      })
      .addCase(getRecentViewsAction.pending, state => {
        state.getRecentList.loading = true;
        state.getRecentList.data = null;
        state.getRecentList.error = null;
      })
      .addCase(getRecentViewsAction.fulfilled, (state, { payload }) => {
        state.getRecentList.loading = false;
        state.getRecentList.data = payload;
        state.getRecentList.error = null;
      })
      .addCase(getRecentViewsAction.rejected, (state, { payload }) => {
        state.getRecentList.loading = false;
        state.getRecentList.data = null;
        state.getRecentList.error = payload;
      })
      .addCase(removeRecentViewAction.pending, state => {
        state.removeRecentView.loading = true;
        state.removeRecentView.data = null;
        state.removeRecentView.error = null;
      })
      .addCase(removeRecentViewAction.fulfilled, (state, { payload }) => {
        state.removeRecentView.loading = false;
        state.removeRecentView.data = payload;
        state.removeRecentView.error = null;
        state.getRecentList.data = (state.getRecentList.data as RecentViewType[]).filter(
          viewItem => viewItem.id !== payload.recentId
        );
      })
      .addCase(removeRecentViewAction.rejected, (state, { payload }) => {
        state.removeRecentView.loading = false;
        state.removeRecentView.data = null;
        state.removeRecentView.error = payload;
      })
      .addCase(getPhotoBinderListAction.pending, state => {
        state.getBinderList.loading = true;
        state.getBinderList.data = null;
        state.getBinderList.error = null;
      })
      .addCase(getPhotoBinderListAction.fulfilled, (state, { payload }) => {
        state.getBinderList.loading = false;
        state.getBinderList.data = payload;
        state.getBinderList.error = null;
      })
      .addCase(getPhotoBinderListAction.rejected, (state, { payload }) => {
        state.getBinderList.loading = false;
        state.getBinderList.data = null;
        state.getBinderList.error = payload;
      })
      .addCase(getPhotoBinderDetailAction.pending, state => {
        state.getBinderDetail.loading = true;
        state.getBinderDetail.data = null;
        state.getBinderDetail.error = null;
      })
      .addCase(getPhotoBinderDetailAction.fulfilled, (state, { payload }) => {
        state.getBinderDetail.loading = false;
        state.getBinderDetail.data = payload;
        state.getBinderDetail.error = null;
      })
      .addCase(getPhotoBinderDetailAction.rejected, (state, { payload }) => {
        state.getBinderDetail.loading = false;
        state.getBinderDetail.data = null;
        state.getBinderDetail.error = payload;
      })
      .addCase(updatePhotoBinderDetailAction.pending, state => {
        state.updateBinderDetail.loading = true;
        state.updateBinderDetail.data = null;
        state.updateBinderDetail.error = null;
      })
      .addCase(updatePhotoBinderDetailAction.fulfilled, (state, { payload }) => {
        state.updateBinderDetail.loading = false;
        state.updateBinderDetail.data = payload;
        state.updateBinderDetail.error = null;
        state.getBinderDetail.data = {
          ...(state.getBinderDetail.data as PhotoBinderType),
          description: payload.description,
          title: payload.title,
        };
      })
      .addCase(updatePhotoBinderDetailAction.rejected, (state, { payload }) => {
        state.updateBinderDetail.loading = false;
        state.updateBinderDetail.data = null;
        state.updateBinderDetail.error = payload;
      })
      .addCase(removeBinderPhotoAction.pending, state => {
        state.removeBinderPhoto.loading = true;
        state.removeBinderPhoto.data = null;
        state.removeBinderPhoto.error = null;
      })
      .addCase(removeBinderPhotoAction.fulfilled, (state, { payload }) => {
        let newPhotos = [...(state.getBinderDetail.data as PhotoBinderType).PostImages];
        payload.forEach(id => (newPhotos = newPhotos.filter(photo => photo.id !== id)));
        state.removeBinderPhoto.loading = false;
        state.removeBinderPhoto.data = payload;
        state.removeBinderPhoto.error = null;
        (state.getBinderDetail.data as PhotoBinderType).PostImages = newPhotos;
      })
      .addCase(removeBinderPhotoAction.rejected, (state, { payload }) => {
        state.removeBinderPhoto.loading = false;
        state.removeBinderPhoto.data = null;
        state.removeBinderPhoto.error = payload;
      });
  },
});

export default drawerSlice.reducer;
