import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { getFaqAction, getNoticeAction } from './thunk';
import { GetCsPayload } from './type';

export default function useCS() {
  const { getCs } = useAppSelector(state => state.cs);
  const dispatch = useAppDispatch();

  const getNoticeDispatch = useCallback((data: GetCsPayload) => {
    dispatch(getNoticeAction(data));
  }, []);

  const getFaqDispatch = useCallback((data: GetCsPayload) => {
    dispatch(getFaqAction(data));
  }, []);

  return { getCs, getNoticeDispatch, getFaqDispatch };
}
