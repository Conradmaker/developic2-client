import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogUserInfo from 'components/Result/BloggerInfo';
import { loadBlogUserAction } from 'modules/blog';
import wrapper from 'modules/store';
import { BlogUserInfoContainer } from 'styles/pages/[userId]';
import { useAuth } from 'hooks';

export default function BlogInfo(): JSX.Element {
  useAuth({ replace: false });
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
  await dispatch(loadBlogUserAction(+(context.params.userId as string)));
});
