import { useCallback } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from './../../hooks/useDispatch';
import {
  getFeedPostAction,
  getHashtagListAction,
  getPostListAction,
  getTaggedPostListAction,
  getWriterListAction,
  getArchiveListAction,
  getSearchListAction,
} from './thunk';
import {
  GetWriterListPayload,
  GetHashTagListPayload,
  GetTaggedPostListPayload,
  GetPostListPayload,
  GetArchiveListPayload,
  getSearchListPayload,
} from './type';

export default function useList() {
  const { pageData, hasMore } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  const getFeedPostDispatch = useCallback(
    (data: { UserId: number; limit?: number; offset?: number }) => {
      dispatch(getFeedPostAction(data));
    },
    []
  );
  const getWriterListDispatch = useCallback((data: GetWriterListPayload) => {
    dispatch(getWriterListAction(data));
  }, []);
  const getHashtagListDispatch = useCallback((data: GetHashTagListPayload) => {
    dispatch(getHashtagListAction(data));
  }, []);
  const getTaggedPostListDispatch = useCallback((data: GetTaggedPostListPayload) => {
    dispatch(getTaggedPostListAction(data));
  }, []);
  const getPostListDispatch = useCallback((data: GetPostListPayload) => {
    dispatch(getPostListAction(data));
  }, []);
  const getArchiveListDispatch = useCallback((data: GetArchiveListPayload) => {
    dispatch(getArchiveListAction(data));
  }, []);
  const getSearchListDispatch = useCallback((data: getSearchListPayload) => {
    dispatch(getSearchListAction(data));
  }, []);

  return {
    pageData,
    hasMore,
    getFeedPostDispatch,
    getWriterListDispatch,
    getHashtagListDispatch,
    getTaggedPostListDispatch,
    getPostListDispatch,
    getArchiveListDispatch,
    getSearchListDispatch,
  };
}
