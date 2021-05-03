import { createSlice } from '@reduxjs/toolkit';
import {
  authAction,
  loginAction,
  logOutAction,
  signupAction,
  verificationAction,
  socialRequestAction,
  socialLoginAction,
  userDetailInfoAction,
  updateUserIntroAction,
  updateUserInfoAction,
  updatePasswordAction,
  destroyUserAction,
} from './thunk';
import { User, UserState } from './type';

// 초기 상태
const initialState: UserState = {
  login: { loading: false, data: null, error: null },
  logout: { loading: false, data: null, error: null },
  signup: { loading: false, data: null, error: null },
  socialRequest: { loading: false, data: null, error: null },
  auth: { loading: false, data: null, error: null },
  verification: { loading: false, data: null, error: null },
  userIntro: { loading: false, data: null, error: null },
  updateUser: { loading: false, data: null, error: null },
  destroyUser: { loading: false, data: null, error: null },
  userData: null,
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
      .addCase(signupAction.pending, state => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = null;
      })
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = payload;
        state.signup.error = null;
      })
      .addCase(signupAction.rejected, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = null;
        state.signup.error = payload;
      })
      .addCase(verificationAction.pending, state => {
        state.verification.loading = true;
        state.verification.data = null;
        state.verification.error = null;
      })
      .addCase(verificationAction.fulfilled, (state, { payload }) => {
        state.verification.loading = false;
        state.verification.data = payload;
        state.verification.error = null;
      })
      .addCase(verificationAction.rejected, (state, { payload }) => {
        state.verification.loading = false;
        state.verification.data = null;
        state.verification.error = payload;
      })
      .addCase(socialRequestAction.pending, state => {
        state.socialRequest.loading = true;
        state.socialRequest.data = null;
        state.socialRequest.error = null;
      })
      .addCase(socialRequestAction.fulfilled, (state, { payload }) => {
        state.socialRequest.loading = false;
        state.socialRequest.data = payload;
        state.socialRequest.error = null;
        state.userData = payload;
      })
      .addCase(socialRequestAction.rejected, (state, { payload }) => {
        state.socialRequest.loading = false;
        state.socialRequest.data = null;
        state.socialRequest.error = payload;
      })
      .addCase(socialLoginAction.pending, state => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(socialLoginAction.fulfilled, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
        state.userData = payload;
      })
      .addCase(socialLoginAction.rejected, (state, { payload }) => {
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
      .addCase(userDetailInfoAction.pending, state => {
        state.userIntro.loading = true;
        state.userIntro.data = null;
        state.userIntro.error = null;
      })
      .addCase(userDetailInfoAction.fulfilled, (state, { payload }) => {
        state.userIntro.loading = false;
        state.userIntro.data = payload;
        state.userIntro.error = null;
      })
      .addCase(userDetailInfoAction.rejected, (state, { payload }) => {
        state.userIntro.loading = false;
        state.userIntro.data = null;
        state.userIntro.error = payload;
      })
      .addCase(updateUserInfoAction.pending, state => {
        state.updateUser.loading = true;
        state.updateUser.data = null;
        state.updateUser.error = null;
      })
      .addCase(updateUserInfoAction.fulfilled, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = 'success';
        state.updateUser.error = null;
        (state.userData as User).nickname = payload.nickname;
        (state.userData as User).gender = payload.gender;
        (state.userData as User).birth = payload.birth;
      })
      .addCase(updateUserInfoAction.rejected, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = null;
        state.updateUser.error = payload;
      })
      .addCase(updatePasswordAction.pending, state => {
        state.updateUser.loading = true;
        state.updateUser.data = null;
        state.updateUser.error = null;
      })
      .addCase(updatePasswordAction.fulfilled, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = payload;
        state.updateUser.error = null;
      })
      .addCase(updatePasswordAction.rejected, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = null;
        state.updateUser.error = payload;
      })
      .addCase(updateUserIntroAction.pending, state => {
        state.updateUser.loading = true;
        state.updateUser.data = null;
        state.updateUser.error = null;
      })
      .addCase(updateUserIntroAction.fulfilled, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = 'success';
        state.updateUser.error = null;
        state.userIntro.data = payload;
        (state.userData as User).introduce = payload.summary as string;
      })
      .addCase(updateUserIntroAction.rejected, (state, { payload }) => {
        state.updateUser.loading = false;
        state.updateUser.data = null;
        state.updateUser.error = payload;
      })
      .addCase(destroyUserAction.pending, state => {
        state.destroyUser.loading = true;
        state.destroyUser.data = null;
        state.destroyUser.error = null;
      })
      .addCase(destroyUserAction.fulfilled, (state, { payload }) => {
        state.destroyUser.loading = false;
        state.destroyUser.data = payload;
        state.destroyUser.error = null;
        state.userData = null;
      })
      .addCase(destroyUserAction.rejected, (state, { payload }) => {
        state.destroyUser.loading = false;
        state.destroyUser.data = null;
        state.destroyUser.error = payload;
      });
  },
});
export default userSlice.reducer;
