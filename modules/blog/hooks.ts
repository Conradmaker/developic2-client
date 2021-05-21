import {
  loadBlogPostListAction,
  loadBlogUserAction,
  loadBlogPicstoryListAction,
  loadBlogPicstoryDetailAction,
  loadMoreBlogPostListAction,
  loadMoreBlogPicstoryListAction,
} from './thunk';
import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from './../../hooks/useSelector';
import { LoadBlogListPayload } from './type';

export default function useBlog() {
  const {
    hasMoreBlogLists,
    loadBlogPostList,
    loadBlogPicstoryList,
    blogUserData,
    loadBlogUser,
    blogPostListData,
    blogPicstoryListData,
    blogPicstoryDetailData,
  } = useAppSelector(state => state.blog);
  const dispatch = useAppDispatch();

  const loadBlogUserDispatch = useCallback(userId => {
    dispatch(loadBlogUserAction(userId));
  }, []);

  const loadBlogPostListDispatch = useCallback((data: LoadBlogListPayload) => {
    dispatch(loadBlogPostListAction(data));
  }, []);

  const loadMoreBlogPostListDispatch = useCallback((data: LoadBlogListPayload) => {
    dispatch(loadMoreBlogPostListAction(data));
  }, []);

  const loadBlogPicstoryListDispatch = useCallback(userId => {
    dispatch(loadBlogPicstoryListAction(userId));
  }, []);

  const loadMoreBlogPicstoryListDispatch = useCallback((data: LoadBlogListPayload) => {
    dispatch(loadMoreBlogPicstoryListAction(data));
  }, []);

  const loadBlogPicstoryDetailDispatch = useCallback(picstoryId => {
    dispatch(loadBlogPicstoryDetailAction(picstoryId));
  }, []);

  return {
    hasMoreBlogLists,
    loadBlogPostList,
    loadBlogPicstoryList,
    loadBlogUser,
    blogUserData,
    blogPostListData,
    blogPicstoryListData,
    blogPicstoryDetailData,
    loadBlogUserDispatch,
    loadBlogPostListDispatch,
    loadMoreBlogPostListDispatch,
    loadBlogPicstoryListDispatch,
    loadMoreBlogPicstoryListDispatch,
    loadBlogPicstoryDetailDispatch,
  };
}
