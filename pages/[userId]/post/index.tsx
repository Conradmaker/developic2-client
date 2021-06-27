import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogPostList from 'components/List/BlogPostList';
import { BlogPostContainer } from 'styles/pages/[userId]';
import { useAuth } from 'hooks';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import { loadBlogPostListAction, loadBlogUserAction } from 'modules/blog';
import wrapper from 'modules/store';

export default function BlogPosts(): JSX.Element {
  useAuth({ replace: false });
  return (
    <BlogWithNavLayout>
      <BlogPostContainer>
        <BlogPostList />
      </BlogPostContainer>
    </BlogWithNavLayout>
  );
}

// 서버 성능 향상시 적용
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch } = context.store;
  if (!context.params) return;
  await Promise.allSettled([
    authServersiceAction(context),
    dispatch(loadBlogUserAction(+(context.params.userId as string))),
    dispatch(
      loadBlogPostListAction({
        userId: +(context.params.userId as string),
        limit: 12,
        offset: 0,
      })
    ),
  ]);
});
