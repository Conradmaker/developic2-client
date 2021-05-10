import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPicstoryList from '../../../components/List/BlogPicstoryList';
import useBlog from '../../../modules/blog/hooks';

const BlogPicstoryContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function Picstory(): JSX.Element {
  const { blogPicstoryListData, loadBlogPicstoryListDispatch } = useBlog();
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId) {
      loadBlogPicstoryListDispatch(userId);
    }
  }, [userId]);

  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList blogPicstoryListData={blogPicstoryListData} />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}
