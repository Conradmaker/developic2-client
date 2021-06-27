import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'components/Layout';
import PicstoryDetailList from 'components/List/PicstoryDetailList';
import BlogPicstoryDetailBox from 'components/Result/BlogPicstoryDetail';
import { loadBlogPicstoryDetailAction } from 'modules/blog';
import useBlog from 'modules/blog/hooks';
import wrapper from 'modules/store';
import { PicstoryDetailContainer } from 'styles/pages/[userId]';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';

export default function PicstoryId(): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  const { loadBlogPicstoryDetail } = useBlog();

  return (
    <Layout>
      <PicstoryDetailContainer>
        <Link href={`/${userId}/picstory`}>
          <h1>Picstory</h1>
        </Link>
        {loadBlogPicstoryDetail.data && <BlogPicstoryDetailBox />}
        <PicstoryDetailList />
      </PicstoryDetailContainer>
    </Layout>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch } = context.store;
  if (!context.params) return;
  await Promise.allSettled([
    authServersiceAction(context),
    dispatch(loadBlogPicstoryDetailAction(+(context.params.picstoryId as string))),
  ]);
});
