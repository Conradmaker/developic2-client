import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { getArchiveDetailAction, getArchiveListAction } from './thunk';

export default function useArchive() {
  const { getArchiveList, getArchiveDetail } = useAppSelector(state => state.archive);
  const dispatch = useAppDispatch();

  const getArchiveListDispatch = useCallback(() => {
    dispatch(getArchiveListAction(null));
  }, []);

  const getArchiveDetailDispatch = useCallback((archiveId: number) => {
    dispatch(getArchiveDetailAction(archiveId));
  }, []);

  return {
    getArchiveList,
    getArchiveDetail,
    getArchiveListDispatch,
    getArchiveDetailDispatch,
  };
}
