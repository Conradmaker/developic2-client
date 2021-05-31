import { LoadSearchListPayload } from './type';
import { useCallback } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from './../../hooks/useDispatch';
import { loadSearchListAction } from './thunk';
export default function useList() {
  const { pageData, loadSearchList } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  const loadSearchListDispatch = useCallback((data: LoadSearchListPayload) => {
    dispatch(loadSearchListAction(data));
  }, []);

  return { pageData, loadSearchList, loadSearchListDispatch };
}
