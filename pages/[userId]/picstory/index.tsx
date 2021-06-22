import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogPicstoryList from 'components/List/BlogPicstoryList';
import { loadBlogPicstoryListAction, loadBlogUserAction } from 'modules/blog';
import wrapper from 'modules/store';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import { BlogPicstoryContainer } from 'styles/pages/[userId]';

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  const { dispatch } = context.store;
  if (!context.params) return;
  await dispatch(loadBlogUserAction(+(context.params.userId as string)));
  await dispatch(
    loadBlogPicstoryListAction({
      userId: +(context.params.userId as string),
      limit: 12,
      offset: 0,
    })
  );
});
