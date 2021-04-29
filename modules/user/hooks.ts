import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { loginAction, logOutAction } from './thunk';
import { LoginPayload } from './type';

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

  return { login, userData, loginDispatch, logoutDispatch, logout };
}
