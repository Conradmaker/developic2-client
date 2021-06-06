import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastPopAction } from '../ui/hooks';
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
  LikePostPayload,
  blogFollowPayload,
} from './type';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

//로그인
export const loginAction = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: MyKnownError }
>('user/login', async (loginData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/local`,
      loginData
    );
    await toastPopAction(dispatch, `${data.nickname}님 반갑습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
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
>('user/socialLogin', async (loginData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/retest`,
      loginData
    );
    await toastPopAction(dispatch, `${data.nickname}님 반갑습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

// 로그아웃
export const logOutAction = createAsyncThunk<
  unknown,
  null,
  { rejectValue: MyKnownError }
>('user/logout', async (_, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/logout`
    );
    await toastPopAction(dispatch, '로그아웃 되었습니다.');
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
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
>('user/signup', async (signupData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/signup`,
      signupData
    );
    await toastPopAction(dispatch, `${signupData.email}로 인증번호를 전송했습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//이메일 인증
export const verificationAction = createAsyncThunk<
  string,
  VerificationPayload,
  { rejectValue: MyKnownError }
>('user/verification', async (verifiPayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/verification?email=${verifiPayload.email}&code=${verifiPayload.code}`
    );
    await toastPopAction(dispatch, `인증이 완료되었습니다. 로그인해주세요!`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
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
>('user/updateInfo', async (updatedIntroPayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/info`,
      updatedIntroPayload
    );
    await toastPopAction(dispatch, `수정이 완료되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//비밀번호 수정
export const updatePasswordAction = createAsyncThunk<
  string,
  UpdatePasswordPayload,
  { rejectValue: MyKnownError }
>('user/updatePassword', async (updatePasswordPayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/password`,
      updatePasswordPayload
    );

    await toastPopAction(dispatch, `비밀번호가 변경되었습니다 다음 로그인시 적용됩니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//유저 소개 수정
export const destroyUserAction = createAsyncThunk<
  string,
  number,
  { rejectValue: MyKnownError }
>('user/destroy', async (UserId, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/${UserId}`
    );
    await toastPopAction(dispatch, `비밀번호가 변경되었습니다 다음 로그인시 적용됩니다.`);
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
>('user/updateIntro', async (updatedIntroPayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/intro`,
      updatedIntroPayload
    );
    await toastPopAction(dispatch, '수정이 완료되었습니다.');
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//좋아요 추가
export const addPostLikeAction = createAsyncThunk<
  LikePostPayload,
  LikePostPayload,
  { rejectValue: MyKnownError }
>('user/addPostLike', async (addLikePayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/like/post`,
      addLikePayload
    );
    await toastPopAction(dispatch, `좋아요 게시글이 추가되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//좋아요 취소
export const removePostLikeAction = createAsyncThunk<
  LikePostPayload,
  LikePostPayload,
  { rejectValue: MyKnownError }
>('user/removePostLike', async (removeLikePayload, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/like/post`,
      removeLikePayload
    );
    await toastPopAction(dispatch, `좋아요가 취소되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

// 블로그 구독
export const subscribeAction = createAsyncThunk<
  { writerId: number },
  blogFollowPayload,
  { rejectValue: MyKnownError }
>('blog/addBlogFollow', async (addBlogFollowData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/user/subscribe/add`, addBlogFollowData);
    await toastPopAction(dispatch, `블로그를 구독하였습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

// 블로그 구독취소
export const unSubscribeAction = createAsyncThunk<
  { writerId: number },
  blogFollowPayload,
  { rejectValue: MyKnownError }
>(
  'blog/removeBlogFollow',
  async (removeBlogFollowData, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/user/subscribe/remove`, removeBlogFollowData);
      await toastPopAction(dispatch, `구독을 취소하였습니다`);
      return data;
    } catch (e) {
      console.error(e);
      await toastPopAction(dispatch, e.response.data);
      return rejectWithValue({ message: e.response.data });
    }
  }
);
