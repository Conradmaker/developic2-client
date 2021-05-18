import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPicstoryList from '../../../components/List/BlogPicstoryList';
import useBlog from '../../../modules/blog/hooks';
import { useInfiniteScroll } from '../../../utils/utils';

const BlogPicstoryContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function Picstory(): JSX.Element {
  const {
    blogPicstoryListData,
    loadBlogPicstoryListDispatch,
    hasMoreBlogLists,
    loadBlogPicstoryList,
    loadMoreBlogPicstoryListDispatch,
  } = useBlog();
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      loadBlogPicstoryListDispatch(userId);
    }
  }, [userId]);

  const onIntersect = useCallback(
    ([{ isIntersecting, target }], observer) => {
      if (
        blogPicstoryListData &&
        blogPicstoryListData.length >= 10 &&
        userId &&
        isIntersecting &&
        !loadBlogPicstoryList.loading &&
        hasMoreBlogLists
      ) {
        loadMoreBlogPicstoryListDispatch({ userId, offset: blogPicstoryListData.length });
        observer.unobserve(target);
      }
    },
    [blogPicstoryListData, userId, hasMoreBlogLists]
  );

  const [setTarget] = useInfiniteScroll({
    onIntersect,
  });

  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList blogPicstoryListData={blogPicstoryListData} />
        <div ref={setTarget} className="last-Item"></div>
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}
