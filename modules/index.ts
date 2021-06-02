/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import user, { UserState } from './user';
import ui, { UIState } from './ui';
import post, { PostState } from './post';
import picstory, { PicstoryState } from './picstory';
import drawer, { DrawerState } from './drawer';
import blog, { BlogState } from './blog';
import archive, { ArchiveState } from './archive';
import list, { ListState } from './list';

export type State = {
  user: UserState;
  post: PostState;
  ui: UIState;
  picstory: PicstoryState;
  drawer: DrawerState;
  blog: BlogState;
  archive: ArchiveState;
  list: ListState;
};

export const reducer = (state: State | undefined, action: any): any => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action.payload);
      return action.payload;
    default:
      return combineReducers({ user, ui, post, blog, picstory, drawer, archive, list })(
        state,
        action
      );
  }
};
