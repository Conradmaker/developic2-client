import { createSlice } from '@reduxjs/toolkit';
import { DrawerState } from './';
import { getLikeListAction, removeLikePostAction } from './thunk';
import { LikeListItemType } from './types';

const initialState: DrawerState = {
  getLikeList: { loading: false, data: null, error: null },
  removeLikeItem: { loading: false, data: null, error: null },
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
      });
  },
});

export default drawerSlice.reducer;
