import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  createHashtagAction,
  getPostDetailAction,
  getTempPostAction,
  postPreSaveAction,
  searchHashtagAction,
  submitPostAction,
} from './thunk';
import { PreSavePayload, SubmitPostPayload } from './types';

export default function usePost() {
  const {
    tempPost,
    preSavePost,
    submitPost,
    hashtagSearch,
    createHashtag,
    getPostDetail,
  } = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();

  const postPreSaveDispatch = useCallback((data: PreSavePayload) => {
    dispatch(postPreSaveAction(data));
  }, []);

  const submitPostDispatch = useCallback((data: SubmitPostPayload) => {
    dispatch(submitPostAction(data));
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

  return {
    hashtagSearch,
    createHashtag,
    preSavePost,
    submitPost,
    tempPost,
    getPostDetail,
    postPreSaveDispatch,
    getTempPostDispatch,
    submitPostDispatch,
    createHashtagDispatch,
    searchHashtagDispatch,
    getPostDetailDispatch,
  };
}
