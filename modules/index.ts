import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import user, { UserState } from './user';

type State = {
  user: UserState;
};

export const reducer = (state: State | undefined, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action.payload);
      return action.payload;
    default:
      return combineReducers({ user })(state, action);
  }
};
