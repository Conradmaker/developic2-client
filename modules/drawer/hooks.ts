import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { getLikeListAction, removeLikePostAction } from './thunk';
import { RemoveLikesPayload } from './types';

export default function useDrawer() {
  const { getLikeList, removeLikeItem } = useAppSelector(state => state.drawer);
  const dispatch = useAppDispatch();

  const getLikeListDispatch = useCallback((userId: number) => {
    dispatch(getLikeListAction(userId));
  }, []);

  const removeLikeItemDispatch = useCallback((data: RemoveLikesPayload) => {
    dispatch(removeLikePostAction(data));
  }, []);

  return { getLikeList, removeLikeItem, getLikeListDispatch, removeLikeItemDispatch };
}
