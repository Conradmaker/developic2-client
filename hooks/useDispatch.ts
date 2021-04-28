import { useDispatch } from 'react-redux';
import { AppDispatch } from '../modules/store';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
