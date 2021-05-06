import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  getLikeListAction,
  getTempListAction,
  removeLikePostAction,
  removeTempPostAction,
} from './thunk';
import { RemoveLikesPayload } from './types';

export default function useDrawer() {
  const { getLikeList, removeLikeItem, getTempList, removeTempPost } = useAppSelector(
    state => state.drawer
  );
  const dispatch = useAppDispatch();

  const getLikeListDispatch = useCallback((userId: number) => {
    dispatch(getLikeListAction(userId));
  }, []);

  const removeLikeItemDispatch = useCallback((data: RemoveLikesPayload) => {
    dispatch(removeLikePostAction(data));
  }, []);

  const getTempListDispatch = useCallback((data: number) => {
    dispatch(getTempListAction(data));
  }, []);

  const removeTempPostDispatch = useCallback((data: number) => {
    dispatch(removeTempPostAction(data));
  }, []);

  return {
    getLikeList,
    removeLikeItem,
    getTempList,
    removeTempPost,
    getLikeListDispatch,
    removeLikeItemDispatch,
    getTempListDispatch,
    removeTempPostDispatch,
  };
}
