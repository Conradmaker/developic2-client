import _delay from 'lodash/delay';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';
import { toastOpen, toastInitialize, toastClose } from './slice';

export const toastPopAction = async (
  dispatch: Dispatch,
  message: string
): Promise<void> => {
  await dispatch(toastInitialize());
  await dispatch(toastOpen(message));
  await _delay(() => dispatch(toastClose()), 2000);
  await _delay(() => dispatch(toastInitialize()), 2300);
};

export default function useUI() {
  const { toastPopUp } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  const toastOpenDispatch = async (message: string) => {
    await dispatch(toastInitialize());
    await dispatch(toastOpen(message));
    await _delay(() => dispatch(toastClose()), 2000);
    await _delay(() => dispatch(toastInitialize()), 2300);
  };

  return { toastPopUp, toastOpenDispatch };
}
