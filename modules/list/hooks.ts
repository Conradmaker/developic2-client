import { useCallback } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from './../../hooks/useDispatch';
import { getFeedPostAction, getWriterListAction } from './thunk';
import { GetWriterListPayload } from './type';
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
  return { pageData, loadSearchPostList, getFeedPostDispatch, getWriterListDispatch };
}
