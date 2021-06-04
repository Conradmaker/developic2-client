import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';

import {
  LoadBlogListPayload,
  BlogPost,
  BlogPicstory,
  BlogPicstoryDetailData,
  BlogUserData,
} from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

// 블로그 유저정보 로드
export const loadBlogUserAction = createAsyncThunk<
  BlogUserData,
  number,
  { rejectValue: MyKnownError }
>('blog/loadBlogUser', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/blog/user/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 블로그 글목록 로드
export const loadBlogPostListAction = createAsyncThunk<
  BlogPost[],
  LoadBlogListPayload,
  { rejectValue: MyKnownError }
>('blog/loadBlogPostList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/blog/post/${payloadData.userId}?${
        payloadData.limit ? '&limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
    );
    dispatch(
      hasMoreData(
        payloadData.limit ? data.length === payloadData.limit : data.length === 12
      )
    );
    dispatch(isMoreLoading(payloadData.offset ? payloadData.offset !== 0 : false));
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 픽스토리 목록 로드
export const loadBlogPicstoryListAction = createAsyncThunk<
  BlogPicstory[],
  LoadBlogListPayload,
  { rejectValue: MyKnownError }
>('blog/loadBlogPicstoryList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/blog/picstory/${payloadData.userId}?${
        payloadData.limit ? '&limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
    );
    dispatch(
      hasMoreData(
        payloadData.limit ? data.length === payloadData.limit : data.length === 12
      )
    );
    dispatch(isMoreLoading(payloadData.offset ? payloadData.offset !== 0 : false));
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 픽스토리 상세페이지 로드
export const loadBlogPicstoryDetailAction = createAsyncThunk<
  BlogPicstoryDetailData,
  number,
  { rejectValue: MyKnownError }
>('blog/loadBlogPicstoryDetail', async (picstoryId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/blog/picpost/${picstoryId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
