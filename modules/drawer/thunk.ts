import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';
import {
  CreatePhotoBinderPayload,
  GetLikeListPayload,
  LikeListItemType,
  PhotoBinderType,
  RecentViewType,
  RemoveLikesPayload,
  TempItemType,
  UpdatePhotoBinderPayload,
  GetBinderListPayload,
  GetRecentListPayload,
  GetTempListPayload,
} from './types';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}
export const getLikeListAction = createAsyncThunk<
  LikeListItemType[],
  GetLikeListPayload,
  { rejectValue: MyKnownError }
>('drawer/getLikeList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/drawer/likes/${payloadData.userId}?${
        payloadData.limit ? 'limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
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

//좋아요 취소
export const removeLikePostAction = createAsyncThunk<
  { postId: number },
  RemoveLikesPayload,
  { rejectValue: MyKnownError }
>('drawer/removeLikes', async ({ userId, postId }, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/likes/${userId}?PostId=${postId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//임시저장리스트불러오기
export const getTempListAction = createAsyncThunk<
  TempItemType[],
  GetTempListPayload,
  { rejectValue: MyKnownError }
>('drawer/getTemps', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/drawer/saves/${payloadData.userId}?${
        payloadData.limit ? 'limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
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
//임시저장아이템 삭제
export const removeTempPostAction = createAsyncThunk<
  { postId: number },
  number,
  { rejectValue: MyKnownError }
>('drawer/removeTempPost', async (postId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/saves/${postId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//최근 본글 조회
export const getRecentViewsAction = createAsyncThunk<
  RecentViewType[],
  GetRecentListPayload,
  { rejectValue: MyKnownError }
>('drawer/getRecentList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/drawer/recents/${payloadData.userId}?${
        payloadData.limit ? 'limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
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
//최근 본글 삭제
export const removeRecentViewAction = createAsyncThunk<
  { recentId: number },
  number,
  { rejectValue: MyKnownError }
>('drawer/removeRecentItem', async (recentId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/recents/${recentId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//포토바인더 리스트 조회
export const getPhotoBinderListAction = createAsyncThunk<
  PhotoBinderType[],
  GetBinderListPayload,
  { rejectValue: MyKnownError }
>('drawer/getBinderList', async (payloadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/drawer/binder/${payloadData.userId}?${
        payloadData.limit ? 'limit=' + payloadData.limit : ''
      }${payloadData.offset ? '&offset=' + payloadData.offset : ''}`
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

//포토바인더 디테일 조회
export const getPhotoBinderDetailAction = createAsyncThunk<
  PhotoBinderType,
  number,
  { rejectValue: MyKnownError }
>('drawer/getBinderDetail', async (binderId, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/drawer/binder/detail/${binderId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//포토바인더 정보 수정
export const updatePhotoBinderDetailAction = createAsyncThunk<
  UpdatePhotoBinderPayload,
  UpdatePhotoBinderPayload,
  { rejectValue: MyKnownError }
>('drawer/updateBinderDetail', async (binderData, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/drawer/binder/detail`, binderData);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//포토바인더 선택 사진들 삭제
export const removeBinderPhotoAction = createAsyncThunk<
  { photoIdArr: number[]; BinderId: number },
  { photoIdArr: number[]; BinderId: number },
  { rejectValue: MyKnownError }
>('drawer/removeBinderPhoto', async (photoData, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/drawer/binder/photo`, photoData);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
//포토바인더 선택 사진들 추가
export const addBinderPhotoAction = createAsyncThunk<
  { photoIdArr: number[]; BinderId: number },
  { photoIdArr: number[]; BinderId: number },
  { rejectValue: MyKnownError }
>('drawer/addBinderPhoto', async (photoData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/drawer/binder/photo`, photoData);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//포토바인더 생성
export const createPhotoBinderAction = createAsyncThunk<
  PhotoBinderType,
  CreatePhotoBinderPayload,
  { rejectValue: MyKnownError }
>('drawer/createBinder', async (binderData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/drawer/binder`, binderData);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//포토바인더 삭제
export const removePhotoBinderAction = createAsyncThunk<
  { binderId: number },
  number,
  { rejectValue: MyKnownError }
>('drawer/removeBinder', async (binderId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/drawer/binder/${binderId}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
