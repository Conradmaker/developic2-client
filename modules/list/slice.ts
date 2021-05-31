import { createSlice } from '@reduxjs/toolkit';
import { loadSearchListAction } from './thunk';
import { ListState, SearchPageData } from './type';

const initialState: ListState = {
  pageData: null,
  hasMoreSearchs: true,
  loadSearchList: { loading: false, data: null, error: null },
  loadMoreSearchList: { loading: false, data: null, error: null },
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadSearchListAction.pending, state => {
        state.loadSearchList.loading = true;
        state.loadSearchList.data = null;
        state.loadSearchList.error = null;
      })
      .addCase(loadSearchListAction.fulfilled, (state, { payload }) => {
        state.loadSearchList.loading = false;
        state.loadSearchList.data = payload;
        state.loadSearchList.error = null;
        (state.pageData as SearchPageData['post' | 'writer' | 'picstory']) = payload;
      })
      .addCase(loadSearchListAction.rejected, (state, { payload }) => {
        state.loadSearchList.loading = false;
        state.loadSearchList.data = null;
        state.loadSearchList.error = payload;
      });
  },
});

export default listSlice.reducer;
