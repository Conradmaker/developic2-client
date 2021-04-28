import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginPayload, LoginResponse } from './type';

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
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/local`,
      loginData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.message });
  }
});

// 로그아웃
export const logOutAction = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/400`);
      return data;
    } catch (e) {
      console.error(e);
      return rejectWithValue({ message: e.message });
    }
  }
);
