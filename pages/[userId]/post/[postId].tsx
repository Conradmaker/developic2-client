import Head from 'next/head';
import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import CommentList from '../../../components/List/CommentList';
import PostDetailLayout from '../../../components/Layout/PostDetailLayout';
import usePost from '../../../modules/post/hooks';
import { useRouter } from 'next/router';
import ScrollIndicator from '../../../components/Layout/ScrollIndicator';

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
      <CommentList commentsData={getPostDetail.data.Comments} />
      <ScrollIndicator />
    </Layout>
  );
}
