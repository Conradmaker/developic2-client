import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  LoadBlogUserResponse,
  LoadBlogPostListResponse,
  LoadBlogPicstoryListResponse,
  LoadBlogPicstoryDetailResponse,
  LoadBlogListPayload,
} from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

interface UserId {
  userId: string;
}

// 블로그 유저정보 로드
export const loadBlogUserAction = createAsyncThunk<
  LoadBlogUserResponse,
  UserId,
  { rejectValue: MyKnownError }
>('blog/loadBlogUser', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogUserResponse>(`/blog/user/${userId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 블로그 초기 글목록 로드
export const loadBlogPostListAction = createAsyncThunk<
  LoadBlogPostListResponse,
  LoadBlogListPayload,
  { rejectValue: MyKnownError }
>('blog/loadBlogPostList', async (LoadBlogPostListPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPostListResponse>(
      `/blog/post/${LoadBlogPostListPayload.userId}?limit=12`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 블로그 글목록 추가 로드
export const loadMoreBlogPostListAction = createAsyncThunk<
  LoadBlogPostListResponse,
  LoadBlogListPayload,
  { rejectValue: MyKnownError }
>('blog/loadMoreBlogPostList', async (LoadBlogPostListPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPostListResponse>(
      `/blog/post/${LoadBlogPostListPayload.userId}?limit=12&offset=${LoadBlogPostListPayload.offset}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 픽스토리 목록 로드
export const loadBlogPicstoryListAction = createAsyncThunk<
  LoadBlogPicstoryListResponse,
  UserId,
  { rejectValue: MyKnownError }
>('blog/loadBlogPicstoryList', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPicstoryListResponse>(
      `/blog/picstory/${userId}?limit=12`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 픽스토리 추가 목록 로드
export const loadMoreBlogPicstoryListAction = createAsyncThunk<
  LoadBlogPicstoryListResponse,
  LoadBlogListPayload,
  { rejectValue: MyKnownError }
>('blog/loadMoreBlogPicstoryList', async (LoadBlogListPayload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPicstoryListResponse>(
      `/blog/picstory/${LoadBlogListPayload.userId}?limit=12&offset=${LoadBlogListPayload.offset}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

// 픽스토리 상세페이지 로드
export const loadBlogPicstoryDetailAction = createAsyncThunk<
  LoadBlogPicstoryDetailResponse,
  number,
  { rejectValue: MyKnownError }
>('blog/loadBlogPicstoryDetail', async (picstoryId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPicstoryDetailResponse>(
      `/blog/picpost/${picstoryId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
