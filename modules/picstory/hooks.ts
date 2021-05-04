import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  addPicPostAction,
  createPicstoryAction,
  getPicstoryListAction,
  removePicPostAction,
  removePicstoryAction,
} from './thunk';
import { CreatePicstoryPayload, TogglePicPostPayload } from './types';

export default function usePicstory() {
  const { getPicstoryList, createPicstory } = useAppSelector(state => state.picstory);
  const dispatch = useAppDispatch();

  const getPicstoryListDispatch = useCallback((data: number) => {
    dispatch(getPicstoryListAction(data));
  }, []);

  const createPicstoryDispatch = useCallback((data: CreatePicstoryPayload) => {
    dispatch(createPicstoryAction(data));
  }, []);

  const removePicstoryDispatch = useCallback((data: number) => {
    dispatch(removePicstoryAction(data));
  }, []);

  const addPicPostDispatch = useCallback((data: TogglePicPostPayload) => {
    dispatch(addPicPostAction(data));
  }, []);

  const removePicPostDispatch = useCallback((data: TogglePicPostPayload) => {
    dispatch(removePicPostAction(data));
  }, []);

  return {
    getPicstoryList,
    getPicstoryListDispatch,
    createPicstory,
    createPicstoryDispatch,
    removePicstoryDispatch,
    addPicPostDispatch,
    removePicPostDispatch,
  };
}
