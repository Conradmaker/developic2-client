import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastPopAction } from '../ui/hooks';
import { CreatePicstoryPayload, Picstory, TogglePicPostPayload } from './types';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

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
    const { data } = await axios.get(`/picstory/${UserId}`);

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
>('picstory/create', async (newPicData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/picstory`, newPicData);
    await toastPopAction(dispatch, `${newPicData.title}를 생성했습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 삭제
export const removePicstoryAction = createAsyncThunk<
  { id: string },
  number,
  { rejectValue: MyKnownError }
>('picstory/remove', async (PicstoryId, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/picstory/${PicstoryId}`);
    await toastPopAction(dispatch, `픽스토리를 삭제했습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 게시글 추가
export const addPicPostAction = createAsyncThunk<
  { id: number },
  TogglePicPostPayload,
  { rejectValue: MyKnownError }
>('picstory/addPost', async (picPostData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/picstory/post`, picPostData);
    await toastPopAction(dispatch, `픽스토리에 게시글을 추가했습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//픽스토리 게시글 제거
export const removePicPostAction = createAsyncThunk<
  { id: number },
  TogglePicPostPayload,
  { rejectValue: MyKnownError }
>('picstory/removePost', async (picPostData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/picstory/post`, picPostData);
    await toastPopAction(dispatch, `픽스토리에서 게시글을 삭제했습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});
