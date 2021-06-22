import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  addBinderPhotoAction,
  createPhotoBinderAction,
  getLikeListAction,
  getPhotoBinderDetailAction,
  getPhotoBinderListAction,
  getRecentViewsAction,
  getTempListAction,
  removeBinderPhotoAction,
  removeLikePostAction,
  removePhotoBinderAction,
  removeRecentViewAction,
  removeTempPostAction,
  updatePhotoBinderDetailAction,
} from './thunk';
import {
  CreatePhotoBinderPayload,
  GetBinderListPayload,
  GetLikeListPayload,
  GetRecentListPayload,
  GetTempListPayload,
  RemoveLikesPayload,
  UpdatePhotoBinderPayload,
} from './types';

export function useDrawer() {
  const {
    getLikeList,
    hasMore,
    loadMore,
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

  const getLikeListDispatch = useCallback((userId: GetLikeListPayload) => {
    dispatch(getLikeListAction(userId));
  }, []);

  const removeLikeItemDispatch = useCallback((data: RemoveLikesPayload) => {
    dispatch(removeLikePostAction(data));
  }, []);

  const getTempListDispatch = useCallback((data: GetTempListPayload) => {
    dispatch(getTempListAction(data));
  }, []);

  const removeTempPostDispatch = useCallback((data: number) => {
    dispatch(removeTempPostAction(data));
  }, []);

  const getRecentViewsDispatch = useCallback((data: GetRecentListPayload) => {
    dispatch(getRecentViewsAction(data));
  }, []);

  const removeRecentViewDispatch = useCallback((data: number) => {
    dispatch(removeRecentViewAction(data));
  }, []);

  const getPhotoBinderListDispatch = useCallback((data: GetBinderListPayload) => {
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

  const createPhotoBinderDispatch = useCallback((data: CreatePhotoBinderPayload) => {
    dispatch(createPhotoBinderAction(data));
  }, []);

  const removePhotoBinderDispatch = useCallback((data: number) => {
    dispatch(removePhotoBinderAction(data));
  }, []);

  const removeBinderPhotoDispatch = useCallback(
    (data: { photoIdArr: number[]; BinderId: number }) => {
      dispatch(removeBinderPhotoAction(data));
    },
    []
  );

  const addBinderPhotoDispatch = useCallback(
    (data: { photoIdArr: number[]; BinderId: number }) => {
      dispatch(addBinderPhotoAction(data));
    },
    []
  );

  return {
    getLikeList,
    hasMore,
    loadMore,
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
    removePhotoBinderDispatch,
    addBinderPhotoDispatch,
    createPhotoBinderDispatch,
  };
}

export default useDrawer;
