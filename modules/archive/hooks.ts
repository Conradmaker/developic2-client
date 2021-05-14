import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { getArchiveListAction } from './thunk';

export default function useArchive() {
  const { getArchiveList } = useAppSelector(state => state.archive);
  const dispatch = useAppDispatch();

  const getArchiveListDispatch = useCallback(() => {
    dispatch(getArchiveListAction(null));
  }, []);

  return {
    getArchiveList,
    getArchiveListDispatch,
  };
}
