import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'node:fs';
import { DrawerState } from './';
import {
  getLikeListAction,
  getTempListAction,
  removeLikePostAction,
  removeTempPostAction,
} from './thunk';
import { LikeListItemType, TempItemType } from './types';

const initialState: DrawerState = {
  getLikeList: { loading: false, data: null, error: null },
  removeLikeItem: { loading: false, data: null, error: null },
  getTempList: { loading: false, data: null, error: null },
  removeTempPost: { loading: false, data: null, error: null },
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
      });
  },
});

export default drawerSlice.reducer;
