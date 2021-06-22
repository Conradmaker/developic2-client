import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import {
  addPostLikeAction,
  destroyUserAction,
  loginAction,
  logOutAction,
  removePostLikeAction,
  signupAction,
  socialLoginAction,
  socialRequestAction,
  updatePasswordAction,
  updateUserInfoAction,
  updateUserIntroAction,
  userDetailInfoAction,
  verificationAction,
  subscribeAction,
  unSubscribeAction,
  authAction,
} from './thunk';
import {
  LikePostPayload,
  LoginPayload,
  SocialLoginPayload,
  UpdatePasswordPayload,
  UpdateUserInfoPayload,
  UpdateUserIntroPayload,
  blogFollowPayload,
} from './type';

// 커스텀 훅
export function useUser() {
  const {
    login,
    signup,
    userData,
    logout,
    verification,
    userIntro,
    updateUser,
    destroyUser,
    auth,
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

  const updateUserInfoDispatch = useCallback((data: UpdateUserInfoPayload) => {
    dispatch(updateUserInfoAction(data));
  }, []);

  const updatePasswordDispatch = useCallback((data: UpdatePasswordPayload) => {
    dispatch(updatePasswordAction(data));
  }, []);

  const updateUserIntroDispatch = useCallback((data: UpdateUserIntroPayload) => {
    dispatch(updateUserIntroAction(data));
  }, []);

  const destroyUserDispatch = useCallback((UserId: number) => {
    dispatch(destroyUserAction(UserId));
  }, []);

  const addPostLikeDispatch = useCallback((data: LikePostPayload) => {
    dispatch(addPostLikeAction(data));
  }, []);

  const removePostLikeDispatch = useCallback((data: LikePostPayload) => {
    dispatch(removePostLikeAction(data));
  }, []);

  const subscribeDispatch = useCallback((data: blogFollowPayload) => {
    dispatch(subscribeAction(data));
  }, []);

  const unSubscribeDispatch = useCallback((data: blogFollowPayload) => {
    dispatch(unSubscribeAction(data));
  }, []);

  const authDispatch = useCallback(() => {
    dispatch(authAction(null));
  }, []);

  return {
    auth,
    updateUser,
    login,
    destroyUser,
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
    updateUserInfoDispatch,
    updatePasswordDispatch,
    destroyUserDispatch,
    addPostLikeDispatch,
    removePostLikeDispatch,
    subscribeDispatch,
    unSubscribeDispatch,
    authDispatch,
  };
}

export default useUser;
