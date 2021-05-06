import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import user, { UserState } from './user';
import ui, { UIState } from './ui';
import blog, { BlogState } from './blog';

type State = {
  user: UserState;
  ui: UIState;
  blog: BlogState;
};

export const reducer = (state: State | undefined, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action.payload);
      return action.payload;
    default:
      return combineReducers({ user, ui, blog })(state, action);
  }
};
