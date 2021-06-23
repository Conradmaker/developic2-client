import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogPostList from 'components/List/BlogPostList';
import { BlogPostContainer } from 'styles/pages/[userId]';
import { useAuth } from 'hooks';

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
// export const getServerSideProps = wrapper.getServerSideProps(async context => {
//   await authServersiceAction(context);
//   const { dispatch } = context.store;
//   if (!context.params) return;
//   await dispatch(loadBlogUserAction(+(context.params.userId as string)));
//   await dispatch(
//     loadBlogPostListAction({
//       userId: +(context.params.userId as string),
//       limit: 12,
//       offset: 0,
//     })
//   );
// });
