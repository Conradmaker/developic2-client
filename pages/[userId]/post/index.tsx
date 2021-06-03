import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPostList from '../../../components/List/BlogPostList';
import useBlog from '../../../modules/blog/hooks';
import { useInfiniteScroll } from '../../../utils/utils';

const BlogPostContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
`;

export default function BlogPosts(): JSX.Element {
  const {
    blogPostListData,
    loadBlogPostListDispatch,
    loadBlogPostList,
    hasMoreBlogLists,
    loadMoreBlogPostListDispatch,
  } = useBlog();

  const router = useRouter();
  const { userId } = router.query;

  const onIntersect = useCallback(
    ([{ isIntersecting, target }], observer) => {
      if (
        blogPostListData &&
        blogPostListData.length >= 10 &&
        userId &&
        isIntersecting &&
        !loadBlogPostList.loading &&
        hasMoreBlogLists
      ) {
        loadMoreBlogPostListDispatch({ userId, offset: blogPostListData.length });
        observer.unobserve(target);
      }
    },
    [blogPostListData, userId, hasMoreBlogLists]
  );

  const [setTarget] = useInfiniteScroll({
    onIntersect,
  });

  useEffect(() => {
    if (!userId) {
      router.replace('/');
      return;
    }
    loadBlogPostListDispatch({ userId });
  }, [userId]);

  return (
    <BlogWithNavLayout>
      <BlogPostContainer>
        <BlogPostList blogPostListData={blogPostListData} />
        <div ref={setTarget} className="last-Item"></div>
      </BlogPostContainer>
    </BlogWithNavLayout>
  );
}
