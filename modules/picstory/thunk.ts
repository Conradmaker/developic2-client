import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreatePicstoryPayload, Picstory, TogglePicPostPayload } from './types';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

//픽스토리 리스트 불러오기
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

//픽스토리 삭제
export const removePicstoryAction = createAsyncThunk<
  { id: string },
  number,
  { rejectValue: MyKnownError }
>('picstory/remove', async (PicstoryId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/picstory/${PicstoryId}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 게시글 추가
export const addPicPostAction = createAsyncThunk<
  { id: number },
  TogglePicPostPayload,
  { rejectValue: MyKnownError }
>('picstory/addPost', async (picPostData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/picstory/post`,
      picPostData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 게시글 제거
export const removePicPostAction = createAsyncThunk<
  { id: number },
  TogglePicPostPayload,
  { rejectValue: MyKnownError }
>('picstory/removePost', async (picPostData, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/picstory/post`,
      picPostData
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
