import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPostList from '../../../components/List/BlogPostList';
import useBlog from '../../../modules/blog/hooks';

const BlogPostContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function BlogPost(): JSX.Element {
  const { blogPostListData, loadBlogPostListDispatch } = useBlog();
  const router = useRouter();
  const { userId } = router.query;
  useEffect(() => {
    if (userId) {
      loadBlogPostListDispatch(userId);
    }
  }, [userId]);

  return (
    <BlogWithNavLayout>
      <BlogPostContainer>
        <BlogPostList blogPostListData={blogPostListData} />
      </BlogPostContainer>
    </BlogWithNavLayout>
  );
}
