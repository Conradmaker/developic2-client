import { createSlice } from '@reduxjs/toolkit';
import { ListState } from './type';

const initialState: ListState = {
  pageData: [],
  loadSearchPostList: { loading: false, data: null, error: null },
  loadMoreSearchPostList: { loading: false, data: null, error: null },
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export default listSlice.reducer;
