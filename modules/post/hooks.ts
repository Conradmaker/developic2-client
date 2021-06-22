import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  createCommentAction,
  createHashtagAction,
  getPhotoDetailAction,
  getPostDetailAction,
  getTempPostAction,
  postPreSaveAction,
  removeCommentAction,
  removePostAction,
  searchHashtagAction,
  submitPostAction,
  updateCommentAction,
} from './thunk';
import {
  CreateCommentPayload,
  PreSavePayload,
  SubmitPostPayload,
  UpdateCommentPayload,
} from './types';

export function usePost() {
  const {
    tempPost,
    preSavePost,
    submitPost,
    removePost,
    hashtagSearch,
    createHashtag,
    getPostDetail,
    getPhotoDetail,
  } = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();

  const postPreSaveDispatch = useCallback((data: PreSavePayload) => {
    dispatch(postPreSaveAction(data));
  }, []);

  const submitPostDispatch = useCallback((data: SubmitPostPayload) => {
    dispatch(submitPostAction(data));
  }, []);

  const removePostDispatch = useCallback((data: number) => {
    dispatch(removePostAction(data));
  }, []);

  const getTempPostDispatch = useCallback((data: string) => {
    dispatch(getTempPostAction(data));
  }, []);

  const createHashtagDispatch = useCallback((data: string) => {
    dispatch(createHashtagAction(data));
  }, []);

  const searchHashtagDispatch = useCallback((data: string) => {
    dispatch(searchHashtagAction(data));
  }, []);

  const getPostDetailDispatch = useCallback((data: number) => {
    dispatch(getPostDetailAction(data));
  }, []);

  const getPhotoDetailDispatch = useCallback((data: number) => {
    dispatch(getPhotoDetailAction(data));
  }, []);

  const createCommentDispatch = useCallback((data: CreateCommentPayload) => {
    dispatch(createCommentAction(data));
  }, []);

  const updateCommentDispatch = useCallback((data: UpdateCommentPayload) => {
    dispatch(updateCommentAction(data));
  }, []);

  const removeCommentDispatch = useCallback((data: number) => {
    dispatch(removeCommentAction(data));
  }, []);

  return {
    hashtagSearch,
    createHashtag,
    preSavePost,
    submitPost,
    tempPost,
    getPostDetail,
    getPhotoDetail,
    removePost,
    postPreSaveDispatch,
    getTempPostDispatch,
    submitPostDispatch,
    removePostDispatch,
    createHashtagDispatch,
    searchHashtagDispatch,
    getPostDetailDispatch,
    getPhotoDetailDispatch,
    createCommentDispatch,
    updateCommentDispatch,
    removeCommentDispatch,
  };
}

export default usePost;
