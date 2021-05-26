import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArchiveDataType } from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

// 전시회 리스트 가져오기
export const getArchiveListAction = createAsyncThunk<
  ArchiveDataType[],
  null,
  { rejectValue: MyKnownError }
>('list/getArchiveList', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/list/exhibition?limit=5`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
