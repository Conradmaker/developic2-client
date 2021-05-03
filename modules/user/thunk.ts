import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  LoginPayload,
  LoginResponse,
  User,
  SignupPayload,
  VerificationPayload,
  SocialLoginPayload,
  UserIntro,
  UpdateUserIntroPayload,
  UpdateUserInfoPayload,
  UpdatePasswordPayload,
} from './type';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

//로그인
export const loginAction = createAsyncThunk<
  LoginResponse, // 성공 시 리턴 타입
  LoginPayload, // 디스패치할때 넣을 인자
  { rejectValue: MyKnownError }
>('user/login', async (loginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/local`,
      loginData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//소셜로그인요청
export const socialRequestAction = createAsyncThunk<
  null,
  'kakao' | 'facebook' | 'google',
  { rejectValue: MyKnownError }
>('user/socialRequest', async (type, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/${type}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//소셜로그인
export const socialLoginAction = createAsyncThunk<
  LoginResponse,
  SocialLoginPayload,
  { rejectValue: MyKnownError }
>('user/socialLogin', async (loginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/retest`,
      loginData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 로그아웃
export const logOutAction = createAsyncThunk<
  unknown,
  null,
  { rejectValue: MyKnownError }
>('user/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/logout`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.message });
  }
});

// 로그인 인증
export const authAction = createAsyncThunk<User, null, { rejectValue: MyKnownError }>(
  'user/auth',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth`);
      return data;
    } catch (e) {
      console.error(e);
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//로컬회원가입
export const signupAction = createAsyncThunk<
  string,
  SignupPayload,
  { rejectValue: MyKnownError }
>('user/signup', async (signupData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/signup`,
      signupData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//이메일 인증
export const verificationAction = createAsyncThunk<
  string,
  VerificationPayload,
  { rejectValue: MyKnownError }
>('user/verification', async (verifiPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/verification?email=${verifiPayload.email}&code=${verifiPayload.code}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//유저 상세정보 요청
export const userDetailInfoAction = createAsyncThunk<
  UserIntro,
  { userId: string },
  { rejectValue: MyKnownError }
>('user/userIntro', async (userDetailPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/detail/${userDetailPayload.userId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//유저 계정정보 수정
export const updateUserInfoAction = createAsyncThunk<
  UpdateUserInfoPayload,
  UpdateUserInfoPayload,
  { rejectValue: MyKnownError }
>('user/updateInfo', async (updatedIntroPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/info`,
      updatedIntroPayload
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//비밀번호 수정
export const updatePasswordAction = createAsyncThunk<
  string,
  UpdatePasswordPayload,
  { rejectValue: MyKnownError }
>('user/updatePassword', async (updatePasswordPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/password`,
      updatePasswordPayload
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//유저 소개 수정
export const destroyUserAction = createAsyncThunk<
  string,
  number,
  { rejectValue: MyKnownError }
>('user/destroy', async (UserId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/${UserId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//유저 소개 수정
export const updateUserIntroAction = createAsyncThunk<
  UserIntro,
  UpdateUserIntroPayload,
  { rejectValue: MyKnownError }
>('user/updateIntro', async (updatedIntroPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/intro`,
      updatedIntroPayload
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
