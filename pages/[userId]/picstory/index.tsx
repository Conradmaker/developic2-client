import React from 'react';
import BlogWithNavLayout from 'components/Layout/BlogWithNavLayout';
import BlogPicstoryList from 'components/List/BlogPicstoryList';
import { BlogPicstoryContainer } from 'styles/pages/[userId]';
import { useAuth } from 'hooks';

export default function Picstory(): JSX.Element {
  useAuth({ replace: false });
  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}

// //후에 서버 성능 향상시 적용
// export const getServerSideProps = wrapper.getServerSideProps(async context => {
//   const { dispatch } = context.store;
//   if (!context.params) return;
//   await dispatch(loadBlogUserAction(+(context.params.userId as string)));
//   await dispatch(
//     loadBlogPicstoryListAction({
//       userId: +(context.params.userId as string),
//       limit: 12,
//       offset: 0,
//     })
//   );
// });
