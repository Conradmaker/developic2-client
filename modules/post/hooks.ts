import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  createHashtagAction,
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

  return {
    hashtagSearch,
    createHashtag,
    preSavePost,
    submitPost,
    tempPost,
    postPreSaveDispatch,
    getTempPostDispatch,
    submitPostDispatch,
    createHashtagDispatch,
    searchHashtagDispatch,
  };
}
