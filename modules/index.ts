import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import user, { UserState } from './user';
import ui, { UIState } from './ui';
import post, { PostState } from './post';
import picstory, { PicstoryState } from './picstory';

type State = {
  user: UserState;
  post: PostState;
  ui: UIState;
  picstory: PicstoryState;
};

export const reducer = (state: State | undefined, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action.payload);
      return action.payload;
    default:
      return combineReducers({ user, ui, post, picstory })(state, action);
  }
};
