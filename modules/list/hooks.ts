import { useCallback } from 'react';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from './../../hooks/useDispatch';
import { getArchiveListAction } from './thunk';
export default function useList() {
  const { pageData, loadSearchPostList, getArchiveList } = useAppSelector(
    state => state.list
  );
  const dispatch = useAppDispatch();

  const getArchiveListDispatch = useCallback(() => {
    dispatch(getArchiveListAction(null));
  }, []);

  return { pageData, loadSearchPostList, getArchiveList, getArchiveListDispatch };
}
