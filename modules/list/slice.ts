import { createSlice } from '@reduxjs/toolkit';
import { getArchiveListAction } from './thunk';
import { ListState, MainPageDataType } from './type';

const initialState: ListState = {
  pageData: {},
  loadSearchPostList: { loading: false, data: null, error: null },
  loadMoreSearchPostList: { loading: false, data: null, error: null },
  getArchiveList: { loading: false, data: null, error: null },
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArchiveListAction.pending, state => {
        state.getArchiveList.loading = true;
        state.getArchiveList.data = null;
        state.getArchiveList.error = null;
      })
      .addCase(getArchiveListAction.fulfilled, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = true;
        state.getArchiveList.error = null;
        (state.pageData as MainPageDataType).archive = payload;
      })
      .addCase(getArchiveListAction.rejected, (state, { payload }) => {
        state.getArchiveList.loading = false;
        state.getArchiveList.data = null;
        state.getArchiveList.error = payload;
      });
  },
});

export default listSlice.reducer;
