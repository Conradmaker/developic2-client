import Head from 'next/head';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Layout from '../../../components/Layout';
import CommentList from '../../../components/List/CommentList';
import PostDetailLayout from '../../../components/Layout/PostDetailLayout';
import usePost from '../../../modules/post/hooks';
import ScrollIndicator from '../../../components/Layout/ScrollIndicator';

const NotAllowComment = styled.div`
  width: 800px;
  margin: 0 auto 100px auto;
  text-align: center;
  font-family: 'Noto Serif KR';
`;
export default function postId(): JSX.Element {
  const router = useRouter();
  const { getPostDetail, getPostDetailDispatch } = usePost();
  useEffect(() => {
    getPostDetailDispatch(+(router.query.postId as string));
  }, [router]);
  if (!getPostDetail.data) return <></>;
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | {getPostDetail.data.title}</title>
      </Head>
      <PostDetailLayout postData={getPostDetail.data} />
      {getPostDetail.data.allowComment ? (
        <CommentList commentsData={getPostDetail.data.Comments} />
      ) : (
        <NotAllowComment>"댓글 사용이 허용되지 않는 게시글 입니다."</NotAllowComment>
      )}
      <ScrollIndicator />
    </Layout>
  );
}
