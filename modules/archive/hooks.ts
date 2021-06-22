import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { addArchiveAction, getArchiveDetailAction, getArchiveListAction } from './thunk';
import { AddArchivePayload, GetArchivePayload } from './type';

export function useArchive() {
  const { getArchiveList, getArchiveDetail, addArchive, hasMore } = useAppSelector(
    state => state.archive
  );
  const dispatch = useAppDispatch();

  const getArchiveListDispatch = useCallback((data: GetArchivePayload) => {
    dispatch(getArchiveListAction(data));
  }, []);

  const getArchiveDetailDispatch = useCallback((archiveId: number) => {
    dispatch(getArchiveDetailAction(archiveId));
  }, []);

  const addArchiveDispatch = useCallback((data: AddArchivePayload) => {
    dispatch(addArchiveAction(data));
  }, []);

  return {
    hasMore,
    getArchiveList,
    getArchiveDetail,
    addArchive,
    getArchiveListDispatch,
    getArchiveDetailDispatch,
    addArchiveDispatch,
  };
}

export default useArchive;
