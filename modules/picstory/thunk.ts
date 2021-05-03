import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreatePicstoryPayload, Picstory } from './types';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

//픽스토리 리스트
export const getPicstoryListAction = createAsyncThunk<
  Picstory[],
  number,
  { rejectValue: MyKnownError }
>('picstory/getList', async (UserId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/picstory/${UserId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 생성
export const createPicstoryAction = createAsyncThunk<
  Picstory,
  CreatePicstoryPayload,
  { rejectValue: MyKnownError }
>('picstory/create', async (newPicData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/picstory`,
      newPicData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
