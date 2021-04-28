import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from './index';

const production = process.env.NODE_ENV === 'production';

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
  devTools: !production,
});

const wrapper = createWrapper(() => store, { debug: !production });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
