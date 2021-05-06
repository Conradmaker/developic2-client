import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  LikeListItemType,
  RecentViewType,
  RemoveLikesPayload,
  TempItemType,
} from './types';

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

//임시저장리스트불러오기
export const getTempListAction = createAsyncThunk<
  TempItemType[],
  number,
  { rejectValue: MyKnownError }
>('drawer/getTemps', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/drawer/saves/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
//임시저장아이템 삭제
export const removeTempPostAction = createAsyncThunk<
  { postId: number },
  number,
  { rejectValue: MyKnownError }
>('drawer/removeTempPost', async (postId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/saves/${postId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//최근 본글 조회
export const getRecentViewsAction = createAsyncThunk<
  RecentViewType[],
  number,
  { rejectValue: MyKnownError }
>('drawer/getRecentList', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/drawer/recents/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
//최근 본글 삭제
export const removeRecentViewAction = createAsyncThunk<
  { recentId: number },
  number,
  { rejectValue: MyKnownError }
>('drawer/removeRecentItem', async (recentId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/recents/${recentId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
