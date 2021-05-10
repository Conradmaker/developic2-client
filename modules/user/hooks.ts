import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  addBlogFollowAction,
  loginAction,
  logOutAction,
  removeBlogFollowAction,
} from './thunk';
import { blogFollowPayload, LoginPayload } from './type';

// 커스텀 훅
export default function useUser() {
  const { login, userData, logout } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const loginDispatch = useCallback((data: LoginPayload) => {
    dispatch(loginAction(data));
  }, []);

  const logoutDispatch = useCallback(() => {
    dispatch(logOutAction(null));
  }, []);

  const addBlogFollowDispatch = useCallback((data: blogFollowPayload) => {
    dispatch(addBlogFollowAction(data));
  }, []);

  const removeBlogFollowDispatch = useCallback((data: blogFollowPayload) => {
    dispatch(removeBlogFollowAction(data));
  }, []);

  return {
    login,
    userData,
    loginDispatch,
    logoutDispatch,
    logout,
    addBlogFollowDispatch,
    removeBlogFollowDispatch,
  };
}
