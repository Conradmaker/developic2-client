import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogUserInfo from 'components/Result/BloggerInfo';
import { loadBlogUserAction } from 'modules/blog';
import wrapper from 'modules/store';
import { BlogUserInfoContainer } from 'styles/pages/[userId]';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';

export default function BlogInfo(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogUserInfoContainer>
        <BlogUserInfo />
      </BlogUserInfoContainer>
    </BlogWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch } = context.store;
  if (!context.params) return;
  authServersiceAction(context);
  await dispatch(loadBlogUserAction(+(context.params.userId as string)));
});
