import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import PostDetailLayout from 'components/Layout/PostDetailLayout';
import usePost from 'modules/post/hooks';
import ScrollIndicator from 'components/Layout/ScrollIndicator';
import wrapper from 'modules/store';
import { getPostDetailAction } from 'modules/post';
import CommentList from 'components/List/CommentList';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import { calcImageSrc } from 'utils/calcImageSrc';
import { NotAllowComment } from 'styles/pages/[userId]';

export default function postId(): JSX.Element {
  const { getPostDetail } = usePost();
  const router = useRouter();

  if (!getPostDetail.data) return <></>;

  return (
    <Layout>
      <Head>
        <title>
          {getPostDetail.data.title} | {getPostDetail.data.User.nickname}
        </title>
        <meta name="author" content="cozi" />
        <meta name="description" content="blog for photographer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DeveloPic" />
        <meta property="og:title" content="글로 만드는 사진" />
        <meta property="og:description" content={getPostDetail.data.title} />
        <meta
          property="og:image"
          content={calcImageSrc(400, getPostDetail.data.thumbnail)}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_CLIENT_HOST}${router.asPath}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.NEXT_PUBLIC_CLIENT_HOST} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_CLIENT_HOST}${router.asPath}`}
        />
        <meta name="twitter:title" content="DeveloPic" />
        <meta name="twitter:description" content={getPostDetail.data.title} />
        <meta
          name="twitter:image"
          content={calcImageSrc(400, getPostDetail.data.thumbnail)}
        />
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

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await Promise.allSettled([
    authServersiceAction(context),
    context.store.dispatch(getPostDetailAction(+(context.query.postId as string))),
  ]);
});
