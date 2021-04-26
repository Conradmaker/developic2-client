import styled from '@emotion/styled';
import React from 'react';
import BlogWithNavLayout from '../../components/Layout/BlogWithNavLayout';
import BlogPostList from '../../components/List/BlogPostList';
import { PostData, UserInfoData } from '../../utils/data';

const BlogPostContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function BlogPost(): JSX.Element {
  return (
    <BlogWithNavLayout data={UserInfoData}>
      <BlogPostContainer>
        <BlogPostList data={PostData} />
      </BlogPostContainer>
    </BlogWithNavLayout>
  );
}
