import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  getLikeListAction,
  getPhotoBinderDetailAction,
  getPhotoBinderListAction,
  getRecentViewsAction,
  getTempListAction,
  removeBinderPhotoAction,
  removeLikePostAction,
  removeRecentViewAction,
  removeTempPostAction,
  updatePhotoBinderDetailAction,
} from './thunk';
import { RemoveLikesPayload, UpdatePhotoBinderPayload } from './types';

export default function useDrawer() {
  const {
    getLikeList,
    removeLikeItem,
    getTempList,
    removeTempPost,
    getRecentList,
    removeRecentView,
    getBinderList,
    getBinderDetail,
    updateBinderDetail,
    removeBinderPhoto,
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

  const getPhotoBinderListDispatch = useCallback((data: number) => {
    dispatch(getPhotoBinderListAction(data));
  }, []);

  const getPhotoBinderDetailDispatch = useCallback((data: number) => {
    dispatch(getPhotoBinderDetailAction(data));
  }, []);
  const updatePhotoBinderDetailDispatch = useCallback(
    (data: UpdatePhotoBinderPayload) => {
      dispatch(updatePhotoBinderDetailAction(data));
    },
    []
  );

  const removeBinderPhotoDispatch = useCallback(
    (data: { photoIdArr: number[]; BinderId: number }) => {
      dispatch(removeBinderPhotoAction(data));
    },
    []
  );
  return {
    getLikeList,
    removeLikeItem,
    getTempList,
    removeTempPost,
    getRecentList,
    removeRecentView,
    getBinderList,
    getBinderDetail,
    updateBinderDetail,
    removeBinderPhoto,
    getLikeListDispatch,
    removeLikeItemDispatch,
    getTempListDispatch,
    removeTempPostDispatch,
    getRecentViewsDispatch,
    removeRecentViewDispatch,
    getPhotoBinderListDispatch,
    getPhotoBinderDetailDispatch,
    updatePhotoBinderDetailDispatch,
    removeBinderPhotoDispatch,
  };
}
