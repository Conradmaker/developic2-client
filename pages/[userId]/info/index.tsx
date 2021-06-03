import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogUserInfo from '../../../components/Result/BlogUserInfo';
import useBlog from '../../../modules/blog/hooks';

const BlogUserInfoContainer = styled.section`
  min-height: 550px;
  max-width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
`;

export default function BlogInfo(): JSX.Element {
  const { loadBlogUserDispatch, blogUserData } = useBlog();
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (!userId) {
      router.replace('/');
      return;
    }
    loadBlogUserDispatch(userId);
  }, [userId]);

  return (
    <BlogWithNavLayout>
      <BlogUserInfoContainer>
        <BlogUserInfo blogUserInfoData={blogUserData} />
      </BlogUserInfoContainer>
    </BlogWithNavLayout>
  );
}
