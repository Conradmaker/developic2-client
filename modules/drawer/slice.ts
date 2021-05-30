import { createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './';
import {
  addBinderPhotoAction,
  createPhotoBinderAction,
  getLikeListAction,
  getPhotoBinderDetailAction,
  getPhotoBinderListAction,
  getRecentViewsAction,
  getTempListAction,
  removeBinderPhotoAction,
  removeLikePostAction,
  removePhotoBinderAction,
  removeRecentViewAction,
  removeTempPostAction,
  updatePhotoBinderDetailAction,
} from './thunk';
import {
  LikeListItemType,
  PhotoBinderType,
  RecentViewType,
  TempItemType,
  isPhotoBinderArr,
} from './types';

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
  addBinderPhoto: { loading: false, data: null, error: null },
  removeBinderPhoto: { loading: false, data: null, error: null },
  createBinder: { loading: false, data: null, error: null },
  removeBinder: { loading: false, data: null, error: null },
  hasMore: true,
  loadMore: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
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
        // state.getTempList.data = state.loadMore
        //   ? (state.getTempList.data as TempItemType[]).concat(payload)
        //   : payload;
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
        state.getRecentList.error = null;
      })
      .addCase(getRecentViewsAction.fulfilled, (state, { payload }) => {
        state.getRecentList.loading = false;
        state.getRecentList.error = null;
        state.getRecentList.data = state.loadMore
          ? (state.getRecentList.data as RecentViewType[]).concat(payload)
          : payload;
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
      .addCase(createPhotoBinderAction.pending, state => {
        state.createBinder.loading = true;
        state.createBinder.data = null;
        state.createBinder.error = null;
      })
      .addCase(createPhotoBinderAction.fulfilled, (state, { payload }) => {
        state.createBinder.loading = false;
        state.createBinder.data = payload;
        state.createBinder.error = null;
        if (isPhotoBinderArr(state.getBinderList.data)) {
          state.getBinderList.data = state.getBinderList.data.concat(payload);
        }
      })
      .addCase(createPhotoBinderAction.rejected, (state, { payload }) => {
        state.createBinder.loading = false;
        state.createBinder.data = null;
        state.createBinder.error = payload;
      })
      .addCase(removePhotoBinderAction.pending, state => {
        state.removeBinder.loading = true;
        state.removeBinder.data = null;
        state.removeBinder.error = null;
      })
      .addCase(removePhotoBinderAction.fulfilled, (state, { payload }) => {
        state.removeBinder.loading = false;
        state.removeBinder.data = payload;
        state.removeBinder.error = null;
      })
      .addCase(removePhotoBinderAction.rejected, (state, { payload }) => {
        state.removeBinder.loading = false;
        state.removeBinder.data = null;
        state.removeBinder.error = payload;
      })
      .addCase(removeBinderPhotoAction.pending, state => {
        state.removeBinderPhoto.loading = true;
        state.removeBinderPhoto.data = null;
        state.removeBinderPhoto.error = null;
      })
      .addCase(removeBinderPhotoAction.fulfilled, (state, { payload }) => {
        state.removeBinderPhoto.loading = false;
        state.removeBinderPhoto.data = payload;
        state.removeBinderPhoto.error = null;
        if (state.getBinderDetail.data) {
          let newPhotos = [...(state.getBinderDetail.data as PhotoBinderType).PostImages];
          payload.photoIdArr.forEach(
            id => (newPhotos = newPhotos.filter(photo => photo.id !== id))
          );
          (state.getBinderDetail.data as PhotoBinderType).PostImages = newPhotos;
        }

        if (isPhotoBinderArr(state.getBinderList.data)) {
          const binderIndex = state.getBinderList.data.findIndex(
            binder => binder.id === payload.BinderId
          );
          state.getBinderList.data[binderIndex].PostImages = state.getBinderList.data[
            binderIndex
          ].PostImages.filter(image => !payload.photoIdArr.includes(image.id));
        }
      })
      .addCase(removeBinderPhotoAction.rejected, (state, { payload }) => {
        state.removeBinderPhoto.loading = false;
        state.removeBinderPhoto.data = null;
        state.removeBinderPhoto.error = payload;
      })
      .addCase(addBinderPhotoAction.pending, state => {
        state.addBinderPhoto.loading = true;
        state.addBinderPhoto.data = null;
        state.addBinderPhoto.error = null;
      })
      .addCase(addBinderPhotoAction.fulfilled, (state, { payload }) => {
        state.addBinderPhoto.loading = false;
        state.addBinderPhoto.data = payload;
        state.addBinderPhoto.error = null;
        if (isPhotoBinderArr(state.getBinderList.data)) {
          const binderIndex = state.getBinderList.data.findIndex(
            binder => binder.id === payload.BinderId
          );
          state.getBinderList.data[binderIndex].PostImages = state.getBinderList.data[
            binderIndex
          ].PostImages.concat(payload.photoIdArr.map(id => ({ id, src: '' })));
        }
      })
      .addCase(addBinderPhotoAction.rejected, (state, { payload }) => {
        state.addBinderPhoto.loading = false;
        state.addBinderPhoto.data = null;
        state.addBinderPhoto.error = payload;
      });
  },
});

export const { hasMoreData, isMoreLoading } = drawerSlice.actions;
export default drawerSlice.reducer;
