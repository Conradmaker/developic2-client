import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GetHashTagListPayload,
  GetPostListPayload,
  GetTaggedPostListPayload,
  GetWriterListPayload,
  HashtagType,
  PostType,
  PostUser,
} from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

//피드 불러오기
export const getFeedPostAction = createAsyncThunk<
  PostType[],
  { UserId: number; limit?: number; offset?: number },
  { rejectValue: MyKnownError }
>('list/getFeedList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/list/feed/${payloadData.UserId}?${
        payloadData.limit ? 'limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//작가 불러오기
export const getWriterListAction = createAsyncThunk<
  PostUser[],
  GetWriterListPayload,
  { rejectValue: MyKnownError }
>('list/getWriterList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/list/writer?${
        payloadData.type ? '&type=' + payloadData.type : ''
      }${payloadData.limit ? 'limit=' + payloadData.limit : ''}${
        payloadData.userId ? '&userId=' + payloadData.userId : ''
      }`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//해시태그 리스트 조회
export const getHashtagListAction = createAsyncThunk<
  HashtagType[],
  GetHashTagListPayload,
  { rejectValue: MyKnownError }
>('list/getHashtagList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/list/tag?${
        payloadData.sort ? '&sort=' + payloadData.sort : ''
      }${payloadData.term ? '&term=' + payloadData.term : ''}${
        payloadData.limit ? '&limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//해시태그가 포함된 게시글 조회
export const getTaggedPostListAction = createAsyncThunk<
  PostType[],
  GetTaggedPostListPayload,
  { rejectValue: MyKnownError }
>('list/getTaggedPostList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/list/post/tag/${payloadData.HashtagId}?${
        payloadData.sort ? '&sort=' + payloadData.sort : ''
      }${payloadData.limit ? 'limit=' + payloadData.limit : ''}${
        payloadData.offset ? '&offset=' + payloadData.offset : ''
      }`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//게시글 리스트 조회
export const getPostListAction = createAsyncThunk<
  PostType[],
  GetPostListPayload,
  { rejectValue: MyKnownError }
>('list/getPostList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/list/post?${
        payloadData.sort ? '&sort=' + payloadData.sort : ''
      }${payloadData.term ? '&term=' + payloadData.term : ''}${
        payloadData.limit ? '&limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
