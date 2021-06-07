import { LoadSearchListPayload, SearchPageData } from './type';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

export const loadSearchListAction = createAsyncThunk<
  SearchPageData['post' | 'writer' | 'picstory'],
  LoadSearchListPayload,
  { rejectValue: MyKnownError }
>('list/loadSearchList', async (payloadData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/list/search?keyword=${payloadData.query}&${
        payloadData.type ? '&type=' + payloadData.type : ''
      }&${payloadData.sort ? '&sort=' + payloadData.sort : ''}&${
        payloadData.term ? '&term=' + payloadData.term : ''
      }&limit=12`
    );
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
