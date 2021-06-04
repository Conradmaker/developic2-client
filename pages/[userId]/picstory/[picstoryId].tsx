import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/Layout';
import PicstoryDetailList from '../../../components/List/PicstoryDetailList';
import BlogPicstoryDetailBox from '../../../components/Result/BlogPicstoryDetail';
import { loadBlogPicstoryDetailAction, loadBlogUserAction } from '../../../modules/blog';
import useBlog from '../../../modules/blog/hooks';
import wrapper from '../../../modules/store';
import { authServersiceAction } from '../../../utils/getServerSidePropsTemplate';

const PicstoryDetailContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .empty_content {
    text-align: center;
  }
`;

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
  await authServersiceAction(context);
  const { dispatch } = context.store;
  if (!context.params) return;
  await dispatch(loadBlogUserAction(+(context.params.userId as string)));
  await dispatch(loadBlogPicstoryDetailAction(+(context.params.picstoryId as string)));
});
