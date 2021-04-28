import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logOutAction } from './thunk';
import { UserState } from './type';

// 초기 상태
const initialState: UserState = {
  login: { loading: false, data: null, error: null },
  userData: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      state.userData = action.payload;
    },
    logoutAction(state) {
      state.userData = null;
    },
  },
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
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(logOutAction.pending, state => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(logOutAction.fulfilled, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
      })
      .addCase(logOutAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      });
  },
});

export default userSlice.reducer;
