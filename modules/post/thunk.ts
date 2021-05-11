import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Hashtag, PostData, PreSavePayload, SubmitPostPayload } from './types';

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

//해시태그추가
export const createHashtagAction = createAsyncThunk<
  Hashtag,
  string,
  { rejectValue: MyKnownError }
>('post/createTag', async (tagName, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/hashtag`,
      {
        name: tagName,
      }
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//해시태그 인스턴트 검색
export const searchHashtagAction = createAsyncThunk<
  Hashtag[],
  string,
  { rejectValue: MyKnownError }
>('post/searchTags', async (keyword, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/hashtag?keyword=${keyword}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//게시글 디테일 조회
export const getPostDetailAction = createAsyncThunk<
  PostData,
  number,
  { rejectValue: MyKnownError }
>('post/getPostDetail', async (postId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${postId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//사진 상세조회
export const getPhotoDetailAction = createAsyncThunk<
  PostData,
  number,
  { rejectValue: MyKnownError }
>('post/getPhotoDetail', async (photoId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/photo/${photoId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
