import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import PicstoryDetailList from '../../../components/List/PicstoryDetailList';
import BlogPicstoryDetailBox from '../../../components/Result/BlogPicstoryDetail';
import useBlog from '../../../modules/blog/hooks';

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
  const { picstoryId, userId } = router.query;

  const { blogPicstoryDetailData, loadBlogPicstoryDetailDispatch } = useBlog();

  useEffect(() => {
    if (!picstoryId) {
      router.back();
      return;
    }
    loadBlogPicstoryDetailDispatch(picstoryId);
  }, [picstoryId]);

  if (!blogPicstoryDetailData) return <></>;

  return (
    <Layout>
      <PicstoryDetailContainer>
        <Link href={`/${userId}/picstory`}>
          <h1>Picstory</h1>
        </Link>
        <BlogPicstoryDetailBox picstoryDetailData={blogPicstoryDetailData} />
        <PicstoryDetailList picstoryDetailPostData={blogPicstoryDetailData} />
      </PicstoryDetailContainer>
    </Layout>
  );
}
