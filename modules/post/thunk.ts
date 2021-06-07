import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastPopAction } from '../ui/hooks';
import {
  CreateCommentPayload,
  Hashtag,
  PhotoDetail,
  PostData,
  PreSavePayload,
  SubmitPostPayload,
  Comment,
  UpdateCommentPayload,
} from './types';

axios.defaults.withCredentials = true;

interface MyKnownError {
  message: string;
}

export const postPreSaveAction = createAsyncThunk<
  null,
  PreSavePayload,
  { rejectValue: MyKnownError }
>('post/preSave', async (postData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/presave`,
      postData
    );
    await toastPopAction(dispatch, `게시글이 임시저장 되었습니다..`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

export const submitPostAction = createAsyncThunk<
  { id: number },
  SubmitPostPayload,
  { rejectValue: MyKnownError }
>('post/submit', async (postData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/submit`,
      postData
    );
    await toastPopAction(dispatch, `게시글이 등록되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
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

//게시글 삭제
export const removePostAction = createAsyncThunk<
  PostData,
  number,
  { rejectValue: MyKnownError }
>('post/removePost', async (postId, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/${postId}`
    );
    await toastPopAction(dispatch, `게시글이 삭제되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
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
  PhotoDetail,
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

//댓글 작성
export const createCommentAction = createAsyncThunk<
  Comment,
  CreateCommentPayload,
  { rejectValue: MyKnownError }
>('post/createComment', async (commentData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/comment`,
      commentData
    );
    await toastPopAction(dispatch, `댓글이 등록되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//댓글 수정
export const updateCommentAction = createAsyncThunk<
  Comment,
  UpdateCommentPayload,
  { rejectValue: MyKnownError }
>('post/updateComment', async (commentData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/comment`,
      commentData
    );
    await toastPopAction(dispatch, `댓글이 수정되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//댓글 삭제
export const removeCommentAction = createAsyncThunk<
  Comment,
  number,
  { rejectValue: MyKnownError }
>('post/removeComment', async (commentId, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/post/comment/${commentId}`
    );
    await toastPopAction(dispatch, `댓글이 삭제되었습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});
