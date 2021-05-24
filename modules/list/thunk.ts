import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeedPageDataType, GetWriterListPayload } from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

//피드 불러오기
export const getFeedPostAction = createAsyncThunk<
  FeedPageDataType['post'],
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
  FeedPageDataType['writer'],
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
