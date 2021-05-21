import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { addArchiveAction, getArchiveDetailAction, getArchiveListAction } from './thunk';
import { AddArchivePayload } from './type';

export default function useArchive() {
  const { getArchiveList, getArchiveDetail, addArchive } = useAppSelector(
    state => state.archive
  );
  const dispatch = useAppDispatch();

  const getArchiveListDispatch = useCallback(() => {
    dispatch(getArchiveListAction(null));
  }, []);

  const getArchiveDetailDispatch = useCallback((archiveId: number) => {
    dispatch(getArchiveDetailAction(archiveId));
  }, []);

  const addArchiveDispatch = useCallback((data: AddArchivePayload) => {
    dispatch(addArchiveAction(data));
  }, []);

  return {
    getArchiveList,
    getArchiveDetail,
    addArchive,
    getArchiveListDispatch,
    getArchiveDetailDispatch,
    addArchiveDispatch,
  };
}
