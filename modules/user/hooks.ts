import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  loginAction,
  logOutAction,
  signupAction,
  socialLoginAction,
  socialRequestAction,
  verificationAction,
} from './thunk';
import { LoginPayload, SocialLoginPayload } from './type';

// 커스텀 훅
export default function useUser() {
  const { login, signup, userData, logout, verification } = useAppSelector(
    state => state.user
  );
  const dispatch = useAppDispatch();

  const loginDispatch = useCallback((data: LoginPayload) => {
    dispatch(loginAction(data));
  }, []);

  const socialRequestDispatch = useCallback((data: 'kakao' | 'facebook' | 'google') => {
    dispatch(socialRequestAction(data));
  }, []);

  const socialLoginDispatch = useCallback((data: SocialLoginPayload) => {
    dispatch(socialLoginAction(data));
  }, []);

  const logoutDispatch = useCallback(() => {
    dispatch(logOutAction(null));
  }, []);

  const signupDispatch = useCallback(data => {
    dispatch(signupAction(data));
  }, []);

  const verificationDispatch = useCallback(data => {
    dispatch(verificationAction(data));
  }, []);

  return {
    login,
    signup,
    logout,
    verification,
    userData,
    loginDispatch,
    logoutDispatch,
    signupDispatch,
    verificationDispatch,
    socialLoginDispatch,
    socialRequestDispatch,
  };
}
