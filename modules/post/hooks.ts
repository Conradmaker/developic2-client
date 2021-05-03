import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { getTempPostAction, postPreSaveAction, submitPostAction } from './thunk';
import { PreSavePayload, SubmitPostPayload } from './types';

export default function usePost() {
  const { tempPost, preSavePost, submitPost } = useAppSelector(state => state.post);
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

  return {
    preSavePost,
    submitPost,
    tempPost,
    postPreSaveDispatch,
    getTempPostDispatch,
    submitPostDispatch,
  };
}
