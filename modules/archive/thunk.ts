import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';
import { AddArchivePayload, Archive, GetArchivePayload } from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

export const getArchiveListAction = createAsyncThunk<
  Archive[], // try에서 받아올 데이터 타입
  GetArchivePayload, // 비동기로 보낼 데이터 타입
  { rejectValue: MyKnownError } // 에러 타입
>('archive/getArchiveList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/exhibition?${payloadData.limit ? '&limit=' + payloadData.limit : ''}${
        payloadData.offset ? '&offset=' + payloadData.offset : ''
      }`
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

export const getArchiveDetailAction = createAsyncThunk<
  Archive,
  number,
  { rejectValue: MyKnownError }
>('archive/getArchiveDetail', async (archiveId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/exhibition/${archiveId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const addArchiveAction = createAsyncThunk<
  Archive,
  AddArchivePayload,
  { rejectValue: MyKnownError }
>('archive/addArchive', async (archiveData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/exhibition`, archiveData);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
