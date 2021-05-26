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
} from './thunk';
import {
  GetWriterListPayload,
  GetHashTagListPayload,
  GetTaggedPostListPayload,
  GetPostListPayload,
} from './type';

export default function useList() {
  const { pageData, loadSearchPostList } = useAppSelector(state => state.list);
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
  const getArchiveListDispatch = useCallback(() => {
    dispatch(getArchiveListAction(null));
  }, []);
  return {
    pageData,
    loadSearchPostList,
    getFeedPostDispatch,
    getWriterListDispatch,
    getHashtagListDispatch,
    getTaggedPostListDispatch,
    getPostListDispatch,
    getArchiveListDispatch,
  };
}
