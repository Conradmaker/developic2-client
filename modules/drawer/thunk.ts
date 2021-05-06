import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LikeListItemType, RemoveLikesPayload } from './types';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}
export const getLikeListAction = createAsyncThunk<
  LikeListItemType[],
  number,
  { rejectValue: MyKnownError }
>('drawer/getLikeList', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/drawer/likes/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//좋아요 취소
export const removeLikePostAction = createAsyncThunk<
  { postId: number },
  RemoveLikesPayload,
  { rejectValue: MyKnownError }
>('drawer/removeLikes', async ({ userId, postId }, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/likes/${userId}?PostId=${postId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
