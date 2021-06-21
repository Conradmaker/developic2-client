import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { reducer } from './index';

const production = process.env.NODE_ENV === 'production';

const store = configureStore({
  reducer,
  middleware: [
    nextReduxCookieMiddleware({ subtrees: ['user.userData'] }),
    ...getDefaultMiddleware(),
  ],
  devTools: !production,
});

const makeStore = () => store;

const wrapper = createWrapper(wrapMakeStore(makeStore as MakeStore), {
  debug: !production,
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
