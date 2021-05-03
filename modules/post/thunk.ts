import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PreSavePayload, SubmitPostPayload } from './types';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

export const postPreSaveAction = createAsyncThunk<
  null,
  PreSavePayload,
  { rejectValue: MyKnownError }
>('post/preSave', async (postData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/presave`,
      postData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const submitPostAction = createAsyncThunk<
  unknown,
  SubmitPostPayload,
  { rejectValue: MyKnownError }
>('post/submit', async (postData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/submit`,
      postData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const getTempPostAction = createAsyncThunk<
  null,
  string,
  { rejectValue: MyKnownError }
>('post/getTempPost', async (postId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/temp/${postId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
