import { createSlice } from '@reduxjs/toolkit';
import {
  addBlogFollowAction,
  authAction,
  loginAction,
  logOutAction,
  removeBlogFollowAction,
} from './thunk';
import { UserState } from './type';

// 초기 상태
const initialState: UserState = {
  login: { loading: false, data: null, error: null },
  logout: { loading: false, data: null, error: null },
  auth: { loading: false, data: null, error: null },
  userData: null,
  addBlogFollow: { loading: false, done: false, error: null },
  removeBlogFollow: { loading: false, done: false, error: null },
};

//data항목을 success:boolean으로 바꿀지 생각해보기. 성공여부만 나타내도록
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
        state.userData = payload;
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(authAction.pending, state => {
        state.auth.loading = true;
        state.auth.data = null;
        state.auth.error = null;
      })
      .addCase(authAction.fulfilled, (state, { payload }) => {
        state.auth.loading = false;
        state.auth.data = payload;
        state.auth.error = null;
        state.userData = payload;
      })
      .addCase(authAction.rejected, (state, { payload }) => {
        state.auth.loading = false;
        state.auth.data = null;
        state.auth.error = payload;
        state.userData = null;
      })
      .addCase(logOutAction.pending, state => {
        state.logout.loading = true;
        state.logout.data = null;
        state.logout.error = null;
      })
      .addCase(logOutAction.fulfilled, (state, { payload }) => {
        state.logout.loading = false;
        state.logout.data = payload;
        state.logout.error = null;
        state.login.data = null;
        state.userData = null;
      })
      .addCase(logOutAction.rejected, (state, { payload }) => {
        state.logout.loading = false;
        state.logout.data = null;
        state.logout.error = payload;
      })
      .addCase(addBlogFollowAction.pending, state => {
        state.addBlogFollow.loading = true;
        state.addBlogFollow.done = false;
        state.addBlogFollow.error = null;
      })
      .addCase(addBlogFollowAction.fulfilled, (state, { payload }) => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.done = true;
        state.addBlogFollow.error = null;
        if (state.userData) {
          state.userData.writers?.push({ id: payload.writerId });
        }
      })
      .addCase(addBlogFollowAction.rejected, (state, { payload }) => {
        state.addBlogFollow.loading = false;
        state.addBlogFollow.done = false;
        state.addBlogFollow.error = payload;
      })
      .addCase(removeBlogFollowAction.pending, state => {
        state.removeBlogFollow.loading = true;
        state.removeBlogFollow.done = false;
        state.removeBlogFollow.error = null;
      })
      .addCase(removeBlogFollowAction.fulfilled, (state, { payload }) => {
        state.removeBlogFollow.loading = false;
        state.removeBlogFollow.done = true;
        state.removeBlogFollow.error = null;
        if (state.userData) {
          state.userData.writers = state.userData.writers?.filter(
            writer => writer.id !== payload.writerId
          );
        }
      })
      .addCase(removeBlogFollowAction.rejected, (state, { payload }) => {
        state.removeBlogFollow.loading = false;
        state.removeBlogFollow.done = false;
        state.removeBlogFollow.error = payload;
      });
  },
});

export default userSlice.reducer;
