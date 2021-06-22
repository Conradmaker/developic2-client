import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'modules/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
