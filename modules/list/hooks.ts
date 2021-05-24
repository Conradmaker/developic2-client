import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from './../../hooks/useDispatch';
export default function useList() {
  const { pageData, loadSearchPostList } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  return { pageData, loadSearchPostList };
}
