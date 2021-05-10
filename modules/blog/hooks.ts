import {
  loadBlogPostListAction,
  loadBlogUserAction,
  loadBlogPicstoryListAction,
  loadBlogPicstoryDetailAction,
} from './thunk';
import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from './../../hooks/useSelector';

export default function useBlog() {
  const {
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

  const loadBlogPostListDispatch = useCallback(userId => {
    dispatch(loadBlogPostListAction(userId));
  }, []);

  const loadBlogPicstoryListDispatch = useCallback(userId => {
    dispatch(loadBlogPicstoryListAction(userId));
  }, []);

  const loadBlogPicstoryDetailDispatch = useCallback(picstoryId => {
    dispatch(loadBlogPicstoryDetailAction(picstoryId));
  }, []);

  return {
    loadBlogUser,
    blogUserData,
    blogPostListData,
    blogPicstoryListData,
    blogPicstoryDetailData,
    loadBlogUserDispatch,
    loadBlogPostListDispatch,
    loadBlogPicstoryListDispatch,
    loadBlogPicstoryDetailDispatch,
  };
}
