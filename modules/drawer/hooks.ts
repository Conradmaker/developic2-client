import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  getLikeListAction,
  getRecentViewsAction,
  getTempListAction,
  removeLikePostAction,
  removeRecentViewAction,
  removeTempPostAction,
} from './thunk';
import { RemoveLikesPayload } from './types';

export default function useDrawer() {
  const {
    getLikeList,
    removeLikeItem,
    getTempList,
    removeTempPost,
    getRecentList,
    removeRecentView,
  } = useAppSelector(state => state.drawer);
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

  const getRecentViewsDispatch = useCallback((data: number) => {
    dispatch(getRecentViewsAction(data));
  }, []);

  const removeRecentViewDispatch = useCallback((data: number) => {
    dispatch(removeRecentViewAction(data));
  }, []);

  return {
    getLikeList,
    removeLikeItem,
    getTempList,
    removeTempPost,
    getRecentList,
    removeRecentView,
    getLikeListDispatch,
    removeLikeItemDispatch,
    getTempListDispatch,
    removeTempPostDispatch,
    getRecentViewsDispatch,
    removeRecentViewDispatch,
  };
}
