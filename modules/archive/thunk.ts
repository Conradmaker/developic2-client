import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Archive } from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

export const getArchiveListAction = createAsyncThunk<
  Archive[], // try에서 받아올 데이터 타입
  null, // 비동기로 보낼 데이터 타입
  { rejectValue: MyKnownError } // 에러 타입
>('archive/getArchiveList', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/exhibition`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
