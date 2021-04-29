import _delay from 'lodash/delay';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { toastOpen, toastClose, toastInitialize } from './slice';

export default function useUI() {
  const { toastPopUp } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  const toastOpenDispatch = async (message: string) => {
    dispatch(toastInitialize());
    dispatch(toastOpen(message));
    await _delay(() => dispatch(toastClose()), 3000);
    await _delay(() => dispatch(toastInitialize()), 3500);
  };

  return { toastPopUp, toastOpenDispatch };
}
