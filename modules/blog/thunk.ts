import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  LoadBlogUserResponse,
  LoadBlogPostListResponse,
  LoadBlogPicstoryListResponse,
} from './type';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

interface UserId {
  userId: string;
}

export const loadBlogUserAction = createAsyncThunk<
  LoadBlogUserResponse,
  UserId,
  { rejectValue: MyKnownError }
>('blog/loadBlogUser', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogUserResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/blog/user/${userId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const loadBlogPostListAction = createAsyncThunk<
  LoadBlogPostListResponse,
  UserId,
  { rejectValue: MyKnownError }
>('blog/loadBlogPostList', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPostListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/blog/post/${userId}?limit=12&offset=0`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const loadBlogPicstoryListAction = createAsyncThunk<
  LoadBlogPicstoryListResponse,
  UserId,
  { rejectValue: MyKnownError }
>('blog/loadBlogPicstoryList', async (userId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<LoadBlogPicstoryListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/blog/picstory/${userId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
