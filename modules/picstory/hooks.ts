import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { createPicstoryAction, getPicstoryListAction } from './thunk';
import { CreatePicstoryPayload } from './types';

export default function usePicstory() {
  const { getPicstoryList, createPicstory } = useAppSelector(state => state.picstory);
  const dispatch = useAppDispatch();

  const getPicstoryListDispatch = useCallback((data: number) => {
    dispatch(getPicstoryListAction(data));
  }, []);

  const createPicstoryDispatch = useCallback((data: CreatePicstoryPayload) => {
    dispatch(createPicstoryAction(data));
  }, []);

  return {
    getPicstoryList,
    getPicstoryListDispatch,
    createPicstory,
    createPicstoryDispatch,
  };
}
