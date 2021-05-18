import { createSlice } from '@reduxjs/toolkit';
import { addPicPostAction, removePicPostAction } from '../picstory';
import { addPostLikeAction, removePostLikeAction } from '../user';
import { PostState } from './index';
import {
  createCommentAction,
  createHashtagAction,
  getPhotoDetailAction,
  getPostDetailAction,
  getTempPostAction,
  postPreSaveAction,
  removeCommentAction,
  searchHashtagAction,
  submitPostAction,
  updateCommentAction,
} from './thunk';
import { PostContent, PostData } from './types';

const initialState: PostState = {
  tempPost: { loading: false, data: null, error: null },
  preSavePost: { loading: false, data: null, error: null },
  submitPost: { loading: false, data: null, error: null },
  hashtagSearch: { loading: false, data: null, error: null },
  createHashtag: { loading: false, data: null, error: null },
  getPostDetail: { loading: false, data: null, error: null },
  getPhotoDetail: { loading: false, data: null, error: null },
  createComment: { loading: false, data: null, error: null },
  updateComment: { loading: false, data: null, error: null },
  removeComment: { loading: false, data: null, error: null },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTempPostAction.pending, state => {
        state.tempPost.loading = true;
        state.tempPost.data = null;
        state.tempPost.error = null;
      })
      .addCase(getTempPostAction.fulfilled, (state, { payload }) => {
        state.tempPost.loading = false;
        state.tempPost.data = payload;
        state.tempPost.error = null;
      })
      .addCase(getTempPostAction.rejected, (state, { payload }) => {
        state.tempPost.loading = false;
        state.tempPost.data = null;
        state.tempPost.error = payload;
      })
      .addCase(postPreSaveAction.pending, state => {
        state.preSavePost.loading = true;
        state.preSavePost.data = null;
        state.preSavePost.error = null;
      })
      .addCase(postPreSaveAction.fulfilled, (state, { payload }) => {
        state.preSavePost.loading = false;
        state.preSavePost.data = payload;
        state.preSavePost.error = null;
      })
      .addCase(postPreSaveAction.rejected, (state, { payload }) => {
        state.preSavePost.loading = false;
        state.preSavePost.data = null;
        state.preSavePost.error = payload;
      })
      .addCase(submitPostAction.pending, state => {
        state.submitPost.loading = true;
        state.submitPost.data = null;
        state.submitPost.error = null;
      })
      .addCase(submitPostAction.fulfilled, (state, { payload }) => {
        state.submitPost.loading = false;
        state.submitPost.data = payload;
        state.submitPost.error = null;
      })
      .addCase(submitPostAction.rejected, (state, { payload }) => {
        state.submitPost.loading = false;
        state.submitPost.data = null;
        state.submitPost.error = payload;
      })
      .addCase(getPostDetailAction.pending, state => {
        state.getPostDetail.loading = true;
        state.getPostDetail.data = null;
        state.getPostDetail.error = null;
      })
      .addCase(getPostDetailAction.fulfilled, (state, { payload }) => {
        state.getPostDetail.loading = false;
        state.getPostDetail.data = payload;
        state.getPostDetail.error = null;
      })
      .addCase(getPostDetailAction.rejected, (state, { payload }) => {
        state.getPostDetail.loading = false;
        state.getPostDetail.data = null;
        state.getPostDetail.error = payload;
      })
      .addCase(getPhotoDetailAction.pending, state => {
        state.getPhotoDetail.loading = true;
        state.getPhotoDetail.data = null;
        state.getPhotoDetail.error = null;
      })
      .addCase(getPhotoDetailAction.fulfilled, (state, { payload }) => {
        state.getPhotoDetail.loading = false;
        state.getPhotoDetail.data = payload;
        state.getPhotoDetail.error = null;
      })
      .addCase(getPhotoDetailAction.rejected, (state, { payload }) => {
        state.getPhotoDetail.loading = false;
        state.getPhotoDetail.data = null;
        state.getPhotoDetail.error = payload;
      })
      .addCase(searchHashtagAction.pending, state => {
        state.hashtagSearch.loading = true;
        state.hashtagSearch.data = null;
        state.hashtagSearch.error = null;
      })
      .addCase(searchHashtagAction.fulfilled, (state, { payload }) => {
        state.hashtagSearch.loading = false;
        state.hashtagSearch.data = payload;
        state.hashtagSearch.error = null;
      })
      .addCase(searchHashtagAction.rejected, (state, { payload }) => {
        state.hashtagSearch.loading = false;
        state.hashtagSearch.data = null;
        state.hashtagSearch.error = payload;
      })
      .addCase(createHashtagAction.pending, state => {
        state.createHashtag.loading = true;
        state.createHashtag.data = null;
        state.createHashtag.error = null;
      })
      .addCase(createHashtagAction.fulfilled, (state, { payload }) => {
        state.createHashtag.loading = false;
        state.createHashtag.data = payload;
        state.createHashtag.error = null;
      })
      .addCase(createHashtagAction.rejected, (state, { payload }) => {
        state.createHashtag.loading = false;
        state.createHashtag.data = null;
        state.createHashtag.error = payload;
      })
      .addCase(createCommentAction.pending, state => {
        state.createComment.loading = true;
        state.createComment.data = null;
        state.createComment.error = null;
      })
      .addCase(createCommentAction.fulfilled, (state, { payload }) => {
        state.createComment.loading = false;
        state.createComment.data = payload;
        state.createComment.error = null;
        (state.getPostDetail.data as PostData).Comments = (state.getPostDetail
          .data as PostData).Comments.concat(payload);
      })
      .addCase(createCommentAction.rejected, (state, { payload }) => {
        state.createComment.loading = false;
        state.createComment.data = null;
        state.createComment.error = payload;
      })
      .addCase(updateCommentAction.pending, state => {
        state.updateComment.loading = true;
        state.updateComment.data = null;
        state.updateComment.error = null;
      })
      .addCase(updateCommentAction.fulfilled, (state, { payload }) => {
        const commentIndex = (state.getPostDetail.data as PostData).Comments.findIndex(
          comm => comm.id === payload.id
        );
        state.updateComment.loading = false;
        state.updateComment.data = payload;
        state.updateComment.error = null;
        (state.getPostDetail.data as PostData).Comments[commentIndex] = payload;
      })
      .addCase(updateCommentAction.rejected, (state, { payload }) => {
        state.updateComment.loading = false;
        state.updateComment.data = null;
        state.updateComment.error = payload;
      })
      .addCase(removeCommentAction.pending, state => {
        state.removeComment.loading = true;
        state.removeComment.data = null;
        state.removeComment.error = null;
      })
      .addCase(removeCommentAction.fulfilled, (state, { payload }) => {
        state.removeComment.loading = false;
        state.removeComment.data = payload;
        state.removeComment.error = null;
        (state.getPostDetail.data as PostData).Comments = (state.getPostDetail
          .data as PostData).Comments.filter(comm => comm.id !== payload.id);
      })
      .addCase(removeCommentAction.rejected, (state, { payload }) => {
        state.removeComment.loading = false;
        state.removeComment.data = null;
        state.removeComment.error = payload;
      })
      .addCase(addPicPostAction.fulfilled, (state, { payload }) => {
        (state.tempPost.data as PostContent).PicStories = ((state.tempPost
          .data as PostContent).PicStories as number[]).concat(payload.id);
      })
      .addCase(removePicPostAction.fulfilled, (state, { payload }) => {
        (state.tempPost.data as PostContent).PicStories = ((state.tempPost
          .data as PostContent).PicStories as number[]).filter(
          picId => picId !== payload.id
        );
      })
      .addCase(addPostLikeAction.fulfilled, (state, { payload }) => {
        (state.getPostDetail.data as PostData).likers = (state.getPostDetail
          .data as PostData).likers.concat({ id: payload.UserId });
      })
      .addCase(removePostLikeAction.fulfilled, (state, { payload }) => {
        (state.getPostDetail.data as PostData).likers = (state.getPostDetail
          .data as PostData).likers.filter(liker => liker.id !== payload.UserId);
      });
  },
});

export default postSlice.reducer;
