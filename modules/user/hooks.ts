import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  loginAction,
  logOutAction,
  signupAction,
  socialLoginAction,
  socialRequestAction,
  updateUserIntroAction,
  userDetailInfoAction,
  verificationAction,
} from './thunk';
import { LoginPayload, SocialLoginPayload, UpdateUserIntroPayload } from './type';

// 커스텀 훅
export default function useUser() {
  const {
    login,
    signup,
    userData,
    logout,
    verification,
    userIntro,
    updateUser,
  } = useAppSelector(state => state.user);
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

  const getUserIntroDispatch = useCallback(data => {
    dispatch(userDetailInfoAction(data));
  }, []);

  const updateUserIntroDispatch = useCallback((data: UpdateUserIntroPayload) => {
    dispatch(updateUserIntroAction(data));
  }, []);

  return {
    updateUser,
    login,
    signup,
    logout,
    userIntro,
    verification,
    userData,
    loginDispatch,
    logoutDispatch,
    signupDispatch,
    verificationDispatch,
    socialLoginDispatch,
    socialRequestDispatch,
    getUserIntroDispatch,
    updateUserIntroDispatch,
  };
}
